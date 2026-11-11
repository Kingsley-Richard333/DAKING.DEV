import {Ic, AR, Head} from "./ui";
import {PROJECTS} from "../data/projects";

export default function Projects(){return (<section id="projects"><div className="wrap">
 <Head eye="Portfolio" title="Selected Works" sub="A collection of ideas transformed into digital experiences."/>
 {PROJECTS.map((p,i)=>(<article className="proj" key={i}>
  <div className="pimg rv">{p.image?(<img src={p.image} alt={p.name+" screenshot"} loading="lazy"/>):(<div className="ph">PROJECT IMAGE PLACEHOLDER<br/>(add image path in PROJECTS data)</div>)}</div>
  <div className="rv"><span className="cat">{p.category}</span><br/><h3>{p.name}</h3><p>{p.desc}</p>
  <div className="tags">{p.tech.map(t=>(<span key={t}>{t}</span>))}</div>
  <div className="pl"><a href={p.live} target="_blank" rel="noopener noreferrer">View live site <Ic d={AR} s={16}/></a>{p.caseStudy&&(<a href={p.caseStudy}>Case study</a>)}</div></div></article>))}</div></section>)}
