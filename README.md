# QG Barbier — Quartier Général

Site vitrine moderne (Montréal) construit avec **React + Vite + Tailwind** et **React Router**.

## Prérequis

- Node.js **20+**
- npm (inclus avec Node)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

L’app est servie en local (Vite).

## Build (production)

```bash
npm run build
```

Le build sort dans `dist/`.

## Structure (repère rapide)

- **Pages**: `src/app/pages/`
  - `Home.tsx` (accueil + avis Google)
  - `Services.tsx` (services + animation pôle 3D à droite du hero)
  - `Team.tsx` (équipe, KG & Benz mis en avant)
  - `About.tsx` (à propos + métro Radisson + lien Google)
  - `Contact.tsx` (réservation **Squire / Getsquire** intégrée en iframe + lien direct)
- **Config réservation**: `src/app/config/booking.ts` — URL Getsquire à ajuster si besoin
- **Router**: `src/app/routes.tsx` (avec `basename: import.meta.env.BASE_URL` pour GitHub Pages)
- **Composants**: `src/app/components/`
  - `Navigation.tsx`, `Footer.tsx`
  - `BarberPole3D.tsx` (animation WebGL encapsulée)
- **Assets publics**: `public/assets/` (photos équipe, hero, etc.)

## Déploiement — GitHub Pages (automatique)

Le projet est déjà configuré pour GitHub Pages via GitHub Actions.

### 1) Activer Pages

Sur GitHub:

- **Settings → Pages**
- **Source**: *GitHub Actions*

### 2) Déploiement

À chaque push sur la branche **`main`**, le workflow :

- installe les dépendances
- build avec une base `/<repo-name>/` (`vite build --base=/<repo-name>/`)
- déploie `dist/` sur GitHub Pages

Workflow: `.github/workflows/deploy-pages.yml`

### 3) React Router (éviter les 404)

GitHub Pages ne supporte pas nativement les routes SPA. On gère ça avec :

- `public/404.html` (redirige vers l’app)
- un script dans `index.html` (reconstruit l’URL)
- `basename` côté router (`import.meta.env.BASE_URL`)

## Notes

- `node_modules/` et `dist/` sont ignorés via `.gitignore`
- Les fins de lignes sont standardisées via `.gitattributes` (`LF`)

## Titre d’onglet, favicon et aperçu de lien (réseaux sociaux)

- **Titre & meta** : définis dans `index.html` (`<title>`, `description`, Open Graph, Twitter).
- **Favicon QG** : `public/favicon.svg` (modifiable si tu veux coller exactement à ton logo).
- **Image de partage (`og:image`)** : par défaut `…/assets/hero.png` sur GitHub Pages. Pour utiliser ta bannière logo (meilleur rendu sur WhatsApp / Facebook), place une image **PNG ou JPG** (idéalement ~1200×630) dans `public/` (ex. `public/og-preview.png`) puis mets à jour les balises `og:image` et `twitter:image` dans `index.html` avec l’URL absolue :  
  `https://<ton-utilisateur>.github.io/<nom-du-repo>/og-preview.png`
- **Cache** : après un changement d’aperçu, les réseaux gardent souvent l’ancienne image ; utilise le [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) pour forcer le rafraîchissement.

## Réservation (Squire / Getsquire)

- L’URL de booking est centralisée dans **`src/app/config/booking.ts`** (`GETSQUIRE_BOOKING_URL`).
- La page **Contact** utilise un **gros bouton** vers Squire : Getsquire **n’autorise en général pas** l’affichage de leur app dans un `iframe` sur un autre domaine (d’où la zone « cassée » si on essayait d’embarquer la page).
- Pour un **widget officiel** (script fourni par Squire), voir : [Installer le widget Squire sur un site HTML](https://help.getsquire.com/s/article/InstallingtheSQUIREBookingWidgetonStandardHTMLwebsitesShop6239f18210c11).

## Carte (plan d’accès)

- URL d’embed Google Maps (sans clé API) : **`src/app/config/location.ts`** (`GOOGLE_MAPS_EMBED_SRC`). Si la carte ne s’affiche plus, dans Google Maps : **Partager → Intégrer une carte** et remplace le `src` par celui fourni.
  