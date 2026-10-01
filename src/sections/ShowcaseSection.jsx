import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const additionalProjects = [
  {
    title: "Enterprise AI Chatbot & DMS Portal",
    category: "Enterprise AI & RAG Architecture",
    desc: "Production-grade multi-document RAG assistant featuring vector indexing, intelligent PDF OCR parsing, citation streaming, and semantic search.",
    tags: ["React", "FastAPI", "LangChain", "Pinecone", "Tailwind CSS"],
    link: "https://iqra-ai-chatbot-aozl.vercel.app/train",
    badge: "Production SaaS",
    isGitHub: false,
  },
  {
    title: "AI Training Assistant & Smart Compiler",
    category: "AI Developer Tooling & Sandboxing",
    desc: "Interactive in-browser code compiler and live learning assistant with AI error diagnosis, real-time syntax checking, and multi-language execution.",
    tags: ["React", "Node.js", "Monaco Editor", "Docker", "OpenAI"],
    link: "https://training-assistant-frontend-8621.vercel.app/",
    badge: "Full Stack AI",
    isGitHub: false,
  },
  {
    title: "TravEx – Corporate Travel & Expense ERP",
    category: "Corporate FinTech / Workflow",
    desc: "Comprehensive business travel booking and expense reimbursement management system with automated approval tiers and real-time analytics.",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "Tailwind"],
    link: "https://travel-agency-portal-kihv.vercel.app/",
    badge: "Enterprise App",
    isGitHub: false,
  },
  {
    title: "Shoppit – Modern E-Commerce Platform",
    category: "Full-Stack Web Application",
    desc: "Full-featured e-commerce marketplace featuring product discovery, shopping cart, customer reviews, PayPal payment gateway, and order tracking.",
    tags: ["MERN Stack", "JWT Auth", "PayPal API", "Redux", "Tailwind"],
    link: "https://shoppit-ecommerce.vercel.app",
    badge: "MERN Stack",
    isGitHub: false,
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const [showMore, setShowMore] = useState(false);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80',
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* Top 3 Featured Showcase Projects */}
        <div className="showcaselayout">
          {/* Left Side: Primary Big Featured Project (Zentry Clone) */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <a
              href="https://zentryclonebyme.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="image-wrapper overflow-hidden rounded-xl border border-white/5 group-hover:border-purple-500/40 transition-colors">
                <img
                  src="/images/Frontend-1.png"
                  alt="Modern Cybersecurity Website Clone (Zentry)"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-content mt-4">
                <div className="flex items-center gap-2 mb-2 font-tech">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    Awwwards Clone
                  </span>
                  <span className="text-xs text-blue-50">3D Interactive</span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-purple-300 transition-colors">
                  Modern Cybersecurity Website Clone (Zentry.com)
                </h2>
                <p className="text-white-50 md:text-xl text-base leading-relaxed mt-2">
                  A visually rich and animated 3D clone of Zentry.com, built using React, GSAP, and Tailwind CSS.
                  Features silky smooth scroll animations, interactive video modals, and modern design precision.
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-fuchsia-300 text-sm font-semibold group-hover:translate-x-1 transition-all font-tech">
                  <span>View Live Experience</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Side: 2 Featured Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {/* Project 2: Golf Club */}
            <a
              href="https://golfclube.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="project border border-white/5 group-hover:border-purple-500/40 transition-colors" ref={project2Ref}>
                <div className="image-wrapper bg-[#ffefdb] overflow-hidden">
                  <img
                    src="/images/project2.png"
                    alt="Golf Club Project"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-1 font-tech">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-rose-500/15 text-rose-300 border border-rose-500/25">
                      Sports & Hospitality
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-white group-hover:text-rose-300 transition-colors">
                    Golf Club Experience
                  </h2>
                </div>
              </div>
            </a>

            {/* Project 3: macOS Portfolio */}
            <a
              href="https://mac-ios-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="project border border-white/5 group-hover:border-purple-500/40 transition-colors" ref={project3Ref}>
                <div className="image-wrapper bg-[#1a1a24] overflow-hidden">
                  <img
                    src="/images/macos.png"
                    alt="macOS Interactive Portfolio"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-1 font-tech">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/15 text-purple-300 border border-purple-500/25">
                      Interactive Desktop OS
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-xl text-white group-hover:text-purple-300 transition-colors">
                    macOS Interactive Web Portfolio
                  </h2>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Expand / View More Projects Section */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <p className="font-calligraphy text-xl text-purple-300/80 -rotate-1">
            ~ curated archive of scalable web & AI apps ~
          </p>
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="px-6 py-3 rounded-full border border-purple-500/40 bg-black-100/90 hover:bg-purple-500/15 text-purple-300 hover:border-purple-400 font-tech font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer group"
          >
            <span>{showMore ? 'Show Less Projects' : 'Explore More Projects (4 More)'}</span>
            <span
              className={`transition-transform duration-300 ${
                showMore ? 'rotate-180' : 'group-hover:translate-y-0.5'
              }`}
            >
              ↓
            </span>
          </button>

          {/* Collapsible Additional Projects Grid */}
          {showMore && (
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {additionalProjects.map((item, index) => (
                <div
                  key={index}
                  className="card-border rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden bg-black-100/80 backdrop-blur-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 font-tech">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300">
                        {item.badge}
                      </span>
                      <span className="text-xs text-blue-50">{item.category}</span>
                    </div>

                    <h3 className="font-display text-white text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white-50 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-fuchsia-300 group-hover:translate-x-1 transition-all font-tech"
                    >
                      <span>{item.isGitHub ? 'View Source on GitHub' : 'View Live Demo'}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
