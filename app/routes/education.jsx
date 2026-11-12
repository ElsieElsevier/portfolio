import { education, profile } from "../content.js";
import { Btn, Footer, Icon, PageHead, Pager, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Education",
    description: "M.S. Cybersecurity (UMSL), B.S. Chemistry (University of Missouri) and the LaunchCode full-stack bootcamp.",
    path: "/education",
  });

export default function Education() {
  const linkedin = profile.links.find((l) => l.label === "LinkedIn");
  return (
    <main id="main" className="page">
      <TopBar crumb="education" />
      <PageHead
        id="education"
        title="Education"
        text="From chemistry to cybersecurity, and now full-stack development."
        fill
        dots={false}
      />

      {education.map((e) => (
        <article key={e.degree} className={`edu key-card key-card--lg lift c-${e.color}`}>
          <div className="edu__head">
            <div className="emblem emblem--sm" aria-hidden="true">
              {e.emblem}
            </div>
            <div className="cred__body">
              <div className="role__title-row">
                <h2>{e.degree}</h2>
                {e.status && <span className="tag c-yellow">{e.status}</span>}
              </div>
              <p className="cred__issuer">{e.school}</p>
            </div>
            <span className="date-key">{e.date}</span>
          </div>
          <p className="edu__text">{e.text}</p>
          {e.related.length > 0 && (
            <div className="related">
              <span className="eyebrow">Related work</span>
              {e.related.map((r) => (
                <Btn key={r.to} to={r.to}>
                  {r.label}
                  {Icon.next()}
                </Btn>
              ))}
            </div>
          )}
        </article>
      ))}

      <section className="cta key-card key-card--lg key-card--dark" aria-labelledby="cta-title">
        <div>
          <h2 id="cta-title">That's the tour. Let's talk.</h2>
          <p>I'm open to cloud, security and data engineering roles.</p>
        </div>
        <div className="btn-row">
          <Btn href={`mailto:${profile.email}`} variant="blue">
            Email me
          </Btn>
          <Btn href={linkedin.url}>LinkedIn</Btn>
          <Btn href={profile.resumeUrl}>Resume</Btn>
        </div>
      </section>

      <Pager id="education" />
      <Footer />
    </main>
  );
}
