import { certifications } from "../content.js";
import { Btn, Chips, Footer, Icon, PageHead, Pager, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Certifications",
    description: "CompTIA Security+ and AWS Certified Cloud Practitioner, verifiable on Credly.",
    path: "/certifications",
  });

export default function Certifications() {
  return (
    <main id="main" className="page">
      <TopBar crumb="certifications" />
      <PageHead
        id="certifications"
        title="Verified credentials"
        text="Both are active and verifiable on Credly, the official badge platform for CompTIA and AWS."
        fill
        dots={false}
      />

      {certifications.map((c) => (
        <article key={c.name} className={`cred key-card key-card--lg lift c-${c.color}`}>
          <div className="cred__head">
            <div className="emblem" aria-hidden="true">
              {c.emblem}
            </div>
            <div className="cred__body">
              <h2>{c.name}</h2>
              <p className="cred__issuer">
                Issued by <b>{c.issuer}</b>
              </p>
              <p className="cred__status">
                <span className="active-pill">
                  {Icon.check()}
                  Active
                </span>
                Valid {c.valid}
              </p>
            </div>
            <Btn href={c.verifyUrl} variant="dark">
              Verify on Credly
            </Btn>
          </div>
          <div className="cred__details">
            <div>
              <h3 className="eyebrow">What it covers</h3>
              <Chips items={c.covers} color={c.color} hover label="Exam domains" />
            </div>
            <div>
              <h3 className="eyebrow">Where I've applied it</h3>
              <p>{c.applied}</p>
            </div>
          </div>
        </article>
      ))}

      <Pager id="certifications" />
      <Footer />
    </main>
  );
}
