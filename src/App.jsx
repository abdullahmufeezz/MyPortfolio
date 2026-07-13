import { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Mail, GraduationCap, BookOpen, School, Car, Brain, Film, Wallet } from "lucide-react";

/* Brand Custom SVG Components */
const GithubIcon = ({ size = 18, color = "currentColor" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
const LinkedinIcon = ({ size = 18, color = "currentColor" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const TwitterIcon = ({ size = 18, color = "currentColor" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const InstagramIcon = ({ size = 18, color = "currentColor" }) => <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>;

const SKILLS = [
  { name: "Python", key: "python", color: "#3776AB", bg: "#3776AB20", category: "Language" },
  { name: "C++", key: "cplusplus", color: "#00599C", bg: "#00599C20", category: "Language" },
  { name: "Java", key: "java", color: "#ED8B00", bg: "#ED8B0020", category: "Language" },
  { name: "React", key: "react", color: "#61DAFB", bg: "#61DAFB20", category: "Frontend" },
  { name: "HTML5", key: "html5", color: "#E34F26", bg: "#E34F2620", category: "Frontend" },
  { name: "CSS3", key: "css3", color: "#1572B6", bg: "#1572B620", category: "Frontend" },
  { name: "JavaScript", key: "javascript", color: "#F7DF1E", bg: "#F7DF1E20", category: "Frontend" },
  { name: "React Native", key: "react", color: "#61DAFB", bg: "#61DAFB20", category: "Frontend" },
  { name: "Node.js", key: "nodejs", color: "#339933", bg: "#33993320", category: "Backend" },
  { name: "NumPy", key: "numpy", color: "#4DABCF", bg: "#4DABCF20", category: "Data Science" },
  { name: "Pandas", key: "pandas", color: "#a78bfa", bg: "#a78bfa20", category: "Data Science" },
  { name: "Scikit-learn", key: "sklearn", color: "#F7931E", bg: "#F7931E20", category: "Data Science" },
  // { name: "PostgreSQL", key: "postgresql", color: "#336791", bg: "#33679120", category: "Database" },
  { name: "Git", key: "git", color: "#F05032", bg: "#F0503220", category: "Tools" },
  { name: "GitHub", key: "github", color: "THEME", bg: "THEME", category: "Tools", Icon: GithubIcon },
  { name: "DSA", key: "dsa", color: "#a78bfa", bg: "#a78bfa20", category: "Concepts" },
  { name: "OOP", key: "oop", color: "#34d399", bg: "#34d39920", category: "Concepts" },
];

const PROJECTS = [
  { title: "AutoCare – Vehicle Service System", color: "#6366f1", LIcon: Car, description: "Full Stack app for vehicle service booking with real-time confirmation, service status updates, and data integrity.", tech: ["React", "Node.js", "Express.js", "PostgreSQL"], link: "https://autocare-woad.vercel.app/", github: "https://github.com/abdullahmufeezz/Autocare-1-B" },
  { title: "Teen Mental Health Analysis", color: "#10b981", LIcon: Brain, description: "ML analysis of social media impact on teen mental health using Logistic Regression & Random Forest. Includes EDA and feature engineering.", tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"], link: null , github: "https://github.com/abdullahmufeezz/PITP_FinalProject-Social-Media-Impact-on-Teens-Mental-Health-" },
  { title: "Movie Management System", color: "#f59e0b", LIcon: Film, description: "Frontend project demonstrating OOP with an Admin Panel, Booking Page, and Ticket Generator.", tech: ["HTML", "JavaScript", "CSS"], link: "https://abdullahmufeezz.github.io/Movie-Management-System/", github: "https://github.com/abdullahmufeezz/Movie-Management-System" },
  { title: "Expense Tracker (DSA)", color: "#ef4444", LIcon: Wallet, description: "Console-based C++ app managing daily expenses using Linked Lists for dynamic storage and File I/O for persistence.", tech: ["C++", "Linked List", "File I/O"], link: null , github: "https://github.com/abdullahmufeezz/Expense_Tracker_CPP.git" },
];

const EDUCATION = [
  { degree: "BS Computer Science (III - Year)", institution: "University of Karachi", period: "2023 – Present", grade: null, LIcon: GraduationCap, iconColor: "#a78bfa" },
  { degree: "Intermediate – Pre-Engineering", institution: "Bahria College Karsaz, Karachi", period: "2022 – 2023", grade: "A", LIcon: BookOpen, iconColor: "#60a5fa" },
  { degree: "Matriculation – Science", institution: "Happy Home School, Karachi", period: "2019 – 2021", grade: "A+", LIcon: School, iconColor: "#34d399" },
];

const NAV = ["Home", "About", "Skills", "Projects", "Contact"];
const TITLES = ["AI & ML Enthusiat", "Frontend Developer", "Problem Solver"];

export default function App() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState(false);
  const [typed, setTyped] = useState("");
  const [visible, setVisible] = useState({});
  const refs = useRef({});

  const [tIdx, setTIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = TITLES[tIdx], speed = del ? 55 : 115;
    const t = setTimeout(() => {
      if (!del) {
        setTyped(cur.slice(0, cIdx + 1));
        if (cIdx + 1 === cur.length) setTimeout(() => setDel(true), 1600);
        else setCIdx(c => c + 1);
      } else {
        setTyped(cur.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDel(false); setTIdx(i => (i + 1) % TITLES.length); setCIdx(0); }
        else setCIdx(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [cIdx, del, tIdx]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        setVisible(v => ({ ...v, [e.target.id]: true }));
        setActive(e.target.id[0].toUpperCase() + e.target.id.slice(1));
      }
    }), { threshold: 0.15 });
    Object.values(refs.current).forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const T = dark
    ? { bg: "#0a0a0f", bg2: "#111118", bg3: "#1a1a24", text: "#f0f0f5", text2: "#9090a8", border: "rgba(255,255,255,0.08)", accent: "#7c6af5", accent2: "#a78bfa", glow: "rgba(124,106,245,0.18)", navBg: "rgba(10,10,15,0.9)" }
    : { bg: "#f5f5fb", bg2: "#ffffff", bg3: "#eeeef8", text: "#0d0d18", text2: "#60607a", border: "rgba(0,0,0,0.09)", accent: "#6366f1", accent2: "#818cf8", glow: "rgba(99,102,241,0.13)", navBg: "rgba(245,245,251,0.9)" };

  useEffect(() => {
    document.body.style.background = T.bg;
    document.body.style.color = T.text;
    document.documentElement.style.setProperty('--bg', T.bg);
    document.documentElement.style.setProperty('--accent', T.accent);
    document.documentElement.style.setProperty('--accent2', T.accent2);
    document.documentElement.style.setProperty('--glow', T.glow);
  }, [dark, T]);

  const ghColor = dark ? "#d4d4e8" : "#1a1a2e";
  const ghBg = dark ? "#252535" : "#1a1a2e14";
  const ghBdr = dark ? "rgba(255,255,255,0.14)" : "rgba(26,26,46,0.22)";

  const fi = (id, d = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? "translateY(0)" : "translateY(26px)",
    transition: `opacity .65s ease ${d}s, transform .65s ease ${d}s`,
  });

  const SOCIALS = [
    { href: "https://github.com/abdullahmufeezz", Icon: GithubIcon, label: "GitHub", color: ghColor, bg: ghBg, bdr: ghBdr },
    { href: "https://www.linkedin.com/in/muhammad-abdullah-mufeez/", Icon: LinkedinIcon, label: "LinkedIn", color: "#0077b5", bg: "#0077b514", bdr: "#0077b530" },
    { href: "mailto:abdullahmufeez321@gmail.com", Icon: () => <Mail size={15} />, label: "Gmail", color: "#ea4335", bg: "#ea433514", bdr: "#ea433530" },
    // { href: "https://twitter.com", Icon: TwitterIcon, label: "Twitter", color: "#1da1f2", bg: "#1da1f214", bdr: "#1da1f230" },
    // { href: "https://instagram.com", Icon: InstagramIcon, label: "Instagram", color: "#e1306c", bg: "#e1306c14", bdr: "#e1306c30" },
  ];

  const pill = (s) => ({
    display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.38rem 0.85rem", borderRadius: "99px", background: s.bg, border: `1px solid ${s.bdr}`, color: s.color, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", transition: "all 0.2s", cursor: "pointer",
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar NAV={NAV} active={active} go={go} dark={dark} setDark={setDark} menu={menu} setMenu={setMenu} T={T} />
      <Hero sectionRef={el => refs.current["home"] = el} fi={fi} typed={typed} go={go} SOCIALS={SOCIALS} T={T} dark={dark} />
      <About sectionRef={el => refs.current["about"] = el} fi={fi} EDUCATION={EDUCATION} SOCIALS={SOCIALS} pill={pill} T={T} />
      <Skills sectionRef={el => refs.current["skills"] = el} fi={fi} SKILLS={SKILLS} ghColor={ghColor} ghBg={ghBg} ghBdr={ghBdr} T={T} />
      <Projects sectionRef={el => refs.current["projects"] = el} fi={fi} PROJECTS={PROJECTS} ghBg={ghBg} ghBdr={ghBdr} ghColor={ghColor} dark={dark} T={T} />
      <Contact sectionRef={el => refs.current["contact"] = el} fi={fi} SOCIALS={SOCIALS} pill={pill} T={T} />
    </div>
  );
}
