import {useState, useEffect, useRef} from "react";
import {RM} from "../lib/motion";
import {Head} from "./ui";
import {STEPS} from "../data/process";

export default function Process(){
 const [a,setA]=useState(0),[auto,setAuto]=useState(true),ref=useRef(),vis=useRef(false);
 useEffect(()=>{const io=new IntersectionObserver(([e])=>vis.current=e.isIntersecting,{threshold:.3});io.observe(ref.current);return()=>io.disconnect()},[]);
 useEffect(()=>{if(!auto||RM)return;const t=setInterval(()=>vis.current&&setA(x=>(x+1)%6),3800);return()=>clearInterval(t)},[auto]);
 const s=STEPS[a];
 return (<section id="process" className="light" ref={ref} style={{background:"#fff"}}><div className="wrap">
 <Head eye="Our Process" title="From Idea to Impact." sub="Every great digital experience begins with a clear vision and a thoughtful process."/>
 <div className="steps rv" style={{"--p":a/5}} role="tablist" aria-label="Process stages"><div className="bar"></div>{STEPS.map((x,i)=>(<button key={i} role="tab" aria-selected={i===a} className={"st"+(i===a?" on":"")+(i<a?" done":"")} onClick={()=>{setA(i);setAuto(false)}}><div className="dot">0{i+1}</div><span>{x[0]}</span></button>))}</div>
 <div className="panel" role="tabpanel" key={a}><div><h3>{s[1]}</h3><p>{s[2]}</p></div><ul>{s[3].map((x,i)=>(<li key={x} style={{animationDelay:i*.1+"s"}}>{x}</li>))}</ul></div></div></section>)}
