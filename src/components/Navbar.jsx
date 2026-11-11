import {useState, useEffect, useRef} from "react";
import {Btn} from "./ui";
import {NAV} from "../data/site";
import LOGO from "../assets/logo.svg";

export default function Navbar(){
 const [open,setOpen]=useState(false),[sc,setSc]=useState(false),[hidden,setHidden]=useState(false),[revealing,setRevealing]=useState(false),[act,setAct]=useState("home"),b=useRef(),navHidden=useRef(false);
 useEffect(()=>{
  let lastY=window.scrollY,travel=0,frame=0;
  const show=(animate=false)=>{
   if(navHidden.current){navHidden.current=false;setHidden(false);setRevealing(animate)}
  };
  const hide=()=>{
   if(!navHidden.current){navHidden.current=true;setHidden(true);setRevealing(false)}
  };
  const f=()=>{
   if(frame)return;
   frame=requestAnimationFrame(()=>{
    frame=0;
    const y=window.scrollY,delta=y-lastY;
    setSc(y>40);
    if(open){show();travel=0}
    else if(y<=80){show();travel=0}
    else if(Math.sign(delta)!==Math.sign(travel)){travel=delta}
    else travel+=delta;
    if(!open&&y>80){
     if(travel>8)hide();
     else if(travel< -8)show(true);
    }
    lastY=y;
   });
  };
  f();
  addEventListener("scroll",f,{passive:true});
  return()=>{removeEventListener("scroll",f);if(frame)cancelAnimationFrame(frame)};
 },[open]);
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setAct(e.target.id)),{rootMargin:"-45% 0px -50% 0px"});NAV.forEach(([,id])=>{const el=document.getElementById(id);el&&io.observe(el)});return()=>io.disconnect()},[]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";const k=e=>e.key==="Escape"&&setOpen(false);addEventListener("keydown",k);return()=>removeEventListener("keydown",k)},[open]);
 const L=(cls)=>NAV.map(([t,id],i)=>(<a key={id} href={"#"+id} className={(cls||"")+(act===id?" on":"")} style={{"--i":i}} onClick={()=>setOpen(false)} tabIndex={cls==="l"&&!open?-1:0}>{t}</a>));
 return (<header className={"nav"+(sc?" s":"")+(hidden&&!open?" hidden":"")+(revealing&&!hidden?" reveal":"")} onAnimationEnd={e=>{if(e.target===e.currentTarget)setRevealing(false)}}>
  <nav className="pill" aria-label="Main"><a href="#home" aria-label="DAKING-DEV home"><img className="logo" src={LOGO} alt="DAKING-DEV logo"/></a>
   <div className="links">{L("")}</div>
   <Btn href="#contact">Get a Quote</Btn>
   <button ref={b} className={"burger"+(open?" o":"")} aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="mm" onClick={()=>setOpen(!open)}><i/><i/><i/></button>
  </nav>
  <div id="mm" className={"mm"+(open?" o":"")} aria-hidden={!open}>{L("l")}<a className="btn p" href="#contact" onClick={()=>setOpen(false)} tabIndex={open?0:-1}>Let's Talk</a></div>
 </header>)}
