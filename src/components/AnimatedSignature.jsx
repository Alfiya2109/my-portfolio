import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Authentic cursive calligraphy glyph paths for "Alfiya" with elegant flourish
const glyphPaths = [
  {
    id: 'A',
    // Capital Cursive 'A' with grand looping entry and flowing cross-stroke
    d: 'M 95 210 C 80 165, 98 100, 138 78 C 162 65, 180 82, 168 128 C 150 175, 125 212, 155 204 C 182 196, 195 162, 206 154',
  },
  {
    id: 'l',
    // Cursive 'l' ascending loop with graceful descent
    d: 'M 206 154 C 220 128, 242 72, 254 74 C 263 76, 258 114, 246 156 C 238 184, 245 202, 260 198',
  },
  {
    id: 'f',
    // Cursive 'f' with high ascender and deep looping descender
    d: 'M 260 198 C 276 152, 298 68, 310 70 C 318 72, 312 122, 294 204 C 282 250, 288 260, 298 254 C 309 242, 308 212, 320 184',
  },
  {
    id: 'i-stem',
    // Cursive 'i' upward glide and downward return
    d: 'M 320 184 C 330 162, 344 144, 350 144 C 356 144, 348 174, 354 195 C 358 200, 366 196, 374 184',
  },
  {
    id: 'i-dot',
    // Diamond calligraphy tittle/dot for 'i'
    d: 'M 352 120 C 348 116, 354 112, 358 115 C 362 118, 358 124, 352 120 Z',
  },
  {
    id: 'y',
    // Cursive 'y' double arch and descending loop
    d: 'M 374 184 C 384 162, 396 144, 406 144 C 414 144, 408 175, 412 192 C 418 198, 428 175, 438 146 C 444 170, 438 222, 428 252 C 417 268, 402 262, 407 242 C 413 220, 434 194, 452 186',
  },
  {
    id: 'a',
    // Cursive 'a' closed oval and sweeping exit flourish
    d: 'M 452 186 C 462 158, 488 144, 498 154 C 508 165, 492 196, 472 196 C 456 196, 466 166, 486 148 C 502 144, 510 165, 508 194 C 510 200, 524 190, 545 178',
  },
  {
    id: 'flourish',
    // Master underline calligraphy swoosh
    d: 'M 65 230 C 210 215, 380 248, 575 210',
  },
];

const AnimatedSignature = () => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const playAnimation = () => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('.signature-glyph');

    // 1. Reset each path with total length
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.fillOpacity = '0';
    });

    const tl = gsap.timeline();

    // 2. Animate stroke sequentially (pen writing out letters)
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1.4,
      stagger: 0.1,
      ease: 'power2.inOut',
    })
    // 3. Smoothly fade in luminous fill
    .to(paths, {
      fillOpacity: 0.95,
      duration: 0.6,
      stagger: 0.05,
      ease: 'power1.out',
    }, '-=0.4');
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
      start: 'top 85%',
      onEnter: () => playAnimation(),
      once: false,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center py-10 md:py-16 relative overflow-hidden group cursor-pointer"
      onClick={playAnimation}
      title="Click to replay calligraphy signature"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-36 bg-purple-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-fuchsia-500/25 transition-all duration-700" />

      <div className="flex items-center gap-2 mb-3 z-10">
        <span className="font-tech text-xs uppercase tracking-[0.25em] text-purple-300/80">
          ✦ Calligraphy Signature
        </span>
        <span className="font-calligraphy text-base text-amber-300/80 hidden sm:inline-block">
          (click to replay)
        </span>
      </div>

      {/* SVG Signature of "Alfiya" with authentic Calligraphy Glyphs */}
      <div className="w-full max-w-2xl px-4 flex justify-center z-10">
        <svg
          ref={svgRef}
          id="Visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="30 50 560 220"
          className="w-full h-auto max-h-48 md:max-h-60 object-contain filter drop-shadow-[0_0_22px_rgba(192,132,252,0.55)]"
        >
          <defs>
            <linearGradient id="signature-grad-alfiya" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="30%" stopColor="#ec4899" />
              <stop offset="65%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id="sig-glow-alfiya" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            stroke="url(#signature-grad-alfiya)"
            strokeWidth="3.2"
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
    </div>
  );
};

export default AnimatedSignature;
