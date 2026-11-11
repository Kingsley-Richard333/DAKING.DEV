import {Ic, AR, Head} from "./ui";
import {SERVICES} from "../data/services";

export default function Services(){return (<section id="services" className="light" style={{paddingTop:0}}><div className="wrap">
 <Head eye="Services" title="What We Do Best" sub="We transform ideas into functional, beautiful and impactful digital experiences."/>
 <div className="svc">{SERVICES.map(([t,d,ic],i)=>(<article className="sv rv" key={t}><span className="n" aria-hidden="true">0{i+1}</span><span className="ic"><Ic d={ic} s={26}/></span><h3>{t}</h3><p>{d}</p><a href="#contact">Learn more <Ic d={AR} s={16}/></a></article>))}</div></div></section>)}
