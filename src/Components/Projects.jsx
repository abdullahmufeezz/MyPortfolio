import { ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Projects({ sectionRef, fi, PROJECTS, ghBg, ghBdr, ghColor, dark, T }) {
  return (
    <section id="projects" ref={sectionRef} style={{ padding: "6rem 2rem", background: T.bg2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title="My Projects" sub="Things I've Built" T={T} />
        
        <div className="pg" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="pc" style={{ borderRadius: "20px", background: T.bg, border: `1px solid ${T.border}`, overflow: "hidden", cursor: "pointer", transition: "all .3s ease", ...fi("projects", i * .1) }} onClick={() => window.open(p.link, "_blank")}>
              <div style={{ height: "5px", background: `linear-gradient(90deg, ${p.color}, ${p.color}88)` }} />
              
              <div style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyindex: "space-between", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${p.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <p.LIcon size={24} color={p.color} />
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: T.text, lineHeight: 1.3 }}>{p.title}</h3>
                  </div>
                  
                  <div style={{ display: "flex", gap: "0.45rem", flexShrink: 0 }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} title="GitHub" style={{ width: "34px", height: "34px", borderRadius: "8px", background: ghBg, border: `1px solid ${ghBdr}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all .2s" }}
                        onMouseEnter={e => e.currentTarget.style.background = dark ? "#3a3a50" : "#1a1a2e28"}
                        onMouseLeave={e => e.currentTarget.style.background = ghBg}>
                        {/* Render localized fallback or global dynamic icon reference safely */}
                        <ExternalLink size={16} color={ghColor} />
                      </a>
                    )}
                    <a href={p.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} title="Live Demo" style={{ width: "34px", height: "34px", borderRadius: "8px", background: `${p.color}18`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                      <ExternalLink size={14} color={p.color} />
                    </a>
                  </div>
                </div>

                <p style={{ color: T.text2, fontSize: "0.875rem", lineHeight: 1.78, marginBottom: "1.25rem" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.tech.map(t => <span key={t} style={{ padding: "0.22rem 0.62rem", borderRadius: "99px", background: `${p.color}14`, border: `1px solid ${p.color}30`, fontSize: "0.7rem", fontWeight: 600, color: p.color, letterSpacing: "0.02em" }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}