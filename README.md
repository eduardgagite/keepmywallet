# KeepMyWallet

Landing page for **KeepMyWallet** — a personal finance app concept (smart expense tracking, budgets and savings goals).

Built with **React + Vite**. Dark, neon-accented theme with scroll-reveal animations, animated stat counters, an interactive FAQ, an app mockup and a fully responsive layout.

## Tech

- React 18
- Vite 5
- Plain CSS (no UI framework)

## Project structure

```
src/
  main.jsx            App bootstrap
  App.jsx             Page composition
  index.css           Theme, layout and animations
  components/         Nav, Hero, Features, Pricing, FAQ, ... + Reveal + icons
```

## Develop locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

1. Push this repo to GitHub.
2. Open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds the site and publishes it to
   `https://<username>.github.io/keepmywallet/`.

The Vite config uses a relative `base`, so the build works at any subpath without further changes.
