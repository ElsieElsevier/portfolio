# Portfolio

My personal portfolio at [jinbai.dev](https://jinbai.dev): a hub page plus one page per section, built with React Router (pre-rendered to static HTML) and hosted on AWS S3 + CloudFront.

The original single-page version is preserved at the [`v1.0`](../../tree/v1.0) tag.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

To check the production build:

```bash
npm run build
npm run preview
```

## Edit the content

All of the text lives in `app/content.js`: profile, stats, roles, projects, skills, certifications, research and education. Wrap a phrase in `**double asterisks**` to bold it.

- Colors and fonts: the tokens in `app/styles/tokens.css`. Keycap colors are named `blue`, `green`, `red`, `yellow`, `purple` and `gray`.
- Layout and components: `app/styles/app.css`, `app/components/` and one file per page in `app/routes/`.
- Hover sound volume: `VOLUME` in `app/components/settings.jsx`.
- Files served as-is (resume, portrait, favicon, link-preview image): `public/`.

## How it's built and deployed

- `npm run build` pre-renders every page to its own HTML file in `build/client/` (for example `build/client/experience/index.html`), so the site needs no server.
- Pushing to `main` runs `.github/workflows/deploy.yml`: it builds the site, syncs `build/client/` to S3 and invalidates CloudFront. AWS access uses GitHub OIDC and a least-privilege IAM role, so no AWS keys are stored in GitHub.
- Every other branch and pull request runs `.github/workflows/check.yml`, which only checks that the site builds.
- A CloudFront Function (`infra/cloudfront-url-rewrite.js`) maps clean URLs like `/experience` to `/experience/index.html`. Missing pages are served `/404/index.html` through a CloudFront custom error response.

## Notes

- Light mode only for now; dark mode is planned.
- Sound effects can be turned off with the speaker button, and the choice is remembered.
- Animations are reduced for visitors who ask their system for less motion.
- No analytics or third-party trackers. Fonts are bundled with the site.
