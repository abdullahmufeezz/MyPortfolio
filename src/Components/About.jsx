import { Database, Download, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function About({ sectionRef, fi, EDUCATION, SOCIALS, pill, T }) {
  return (
    <section id="about" ref={sectionRef} style={{ padding: "6rem 2rem", background: T.bg2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title="About Me" sub="Background & Education" T={T} />
        
        <div className="ag" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginTop: "3rem", ...fi("about", 0) }}>
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: T.text }}>Who I Am</h3>
            <p style={{ color: T.text2, lineHeight: 1.82, marginBottom: "1.4rem" }}>
              I am a Computer Science enthusiast with a strong foundation in programming, algorithms, and problem-solving. I am passionate about building efficient, user-friendly applications across web development and data science.
            </p>
            <p style={{ color: T.text2, lineHeight: 1.82, marginBottom: "1.75rem" }}>
              I thrive in dynamic environments applying technical and analytical skills to create real-world impact — whether a full-stack web app or a machine learning pipeline.
            </p>

            <div style={{ padding: "1.1rem 1.25rem", borderRadius: "12px", background: T.bg, border: `1px solid ${T.border}`, marginBottom: "1.5rem" }}>
              <p style={{ fontWeight: 600, color: T.text2, marginBottom: "0.7rem", fontSize: "0.73rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Courses Completed</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.9rem", borderRadius: "99px", background: T.glow, border: `1px solid ${T.accent}`, fontSize: "0.82rem", color: T.accent2, fontWeight: 500 }}>
                <Database size={13} /> PITP – Data Science
              </span>
            </div>

            <div className="srow" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="sp" style={pill(s)}>
                  <s.Icon size={14} color={s.color} /> {s.label}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {/* Inside src/components/About.jsx */}
                <a 
                href="/Abdullah_Mufeez_CV.pdf" 
                download="Abdullah_Mufeez_CV.pdf" 
                style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "0.45rem", 
                    padding: "0.62rem 1.5rem", 
                    borderRadius: "99px", 
                    background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})`, 
                    color: "#fff", 
                    fontWeight: 600, 
                    fontSize: "0.875rem", 
                    textDecoration: "none" 
                }}
                >
                <Download size={13} /> Download CV
                </a>
              <a href="#contact">
                <button style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.62rem 1.5rem", borderRadius: "99px", background: "transparent", border: `1px solid ${T.accent}`, color: T.accent2, fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>
                  <Mail size={14} /> Contact Me 
                </button>
              </a>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem", color: T.text }}>Education</h3>
            <div style={{ position: "relative", paddingLeft: "1.5rem", borderLeft: `2px solid ${T.border}` }}>
              {EDUCATION.map((e, i) => (
                <div key={i} className="crd" style={{ position: "relative", marginBottom: "1.5rem", padding: "1.25rem", borderRadius: "14px", background: T.bg, border: `1px solid ${T.border}`, transition: "border-color .2s, transform .2s" }}>
                  <div style={{ position: "absolute", left: "-2.35rem", top: "1.25rem", width: "20px", height: "20px", borderRadius: "50%", background: T.accent, border: `3px solid ${T.bg2}` }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                        <e.LIcon size={16} color={e.iconColor} />
                        <p style={{ fontWeight: 700, fontSize: "0.93rem", color: T.text }}>{e.degree}</p>
                      </div>
                      <p style={{ color: T.accent2, fontSize: "0.83rem", fontWeight: 500 }}>{e.institution}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ padding: "0.2rem 0.65rem", borderRadius: "99px", background: T.glow, fontSize: "0.72rem", color: T.accent2, fontWeight: 500 }}>{e.period}</span>
                      {e.grade && <p style={{ color: "#10b981", fontWeight: 700, fontSize: "0.88rem", marginTop: "0.3rem" }}>Grade: {e.grade}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}