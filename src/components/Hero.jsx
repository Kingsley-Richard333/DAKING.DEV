import React, {useEffect, useRef, useState} from "react";
import {gsap} from "../lib/gsap";
import {RM} from "../lib/motion";
import {Ic, Btn} from "./ui";

export default function Hero(){
 const r=useRef(),phrases=["Digital Experiences","Digital Solutions","Web Applications","Digital Products","Creative Platforms"];
 const [phraseIndex,setPhraseIndex]=useState(0),[text,setText]=useState(phrases[0]),[phase,setPhase]=useState("pause");
 useEffect(()=>{
  if(RM)return;
  const phrase=phrases[phraseIndex];
  const delay=phase==="pause"?2800:phase==="delete"?80:120;
  const timer=window.setTimeout(()=>{
   if(phase==="pause")setPhase("delete");
   else if(phase==="delete"){
    if(text)setText(text.slice(0,-1));
    else{setPhraseIndex((phraseIndex+1)%phrases.length);setPhase("type")}
   }else if(text.length<phrase.length)setText(phrase.slice(0,text.length+1));
   else setPhase("pause");
  },delay);
  return()=>window.clearTimeout(timer);
 },[phraseIndex,text,phase]);
 useEffect(()=>{if(RM)return;const c=gsap.context(()=>{
  gsap.from(".hero h1 .w span",{yPercent:110,rotate:4,duration:1.1,stagger:.07,ease:"power4.out",delay:.2});
  gsap.from(".hero .lead,.hero .ctas",{y:30,opacity:0,duration:1,stagger:.15,delay:.9,ease:"power3.out"});
  gsap.from(".hc",{y:80,opacity:0,duration:1,stagger:.12,delay:1.1,ease:"power3.out"});
  gsap.from(".hbg",{scale:1.15,duration:2.4,ease:"power2.out"});
  gsap.to(".hbg",{yPercent:12,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
  gsap.to(".hc",{y:"-=8",duration:2.6,yoyo:true,repeat:-1,ease:"sine.inOut",stagger:.3,delay:2.2});
 },r);return()=>c.revert()},[]);
 const cards=[["Custom Web Development","M16 18l6-6-6-6M8 6l-6 6 6 6"],["UI/UX Design","M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"],["Digital Solutions","M13 2L3 14h9l-1 8 10-12h-9z"],["Ongoing Support","M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94z"]];
 return (<section id="home" className="hero" ref={r}><div className="hclip"><div className="hbg" role="img" aria-label="Glass office building lit at dusk"></div></div>
  <div className="wrap"><h1><span className="w"><span>We</span></span>{" "}<span className="w"><span>Build</span></span>{" "}<span className="w typewriter-wrap"><span className="typewriter-slot" data-reserve="Digital Experiences"><span className="typewriter-content" aria-label={phrases[phraseIndex]} aria-live="off"><em>{text}</em></span></span></span>{" "}<span className="w"><span>That</span></span>{" "}<span className="w"><span>Move</span></span>{" "}<span className="w"><span>Businesses</span></span>{" "}<span className="w"><span>Forward.</span></span></h1>
   <p className="lead">From powerful websites to intelligent digital solutions, we combine creativity, technology and strategy to help ambitious brands stand out and grow.</p>
   <div className="ctas"><Btn href="#contact">Get Started</Btn><Btn href="#projects" kind="g">Explore Our Work</Btn></div></div>
  <div className="wrap"><div className="cards">{cards.map(([t,d])=>(<a key={t} href="#services" className="hc"><span className="ic"><Ic d={d}/></span>{t}</a>))}</div></div></section>)}
