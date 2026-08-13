# Honk Studios

Recording studio, rehearsal space and creative sound design services in Oxford.

Static multi-page site (no build step) — plain HTML/CSS/JS, deployable to GitHub Pages.

## Structure
- `index.html`, `studio-services.html`, `rehearsal-space.html`, `equipment.html`, `listen.html`, `visit.html`, `contact.html`
- `assets/css/style.css` — shared styles
- `assets/js/main.js` — shared header/footer injection, WhatsApp deep-links, tabs, forms
- `assets/icons`, `assets/geese`, `assets/mockups` — source art/icons

## WhatsApp booking
No online payments yet. Booking/contact forms and CTAs open a prefilled `wa.me` chat via `WHATSAPP_NUMBER` in `assets/js/main.js` — **update that placeholder number** to Honk Studios' real WhatsApp number before going live.

## Run locally
```
python3 -m http.server 8000
```
Then open http://localhost:8000

## Deploy (GitHub Pages)
Settings → Pages → Deploy from branch `main` / root.
