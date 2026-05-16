import { Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact({ sectionRef, fi, SOCIALS, pill, T }) {
  return (
    <section id="contact" ref={sectionRef} style={{ padding: "6rem 2rem", background: T.bg }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <SectionHeader title="Get In Touch" sub="Let's Work Together" T={T} center />
        <p style={{ color: T.text2, lineHeight: 1.82, maxWidth: "460px", margin: "1.5rem auto 3rem", ...fi("contact", 0) }}>
          Whether you have an opportunity, a question, or just want to say hi — my inbox is always open. I'll get back to you as soon as possible!
        </p>

        <div className="cg" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem", ...fi("contact", 0.1) }}>
          {[
            { LIcon: Mail, label: "Email", value: "abdullahmufeez321@gmail.com", href: "mailto:abdullahmufeez321@gmail.com", color: "#ea4335" },
            { LIcon: Phone, label: "Phone", value: "+92 303 2505537", href: "tel:+923032505537", color: "#10b981" },
          ].map(c => (
            <a key={c.label} href={c.href} className="crd" style={{ padding: "1.5rem", borderRadius: "16px", background: T.bg2, border: `1px solid ${T.border}`, textDecoration: "none", display: "flex", alignItems: "center", gap: "1rem", transition: "all .22s" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${c.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <c.LIcon size={22} color={c.color} />
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "0.72rem", color: T.text2, fontWeight: 500, marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.label}</p>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: T.text }}>{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "0.65rem", flexWrap: "wrap", ...fi("contact", 0.2) }}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="sp" style={pill(s)}>
              <s.Icon size={15} color={s.color} /> {s.label}
            </a>
          ))}
        </div>

        <p style={{ marginTop: "3.5rem", color: T.text2, fontSize: "0.78rem", ...fi("contact", 0.3) }}>
          Designed & built by <span style={{ color: T.accent2, fontWeight: 600 }}>Muhammad Abdullah Mufeez</span> · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}