import React, {useState, useEffect, useRef} from "react";
import {RM} from "../lib/motion";
import {Ic, AR} from "./ui";

export default function Extras(){
 const [v,setV]=useState(false),c=useRef();
 useEffect(()=>{const f=()=>setV(scrollY>700);addEventListener("scroll",f,{passive:true});
  const m=e=>{if(!c.current)return;c.current.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;c.current.classList.toggle("h",!!e.target.closest("a,button"))};addEventListener("mousemove",m);
  return()=>{removeEventListener("scroll",f);removeEventListener("mousemove",m)}},[]);
 return (<React.Fragment><button className={"top"+(v?" v":"")} aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:RM?"auto":"smooth"})}><span style={{transform:"rotate(-90deg)",display:"grid"}}><Ic d={AR} s={22}/></span></button><div className="cur" ref={c} aria-hidden="true"></div></React.Fragment>)}
