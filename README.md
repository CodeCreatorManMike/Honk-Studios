# Honk Studios

Recording studio and creative sound design services in Oxford.

Static multi-page site (no build step, no framework) — plain HTML/CSS/JS.

## Live site

Deployed as a Cloudflare Worker (static assets):
**https://honk-studios.honk-studios.workers.dev**

Production domain: `honkstudiosoxford.co.uk` (see all `<link rel="canonical">` /
Open Graph tags in each page's `<head>`).

## Structure

- Pages (root): `index.html`, `studio-services.html`, `equipment.html`,
  `listen.html`, `visit.html`, `contact.html`, `about.html`, `help.html`,
  `privacy-policy.html`, `terms.html`, plus one page per studio service
  (`recording.html`, `mixing-editing.html`, `sound-design.html`,
  `podcasts-audio-drama.html`, `live-theatre.html`, `foley-sound-design.html`,
  `audio-books.html`, `creative-projects.html`)
- `assets/css/style.css` — all shared styles (single stylesheet, no build step)
- `assets/js/main.js` — shared header/footer injection (see below), WhatsApp
  deep-links, mobile nav, FAQ accordions, equipment tabs, form → WhatsApp handoff
- `assets/icons`, `assets/geese`, `assets/mockups` — art/icons
- `sitemap.xml` / `robots.txt` — kept in sync with the page list above for
  Google Search Console submission; update both whenever a page is added or removed
- `wrangler.jsonc` — Cloudflare Workers static-assets config (`assets.directory: "."`)

The header and footer are **not** duplicated per page — every page has an empty
`<div id="site-header">` / `<div id="site-footer">`, and `assets/js/main.js`
injects the shared markup on `DOMContentLoaded`. Edit the nav/footer once, in
`main.js`, not per page.

## WhatsApp booking

No online payments. Booking/contact forms and every "Chat on WhatsApp" button
open a prefilled `wa.me` link built from `WHATSAPP_NUMBER` in
`assets/js/main.js` (international format, no `+` or spaces, e.g. `447468908687`).
Per-page default message text lives in `PAGE_WA_MESSAGES` in the same file,
keyed by each page's `<body data-page="...">` attribute.

## Cache-busting

`style.css` and `main.js` are linked with a `?v=YYYYMMDDx` query string on
every page (e.g. `assets/css/style.css?v=20260828c`). **Bump this version
string on every deploy that touches CSS or JS** — without it, browsers and
Cloudflare's edge cache can keep serving the previous version after a deploy.

## Accessibility notes

Small hover/entrance animations (scribble draw-in, card lift, button lift,
portfolio image zoom) are used throughout. A global
`@media (prefers-reduced-motion: reduce)` rule at the top of `style.css`
collapses all of these to nearly instant for users who have that OS-level
preference set — never remove or narrow that rule when adding new animation.

## Run locally

```
python3 -m http.server 8000
```
Then open http://localhost:8000

## Deploy

```
npx wrangler deploy
```
Requires a Cloudflare API token with Workers edit permission for the
Honk-Studios account, set as `CLOUDFLARE_API_TOKEN` (and `CLOUDFLARE_ACCOUNT_ID`)
in the environment. This uploads the whole repo root as static assets per
`wrangler.jsonc`.

Pushing to `origin/main` on GitHub does **not** currently trigger a deploy —
there is no CI configured. Run `wrangler deploy` manually (or add a GitHub
Action using `wrangler-action`) after merging changes you want live.
