import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

const TerminalModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '⚡ Alfiya OS v2.4.0 (Interactive Developer Terminal)' },
    { type: 'system', text: 'Type "help" to see available commands or "hire" to collaborate.' },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
      case '?':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • about     - Learn about Alfiya Khan
  • skills    - View core technical stack
  • projects  - See featured work & live deployments
  • contact   - Get in touch details
  • hire      - Why you should collaborate with me!
  • confetti  - Launch celebratory confetti 🎊
  • clear     - Clear terminal history
  • exit      - Close this terminal`,
        });
        break;

      case 'about':
      case 'bio':
        newHistory.push({
          type: 'output',
          text: `👋 Hi! I'm Alfiya Khan — Full-Stack Software Engineer & Generative AI Developer.
I specialize in creating end-to-end scalable web applications, enterprise ERP frontends (Odoo OWL), and Generative AI RAG pipelines with LangChain & AstraDB.
I transform complex architectural challenges into fluid, user-centric digital experiences.`,
        });
        break;

      case 'skills':
      case 'stack':
        newHistory.push({
          type: 'output',
          text: `🚀 Core Tech Stack:
  [■■■■■■■■■■] React 19, JavaScript (ES6+), TypeScript (100%)
  [■■■■■■■■■□] Python & Django REST Framework (DRF) (95%)
  [■■■■■■■■■□] Generative AI, LangChain, AstraDB Vector DB, RAG (92%)
  [■■■■■■■■■□] Three.js, React Three Fiber, GSAP (90%)
  [■■■■■■■■■□] Odoo ERP, OWL (Odoo Web Library), Java, PostgreSQL (90%)
  [■■■■■■■■□□] n8n AI Automation, Docker, Tailwind CSS v4 (85%)`,
        });
        break;

      case 'projects':
      case 'work':
        newHistory.push({
          type: 'output',
          text: `⭐ Featured Projects & Live Deployments:
  1. Enterprise AI Chatbot & Document Management System (DMS)
     → Live DMS UI: https://iqra-ai-chatbot-aozl.vercel.app/train
     → GitHub: https://github.com/Alfiya2109/ai-chatbot

  2. AI Training Assistant & In-Browser Smart Compiler
     → Live: https://training-assistant-frontend-8621.vercel.app/
     → GitHub: https://github.com/Alfiya2109/training-assistant-frontend

  3. TravEx – Corporate Travel & Expense Management Portal
     → Live: https://travel-agency-portal-kihv.vercel.app/
     → GitHub: https://github.com/Alfiya2109/travex-portal

  4. Shoppit – Full-Stack E-Commerce Platform
     → Live: https://shoppit-ecommerce.vercel.app
     → GitHub: https://github.com/Alfiya2109/shoppit-ecommerce

  5. Enterprise Employee Leave Management System (LMS)
     → Live: https://leave-management-portal-virid.vercel.app/
     → GitHub: https://github.com/Alfiya2109/leave-management-portal

  6. 3D Interactive WebGL Portfolio
     → Live: https://my-portfolio-one-teal-18.vercel.app/
     → GitHub: https://github.com/Alfiya2109/my-portfolio`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `📬 Contact Info:
  • Email: alfiyakhan0921@gmail.com
  • LinkedIn: https://www.linkedin.com/in/alfiya-khan-dev/
  • GitHub: https://github.com/Alfiya2109
  • Location: Mumbai, Maharashtra, India`,
        });
        break;

      case 'hire':
      case 'hire-me':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c084fc', '#f43f5e', '#38bdf8', '#fbbf24']
        });
        newHistory.push({
          type: 'output',
          text: `🎉 Let's build something remarkable together!
I am actively open for software engineering roles, full-time positions, and enterprise projects.
Feel free to reach out via Email (alfiyakhan0921@gmail.com) or LinkedIn!`,
        });
        break;

      case 'confetti':
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#c084fc', '#f43f5e', '#38bdf8', '#fbbf24']
        });
        newHistory.push({ type: 'output', text: '✨ Boom! Enjoy the celebratory confetti! ✨' });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        setIsOpen(false);
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmdStr}". Type "help" for a list of available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== undefined) handleCommand(input);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black-100/90 border border-purple-500/40 text-purple-300 shadow-[0_0_18px_rgba(168,85,247,0.3)] backdrop-blur-md hover:scale-105 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 group cursor-pointer"
        aria-label="Open Developer Terminal"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
        </span>
        <span className="font-mono text-xs font-semibold tracking-wide">
          &gt;_ Dev Terminal
        </span>
      </button>

      {/* Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl bg-zinc-950/95 border border-purple-500/40 rounded-xl shadow-[0_0_35px_rgba(168,85,247,0.25)] overflow-hidden font-mono text-sm flex flex-col h-[480px]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="size-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer"
                  title="Close"
                />
                <span className="size-3 rounded-full bg-yellow-500" />
                <span className="size-3 rounded-full bg-green-500" />
              </div>
              <span className="text-zinc-400 text-xs font-medium">alfiya@portfolio:~</span>
              <span className="text-xs text-zinc-500">ESC to exit</span>
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto space-y-2 text-zinc-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, i) => (
                <div key={i} className="leading-relaxed">
                  {item.type === 'system' && (
                    <p className="text-purple-300 font-semibold">{item.text}</p>
                  )}
                  {item.type === 'user' && (
                    <p className="text-cyan-400 font-medium">{item.text}</p>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-zinc-300 whitespace-pre-wrap font-mono text-xs md:text-sm">
                      {item.text}
                    </pre>
                  )}
                  {item.type === 'error' && (
                    <p className="text-rose-400">{item.text}</p>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 bg-zinc-900/60 border-t border-zinc-800">
              <span className="text-fuchsia-400 font-bold mr-2">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help' or command..."
                className="flex-1 bg-transparent border-none outline-none text-purple-200 placeholder-zinc-600 font-mono text-sm"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalModal;
