const Database = require('better-sqlite3');
const path = require('path');

// Nom de la base de données
const dbPath = path.join(__dirname, 'gala_donations.db');
const db = new Database(dbPath, { timeout: 7000 });

// Mode WAL pour fluidité et concurrences
db.pragma('journal_mode = WAL');

// Création de la table des promesses de dons
db.exec(`
  CREATE TABLE IF NOT EXISTS donations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    telephone TEXT NOT NULL,
    email TEXT,
    montant REAL NOT NULL CHECK(montant > 0),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
