# Omiran On-Site Ltd — website prototype

A React + Vite prototype for **Omiran On-Site Ltd** (steel structures, welding, metal fabrication, doors & windows, electrical services in Rwanda).

No backend. No database. Content marked **PLACEHOLDER** is not real company data.

## Commands to run locally

Open a terminal in this project folder, then run:

```bash
npm install
```

That installs React, Vite, and the other packages listed in `package.json` (only needed once, or after dependencies change).

Start the development server:

```bash
npm run dev
```

Vite will print a local address, usually:

```text
http://localhost:5173
```

Open that link in your browser. Leave the terminal open while you work. Press `Ctrl + C` to stop the server.

### Other useful commands

```bash
npm run build
```

Creates an optimized production build in the `dist` folder (for later hosting — not needed while designing).

```bash
npm run preview
```

Serves the built `dist` folder locally so you can check the production build.

## Where to edit content

| What | File |
|------|------|
| Company name, contact placeholders, services, projects, about, why-us | `src/data/content.js` |
| Colors / light & dark theme | `src/index.css` (`:root` and `[data-theme='dark']`) |
| WhatsApp number | `company.whatsapp` in `src/data/content.js` (country code, digits only, e.g. `2507XXXXXXXX`) |
| Photos | `public/images/` (see `public/images/README.txt`) |
| Logos | `public/logo-light.jpeg` and later `public/logo-dark.png` |

## Project structure (beginner map)

```text
src/
  data/content.js       ← easy-to-edit text & image paths
  components/           ← each website section
  hooks/useTheme.js     ← light/dark mode + localStorage
  hooks/useReveal.js    ← small scroll fade/slide
  App.jsx               ← puts all sections together
  index.css             ← global styles & CSS variables
public/
  logo-light.jpeg
  images/               ← put real photos here
```

## Notes

- The quote form validates required fields and shows a **“prototype only — not sent”** message. Nothing is emailed.
- WhatsApp button stays inactive until you set `company.whatsapp`.
- Dark mode follows the system on first visit, then remembers your choice after you click the toggle.
