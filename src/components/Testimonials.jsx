import {useEffect, useState} from "react";
import {Ic, AR, Head} from "./ui";
import {TESTI} from "../data/testimonials";

export default function Testimonials(){
 const [i,setI]=useState(0),n=TESTI.length;
 useEffect(()=>{
  if(n<2)return;
  const timer=window.setInterval(()=>setI(current=>(current+1)%n),5000);
  return ()=>window.clearInterval(timer);
 },[n]);
 return (<section id="testimonials"><div className="wrap">
 <Head eye="Testimonials" title="What People Say About Working With Us."/>
 <div className="ts rv" aria-roledescription="carousel" aria-live="polite"><div className="tt" style={{transform:`translateX(-${i*100}%)`}}>{TESTI.map((t,k)=>(<figure className="tc" key={k} aria-hidden={k!==i}><q>{t.quote}</q><figcaption className="who"><span className="av">{t.image?<img src={t.image} alt={t.name} />:"PHOTO"}</span><span><b className="sora">{t.name}</b><br/><span style={{color:"#9fc2ff"}}>{t.role}</span></span></figcaption></figure>))}</div></div>
 <div className="ctl"><button aria-label="Previous testimonial" onClick={()=>setI((i+n-1)%n)}><span style={{transform:"scaleX(-1)",display:"grid"}}><Ic d={AR} s={20}/></span></button><button aria-label="Next testimonial" onClick={()=>setI((i+1)%n)}><Ic d={AR} s={20}/></button><div className="dots">{TESTI.map((_,k)=>(<i key={k} className={k===i?"on":""}></i>))}</div></div></div></section>)}
