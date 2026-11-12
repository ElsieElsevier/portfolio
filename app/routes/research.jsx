import { useState } from "react";
import { appliedResearch, paper } from "../content.js";
import { Btn, Chips, Flow, Footer, Icon, Metric, PageHead, Pager, TopBar, pageMeta } from "../components/ui.jsx";

export const meta = () =>
  pageMeta({
    title: "Research",
    description: "Neural Thurstone Model (CogSci 2025) and applied AI security research with the ADAM team.",
    path: "/research",
  });

function CopyCitation() {
  const [copied, setCopied] = useState(false);
  function copy() {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    try {
      navigator.clipboard.writeText(paper.citation).then(done, done);
    } catch (e) {
      done();
    }
  }
  return (
    <button type="button" className="btn" onClick={copy}>
      {copied ? Icon.check() : Icon.copy()}
      <span aria-live="polite">{copied ? "Copied" : "Copy citation"}</span>
    </button>
  );
}

export default function Research() {
  const a = appliedResearch;
  return (
    <main id="main" className="page">
      <TopBar crumb="research" />
      <PageHead
        id="research"
        title="Research"
        text="A peer-reviewed paper on combining human rankings with AI, and applied research putting an AI advisor in a live cyber-defense competition."
      />

      <article className="paper key-card key-card--lg lift c-yellow">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="paper__meta">
            <span className="tag">Peer-reviewed paper</span>
            {paper.venue}
          </div>
          <h2>{paper.title}</h2>
          <p className="paper__authors">
            <b>{paper.authors}</b> · {paper.affiliation}
          </p>
        </div>
        <p className="paper__summary">{paper.summary}</p>
        {paper.role && (
          <p className="role-note">
            <b>My role:</b> {paper.role}
          </p>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h3 className="eyebrow">How it works</h3>
          <Flow steps={paper.method} />
        </div>
        <div className="paper__split paper__split--rule">
          <div className="paper__col">
            <h3 className="eyebrow">Tested on</h3>
            <Chips items={paper.datasets} color="yellow" hover label="Datasets" />
            <p className="paper__caveat">{paper.caveat}</p>
            <h3 className="eyebrow" style={{ marginTop: 4 }}>
              Cite
            </h3>
            <p className="citation">{paper.citation}</p>
            <div className="btn-row">
              <Btn href={paper.url} variant="dark">
                {Icon.doc()}
                Read the paper
              </Btn>
              <CopyCitation />
            </div>
          </div>
          <div className="paper__col" style={{ gap: 10 }}>
            <h3 className="eyebrow">Results</h3>
            <dl className="metrics">
              {paper.results.map((r) => (
                <Metric key={r.label} {...r} />
              ))}
            </dl>
          </div>
        </div>
      </article>

      <article className="paper paper--secondary key-card key-card--lg lift c-blue">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="paper__meta">
            <span className="tag">Applied research</span>
            {a.where}
          </div>
          <h2>{a.title}</h2>
        </div>
        <div className="paper__split">
          <div className="paper__col">
            <p className="paper__summary">{a.summary}</p>
            <Chips items={a.tools} color="blue" hover />
            <div>
              <Btn to="/experience#kennesaw">
                See both research roles
                {Icon.next()}
              </Btn>
            </div>
          </div>
          <dl className="metrics">
            {a.results.map((r) => (
              <Metric key={r.label} {...r} />
            ))}
          </dl>
        </div>
      </article>

      <Pager id="research" />
      <Footer />
    </main>
  );
}
