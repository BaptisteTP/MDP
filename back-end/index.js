const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const db = require('./database');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'secret_admin_key_2026';

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}));
app.use(express.json());

// Configuration Socket.io pour le temps réel (Motion Design, affichages...)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Helper pour calculer le montant total et les stats
function getTotalStats() {
    const totalRow = db.prepare('SELECT COALESCE(SUM(montant), 0) as total, COUNT(*) as count FROM donations').get();
    return {
        totalAmount: Number(totalRow.total),
        totalDonations: Number(totalRow.count)
    };
}

// Connexion WebSocket : envoie immédiat du total actuel (ex: pour le motion design au démarrage)
io.on('connection', (socket) => {
    socket.emit('total_updated', getTotalStats());
});

// ================= ROUTES PUBLIQUES ================= //

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Récupérer le montant total cumulé (pour le motion design ou un composant de jauge)
app.get('/api/donations/total', (req, res) => {
    try {
        const stats = getTotalStats();
        res.json(stats);
    } catch (error) {
        console.error('Erreur total:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération du montant total' });
    }
});

// Enregistrer une nouvelle promesse de don
app.post('/api/donations', (req, res) => {
    try {
        const { nom, prenom, email, telephone, montant } = req.body;

        // Validations
        if (!nom || !prenom) {
            return res.status(400).json({ error: 'Le nom et le prénom sont obligatoires.' });
        }

        if (!telephone || telephone.trim().length < 6) {
            return res.status(400).json({ error: 'Le numéro de téléphone est obligatoire.' });
        }

        const parsedAmount = parseFloat(montant);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({ error: 'Le montant doit être un nombre supérieur à 0 €.' });
        }

        const cleanEmail = email && email.trim().length > 0 ? email.trim().toLowerCase() : null;
        const cleanPhone = telephone.trim();

        // Insertion en BDD (Confidentialité totale des données)
        const insertStmt = db.prepare(`
            INSERT INTO donations (nom, prenom, email, telephone, montant)
            VALUES (?, ?, ?, ?, ?)
        `);

        insertStmt.run(nom.trim(), prenom.trim(), cleanEmail, cleanPhone, parsedAmount);

        // Mise à jour temps réel : on n'émet QUE le total global (aucun nom ni montant individuel)
        const newStats = getTotalStats();
        io.emit('total_updated', newStats);

        res.status(201).json({
            success: true,
            message: 'Votre promesse de don a été enregistrée avec succès.'
        });
    } catch (error) {
        console.error('Erreur enregistrement promesse:', error);
        res.status(500).json({ error: 'Impossible d\'enregistrer la promesse de don.' });
    }
});

// ================= ROUTES ADMIN (ORGANISATEURS) ================= //

// Export complet pour les organisateurs (avec noms, emails, téléphones, montants)
app.get('/api/admin/donations', (req, res) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== ADMIN_API_KEY) {
        return res.status(403).json({ error: 'Accès refusé : clé API admin non valide.' });
    }

    try {
        const rows = db.prepare('SELECT id, nom, prenom, email, telephone, montant, created_at FROM donations ORDER BY created_at DESC').all();
        res.json(rows);
    } catch (error) {
        console.error('Erreur admin donations:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Droit à l'oubli / Rectification RGPD
app.delete('/api/admin/donations/:id', (req, res) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== ADMIN_API_KEY) {
        return res.status(403).json({ error: 'Accès refusé : clé API admin non valide.' });
    }

    try {
        const { id } = req.params;
        const result = db.prepare('DELETE FROM donations WHERE id = ?').run(id);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Don non trouvé.' });
        }

        // On émet le nouveau total au motion design
        io.emit('total_updated', getTotalStats());

        res.json({ success: true, message: 'Promesse de don supprimée.' });
    } catch (error) {
        console.error('Erreur suppression don:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

server.listen(PORT, () => {
    console.log(`Serveur back-end démarré sur http://localhost:${PORT}`);
    console.log(`Diffusion temps réel Socket.io active (événement: total_updated)`);
});
