# 🌟 Soirée Caritative « AU CŒUR DES COULEURS »
### Maison Ronald McDonald de Toulouse (Association Dessine-moi une Maison)

Site web officiel de la **1ère Soirée caritative « AU CŒUR DES COULEURS »**, organisée le **24 novembre 2026** aux **Espaces du Stadium Toulouse FC** au profit de la Maison Ronald McDonald de Toulouse.

L'événement a pour but de rassembler les partenaires, entreprises et particuliers pour lever des fonds et financer le grand projet 2026 : **l'aménagement d'un nouvel espace d'accueil confidentiel, chaleureux et intimiste pour les familles d'enfants hospitalisés**.

---

## 📋 Table des matières

1. [Aperçu & Charte Graphique](#-aperçu--charte-graphique)
2. [Arborescence du Projet](#-arborescence-du-projet)
3. [Technologies](#-technologies)
4. [Prérequis](#-prérequis)
5. [Installation & Démarrage](#-installation--démarrage)
6. [Scripts Disponibles](#-scripts-disponibles)
7. [Architecture des Pages & Routes](#-architecture-des-pages--routes)
8. [Intégrations & Liens Externes](#-intégrations--liens-externes)
9. [Déploiement](#-déploiement)

---

## 🎨 Aperçu & Charte Graphique

Le design reprend l'identité visuelle officielle du *Save-the-Date* et de la maquette d'habillage graphique :
* **Palette chromatique** :
  * 🌾 **Crème** : `#F3ECDD` / `#F9F5EC` (arrière-plans chaleureux)
  * 🪙 **Or / Mordoré** : `#B98F53` (accent) / `#8F6C3C` (texte & badges)
  * 🌸 **Rose poudré & profond** : `#C97C8B` / `#A85566` / `#EAC7CD` (titres et éléments signature)
  * 🪵 **Charbon** : `#3A302A` / `#5B4E45` (textes courants et footer contrasté)
  * ⚪ **Blanc pur** : `#FFFFFF` (cartes de contenu et pastilles)
* **Typographies** :
  * *Display / Titres* : `The Seasons` (repli `Playfair Display`)
  * *Textes & Sous-titres* : `EB Garamond` (italique et régulier)
  * *Boutons & Eyebrows* : `Poppins` (graisses 600 / 700 majuscules)
* **Éléments signatures** :
  * Ruban aquarelle haute définition en encadrement et bande basse (`/ribbon.png`).
  * Silhouette « maison » géométrique et séparateur cœur délicat.

---

## 📁 Arborescence du Projet

```text
MDP/
├── Logo Maison Ronald McDonald Toulouse.png          # Logo officiel haute résolution
├── Site_Soirée caritative 2026_Contenu_V5_MDP.docx  # Document éditorial de référence (V5)
├── habillage-graphique-site-soiree-caritative_V2bis.html # Maquette graphique de référence
├── README.md                                         # Documentation principale du projet
│
└── MDP/
    ├── front-end/                                    # Application Web Client (React + Vite)
    │   ├── public/                                   # Fichiers statiques servis à la racine
    │   │   ├── favicon.svg                           # Favicon du site
    │   │   ├── ribbon.png                            # Ruban aquarelle haute résolution
    │   │   └── logo-maison-toulouse.png              # Logo Maison Toulouse
    │   │
    │   ├── src/                                      # Code source de l'application
    │   │   ├── assets/                               # Images et médias du projet
    │   │   │   ├── logo-maison-toulouse.png          # Logo de la Maison de Toulouse
    │   │   │   ├── dessinemoi.webp                   # Logo association Dessine-moi une Maison
    │   │   │   ├── ribbon.png                        # Image du ruban aquarelle
    │   │   │   ├── Toulouse_archi-5_HD.jpg           # Photo devanture de la Maison
    │   │   │   └── Toulouse_archi-14_HD.jpg          # Photo salle d'accueil actuelle
    │   │   │
    │   │   ├── components/                           # Composants réutilisables
    │   │   │   ├── Header.tsx                        # En-tête avec double logo & CTA don détaché
    │   │   │   ├── Footer.tsx                        # Pied de page complet (contacts, réseaux)
    │   │   │   ├── Layout.tsx                        # Structure globale & CTA flottants
    │   │   │   ├── Countdown.tsx                     # Compte à rebours jusqu'au 24/11/2026 18h30
    │   │   │   ├── Signature.tsx                     # Séparateur cœur et carte silhouette maison
    │   │   │   └── SubpageHeader.tsx                 # En-tête des sous-pages avec ruban bas
    │   │   │
    │   │   ├── pages/                                # Pages de l'application
    │   │   │   ├── Home.tsx                          # Accueil (Hero, mot président, stats, photo)
    │   │   │   ├── LaMaison.tsx                      # Onglet 1 : Présentation de la Maison
    │   │   │   ├── DinerGala.tsx                     # Onglet 2 : Soirée caritative & projet 2026
    │   │   │   ├── Inscription.tsx                   # Onglet 4 : Billetterie (tarif 120€)
    │   │   │   ├── Don.tsx                           # Onglet 5 : Mécénat & Défiscalisation
    │   │   │   └── Info.tsx                          # Onglet 6 : Infos pratiques, parkings, hôtels
    │   │   │
    │   │   ├── App.tsx                               # Définition des routes React Router
    │   │   ├── main.tsx                              # Point d'entrée React
    │   │   └── index.css                             # Styles globaux, polices & charte graphique
    │   │
    │   ├── index.html                                # Page HTML principale
    │   ├── package.json                              # Dépendances et scripts front-end
    │   ├── tsconfig.json                             # Configuration TypeScript
    │   ├── tailwind.config.js                        # Configuration Tailwind CSS
    │   └── vite.config.ts                            # Configuration Vite
    │
    └── back-end/                                     # Serveur API Node.js / Express
        ├── index.js                                  # Serveur Express (port 3001)
        └── package.json                              # Dépendances du serveur
```

---

## ⚡ Technologies

* **Front-End** :
  * [React 19](https://react.dev/) — Bibliothèque UI
  * [TypeScript](https://www.typescriptlang.org/) — Typage statique robuste
  * [Vite](https://vite.dev/) — Bundler ultra-rapide avec HMR
  * [Tailwind CSS](https://tailwindcss.com/) — Utilitaire de style CSS
  * [React Router v7](https://reactrouter.com/) — Gestion du routage et de l'historique
* **Back-End** :
  * [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) — Serveur HTTP léger & API REST

---

## 📦 Prérequis

Avant de commencer, vérifiez que les outils suivants sont installés sur votre machine :
* **Node.js** : version 18.x ou supérieure (recommandé : Node 20+ ou 24+)
* **npm** (inclus avec Node.js) ou **pnpm** / **yarn**
* **Git** (pour cloner le projet)

Vérifiez vos versions avec :
```bash
node -v
npm -v
```

---

## 🚀 Installation & Démarrage

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-compte/votre-repo.git
cd MDP
```

---

### 2. Lancer le Front-End (Client)

Ouvrez un terminal et naviguez dans le dossier `MDP/front-end` :

```bash
cd MDP/front-end
npm install
npm run dev
```

L'application est accessible dans votre navigateur à l'adresse :  
👉 **`http://localhost:5173`** (ou l'URL indiquée par Vite dans la console).

---

### 3. Lancer le Back-End (Optionnel / API)

Dans un second terminal, naviguez dans le dossier `MDP/back-end` :

```bash
cd MDP/back-end
npm install
node index.js
```

Le serveur écoute sur :  
👉 **`http://localhost:3001`** (endpoint santé : `http://localhost:3001/api/health`).

---

## 🛠️ Scripts Disponibles

Dans le dossier `MDP/front-end` :

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Démarre le serveur de développement Vite avec rechargement à chaud (HMR). |
| `npm run build` | Vérifie le typage TypeScript (`tsc -b`) et compile le code pour la production dans `/dist`. |
| `npm run preview` | Prévisualise localement le build de production généré dans `/dist`. |
| `npm run lint` | Lance la vérification ESLint sur l'ensemble du projet. |

---

## 🧭 Architecture des Pages & Routes

| Route | Nom de l'onglet | Contenu principal |
| :--- | :--- | :--- |
| `/` | **Accueil** | Hero d'accueil avec compte à rebours, mot d'accueil du Président Paul Sécail, 3 chiffres clés, visuel de la devanture de la Maison. |
| `/la-maison` | **Présentation** | Histoire nationale et toulousaine (20 ans, 18 000 familles), mission, bloc visuel des 6 pastilles de chiffres clés, bouton de soutien. |
| `/soiree-gala` | **Soirée caritative 2026** | Frise chronologique (18h30 apéritif, 19h-20h don, 20h30-22h30 cocktail & enchères), présentation du projet de nouvelle zone d'accueil, photo de la salle d'accueil actuelle, barème de dons de 20€ à 5 000€, défiscalisation. |
| `/inscription` | **Inscription** | Présentation de la participation, tarif unique de **120€ / place**, mention d'exonération de reçu fiscal, lien direct HelloAsso. |
| `/don` | **Faire un don** | Cadre du mécénat, explications détaillées des réductions d'impôts (Entreprises 60%, Particuliers 66%), émission du reçu fiscal, lien HelloAsso. |
| `/infos-pratiques` | **Infos pratiques** | Adresse exacte au Stadium FC, horaires, lien Google Maps identifiant les parkings de la zone, contact direct (Claire Renaud), liste des 3 hôtels recommandés avec liens officiels, carte Google Maps interactive. |

*Des redirections de courtoisie sont automatiquement configurées pour garantir qu'aucun lien mort n'apparaisse (ex. `/la_maison` ➔ `/la-maison`, `/diner_gala` ➔ `/soiree-gala`, `/info` ➔ `/infos-pratiques`, `/tombola` ➔ `/soiree-gala`).*

---

## 🔗 Intégrations & Liens Externes

* **Billetterie Soirée 2026** :  
  `https://www.helloasso.com/associations/dessine-moi-une-maison/evenements/soiree-caritative-2026`
* **Formulaire de Don en Ligne** :  
  `https://www.helloasso.com/associations/dessine-moi-une-maison/formulaires/6`
* **Plan Parkings Stadium (Google Maps)** :  
  `https://www.google.com/maps/search/parking+/@43.5855151,1.4330107,1434m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D`
* **Hôtels partenaires** :
  * [Lagrange Apart’hôtel Toulouse](https://www.lagrange-aparthotel.com/toulouse/)
  * [Hôtel Gascogne](https://www.hotel-gascogne.com/fr/)
  * [Hôtel Croix Baragnon](https://www.hotelcroixbaragnon.com/)

---

## 🚢 Déploiement

Le site est entièrement statique côté front-end et peut être déployé en quelques secondes sur n'importe quel hébergeur moderne :

### Déploiement sur Vercel
1. Installez le CLI Vercel ou connectez votre dépôt GitHub à [Vercel](https://vercel.com/).
2. Définissez le **Root Directory** sur `MDP/front-end`.
3. Le framework Vite sera détecté automatiquement.
4. Cliquez sur **Deploy**.

### Déploiement sur Netlify
1. Connectez votre dépôt sur [Netlify](https://www.netlify.com/).
2. **Base directory** : `MDP/front-end`
3. **Build command** : `npm run build`
4. **Publish directory** : `MDP/front-end/dist`

---

## 🤝 Crédits & Remerciements

* **Organisation** : Association Dessine-moi une Maison & Maison Ronald McDonald de Toulouse
* **Présidence** : Paul Sécail
* **Coordination événementielle** : Claire Renaud (`evenement.mdptoulouse@gmail.com`)
* **Conception & Développement Web** : Baptiste
