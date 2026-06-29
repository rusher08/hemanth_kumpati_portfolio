import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sword,
  Search,
  Globe,
  Wrench,
  Code2,
  Terminal,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Phone,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";
import { MatrixRain } from "@/components/MatrixRain";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kumpati Hemanth — Cybersecurity Analyst" },
      {
        name: "description",
        content:
          "Cybersecurity Analyst portfolio of Kumpati Hemanth — SOC operations, penetration testing, digital forensics, and threat intelligence projects.",
      },
      { property: "og:title", content: "Kumpati Hemanth — Cybersecurity Analyst" },
      {
        property: "og:description",
        content:
          "SOC, pentesting, and DFIR projects by Kumpati Hemanth — TryHackMe Top 30%, HTB Level 6.",
      },
    ],
  }),
  component: Index,
});

const ROLES = [
  "Cybersecurity Analyst",
  "SOC Analyst",
  "Penetration Tester",
  "Digital Forensics Investigator",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((wordIdx + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return text;
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-glow">
          // {kicker}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent" />
      </div>
    </Reveal>
  );
}

const SKILL_GROUPS = [
  {
    icon: Shield,
    title: "Security Operations",
    items: ["SIEM", "Log Analysis", "Incident Response", "Network Security"],
  },
  {
    icon: Sword,
    title: "Offensive Security",
    items: ["Penetration Testing", "OWASP Top 10", "SQL Injection", "XSS", "Burp Suite", "Metasploit"],
  },
  {
    icon: Search,
    title: "Digital Forensics",
    items: ["Autopsy", "Sleuth Kit", "FTK Imager", "Disk Imaging (E01)"],
  },
  {
    icon: Globe,
    title: "Threat Intelligence",
    items: ["VirusTotal API", "Phishing Detection", "IOC Analysis", "Malicious URL Analysis"],
  },
  {
    icon: Wrench,
    title: "Security Tools",
    items: ["Nmap", "Nessus", "Wireshark", "OpenVAS", "Maltego", "Bettercap", "Ettercap"],
  },
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "Bash", "JavaScript", "SQL"],
  },
  {
    icon: Terminal,
    title: "Operating Systems",
    items: ["Kali Linux", "Ubuntu", "Windows"],
  },
];

const PROJECTS = [
  {
    title: "Phishing Detection & Threat Intel Tool",
    desc: "Python-based phishing detection for malicious URLs and ngrok phishing frameworks. Integrated VirusTotal API for threat enrichment, IP metadata extraction, HTTP redirection chain analysis, and automated PDF/CSV report generation for SOC escalation.",
    tags: ["Python", "VirusTotal API", "Threat Intel", "SOC"],
  },
  {
    title: "Digital Forensics Investigation (DFIR)",
    desc: "Forensic analysis on E01 disk images using Autopsy and Sleuth Kit. Recovered deleted files, reconstructed user activity timelines, and produced structured investigation reports.",
    tags: ["Autopsy", "Sleuth Kit", "E01 Imaging", "DFIR"],
  },
  {
    title: "Password Security & Hash Cracking Analysis",
    desc: "Python tool to evaluate credential strength using MD5/SHA-512. Implemented brute-force and dictionary attack simulations via John the Ripper with real-time progress tracking and cracking time estimation.",
    tags: ["Python", "John the Ripper", "MD5", "SHA-512"],
  },
  {
    title: "Wazuh SIEM — Security Operations & Threat Detection",
    desc: "Deployed Wazuh SIEM with multi-endpoint agent configuration. Built custom detection rules for brute-force, privilege escalation, and suspicious processes. Investigated and documented incidents end-to-end.",
    tags: ["Wazuh", "SIEM", "Custom Rules", "Incident Response"],
  },
  {
    title: "Splunk — Log Analysis & Threat Hunting",
    desc: "Centralized log ingestion from multiple sources, built security dashboards and SPL queries for threat hunting and IOC identification across the environment.",
    tags: ["Splunk", "SPL", "Dashboards", "Threat Hunting"],
  },
  {
    title: "Snort IDS/IPS — Intrusion Detection & Rule Engineering",
    desc: "Deployed Snort as IDS/IPS, authored custom rules to detect port scans, SQLi, and malicious payloads. Validated rules against live PCAP traffic analysis.",
    tags: ["Snort", "IDS/IPS", "Custom Rules", "PCAP Analysis"],
  },
];

