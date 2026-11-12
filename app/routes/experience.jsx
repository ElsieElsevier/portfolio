import { experience, profile } from "../content.js";
import { useTick } from "../components/settings.jsx";
import { Btn, Chips, Footer, PageHead, Pager, Rich, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Experience",
    description: "Cloud engineering at FinLocker and AI security research at Kennesaw State and UMSL.",
    path: "/experience",
  });

function Bullets({ points, color }) {
  return (
    <ul className={`bullets c-${color}`}>
      {points.map((p, i) => (
        <li key={i}>
          <Rich text={p} />
        </li>
      ))}
    </ul>
  );
}

function Role({ role }) {
  const accent = role.muted ? "gray" : "blue";
  return (
    <article id={role.id} className={`role key-card${role.muted ? " key-card--muted role--muted" : ""}`}>
      <header className="role__head">
        <div>
          <div className="role__title-row">
            <h2>{role.title}</h2>
            {role.badge && <span className={`tag c-${role.badge.color}`}>{role.badge.label}</span>}
          </div>
          <p className="role__org">
            <b>{role.org}</b> · {role.place}
          </p>
        </div>
        <span className="date-key">{role.dates}</span>
      </header>
      {role.groups ? (
        role.groups.map((g) => (
          <div key={g.title} className={`group c-${g.color}`}>
            <h3 className="eyebrow">
              <span className="swatch" aria-hidden="true" />
              {g.title}
            </h3>
            <Bullets points={g.points} color={g.color} />
          </div>
        ))
      ) : (
        <Bullets points={role.points} color={accent} />
      )}
      <Chips items={role.tools} />
    </article>
  );
}

export default function Experience() {
  const tick = useTick();
  return (
    <main id="main" className="page">
      <TopBar crumb="experience" />
      <PageHead id="experience" title={experience.intro.title} text={experience.intro.text} />
      <div className="with-index">
        <aside className="role-index" aria-label="Roles">
          <span className="eyebrow">Roles</span>
          <ol>
            {experience.roles.map((r) => (
              <li key={r.id}>
                <a href={`#${r.id}`} {...tick}>
                  <span className="role-index__title">{r.shortTitle || r.title}</span>
                  <span className="role-index__org">{r.shortOrg || r.org}</span>
                  <span className="role-index__dates">{r.shortDates}</span>
                </a>
              </li>
            ))}
          </ol>
          <Btn href={profile.resumeUrl} variant="blue">
            Download resume
          </Btn>
        </aside>
        <div className="stack">
          {experience.roles.map((r) => (
            <Role key={r.id} role={r} />
          ))}
        </div>
      </div>
      <Pager id="experience" />
      <Footer />
    </main>
  );
}
