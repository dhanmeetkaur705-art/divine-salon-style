# Divine Unisex Salon — Cloudflare Pages copy

This is a standalone copy of the salon website. It keeps the existing website source, visual design, text, images, and interactions, while removing the Replit-only build plugins and workspace aliases.
The original Replit artifact and its deployment configuration are not part of this folder.

## Cloudflare Pages via Git

1. Extract this folder from the ZIP and push its contents to a GitHub repository.
2. In Cloudflare, create a Pages project connected to that repository.
3. Use these build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (the extracted folder's root)
   - Node.js version: `22` (also specified in `.nvmrc`)

No backend, database, or environment secrets are required by this website.

## Direct upload with Wrangler

```sh
npm install
npm run build
npx wrangler pages project create divine-unisex-salon
npx wrangler pages deploy dist --project-name divine-unisex-salon
```

Create the Pages project only once. Later uploads only need the build and deploy commands.

Cloudflare Pages also accepts a ZIP or folder of prebuilt assets through **Workers & Pages → Create → Pages → Direct Upload**. Upload the contents of `dist/` (or a ZIP made from the contents of that folder), not the full source-project ZIP.

## Local preview

```sh
npm install
npm run dev
```

The built website is written to `dist/`. The included `wrangler.jsonc` declares that output directory for Wrangler, and `public/_redirects` keeps client-side routes working on Pages.

Google Fonts and the embedded Google Map remain external services, as in the Replit version.
