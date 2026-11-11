import {useState} from "react";
import {Head} from "./ui";
import {FAQ} from "../data/faq";

export default function Faq(){
 const [o,setO]=useState(0);
 return (<section id="faq" className="light"><div className="wrap"><Head eye="FAQ" title="Questions? We've Got Answers."/>
 <div className="fq rv">{FAQ.map(({question,answer,closing},i)=>(<div className={"fi"+(o===i?" o":"")} key={question}><h3 style={{fontSize:"inherit",letterSpacing:0}}><button id={"fq"+i} aria-expanded={o===i} aria-controls={"fa"+i} onClick={()=>setO(o===i?-1:i)}>{question}<span className="pm"></span></button></h3><div className="fa" id={"fa"+i} role="region" aria-labelledby={"fq"+i}><div className="fa-content">{answer.map((paragraph,index)=><p key={index}>{paragraph}</p>)}{closing&&<p className="faq-closing"><strong>{closing}</strong></p>}</div></div></div>))}</div></div></section>)}
