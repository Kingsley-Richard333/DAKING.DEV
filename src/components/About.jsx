import {Btn} from "./ui";

import React, {useEffect, useRef, useState} from "react";

export default function About(){
 const phrases=["possibilities","potentials","breakthrough"];
 const [phraseIndex,setPhraseIndex]=useState(0),[text,setText]=useState(phrases[0]),[phase,setPhase]=useState("pause");
 const reducedMotion=useRef(false);

 useEffect(()=>{
  const media=window.matchMedia("(prefers-reduced-motion: reduce)");
  const update=()=>{reducedMotion.current=media.matches};
  update();
  media.addEventListener?.("change",update);
  return ()=>media.removeEventListener?.("change",update);
 },[]);

 useEffect(()=>{
  if(reducedMotion.current)return;
  const phrase=phrases[phraseIndex];
  const delay=phase==="pause"?1800:phase==="delete"?60:100;
  const timer=window.setTimeout(()=>{
   if(phase==="pause")setPhase("delete");
   else if(phase==="delete"){
    if(text.length>0)setText((prev)=>prev.slice(0,-1));
    else{setPhraseIndex((phraseIndex+1)%phrases.length);setPhase("type")}
   } else if(text.length<phrase.length){
    setText(phrase.slice(0,text.length+1));
   } else {
    setPhase("pause");
   }
  },delay);
  return ()=>window.clearTimeout(timer);
 },[phase,phraseIndex,text]);

 return (<section id="about" className="light"><div className="wrap ab"><div>
 <span className="eyebrow rv">About DAKING-DEV</span>
 <p className="big rv">More than code. We create <mark className="typewriter-mark">{reducedMotion.current?phrases[0]:text}</mark> for businesses ready to grow.</p>
 <p className="rv">DAKING-DEV is a web development and creative technology studio. We pair design thinking with solid engineering, so what we build looks great and works hard.</p>
 <p className="rv">We care about clear communication, honest timelines and craft that holds up long after launch. When you work with us, you work with people invested in your success. [Edit this story]</p>
 <div style={{marginTop:26}} className="rv"><Btn href="#contact">Work with us</Btn></div></div>
 <div className="vals">{[["01","Creative","Original ideas, never templates."],["02","Technical","Clean, scalable, performant code."],["03","Reliable","Clear updates and dependable delivery."],["04","Human","Plain language, real partnership."]].map(([n,t,d])=>(<div className="val rv" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>))}</div></div></section>)}
