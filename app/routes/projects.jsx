import { featuredProject, projects } from "../content.js";
import { Btn, Chips, Flow, Footer, Icon, Metric, PageHead, Pager, Rainbow, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Projects",
    description: "Cloud pipelines, machine learning and a hackathon win, each with results and code.",
    path: "/projects",
  });


function ProjectCard({ p }) {
  return (
    <article className={`pcard key-card lift c-${p.color}`}>
      <div className="pcard__main">
        <div className="pcard__meta">
          <span className="pcard__kind">
            <span className="swatch" aria-hidden="true" />
            {p.kind}
          </span>
          <span className="pcard__year">· {p.year}</span>
          {p.badge && <span className="tag c-gray">{p.badge}</span>}
        </div>
        <h2>{p.title}</h2>
        <p className="pcard__summary">{p.summary}</p>
        <p className="role-note">
          <b>My role:</b> {p.role}
        </p>
        <Chips items={p.stack} />
        {p.links.length > 0 && (
          <div className="btn-row" style={{ marginTop: 4 }}>
            {p.links.map((l) => (
              <Btn key={l.url} href={l.url} variant={l.primary ? "dark" : undefined} newTab={l.newTab}>
                {l.label === "GitHub" ? Icon.github() : Icon.external()}
                {l.label}
              </Btn>
            ))}
          </div>
        )}
      </div>
      <div className="pcard__side">
        <span className="eyebrow">Results</span>
        <dl className="metrics">
          {p.results.map((r) => (
            <Metric key={r.label} value={r.value} label={r.label} color={p.color} />
          ))}
        </dl>
      </div>
    </article>
  );
}

export default function Projects() {
  const f = featuredProject;
  return (
    <main id="main" className="page">
      <TopBar crumb="projects" />
      <PageHead
        id="projects"
        title="Things I've built"
        text="Cloud pipelines, machine learning and a hackathon win, each with the results and the code behind it."
      />

      <section className="featured key-card key-card--lg key-card--dark" aria-labelledby="featured-title">
        <div className="featured__top">
          <div>
            <span className="eyebrow">Featured</span>
            <span className="tag tag--status">{f.status}</span>
          </div>
          <span className="featured__note">{f.note}</span>
        </div>
        <h2 id="featured-title">{f.title}</h2>
        <p>{f.summary}</p>
        <Flow steps={f.pipeline} dark />
        <Chips items={f.stack} dark />
        {f.links.length > 0 && (
          <div className="btn-row">
            {f.links.map((l) => (
              <Btn key={l.url} href={l.url}>
                {l.label}
              </Btn>
            ))}
          </div>
        )}
        <Rainbow />
      </section>

      {projects.map((p) => (
        <ProjectCard key={p.id} p={p} />
      ))}

      <Pager id="projects" />
      <Footer />
    </main>
  );
}
