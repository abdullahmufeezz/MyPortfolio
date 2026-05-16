import { Code2, Cpu } from "lucide-react";
import SectionHeader from "./SectionHeader";

const DevIcon = ({ name, color, size = 28 }) => {
  const map = {
    javascript: "javascript/javascript-original",
    python: "python/python-original",
    cplusplus: "cplusplus/cplusplus-original",
    java: "java/java-original",
    react: "react/react-original",
    html5: "html5/html5-original",
    css3: "css3/css3-original",
    nodejs: "nodejs/nodejs-original",
    numpy: "numpy/numpy-original",
    pandas: "pandas/pandas-original",
    postgresql: "postgresql/postgresql-original",
    git: "git/git-original",
  };
  const path = map[name];
  if (!path) return <Code2 size={size} color={color} />;
  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`}
      width={size} height={size}
      alt={name}
      style={{ objectFit: "contain" }}
      onError={e => {
        e.currentTarget.style.display = "none";
        e.currentTarget.parentElement.innerHTML = `<span style="font-size:${size * 0.55}px;font-weight:700;color:${color}">${name.slice(0, 2).toUpperCase()}</span>`;
      }}
    />
  );
};

export default function Skills({ sectionRef, fi, SKILLS, ghColor, ghBg, ghBdr, T }) {
  return (
    <section id="skills" ref={sectionRef} style={{ padding: "6rem 2rem", background: T.bg }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title="Skills & Tech" sub="What I Work With" T={T} />
        
        <div className="sg" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "1rem", marginTop: "3rem" }}>
          {SKILLS.map((s, i) => {
            const isGH = s.name === "GitHub";
            const iC = isGH ? ghColor : s.color;
            const iB = isGH ? ghBg : s.bg;
            const iBdr = isGH ? ghBdr : T.border;
            
            return (
              <div key={i} className="sk" style={{ padding: "1.5rem 1rem", borderRadius: "16px", background: T.bg2, border: `1px solid ${T.border}`, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.7rem", cursor: "default", transition: "all .3s cubic-bezier(0.34,1.56,0.64,1)", ...fi("skills", i * .035) }}>
                <div style={{ width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: iB, border: `1px solid ${iBdr}`, flexShrink: 0 }}>
                  {isGH ? (
                    <s.Icon size={28} color={iC} />
                  ) : s.key === "sklearn" || s.key === "oop" ? (
                    <Cpu size={28} color={iC} />
                  ) : s.key === "dsa" ? (
                    <Code2 size={28} color={iC} />
                  ) : (
                    <DevIcon name={s.key} color={iC} size={28} />
                  )}
                </div>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: T.text, textAlign: "center", lineHeight: 1.3 }}>{s.name}</span>
                <span style={{ fontSize: "0.67rem", padding: "0.15rem 0.55rem", borderRadius: "99px", background: T.glow, color: T.accent2, fontWeight: 500 }}>{s.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}