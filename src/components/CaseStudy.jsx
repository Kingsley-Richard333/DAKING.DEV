import { CASE_STUDIES } from "../data/caseStudies";
import { Ic, AR } from "./ui";

// Wraps any [bracketed] text in a highlighted placeholder
const Rich = ({ t }) =>
  t.split(/(\[[^\]]+\])/).map((p, i) =>
    /^\[/.test(p) ? <span className="phd" key={i}>{p}</span> : p
  );
const Paras = ({ list }) =>
  list.map((t, i) => (<p className="cs-p rv" key={i}><Rich t={t} /></p>));
const Title = ({ eye, children }) => (
  <>
    <span className="eyebrow rv">{eye}</span>
    <h2 className="rv">{children}</h2>
  </>
);
const Arrow = ({ flip }) => (
  <span style={flip ? { transform: "scaleX(-1)", display: "grid" } : { display: "grid" }}>
    <Ic d={AR} s={18} />
  </span>
);

export default function CaseStudy({ id }) {
  const c = CASE_STUDIES[id];
  return (
    <>
      <section className="cs-hero">
        <div className="wrap">
          <a className="cs-back rv" href="#projects"><Arrow flip /> Back to selected works</a>
          <span className="cat rv">{c.category}</span>
          <h1 className="rv">{c.name}</h1>
          <p className="lead rv">{c.tagline}</p>
          <div className="ctas rv">
            <a className="btn p" href={c.live} target="_blank" rel="noopener noreferrer">View live site <Ic d={AR} s={18} /></a>
            <a className="btn g" href="#contact">Let's talk <Ic d={AR} s={18} /></a>
          </div>
          <div className="cs-cover rv"><img src={c.image} alt={c.name + " platform preview on desktop, tablet and mobile"} /></div>
        </div>
      </section>

      <section className="light">
        <div className="wrap cs-2">
          <div>
            <Title eye="Overview">The brief</Title>
            <Paras list={c.overview} />
          </div>
          <aside className="cs-f rv" aria-label="Quick facts">
            {c.client && <div><small>Client</small>{c.client}</div>}
            <div><small>Our role</small>{c.role}</div>
            <div><small>Year</small><Rich t={c.year} /></div>
            {c.timeline && <div><small>Timeline</small><Rich t={c.timeline} /></div>}
            <div><small>Services</small>{c.services}</div>
            {c.audience && <div><small>Audience</small>{c.audience}</div>}
            {c.platforms && <div><small>Platforms</small>{c.platforms}</div>}
            <div><small>Stack</small><span className="tags">{c.stack.map((s) => (<span key={s}>{s}</span>))}</span></div>
          </aside>
        </div>
      </section>

      <section className="cs-w">
        <div className="wrap">
          <Title eye="The Challenge">Structure, not access.</Title>
          <Paras list={c.challenge} />
        </div>
      </section>

      <section className="dk">
        <div className="wrap">
          <Title eye="The Goal">Three requirements for success.</Title>
          <p className="cs-p rv">{c.goalsIntro}</p>
          <div className="cs-g">
            {c.goals.map(([t, d], i) => (
              <div className="cs-card rv" key={t}><b>0{i + 1}</b><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
          {c.goalsQuestion && <p className="cs-q rv">{c.goalsQuestion}</p>}
        </div>
      </section>

      <section className="light">
        <div className="wrap">
          <Title eye="Research and Planning">
            {c.researchHeading || "Start from the student's day."}
          </Title>
          <Paras list={c.research} />
          {c.researchNote && <div className="phb rv"><Rich t={c.researchNote} /></div>}
        </div>
      </section>

      <section className="cs-w">
        <div className="wrap">
          <Title eye="Design">Calm, clear and comfortable.</Title>
          <p className="cs-p rv"><b>Visual direction.</b> {c.visual}</p>
          {c.screens.length > 0 && (
            <div className="cs-s">
              {c.screens.map(([t, d]) => (
                <div className="cs-card l rv" key={t}><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          )}
          <p className="cs-p rv">{c.responsive}</p>
          {c.designImages.length > 0 && (
            <div className="cs-ph">
              {c.designImages.map((item) =>
                typeof item === "string" ? (
                  <div className="phb rv" key={item}>Image placeholder: {item}</div>
                ) : (
                  <figure className="cs-shot rv" key={item.title}>
                    <img src={item.src} alt={`${c.name} ${item.title.toLowerCase()} screen`} loading="lazy" />
                    <figcaption>{item.title}</figcaption>
                  </figure>
                )
              )}
            </div>
          )}
        </div>
      </section>

      <section className="dk">
        <div className="wrap">
          <Title eye="Build">Built in stages.</Title>
          <div className="cs-g">
            {c.build.map(([t, d], i) => (
              <div className="cs-card rv" key={t}><b>0{i + 1}</b><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
          {c.buildNote && <div className="cs-build-note phb rv"><Rich t={c.buildNote} /></div>}
        </div>
      </section>

      <section className="light">
        <div className="wrap">
          <Title eye="Results">Where it stands.</Title>
          <p className="cs-q rv" style={{ color: "var(--ink)" }}><Rich t={c.results} /></p>
          <div className="cs-s">
            {c.resultSlots.map(([t, d]) => (
              <div className="cs-card l rv" key={t}><h3>{t}</h3><p><Rich t={d} /></p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-w">
        <div className="wrap">
          <Title eye="What's Next">The foundation is in place.</Title>
          <ul className="cs-n">
            {c.next.map((t) => (<li className="rv" key={t}><Ic d={AR} s={18} /> <Rich t={t} /></li>))}
          </ul>
        </div>
      </section>

      <section className="cta" aria-labelledby="cs-cta">
        <span className="ring"></span><span className="ring" style={{ animationDelay: "-2.3s" }}></span><span className="ring" style={{ animationDelay: "-4.6s" }}></span>
        <div className="wrap">
          <h2 id="cs-cta" className="rv">Need a platform like {c.name}?</h2>
          <p className="rv">We turn complex ideas into products people want to use. Tell us what you're building.</p>
          <div className="ctas rv">
            <a className="btn p" href={c.live} target="_blank" rel="noopener noreferrer">View live site <Ic d={AR} s={18} /></a>
            <a className="btn g" href="#contact">Let's talk <Ic d={AR} s={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
