import { Code2 } from "lucide-react";

export default function Hero({ sectionRef, fi, typed, go, SOCIALS, T, dark }) {
  return (
    <section id="home" ref={sectionRef} style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 2rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div className="hfl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", width: "100%" }}>
        
        <div style={{ flex: 1, ...fi("home", 0) }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.32rem 1rem", borderRadius: "99px", background: T.glow, border: `1px solid ${T.accent}`, fontSize: "0.78rem", color: T.accent2, fontWeight: 500, marginBottom: "1.5rem", letterSpacing: "0.05em" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", flexShrink: 0 }} /> Available for Opportunities
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 6vw, 4.4rem)", fontWeight: 800, lineHeight: 1.07, letterSpacing: "-0.03em", marginBottom: "0.5rem", color: T.text }}>
            Muhammad<br />
            <span style={{ background: `linear-gradient(135deg, ${T.accent}, ${T.accent2}, #c084fc)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Abdullah Mufeez
            </span>
          </h1>

          <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: T.text2, marginBottom: "1.5rem", minHeight: "2rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ color: T.accent2, fontWeight: 600 }}>{typed}</span>
            <span className="cb" style={{ width: "2px", height: "1.1em", background: T.accent, display: "inline-block", borderRadius: "1px" }} />
          </div>

          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: T.text2, maxWidth: "510px", marginBottom: "2rem" }}>
            A driven Computer Science student at <strong style={{ color: T.text, fontWeight: 600 }}>University of Karachi</strong>, building impactful software across frontend, backend, and data science. Passionate about solving real-world problems with clean, efficient code.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <button onClick={() => go("Contact")} style={{ padding: "0.7rem 1.7rem", borderRadius: "99px", background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})`, border: "none", color: "#fff", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", transition: "opacity .2s" }}>
              Get In Touch
            </button>
            <button onClick={() => go("Projects")} style={{ padding: "0.7rem 1.7rem", borderRadius: "99px", background: "transparent", border: `1px solid ${T.border}`, color: T.text, fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", transition: "all .2s" }}>
              View Projects
            </button>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} className="ib" style={{ width: "40px", height: "40px", borderRadius: "10px", border: `1px solid ${s.bdr}`, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all .22s", flexShrink: 0 }}>
                <s.Icon size={17} color={s.color} />
              </a>
            ))}
          </div>
        </div>

        <div className="hac" style={{ flex: "0 0 auto", position: "relative" }}>
          <div className="hf" style={{ width: "clamp(200px, 26vw, 310px)", height: "clamp(200px, 26vw, 310px)", borderRadius: "40% 60% 55% 45%/45% 45% 55% 55%", background: `linear-gradient(135deg, ${T.accent} 0%, #c084fc 50%, #60a5fa 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: `0 0 70px ${T.glow}` }}>
            <Code2 size={88} color="rgba(255,255,255,0.88)" />
            <div className="sr" style={{ position: "absolute", inset: "-10px", borderRadius: "40% 60% 55% 45%/45% 45% 55% 55%", border: `2px dashed ${T.accent}`, opacity: .3 }} />
          </div>
          {[
            { label: "React Dev", top: "4%", right: "-14%", c: "#61dafb" },
            { label: "AI & ML", bottom: "8%", left: "-16%", c: "#10b981" },
            { label: "CS @ UoK", top: "46%", right: "-18%", c: "#f59e0b" }
          ].map(b => (
            <div key={b.label} style={{ position: "absolute", top: b.top, bottom: b.bottom, left: b.left, right: b.right, padding: "0.38rem 0.85rem", borderRadius: "99px", background: dark ? "#1a1a24" : "#fff", border: `1px solid ${b.c}50`, fontSize: "0.7rem", fontWeight: 600, color: b.c, whiteSpace: "nowrap", boxShadow: `0 4px 16px ${b.c}20` }}>
              {b.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
