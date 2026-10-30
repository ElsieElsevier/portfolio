import { useEffect, useRef, useState } from "react";
import {
  profile,
  about,
  featured,
  projects,
  publications,
  experience,
  education,
  certifications,
  skills,
  familiar,
} from "./content.js";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Dark is the default look; visitors can switch to light and it's remembered.
function readTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    /* storage unavailable */
  }
  return "dark";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => {
        setTheme(next);
        try {
          localStorage.setItem("theme", next);
        } catch (e) {
          /* storage unavailable */
        }
      }}
      aria-label={`Switch to ${next} mode`}
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}

// Tracks which section the reader is in ("scroll spy"). On every scroll
// frame it picks the last section whose top has passed a line near the top
// of the screen, so short sections can't be skipped. Near the bottom of the
// page that line slides down the screen, so the last few sections (which
// can never scroll up to the line) still each get their turn, in order.
// Clicking a link marks that section until the reader scrolls themselves.
const SPY_LINE = 0.3; // 30% down the screen
const SPY_RAMP = 0.6; // the line starts sliding this many screen heights from the bottom

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const lockedRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      if (lockedRef.current) return;
      const vh = window.innerHeight;
      const toBottom = document.documentElement.scrollHeight - vh - window.scrollY;
      const ramp = Math.min(1, Math.max(0, 1 - toBottom / (vh * SPY_RAMP)));
      // At the very bottom the line reaches the bottom edge of the screen
      const line = vh * (SPY_LINE + (1 - SPY_LINE) * ramp) - 2;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // A click lock lasts until the reader scrolls on their own
    const unlock = () => {
      if (lockedRef.current) {
        lockedRef.current = null;
        onScroll();
      }
    };
    const onKey = (e) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) unlock();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", onKey);
    };
  }, [ids]);

  function select(id) {
    lockedRef.current = id;
    setActive(id);
  }

  return [active, select];
}

function ElementTile() {
  if (profile.portrait) {
    return (
      <figure className="tile tile-photo">
        <img
          className="portrait-photo"
          src={profile.portrait}
          alt={`Pixel-art portrait of ${profile.name}`}
          width="168"
          height="168"
        />
        <figcaption className="tile-caption">
          {profile.tileFacts.map((f) => (
            <span key={f.label}>
              <b>{f.label}</b> {f.value}
            </span>
          ))}
        </figcaption>
      </figure>
    );
  }
  return (
    <div className="tile" aria-hidden="true">
      <div className="tile-inner">
      <div className="tile-top">
        {profile.tileFacts.map((f) => (
          <span key={f.label}>
            <b>{f.label}</b> {f.value}
          </span>
        ))}
      </div>
      <div className="tile-symbol">{profile.symbol}</div>
      <div className="tile-name">{profile.name}</div>
      </div>
    </div>
  );
}

function StatusPanel() {
  return (
    <dl className="status-panel">
      {profile.status.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>
            {s.live && <span className="pulse" aria-hidden="true" />}
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Links({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <ul className="inline-links">
      {links.map((l) => (
        <li key={l.url}>
          <a href={l.url} target={l.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }) {
  return (
    <ul className="stack" aria-label="Tools used">
      {items.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>
        <span className="prompt" aria-hidden="true">
          ~/
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const [active, selectSection] = useActiveSection(sectionIds);

  return (
    <div className="layout">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="rail">
        <ElementTile />
        <h1 className="name">{profile.name}</h1>
        <p className="role">{profile.role}</p>
        {profile.location && <p className="location">{profile.location}</p>}

        <StatusPanel />

        <nav aria-label="Sections">
          <ul className="nav">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => selectSection(s.id)}
                  className={active === s.id ? "is-active" : undefined}
                  aria-current={active === s.id ? "true" : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="rail-actions">
          <a className="button" href={profile.resumeUrl}>
            Download resume
          </a>
          <ThemeToggle />
        </div>
        <Links links={profile.links} />
      </header>

      <main id="main" className="content">
        <div className="intro">
          <p className="greeting">{profile.greeting}</p>
          <p className="tagline">{profile.tagline}</p>
        </div>

        <Section id="about" title="About">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.org}>
                <p className="meta">{e.dates}</p>
                <h3>
                  {e.role}, {e.org}
                </h3>
                <ul>
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

        </Section>

        <Section id="projects" title="Projects">
          <article className="featured">
            <div className="featured-inner">
              <div className="featured-head">
                <h3>{featured.title}</h3>
                <span className="status">{featured.status}</span>
              </div>
              <p>{featured.summary}</p>
              <Stack items={featured.stack} />
              <Links links={featured.links} />
            </div>
          </article>

          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <p className="meta">
                  {p.kind}, {p.year}
                </p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <Stack items={p.stack} />
                <Links links={p.links} />
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <Stack items={s.items} />
                </dd>
              </div>
            ))}
          </dl>
          {familiar.length > 0 && (
            <p className="familiar">
              <span>Familiar with:</span> {familiar.join(", ")}
            </p>
          )}
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="education">
            {certifications.map((c) => (
              <li key={c.name}>
                <span className="degree">{c.name}</span>
                <span className="school">{c.issuer}</span>
                <span className="meta">{c.year}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="research" title="Research">
          {publications.map((p) => (
            <article className="pub" key={p.title}>
              <h3>
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              </h3>
              <p className="meta">{p.venue}</p>
              <p className="authors">{p.authors}</p>
              <p>{p.summary}</p>
            </article>
          ))}
        </Section>

        <Section id="education" title="Education">
          <ul className="education">
            {education.map((ed) => (
              <li key={ed.degree}>
                <span className="degree">{ed.degree}</span>
                <span className="school">{ed.school}</span>
                <span className="meta">{ed.year}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            The best way to reach me is email:{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <Links links={profile.links} />
        </Section>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}. Hosted on AWS S3 and CloudFront.
          </p>
        </footer>
      </main>
    </div>
  );
}
