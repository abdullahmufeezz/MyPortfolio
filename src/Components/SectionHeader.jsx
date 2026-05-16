export default function SectionHeader({ title, sub, T, center }) {
  const words = title.split(" ");
  const last = words.pop();
  
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "0.5rem" }}>
      <p style={{ fontSize: "0.73rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: T.accent2, marginBottom: "0.5rem" }}>
        {sub}
      </p>
      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", color: T.text, lineHeight: 1.1 }}>
        {words.join(" ")}{words.length > 0 ? " " : ""}
        <span style={{ background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {last}
        </span>
      </h2>
      <div style={{ width: "56px", height: "3px", borderRadius: "99px", background: `linear-gradient(90deg, ${T.accent}, ${T.accent2})`, marginTop: "0.75rem", marginLeft: center ? "auto" : undefined, marginRight: center ? "auto" : undefined }} />
    </div>
  );
}