export const Ic=({d,s=24})=>(<svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d}/></svg>);
export const AR="M5 12h14M12 5l7 7-7 7";
export const Btn=({href,kind="p",children})=>(<a className={"btn "+kind} href={href}>{children} <Ic d={AR} s={18}/></a>);
export const Head=({eye,title,sub})=>(<div><span className="eyebrow rv">{eye}</span><h2 className="rv">{title}</h2>{sub&&(<p className="sub rv">{sub}</p>)}</div>);
