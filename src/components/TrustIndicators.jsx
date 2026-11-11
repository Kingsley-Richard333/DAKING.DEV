import {Head} from "./ui";
import {TECH, STATS} from "../data/site";

export default function Trust(){return (<section className="light first" aria-label="Trust indicators"><div className="wrap">
 <Head eye="Built with the best" title="Modern tools. Proven craft." sub="The technologies we trust to build fast, reliable and beautiful products."/>
 <div className="tick rv" aria-label="Technologies we use"><div className="track">{[...TECH,...TECH].map((t,i)=>(<span className="chip" key={i} aria-hidden={i>=TECH.length}>{t}</span>))}</div></div>
 <div className="stats">{STATS.map(([v,l])=>(<div className="stat rv" key={l}><b>{v}</b><span>{l}</span></div>))}</div></div></section>)}
