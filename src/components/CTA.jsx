import {Ic, AR, Btn} from "./ui";

export default function Cta(){return (<section className="cta" aria-labelledby="ct"><span className="ring"></span><span className="ring" style={{animationDelay:"-2.3s"}}></span><span className="ring" style={{animationDelay:"-4.6s"}}></span>
 <div className="wrap"><h2 id="ct" className="rv">Your Next Big Idea Deserves a Powerful Website.</h2><p className="rv">Let's turn your vision into a digital experience that makes a difference.</p>
 <div className="ctas rv"><a className="btn p" href="#contact">Start Your Project <Ic d={AR} s={18}/></a><Btn href="#contact" kind="g">Let's Talk</Btn></div></div></section>)}
