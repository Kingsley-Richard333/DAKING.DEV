import {CONTACT, NAV} from "../data/site";
import {SERVICES} from "../data/services";
import LOGO_DARK from "../assets/logo-dark.svg";

export default function Footer(){return (<footer id="footer"><div className="wrap"><div className="fg">
 <div><img className="flogo" src={LOGO_DARK} alt="DAKING-DEV"/><p style={{color:"#c3d3f2",maxWidth:"34ch"}}>We build digital experiences that move businesses forward.</p></div>
 <div><h4>Navigate</h4><ul>{NAV.map(([t,id])=>(<li key={id}><a href={"#"+id}>{t}</a></li>))}</ul></div>
 <div><h4>Services</h4><ul>{SERVICES.map(s=>(<li key={s[0]}><a href="#services">{s[0]}</a></li>))}</ul></div>
 <div><h4>Contact</h4><ul><li><a href={"mailto:"+CONTACT.email}>{CONTACT.email}</a></li><li><a href={"tel:"+CONTACT.phone.replace(/\s/g,"")}>{CONTACT.phone}</a></li>{CONTACT.socials.map(([t,u])=>(<li key={t}><a href={u} target="_blank" rel="noopener noreferrer">{t}</a></li>))}</ul></div></div>
 <div className="fb"><span>© {new Date().getFullYear()} DAKING-DEV. All rights reserved.</span><div><a href="#contact">Privacy Policy</a><a href="#contact">Terms &amp; Conditions</a></div></div></div></footer>)}
