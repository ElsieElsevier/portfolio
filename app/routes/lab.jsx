import { lab, profile } from "../content.js";
import { Btn, Dots, Footer, Icon, Pager, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Project Lab",
    description: "Interactive demos of my projects, hosted on AWS. Coming soon.",
    path: "/lab",
  });

export default function Lab() {
  const github = profile.links.find((l) => l.label === "GitHub");
  return (
    <main id="main" className="page">
      <TopBar crumb="lab" />

      <section className="lab-hero key-card key-card--fill c-yellow" aria-labelledby="lab-title">
        <div className="lab-hero__text">
          <div className="page-head__top">
            <span className="label">04 Project Lab</span>
            <span className="badge-dark" style={{ marginTop: 0 }}>
              {lab.status}
            </span>
          </div>
          <h1 id="lab-title">{lab.title}</h1>
          <p>{lab.text}</p>
          <div className="btn-row" style={{ marginTop: 6 }}>
            <Btn to="/projects" variant="dark">
              See the projects
            </Btn>
            <Btn href={github.url}>
              {Icon.github()}
              Browse the code
            </Btn>
          </div>
        </div>
        <div className="lab-hero__art" aria-hidden="true">
          {Icon.gamepad(64)}
          <Dots />
        </div>
      </section>

      <div className="notice key-card">
        <p>{lab.note}</p>
      </div>

      <Pager id="lab" />
      <Footer />
    </main>
  );
}
