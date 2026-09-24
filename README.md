# MEF Dashboard

Prototype analytics dashboard for the Ministry of Economy and Finance — spending, project portfolio, systems, documents, and proposals. Demonstration data only, no backend.

## Stack
Static HTML + JS. No build step. Runs on any static host (Vercel, GitHub Pages, etc.) by serving these files as-is.

- `index.html` — the app
- `support.js` — runtime that boots the app (loads React from CDN)
- `_ds/` — design system tokens and components

## Deploy
Push this folder's contents to a static host's root and serve `index.html` as the entry point. No environment variables or server needed.
