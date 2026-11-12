import { Btn, Footer, TopBar } from "../components/ui.jsx";

// Pre-rendered as /404/index.html. CloudFront serves it for any missing page.
export const meta = () => [
  { title: "Page not found | Jin (Ken) Bai" },
  { name: "robots", content: "noindex" },
];

export default function NotFound() {
  return (
    <main id="main" className="page">
      <TopBar crumb="404" />
      <section className="not-found key-card key-card--lg c-red">
        <span className="label">404</span>
        <h1>That page doesn't exist</h1>
        <p>The link may be old or mistyped. The hub has everything on this site.</p>
        <Btn to="/" variant="blue">
          Back to the hub
        </Btn>
      </section>
      <Footer />
    </main>
  );
}
