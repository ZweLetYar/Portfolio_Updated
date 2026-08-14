"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import portraitPhoto from "@/photos/photo_2026-08-13_22-57-16.jpg";
import {
  credentials,
  experience,
  profile,
  projects,
  skills,
  stats,
} from "@/data/portfolio";

const Arrow = () => <span aria-hidden="true">↗</span>;
const Mark = () => (
  <span className="mark" aria-hidden="true">
    ✦
  </span>
);
type ChatMessage = { role: "assistant" | "user"; text: string };

const chatPrompts = [
  "What do you build?",
  "Do you work with React?",
  "Tell me about AI projects",
  "Can you build a mobile app?",
  "What is your experience?",
  "Where are you based?",
  "How can I start a project?",
];

export function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("about");
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatThinking, setChatThinking] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: `Hi! I’m ${profile.name.split(" ")[0]}’s portfolio assistant. Ask me about their work, skills, or availability.`,
    },
  ]);
  const chatInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handler = () => {
      const sections = ["about", "skills", "work", "experience", "contact"];
      const found = sections.find((id) => {
        const el = document.getElementById(id);
        return (
          el &&
          el.getBoundingClientRect().top > -220 &&
          el.getBoundingClientRect().top < 260
        );
      });
      if (found) setActive(found);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const navigate = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  const answerChat = (question: string) => {
    const query = question.toLowerCase();
    const firstName = profile.name.split(" ")[0];
    const matchedProject = projects.find((project) =>
      query.includes(project.title.toLowerCase()),
    );
    const matchedSkill = skills
      .flatMap((group) => group.items.map(([name, description]) => ({ name, description })))
      .find((skill) => query.includes(skill.name.toLowerCase()));
    if (matchedProject) {
      return `${matchedProject.title} is a ${matchedProject.category.toLowerCase()} project from ${matchedProject.year}. ${matchedProject.description} It uses ${matchedProject.tags.join(", ")}.`;
    }
    if (matchedSkill) {
      return `Yes — ${firstName} works with ${matchedSkill.name}. On this portfolio, it is used for ${matchedSkill.description.toLowerCase()}.`;
    }
    if (/(available|hire|contact|collaborat)/.test(query)) {
      return `${firstName} is open to selected collaborations and available worldwide. Share a little about your project at ${profile.email} to start a conversation.`;
    }
    if (/(price|rate|cost|budget)/.test(query)) {
      return `Project scope and budget are best discussed directly. Send ${firstName} a short brief at ${profile.email}, including your timeline, goals, and budget range.`;
    }
    if (/(location|based|country|remote|worldwide)/.test(query)) {
      return `${firstName} is available worldwide and can collaborate remotely with teams and clients across time zones.`;
    }
    if (/(education|degree|university|study|student)/.test(query)) {
      return `${firstName} is studying for a BE in Information Science & Technology at the University of Technology (Yadanarpon Cyber City), expected in 2027.`;
    }
    if (/(ai|machine learning|ml|vision|tensorflow|pytorch|webcam)/.test(query)) {
      return `Yes — ${firstName} explores practical AI/ML work, including Computer Vision, TensorFlow, and PyTorch. The Webcam Image Processing and Mood Display App projects are good examples.`;
    }
    if (/(mobile|app|phone|ios|android)/.test(query)) {
      return `${firstName} has built mobile-first experiences including Mooncal Period Tracker and Badminton Schedule, with React and Firebase in the toolkit.`;
    }
    if (/(website|web app|frontend|backend|full.?stack|build|need|help)/.test(query)) {
      return `That sounds like a strong fit. ${firstName} builds thoughtful web products with React, Next.js, TypeScript, Node.js, APIs, and databases. Tell me a little more about the idea, audience, or features you have in mind.`;
    }
    if (/(skill|stack|technolog|use)/.test(query)) {
      return `The core toolkit includes ${skills.flatMap((group) => group.items.map(([name]) => name)).join(", ")}. Ask about any technology by name for a more specific answer.`;
    }
    if (/(project|work|portfolio|built)/.test(query)) {
      return `There are projects across web, mobile, and AI/ML — including ${projects.slice(0, 4).map((project) => project.title).join(", ")}. What kind of work are you most interested in?`;
    }
    if (/(experience|background|career)/.test(query)) {
      return `${firstName} currently works as a Software Developer / Freelancer at Healthy & Happy, contributing across frontend and backend development with Next.js and TypeScript.`;
    }
    return `I understand you’re asking about “${question}”. I can help with ${firstName}’s web, mobile, or AI work; specific technologies; background; availability; or getting a project started.`;
  };
  const sendChat = (e?: FormEvent<HTMLFormElement>, prompt?: string) => {
    e?.preventDefault();
    const question = (prompt ?? chatInput).trim();
    if (!question || chatThinking) return;
    setChatMessages((messages) => [...messages, { role: "user", text: question }]);
    setChatInput("");
    setChatThinking(true);
    window.setTimeout(() => {
      setChatMessages((messages) => [...messages, { role: "assistant", text: answerChat(question) }]);
      setChatThinking(false);
    }, 500);
  };
  useEffect(() => {
    if (chatOpen) window.setTimeout(() => chatInputRef.current?.focus(), 50);
  }, [chatOpen]);
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise" />
      <header className="nav">
        <button
          className="brand"
          onClick={() => navigate("top")}
          aria-label="Back to top"
        >
          <Mark /> {profile.name}
        </button>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          {[
            ["About", "about"],
            ["Skills", "skills"],
            ["Work", "work"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              className={active === id ? "active" : ""}
              key={id}
              onClick={() => navigate(id)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-label="Toggle menu"
        >
          {menu ? "×" : "☰"}
        </button>
        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Let&apos;s talk <Arrow />
        </a>
      </header>
      <section id="top" className="hero section">
        <div className="eyebrow">
          <i /> AVAILABLE FOR SELECTED WORK
        </div>
        <div className="hero-grid">
          <div>
            <p className="kicker">
              Hello, I&apos;m {profile.name.split(" ")[0]}.
            </p>
            <h1>
              Thoughtful software,
              <br />
              <em>shaped with care.</em>
            </h1>
            <p className="lede">{profile.intro}</p>
            <div className="hero-actions">
              <button
                className="button primary"
                onClick={() => navigate("work")}
              >
                Explore work <Arrow />
              </button>
              <button
                className="button ghost"
                onClick={() => navigate("contact")}
              >
                Start a conversation
              </button>
            </div>
          </div>
          <aside className="portrait">
            <div className="portrait-aura" aria-hidden="true" />
            <div className="portrait-glow" />
            <div className="portrait-inner">
              <Image
                src={portraitPhoto}
                alt={`Portrait of ${profile.name}`}
                priority
                sizes="(max-width: 800px) 200px, 250px"
              />
            </div>
            <div className="portrait-status">
              <span />
              Available for work
            </div>
            <div className="portrait-caption">
              <b>{profile.name}</b>
              <small>{profile.role}</small>
            </div>
            <div className="orbit orbit-a">
              TYPE
              <br />
              SCRIPT
            </div>
            <div className="orbit orbit-b">
              CREATIVE
              <br />
              CODE
            </div>
          </aside>
        </div>
        <div className="hero-foot">
          <span>
            SCROLL TO EXPLORE <b>↓</b>
          </span>
          <div>
            <a href={profile.github} target="_blank">
              GitHub <Arrow />
            </a>
            <a href={profile.linkedin} target="_blank">
              LinkedIn <Arrow />
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="section about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-content">
          <h2>
            Building digital products that <em>earn their place.</em>
          </h2>
          <div>
            <p>{profile.bio}</p>
            <p>
              I value small details, honest collaboration, and shipping things
              that make someone&apos;s day a little better.
            </p>
            <a className="text-link" href="#contact">
              More about my approach <Arrow />
            </a>
          </div>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>
                {s.value}
                <sup>+</sup>
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="skills" className="section">
        <div className="section-label">02 / CAPABILITIES</div>
        <div className="headline-row">
          <h2>
            A versatile toolkit.
            <br />
            <em>A focused perspective.</em>
          </h2>
          <p>These are the technologies I actually use.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <article className="skill-group" key={group.group}>
              <div className="skill-num">0{i + 1}</div>
              <h3>{group.group}</h3>
              {group.items.map(([name, desc]) => (
                <div className="skill" key={name}>
                  <span>
                    <Mark />
                  </span>
                  <div>
                    <b>{name}</b>
                    <small>{desc}</small>
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>
      <section id="work" className="section work">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="headline-row">
          <h2>
            Made to move
            <br />
            <em>ideas forward.</em>
          </h2>
          <div className="filters">
            {["All", "Web", "AI / ML", "Mobile"].map((c) => (
              <button
                className={filter === c ? "selected" : ""}
                onClick={() => setFilter(c)}
                key={c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="project-grid">
          {filtered.map((p, i) => (
            <article className="project" key={p.title}>
              <div className={`project-art bg-gradient-to-br ${p.accent}`}>
                <div className="art-grid" />
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div className="art-title">{p.title}</div>
                <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}>
                  <Arrow />
                </a>
              </div>
              <div className="project-meta">
                <div>
                  <small>
                    {p.category} · {p.year}
                  </small>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.repo} target="_blank" rel="noreferrer">View code <Arrow /></a>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live demo <Arrow /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="experience" className="section experience">
        <div className="section-label">04 / JOURNEY</div>
        <div className="headline-row">
          <h2>
            Experience, with
            <br />
            <em>intention.</em>
          </h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.date}>
              <span className="timeline-dot" />
              <div className="date">{item.date}</div>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.copy}</p>
                <small>{item.tech}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section credentials">
        <div className="section-label">05 / FOUNDATION</div>
        <div className="credential-grid">
          {credentials.map((c, i) => (
            <article key={c.type}>
              <span>
                0{i + 1} · {c.type}
              </span>
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
              <Mark />
            </article>
          ))}
        </div>
      </section>
      <section className="section terminal">
        <div className="terminal-window">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <b>{profile.name.toLowerCase().replaceAll(" ", "")}@studio: ~</b>
          </div>
          <div className="code">
            <p>
              <i>const</i> currentlyBuilding = {"{"}
            </p>
            <p>
              &nbsp;&nbsp;focus: <em>&quot;useful digital experiences&quot;</em>
              ,
            </p>
            <p>
              &nbsp;&nbsp;status: <em>&quot;open to collaboration&quot;</em>,
            </p>
            <p>
              &nbsp;&nbsp;energy: <em>&quot;curious&quot;</em>
            </p>
            <p>{"}"};</p>
            <p className="cursor">▌</p>
          </div>
        </div>
        <div>
          <div className="section-label">06 / NOW</div>
          <h2>
            Always learning.
            <br />
            <em>Always making.</em>
          </h2>
          <p>
            Currently exploring the space between intelligent systems and
            genuinely human interfaces.
          </p>
        </div>
      </section>
      <section id="contact" className="section contact">
        <div>
          <div className="section-label">07 / CONTACT</div>
          <h2>
            Let&apos;s build something
            <br />
            <em>worth remembering.</em>
          </h2>
          <p>
            Have a project in mind, or just want to say hello? I&apos;d love to
            hear from you.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email} <Arrow />
          </a>
        </div>
        <form onSubmit={submit}>
          <label>
            Name
            <input required name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
            />
          </label>
          <label>
            Message
            <textarea
              required
              name="message"
              placeholder="Tell me a little about your project..."
              rows={4}
            />
          </label>
          <button className="button primary" type="submit">
            {sent ? (
              "Message prepared ✓"
            ) : (
              <>
                Send message <Arrow />
              </>
            )}
          </button>
          {sent && (
            <p className="form-note">
              Thanks — this demo form is ready to connect to your email service.
            </p>
          )}
        </form>
      </section>
      <footer>
        <div className="brand">
          <Mark /> {profile.name}
        </div>
        <p>Crafting considered digital experiences.</p>
        <div>
          <a href="#top">Back to top ↑</a>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </footer>
      <div className="portfolio-chat">
        {chatOpen && (
          <section id="portfolio-chat" className="chat-window" aria-label="Portfolio assistant">
            <header className="chat-header">
              <div>
                <span className="chat-avatar">✦</span>
                <span className="chat-status" />
                <b>Portfolio concierge</b>
                <small>Ask anything about Zwe’s work</small>
              </div>
              <button className="chat-close" onClick={() => setChatOpen(false)} aria-label="Close chat">
                <span>×</span>
              </button>
            </header>
            <div className="chat-messages" aria-live="polite">
              {chatMessages.map((message, index) => (
                <p className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                  {message.text}
                </p>
              ))}
              {chatThinking && <p className="chat-message assistant chat-typing">Thinking<span>...</span></p>}
            </div>
            <div className="chat-prompts">
              {chatPrompts.map((prompt) => (
                <button key={prompt} onClick={() => sendChat(undefined, prompt)}>
                  {prompt}
                </button>
              ))}
            </div>
            <form className="chat-form" onSubmit={sendChat}>
              <input
                ref={chatInputRef}
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                placeholder="Ask a question..."
                aria-label="Ask the portfolio assistant"
              />
              <button type="submit" aria-label="Send message"><span>↑</span></button>
            </form>
            <p className="chat-disclaimer">Portfolio guide · Answers based on this site</p>
          </section>
        )}
        <button
          className="chat-launcher"
          onClick={() => setChatOpen((open) => !open)}
          aria-expanded={chatOpen}
          aria-controls="portfolio-chat"
        >
          <span className="launcher-icon">✦</span> {chatOpen ? "Close assistant" : "Ask the assistant"}
        </button>
      </div>
    </main>
  );
}
