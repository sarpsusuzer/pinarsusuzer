# Pınar Susüzer — Resume Website

A 1:1 implementation of the [Pınar Framer Website](https://www.figma.com/design/DBxRkKOGNbVBLentHJOfDp/P%C4%B1nar-Framer-Website?node-id=28-2277) Figma design: a personal resume site for Senior Digital Product Designer Pınar Susüzer.

## Stack

- Next.js (App Router) + TypeScript (static export)
- Tailwind CSS v4
- Fonts: DM Sans, Geist Mono, Cormorant
- Hosting: GitHub Pages → [www.pinarsusuzer.com](https://www.pinarsusuzer.com)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3456](http://localhost:3456).

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start development server            |
| `npm run build` | Static export to `out/`             |
| `npm run start` | Serve the exported `out/` directory |
| `npm run lint`  | Run ESLint                          |

## Deploy

- Live: **https://www.pinarsusuzer.com**
- Repo: [github.com/sarpsusuzer/pinarsusuzer](https://github.com/sarpsusuzer/pinarsusuzer)
- Pages source: `gh-pages` branch (`public/CNAME` → `www.pinarsusuzer.com`)

Rebuild and publish:

```bash
npm run build
# push contents of out/ (plus .nojekyll) to the gh-pages branch
```

## Design notes

The page mirrors the desktop, tablet, and mobile frames from the Figma file: portrait-led introduction, experiences with timeline rules, skill chips, education, and certifications.