function Index() {
  const typed = useTypewriter(ROLES);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <MatrixRain />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(0,245,255,0.10),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(123,47,255,0.10),_transparent_55%)]" />

      <NavBar />
      <Hero typed={typed} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function NavBar() {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Certs", "#certifications"],
    ["Contact", "#contact"],
  ] as const;
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass-panel flex w-full max-w-5xl items-center justify-between px-5 py-3">
        <a href="#home" className="font-mono text-sm font-bold text-cyan-glow">
          {"<KH/>"}
        </a>
        <ul className="hidden gap-6 text-xs font-medium uppercase tracking-wider text-muted-foreground md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-[#00f5ff]">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-[#00f5ff]/40 px-4 py-1.5 text-xs font-semibold text-[#00f5ff] transition hover:bg-[#00f5ff]/10 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function Hero({ typed }: { typed: string }) {
  return (
    <section
      id="home"
      className="scanlines relative flex min-h-screen items-center justify-center px-4 pt-24"
    >
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-neon-green"
        >
          $ whoami
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-5xl font-bold tracking-tight text-cyan-glow sm:text-6xl md:text-7xl"
        >
          Kumpati Hemanth
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center font-mono text-lg text-foreground/90 sm:text-xl md:text-2xl"
        >
          <span className="text-muted-foreground">{">"}&nbsp;</span>
          <span>{typed}</span>
          <span className="caret h-6 sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          Defending networks, hunting threats, and breaking systems to make them stronger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group glass-panel glass-hover flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#00f5ff]"
          >
            View Projects
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass-panel glass-hover flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <SocialIcon href="https://www.linkedin.com/in/hemanth-kumpati/" label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href="https://tryhackme.com/p/rusher" label="TryHackMe">
            <Shield className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon
            href="https://profile.hackthebox.com/profile/019e252b-25c5-7187-81e3-ec0d9a867994"
            label="Hack The Box"
          >
            <Terminal className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href="https://github.com/" label="GitHub">
            <Github className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href="mailto:kumpatihemanth8@gmail.com" label="Email">
            <Mail className="h-5 w-5" />
          </SocialIcon>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground backdrop-blur transition hover:border-[#00f5ff]/60 hover:text-[#00f5ff] hover:shadow-[0_0_18px_rgba(0,245,255,0.45)]"
    >
      {children}
    </a>
  );
}

function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="about" title="Whoami" />
        <div className="grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass-panel glass-hover h-full p-8">
              <p className="text-base leading-relaxed text-foreground/90">
                Cybersecurity Analyst with hands-on experience in{" "}
                <span className="text-cyan-glow">Security Operations</span>,
                vulnerability assessment, and digital forensics. Skilled in monitoring
                network traffic, detecting malicious activity, and investigating security
                incidents. Passionate about protecting enterprise systems and supporting
                SOC operations through proactive threat detection.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["SOC L1", "DFIR", "Pentesting", "Threat Hunting"].map((t) => (
                  <span key={t} className="pill-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-2">
            <TerminalCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { k: "tryhackme.rank", v: "Top 30% Global" },
    { k: "htb.level", v: "Level 6 · 261 XP" },
    { k: "projects.major", v: "3" },
    { k: "status", v: "available_for_hire" },
  ];
  return (
    <div className="glass-panel overflow-hidden font-mono text-xs">
      <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-[10px] uppercase tracking-widest text-muted-foreground">
          ~/stats.sh
        </span>
      </div>
      <div className="space-y-2 p-5">
        <p className="text-neon-green">$ cat stats.json</p>
        {lines.map((l) => (
          <p key={l.k} className="flex items-baseline gap-2">
            <span className="text-[#7b2fff]">{l.k}</span>
            <span className="text-muted-foreground">=</span>
            <span className="text-cyan-glow">"{l.v}"</span>
          </p>
        ))}
        <p className="pt-2 text-neon-green">
          $ <span className="caret h-3" />
        </p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="skills" title="Arsenal & Capabilities" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass-panel glass-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#00f5ff]/30 bg-[#00f5ff]/5 text-[#00f5ff] shadow-[0_0_18px_rgba(0,245,255,0.25)]">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-foreground">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="pill-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="projects" title="Selected Work" />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group glass-panel glass-hover scanlines relative h-full overflow-hidden p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-cyan-glow">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-[#00f5ff]" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pill-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const bullets = [
    "Conducted vulnerability assessments using Nessus, OpenVAS, and Nmap across simulated enterprise networks.",
    "Built a Python-based phishing detection tool with VirusTotal API integration and automated SOC reporting.",
    "Performed DFIR on E01 disk images using Autopsy and Sleuth Kit to recover artifacts and timelines.",
    "Completed 16 TryHackMe rooms covering SOC L1, pentesting, and CVE-2025-49113 exploitation.",
    "Practiced offensive techniques on Hack The Box machines, reaching Level 6 (261 XP).",
  ];
  return (
    <section id="experience" className="relative px-4 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle kicker="experience" title="Journey & Hands-On Labs" />
        <Reveal>
          <div className="relative pl-8">
            <div className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-[#00f5ff] via-[#7b2fff] to-transparent shadow-[0_0_12px_rgba(0,245,255,0.6)]" />
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border border-[#00f5ff] bg-background shadow-[0_0_18px_rgba(0,245,255,0.8)]" />
            <div className="glass-panel glass-hover p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Cybersecurity Analyst
                </h3>
                <span className="font-mono text-xs text-cyan-glow">2024 — 2025</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Self-Directed Security Research & Labs
              </p>
              <ul className="mt-5 space-y-3 font-mono text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-neon-green">{">"}</span>
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Certifications() {
  const cards = [
    {
      icon: Shield,
      name: "TryHackMe",
      meta: "Top 30% Globally",
      items: [
        "16 rooms completed",
        "4 badges earned",
        "SOC L1 & Pentesting paths",
        "CVE-2025-49113 exploitation lab",
      ],
      href: "https://tryhackme.com/p/rusher",
    },
    {
      icon: Terminal,
      name: "Hack The Box",
      meta: "Level 6 · 261 XP",
      items: [
        "Beginner rank progression",
        "Enumeration fundamentals",
        "Active machine practice",
        "Network exploitation labs",
      ],
      href: "https://profile.hackthebox.com/profile/019e252b-25c5-7187-81e3-ec0d9a867994",
    },
  ];
  return (
    <section id="certifications" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="certifications" title="Training & Platforms" />
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-hover block h-full p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl border border-[#39ff14]/30 bg-[#39ff14]/5 text-[#39ff14] shadow-[0_0_22px_rgba(57,255,20,0.3)]">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{c.name}</h3>
                    <p className="font-mono text-xs text-cyan-glow">{c.meta}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#00f5ff]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative px-4 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="education" title="Academic Background" />
        <Reveal>
          <div className="glass-panel glass-hover flex items-start gap-5 p-7">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-[#7b2fff]/40 bg-[#7b2fff]/10 text-[#c9a8ff] shadow-[0_0_22px_rgba(123,47,255,0.35)]">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                B.Tech in CSE (Cyber Security)
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                St. Mary's Group of Institutions, Guntur
              </p>
              <p className="mt-2 font-mono text-xs text-cyan-glow">2021 — 2025</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="contact" title="Establish Connection" />
        <div className="grid gap-8 md:grid-cols-5">
          <Reveal>
            <div className="glass-panel h-full space-y-5 p-7 md:col-span-2">
              <h3 className="font-mono text-sm uppercase tracking-widest text-cyan-glow">
                $ ./contact --info
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#00f5ff]" />
                  <a
                    href="mailto:kumpatihemanth8@gmail.com"
                    className="min-w-0 break-all text-foreground/90 hover:text-[#00f5ff]"
                  >
                    kumpatihemanth8@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#00f5ff]" />
                  <span className="min-w-0 text-foreground/90">+91 9666942506</span>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-[#00f5ff]" />
                  <a
                    href="https://www.linkedin.com/in/hemanth-kumpati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 break-all text-foreground/90 hover:text-[#00f5ff]"
                  >
                    linkedin.com/in/hemanth-kumpati
                  </a>
                </li>
              </ul>
              <div className="border-t border-white/10 pt-5 font-mono text-xs text-muted-foreground">
                <p>
                  <span className="text-neon-green">●</span> Status: open to opportunities
                </p>
                <p className="mt-1">
                  <span className="text-neon-green">●</span> Response: within 24h
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio contact — ${data.get("name")}`);
                const body = encodeURIComponent(
                  `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
                );
                window.location.href = `mailto:kumpatihemanth8@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="glass-panel space-y-4 p-7 md:col-span-3"
            >
              <Field name="name" label="Name" placeholder="Jane Doe" />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="jane@company.com"
              />
              <div>
                <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Let's talk about..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-[#00f5ff]/60 focus:shadow-[0_0_18px_rgba(0,245,255,0.25)]"
                />
              </div>
              <button
                type="submit"
                className="pulse-glow inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/60 bg-[#00f5ff]/10 px-6 py-3 text-sm font-semibold text-[#00f5ff] transition hover:bg-[#00f5ff]/20"
              >
                Send Message <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-[#00f5ff]/60 focus:shadow-[0_0_18px_rgba(0,245,255,0.25)]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 text-center">
      <p className="font-mono text-xs text-muted-foreground">
        Built with{" "}
        <span className="text-[#00f5ff]">{"<coffee/>"}</span> &{" "}
        <span className="text-neon-green">cybersecurity_passion</span> — Kumpati Hemanth ©
        2025
      </p>
    </footer>
  );
}
