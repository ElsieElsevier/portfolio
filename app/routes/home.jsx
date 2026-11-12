import { Link } from "react-router";
import {
  certifications,
  education,
  experience,
  featuredProject,
  lab,
  paper,
  profile,
  projects,
  sections,
  skills,
} from "../content.js";
import { useTick } from "../components/settings.jsx";
import { Btn, Dots, EmailButton, Footer, Icon, OpenLink, Rainbow, SettingsSwitch, pageMeta } from "../components/ui.jsx";

export const meta = () => pageMeta({ path: "/" });

const section = (id) => sections.find((s) => s.id === id);

function Label({ id }) {
  const s = section(id);
  return (
    <span className="label">
      {s.number} {s.title}
    </span>
  );
}

function TileHead({ id, right }) {
  const s = section(id);
  return (
    <div className="tile__head">
      <Label id={id} />
      {right ?? <OpenLink to={`/${id}`} title={s.title} />}
    </div>
  );
}

// A quick-glance stat that links to a page on this site or another website.
function StatLink({ stat: s }) {
  const tick = useTick();
  const body = (
    <>
      <span className="stat__text">
        <span className="stat__label">{s.label}</span>
        <span className="stat__detail">{s.detail}</span>
      </span>
      <span className="stat__value">{s.value}</span>
    </>
  );
  const props = {
    className: `stat c-${s.color}`,
    ...tick,
    ...(s.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };
  if (s.to && !s.newTab) {
    return (
      <Link to={s.to} {...props}>
        {body}
      </Link>
    );
  }
  return (
    <a href={s.to || s.url} {...props}>
      {body}
    </a>
  );
}

function Profile() {
  return (
    <section className="profile key-card key-card--lg c-green" aria-labelledby="profile-name">
      <div className="profile__main">
        <img className="profile__portrait" src={profile.portrait} alt={`Pixel-art portrait of ${profile.name}`} width="224" height="224" />
        <div className="profile__body">
          <div className="profile__top">
            <div className="profile__label">
              <span className="label">01 Profile</span>
              <Dots />
            </div>
            <SettingsSwitch />
          </div>
          <div className="profile__name">
            <h1 id="profile-name">{profile.name}</h1>
            <span className="pill-live">{profile.openTo}</span>
          </div>
          <p className="profile__role">
            <b>{profile.role}</b>
            <span className="divider" aria-hidden="true" />
            <span>{profile.location}</span>
          </p>
          <p className="profile__summary">{profile.summary}</p>
          <div className="profile__links">
            <Btn href={profile.resumeUrl} variant="blue" newTab>
              {Icon.download()}
              Resume
            </Btn>
            {profile.links.map((l) => (
              <Btn key={l.label} href={l.url} newTab>
                {l.label}
              </Btn>
            ))}
            <EmailButton />
          </div>
        </div>
      </div>
      <ul className="stats" aria-label="Quick facts">
        {profile.stats.map((s) => (
          <li key={s.label}>
            <StatLink stat={s} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceTile() {
  return (
    <article className="tile tile--experience key-card c-blue">
      <TileHead id="experience" />
      <ul className="roles-mini">
        {experience.roles.slice(0, experience.hubCount).map((r) => (
          <li key={r.id}>
            <div>
              <div className="roles-mini__title">{r.title}</div>
              <div className="roles-mini__org">{r.org}</div>
            </div>
            <span className="roles-mini__dates">{r.dates}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProjectsTile() {
  const tick = useTick();
  const hubProjects = projects.filter((p) => p.hub).slice(0, 3);
  return (
    <article className="tile tile--projects key-card c-red">
      <TileHead id="projects" />
      <div className="featured-mini">
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h3>{featuredProject.title}</h3>
          <span className="tag tag--status">{featuredProject.status}</span>
        </div>
        <p>{featuredProject.hubSummary}</p>
        <Rainbow />
      </div>
      <ul className="project-rows">
        {hubProjects.map((p) => {
          const gh = p.links.find((l) => l.label === "GitHub");
          return (
            <li key={p.id}>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {gh ? (
                  <a className="proj-link" href={gh.url} {...tick}>
                    {p.hubTitle}
                    {Icon.external()}
                  </a>
                ) : (
                  <span className="proj-link">{p.hubTitle}</span>
                )}
                <span className="project-rows__detail">{p.hubDetail}</span>
              </div>
              <span className={`result-chip c-${p.color}`}>{p.hubResult}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function LabTile() {
  const tick = useTick();
  return (
    <Link to="/lab" className="tile tile--lab lab-tile key-card key-card--fill c-yellow" {...tick}>
      <div className="tile__head" style={{ alignItems: "center" }}>
        <Label id="lab" />
        {Icon.gamepad()}
      </div>
      <h2>{lab.title}</h2>
      <p>{lab.hubText}</p>
      <span className="badge-dark">{lab.status}</span>
    </Link>
  );
}

function SkillsTile() {
  return (
    <article className="tile tile--skills key-card c-purple">
      <TileHead id="skills" />
      <div className="skill-grid">
        {skills
          .filter((g) => !g.hideOnHub)
          .slice(0, 8)
          .map((g) => (
            <div key={g.group} className={`skill-panel c-${g.color}`}>
              <h3 className="eyebrow">
                <span className="swatch" aria-hidden="true" />
                {g.group}
              </h3>
              <ul>
                {g.items.slice(0, 3).map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </article>
  );
}

function CertsTile() {
  const tick = useTick();
  return (
    <article className="tile key-card key-card--fill c-green">
      <TileHead id="certifications" />
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c.name}>
            <a className="cert" href={c.verifyUrl} {...tick}>
              <span>
                <span className="cert__name">{c.name}</span>
                <span className="cert__date">{c.valid}</span>
              </span>
              <span className="cert__verify">
                Verify {Icon.external()}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ResearchTile() {
  const tick = useTick();
  return (
    <article className="tile key-card c-yellow">
      <TileHead id="research" />
      <a className="paper-link" href={paper.url} {...tick}>
        <h3>
          {paper.shortTitle}
          <span style={{ color: "var(--yellow-text)", flexShrink: 0, marginTop: 3 }}>{Icon.external(15)}</span>
        </h3>
        <span>
          {paper.hubVenue}
          <br />
          Gurkan &amp; Bai · Read the paper
        </span>
      </a>
    </article>
  );
}

function EducationTile() {
  return (
    <article className="tile key-card key-card--fill c-gray">
      <TileHead id="education" />
      <ul className="edu-list">
        {education.map((e) => (
          <li key={e.degree}>
            <span className="edu-list__degree">{e.hubDegree}</span>
            <span className="edu-list__school">{e.hubSchool}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home() {
  return (
    <main id="main" className="page page--hub">
      <Profile />
      <div className="hub-grid">
        <ExperienceTile />
        <ProjectsTile />
        <LabTile />
        <SkillsTile />
        <div className="hub-row">
          <CertsTile />
          <ResearchTile />
          <EducationTile />
        </div>
      </div>
      <Footer />
    </main>
  );
}
