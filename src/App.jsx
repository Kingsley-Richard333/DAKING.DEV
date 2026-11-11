import React, {useEffect, useState} from "react";
import {gsap, ScrollTrigger} from "./lib/gsap";
import {RM} from "./lib/motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/TrustIndicators";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Faq from "./components/FAQ";
import Cta from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Extras from "./components/Extras";
import CaseStudy from "./components/CaseStudy";
import {CASE_STUDIES} from "./data/caseStudies";

export default function App(){
 const [h,setH]=useState(window.location.hash);
 useEffect(()=>{const f=()=>setH(window.location.hash);window.addEventListener("hashchange",f);return()=>window.removeEventListener("hashchange",f)},[]);
 const m=/^#case-study-(.+)$/.exec(h);const cs=m&&CASE_STUDIES[m[1]]?m[1]:null;
 useEffect(()=>{if(cs){window.scrollTo(0,0)}else if(h&&h!=="#"){const el=document.getElementById(h.slice(1));if(el)requestAnimationFrame(()=>el.scrollIntoView())}},[cs]);
 useEffect(()=>{if(RM)return;const c=gsap.context(()=>{
  gsap.utils.toArray(".rv").forEach(el=>gsap.from(el,{y:50,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%",once:true}}));
  gsap.utils.toArray(".pimg").forEach(el=>gsap.fromTo(el,{clipPath:"inset(12% 12% 12% 12% round 26px)"},{clipPath:"inset(0% 0% 0% 0% round 26px)",duration:1.3,ease:"power4.out",scrollTrigger:{trigger:el,start:"top 88%",once:true}}));
  gsap.utils.toArray(".big mark").forEach(el=>gsap.to(el,{backgroundSize:"100% 100%",color:"#fff",duration:.9,delay:.3,scrollTrigger:{trigger:el,start:"top 85%",once:true}}));
  gsap.utils.toArray(".sv .n").forEach(el=>gsap.to(el,{yPercent:-18,ease:"none",scrollTrigger:{trigger:el,scrub:true}}));
  gsap.utils.toArray("main > section:not(.hero):not(.cs-hero) > .wrap, footer > .wrap").forEach(el=>gsap.fromTo(el,{scale:.88,opacity:.15,transformOrigin:"50% 20%"},{scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:el,start:"top 100%",end:"top 45%",scrub:.6}}));
  ScrollTrigger.refresh();});return()=>c.revert()},[cs]);
 return (<React.Fragment><Navbar key={cs||"home"}/><main>{cs?(<CaseStudy id={cs}/>):(<React.Fragment><Hero/><Trust/><Services/><Projects/><About/><Process/><Testimonials/><Faq/><Cta/><Contact/></React.Fragment>)}</main><Footer/><Extras/></React.Fragment>)}
