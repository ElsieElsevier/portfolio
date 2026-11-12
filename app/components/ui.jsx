import { Fragment, useState } from "react";
import { Link } from "react-router";
import { useSettings, useTick } from "./settings.jsx";
import { profile, sections, site } from "../content.js";

// ── Icons (inline SVG, decorative) ───────────────────────────
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Icon = {
  back: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  ),
  next: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  external: (s = 13) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  ),
  download: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}>
      <path d="M12 4v11" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  ),
  doc: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  ),
  copy: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  ),
  check: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={2.4}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  sun: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  mail: (s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  moon: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  soundOn: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  ),
  soundOff: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M11 5 6 9H3v6h3l5 4V5z" />
      <path d="m22 9-6 6" />
      <path d="m16 9 6 6" />
    </svg>
  ),
  gamepad: (s = 26) => (
    <svg width={s} height={s} viewBox="0 0 24 24" {...stroke} strokeWidth={s > 40 ? 1.6 : 2}>
      <rect x="2" y="6" width="20" height="12" rx="4" />
      <path d="M7 10v4M5 12h4" />
      <circle cx="16" cy="11" r="1" />
      <circle cx="18" cy="13" r="1" />
    </svg>
  ),
  github: (s = 15) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.1 10.1 0 0 0 22 12.23C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
};

// ── Small pieces ─────────────────────────────────────────────
export function Dots() {
  return (
    <span className="dots" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function Rainbow() {
  return (
    <div className="rainbow" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

// Turns **bold** markers in content text into <b> tags.
export function Rich({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) => (i % 2 ? <b key={i}>{p}</b> : <Fragment key={i}>{p}</Fragment>));
}

export function Chips({ items, color, hover = false, dark = false, label = "Tools" }) {
  const cls = ["chips", hover && "chips--hover", dark && "chips--dark", color && `c-${color}`].filter(Boolean).join(" ");
  return (
    <ul className={cls} aria-label={label}>
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

export function Metric({ value, label, color }) {
  return (
    <div className={`metric c-${color}`}>
      <dt className="metric__label">{label}</dt>
      <dd className="metric__value">{value}</dd>
    </div>
  );
}

// A link that is internal (client-side) or external, with the hover click.
// `newTab` opens the link in a new browser tab.
export function Btn({ to, href, variant, children, className = "", newTab = false, ...rest }) {
  const tick = useTick();
  const cls = ["btn", variant && `btn--${variant}`, className].filter(Boolean).join(" ");
  if (to) {
    return (
      <Link to={to} className={cls} {...tick} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...tick} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}

export function OpenLink({ to, title }) {
  const tick = useTick();
  return (
    <Link to={to} className="open" {...tick} aria-label={`Open ${title}`}>
      Open →
    </Link>
  );
}

// Copies the email address (many visitors have no mail app set up,
// so a mailto: link would silently do nothing for them).
export function EmailButton({ variant, label = "Email" }) {
  const { tick } = useSettings();
  const [copied, setCopied] = useState(false);
  function copy() {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    };
    try {
      navigator.clipboard.writeText(profile.email).then(done, done);
    } catch (e) {
      done();
    }
  }
  const cls = ["btn", variant && `btn--${variant}`].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} onMouseEnter={tick} onClick={copy} title={`Copy ${profile.email}`}>
      {copied ? Icon.check(14) : Icon.mail()}
      <span aria-live="polite">{copied ? "Email copied" : label}</span>
    </button>
  );
}

// Theme + sound switch
export function SettingsSwitch() {
  const { soundOn, toggleSound, theme, toggleTheme } = useSettings();
  const dark = theme === "dark";
  return (
    <div className="switch" role="group" aria-label="Display settings">
      <button type="button" aria-label="Dark mode" aria-pressed={dark} onClick={toggleTheme}>
        {dark ? Icon.sun() : Icon.moon()}
      </button>
      <button type="button" aria-label="Sound effects" aria-pressed={soundOn} onClick={toggleSound}>
        {soundOn ? Icon.soundOn() : Icon.soundOff()}
      </button>
    </div>
  );
}

// Header bar on section pages
export function TopBar({ crumb }) {
  return (
    <nav className="topbar" aria-label="Site">
      <div className="topbar__left">
        <Btn to="/">
          {Icon.back()}
          Hub
        </Btn>
        <span className="crumb">
          jinbai.dev / <span>{crumb}</span>
        </span>
      </div>
      <SettingsSwitch />
    </nav>
  );
}

// Title tile at the top of each section page
export function PageHead({ id, title, text, fill = false, dots = true }) {
  const s = sections.find((x) => x.id === id);
  return (
    <header className={`page-head key-card key-card--lg c-${s.color}${fill ? " key-card--fill" : ""}`}>
      <div className="page-head__top">
        <span className="label">
          {s.number} {s.title}
        </span>
        {dots && <Dots />}
      </div>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}

// Previous / next links at the bottom of each section page
export function Pager({ id }) {
  const i = sections.findIndex((x) => x.id === id);
  const prev = i === 0 ? { to: "/", text: "01 Profile" } : { to: `/${sections[i - 1].id}`, text: `${sections[i - 1].number} ${sections[i - 1].title}` };
  const nextSection = sections[i + 1];
  const next = nextSection
    ? { to: `/${nextSection.id}`, text: `Next: ${nextSection.number} ${nextSection.title}` }
    : { to: "/", text: "Back to hub" };
  return (
    <nav className="pager" aria-label="Sections">
      <Btn to={prev.to}>
        {Icon.back()}
        {prev.text}
      </Btn>
      <Btn to={next.to}>
        {next.text}
        {Icon.next()}
      </Btn>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Jin (Ken) Bai</span>
      <span className="footer__right">
        Hosted on AWS S3 + CloudFront, deployed with GitHub Actions
        <Dots />
      </span>
    </footer>
  );
}

// Page <head> tags: title, description and link-preview tags.
export function pageMeta({ title, description, path }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Cloud Engineer`;
  const desc = description || site.description;
  const url = `${site.url}${path || "/"}`;
  return [
    { title: fullTitle },
    { name: "description", content: desc },
    { property: "og:type", content: "website" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: desc },
    { property: "og:url", content: url },
    { property: "og:image", content: `${site.url}/og-image.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: url },
  ];
}

// Steps joined by arrows, e.g. a data pipeline
export function Flow({ steps, dark }) {
  return (
    <div className={`flow ${dark ? "flow--dark" : "flow--light"}`}>
      {steps.map((s, i) => (
        <div key={s.label} style={{ display: "contents" }}>
          {i > 0 && (
            <span className="flow__arrow" aria-hidden="true">
              →
            </span>
          )}
          <div className="flow__step">
            <b>{s.label}</b>
            <span>{s.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

