import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Authentic cursive calligraphy glyph paths for "Alfiya"
const glyphPaths = [
  {
    id: 'A',
    // Palmer/Spencerian Cursive Capital 'A'
    d: 'M 70 170 C 95 120, 120 70, 135 60 C 145 70, 150 150, 155 195 C 152 205, 120 145, 120 135 C 120 125, 140 125, 175 140 C 190 148, 198 175, 205 170',
  },
  {
    id: 'l',
    // Cursive 'l' ascending loop with graceful descent
    d: 'M 205 170 C 215 130, 230 65, 242 65 C 250 65, 245 110, 235 160 C 230 185, 240 195, 252 185',
  },
  {
    id: 'f',
    // Cursive 'f' with high ascender and deep descender loop
    d: 'M 252 185 C 262 135, 275 65, 285 65 C 292 65, 288 115, 275 190 C 265 245, 260 265, 272 260 C 285 255, 285 220, 295 185',
  },
  {
    id: 'i-stem',
    // Cursive 'i' upward glide and downward return
    d: 'M 295 185 C 305 155, 318 140, 325 142 C 330 144, 325 170, 328 190 C 332 196, 340 190, 348 175',
  },
  {
    id: 'i-dot',
    // Diamond calligraphy tittle/dot for 'i'
    d: 'M 324 112 C 322 108, 328 105, 332 108 C 335 112, 330 116, 324 112 Z',
  },
  {
    id: 'y',
    // Cursive 'y' double arch and descending loop
    d: 'M 348 175 C 355 155, 368 142, 376 142 C 384 142, 378 175, 382 190 C 388 198, 398 175, 408 145 C 414 170, 408 225, 398 258 C 388 275, 372 265, 378 242 C 385 218, 405 192, 422 182',
  },
  {
    id: 'a',
    // Cursive 'a' closed oval and sweeping exit flourish
    d: 'M 422 182 C 430 160, 448 142, 460 150 C 470 160, 458 188, 442 188 C 428 188, 436 160, 452 145 C 466 142, 474 160, 472 185 C 474 195, 485 190, 498 180',
  },
  {
    id: 'flourish',
    // Master underline calligraphy swoosh
    d: 'M 90 215 C 220 200, 370 230, 520 200',
  },
];

const AnimatedSignature = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const playAnimation = () => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('.signature-glyph');

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.fillOpacity = '0';
    });

    const tl = gsap.timeline();

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1.3,
      stagger: 0.08,
      ease: 'power2.inOut',
    }).to(
      paths,
      {
        fillOpacity: 0.95,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power1.out',
      },
      '-=0.3'
    );
  };

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const paths = svgRef.current.querySelectorAll('.signature-glyph');
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.fillOpacity = '0';
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 92%',
      onEnter: () => playAnimation(),
      once: false,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-44 sm:w-52 md:w-56 h-auto flex flex-col items-center md:items-end justify-center relative group cursor-pointer select-none"
      onClick={playAnimation}
      title="Click to replay signature"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-purple-500/15 rounded-full blur-2xl pointer-events-none group-hover:bg-fuchsia-500/25 transition-all duration-500" />

      {/* SVG Signature */}
      <svg
        ref={svgRef}
        id="Visual"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="50 50 490 210"
        className="w-full h-auto max-h-16 sm:max-h-20 object-contain filter drop-shadow-[0_0_15px_rgba(192,132,252,0.6)] group-hover:scale-105 transition-transform duration-300 z-10"
      >
        <defs>
          <linearGradient id="signature-grad-alfiya" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="30%" stopColor="#ec4899" />
            <stop offset="65%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="sig-glow-alfiya" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          stroke="url(#signature-grad-alfiya)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#sig-glow-alfiya)"
        >
          {glyphPaths.map((glyph) => (
            <path
              key={glyph.id}
              id={`glyph-${glyph.id}`}
              className="signature-glyph"
              d={glyph.d}
              fill="none"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSignature;
