import { familiar, skills } from "../content.js";
import { Footer, PageHead, Pager, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Skills",
    description: "Cloud, DevOps, security, data, AI and IT operations skills, with where I used each one.",
    path: "/skills",
  });

export default function Skills() {
  return (
    <main id="main" className="page">
      <TopBar crumb="skills" />
      <PageHead
        id="skills"
        title="What I work with"
        text="Grouped by area, with where I used each one, so you can match them to real work."
      />

      <div className="skill-cards">
        {skills.map((g) => (
          <article key={g.group} className={`skill-card key-card lift c-${g.color}`}>
            <div className="skill-card__head">
              <h2>
                <span className="swatch" aria-hidden="true" />
                {g.group}
              </h2>
              <span className="skill-card__count">{g.items.length} skills</span>
            </div>
            <ul className="chips chips--hover">
              {g.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="where">
              <b>Where:</b> {g.where}
            </p>
          </article>
        ))}
      </div>

      <div className="familiar">
        <span className="eyebrow">Familiar with</span>
        <ul>
          {familiar.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <Pager id="skills" />
      <Footer />
    </main>
  );
}
