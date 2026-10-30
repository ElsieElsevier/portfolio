# Portfolio

My personal portfolio site, built with React and Vite and hosted as static files on AWS S3 and CloudFront.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Edit the content

All of the text lives in `src/content.js`.

- Your resume: save it as `public/resume.pdf`.
- Your portrait: `public/portrait-pixel.png`, set by `portrait` in `content.js`. A square image works best. Set `portrait: ""` to show the initials tile instead.
- The browser-tab icon: edit the two letters in `public/favicon.svg`.
- The page title and search description: edit the `<title>` and `description` tags in `index.html`.
- Colors and fonts: the tokens at the top of `src/styles.css`.

## Build for S3

```bash
npm run build
```

This creates a `dist/` folder of plain HTML, CSS and JavaScript. Upload the contents of `dist/` to your S3 bucket.

## Notes

- Dark mode is the default; the toggle switches to light mode and remembers the visitor's choice.
- No analytics or third-party trackers. Fonts are bundled with the site.
