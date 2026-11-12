// Every page is pre-rendered to its own static HTML file at build time
// (build/client/<page>/index.html), so S3 + CloudFront can serve it with
// no server. A CloudFront Function maps /experience to /experience/index.html.
export default {
  ssr: false,
  prerender: [
    "/",
    "/experience",
    "/projects",
    "/lab",
    "/skills",
    "/certifications",
    "/research",
    "/education",
    "/404",
  ],
};
