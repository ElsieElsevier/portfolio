// CloudFront Function (viewer request) for jinbai.dev.
//
// Every page is pre-rendered to <page>/index.html in S3. Visitors use clean
// URLs like /experience, so this rewrites the request before it reaches S3:
//   /experience   -> /experience/index.html
//   /experience/  -> /experience/index.html
// Requests for real files (anything with a dot, like /assets/app.css or
// /resume.pdf) pass through unchanged.

function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  } else if (!uri.split("/").pop().includes(".")) {
    request.uri = uri + "/index.html";
  }

  return request;
}
