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
  - `Contact.tsx`
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
  