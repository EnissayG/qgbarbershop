# Quartier Général Barbershop — site vitrine

Site web public du **Quartier Général Barbershop** (Montréal, Sherbrooke Est). Présentation du salon, services, équipe, formations, contact et **réservation en ligne** via Squire.

Maquette d’origine (référence design) : [Figma — Barbershop website design](https://www.figma.com/design/DLaefTnNkiOS0ZeL17lDxU/Barbershop-website-design).

---

## Stack technique

| Domaine | Choix |
|--------|--------|
| UI | **React 18** + **TypeScript** |
| Build & dev | **Vite 6** (`@vitejs/plugin-react`) |
| Routing | **React Router 7** (`createBrowserRouter`, layout partagé) |
| Styles | **Tailwind CSS 4** (`@tailwindcss/vite`) |
| Animation | **Motion** (ex-Framer Motion) |
| Icônes | **lucide-react** |
| Hébergement cible | **Netlify** (SPA : `index.html` + assets dans `dist/`) |

D’autres dépendances (Radix, MUI, etc.) sont présentes dans le bundle historique ; les pages du salon s’appuient surtout sur React, Tailwind et Motion.

---

## Structure du dépôt

```
public/                 # Assets statiques (logos, photos salon, favicon…)
  assets/shop/          # Images utilisées par le site (hero, équipe, qg-logo.png, …)
src/
  app/
    components/         # Layout, Header, Footer, sections réutilisables
    config/             # navigation.ts, shopInfo.ts, shopPhotos.ts
    hooks/              # ex. usePageSeo
    pages/              # Home, Services, Reserve, Team, Formations, Contact, NotFound
    routes.tsx          # Définition des routes
    App.tsx
  styles/               # CSS global, thème, Tailwind
```

Routes principales : `/`, `/services`, `/reserver`, `/equipe`, `/formations`, `/contact`.

---

## Réservation (Squire)

La page **`/reserver`** charge le script officiel **`https://widget.getsquire.com/widget.js`** (redirection vers `/v2/widget.js`). Le bootstrap public lit la config sur la balise `<script>` via **`getAttribute("brand")`**, **`getAttribute("shop")`**, etc. : le seul paramètre `?brand=` dans l’URL **ne suffit pas** — il faut aussi les attributs HTML `brand` et `shop` (voir `shopInfo.ts`).

Ensuite **`frameLoader.js`** expose `window.SquireWidget` : on attend cette API puis on appelle **`SquireWidget.open()`** pour ouvrir le panneau. Le bouton flottant reste disponible si le script `bookButton.js` est chargé (comportement par défaut lorsque `x-squire-show-btn` n’est pas à `false`).

---

## Commandes

```bash
npm install    # ou pnpm install
npm run dev    # serveur de développement Vite
npm run build  # sortie de production dans dist/
```

Prévisualiser le build localement : `npx vite preview` (après `npm run build`).

---

## Identité & logo

- Logo principal : `public/assets/shop/qg-logo.png` (fond transparent), référencé via `shopPhotos.logo` dans `src/app/config/shopPhotos.ts`.
- Favicon : `public/favicon.svg`.

---

## Licence & visibilité

Projet **privé** lié au salon. Ne pas réutiliser les photos et textes sans accord.
