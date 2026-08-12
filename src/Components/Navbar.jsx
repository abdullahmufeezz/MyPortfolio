import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({ NAV, active, go, dark, setDark, menu, setMenu, T }) {
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", background: T.navBg, backdropFilter: "blur(18px)", borderBottom: `1px solid ${T.border}` }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.03em", background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          AM.
        </span>

        <ul className="nd" style={{ display: "flex", gap: "0.2rem", listStyle: "none", alignItems: "center" }}>
          {NAV.map(n => (
            <li key={n} className="ni" onClick={() => go(n)} style={{ padding: "0.38rem 0.9rem", borderRadius: "99px", cursor: "pointer", fontSize: "0.875rem", fontWeight: active === n ? 600 : 400, color: active === n ? T.accent2 : T.text2, background: active === n ? T.glow : "transparent", border: active === n ? `1px solid ${T.accent}` : "1px solid transparent", transition: "all 0.2s" }}>
              {n}
            </li>
          ))}
        </ul>

        {/* <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <button onClick={() => setDark(d => !d)} style={{ width: "38px", height: "38px", borderRadius: "50%", border: `1px solid ${T.border}`, background: T.bg3, cursor: "pointer", display: "flex", alignItems: "center", justifyindex: "center", justifyContent: "center", transition: "all .2s", color: T.text }}>
            {dark ? <Sun size={16} color="#f59e0b" /> : <Moon size={16} color="#6366f1" />}
          </button>
          <button className="mb" onClick={() => setMenu(m => !m)} style={{ display: "none", width: "38px", height: "38px", borderRadius: "8px", border: `1px solid ${T.border}`, background: T.bg3, cursor: "pointer", alignItems: "center", justifyContent: "center", color: T.text }}>
            {menu ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div> */}
      </nav>

      {menu && (
        <div style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99, background: T.bg2, borderBottom: `1px solid ${T.border}`, padding: "0.75rem" }}>
          {NAV.map(n => (
            <div key={n} onClick={() => go(n)} style={{ padding: "0.7rem 1rem", borderRadius: "8px", cursor: "pointer", color: active === n ? T.accent2 : T.text, fontWeight: active === n ? 600 : 400, marginBottom: "0.15rem" }}>
              {n}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
