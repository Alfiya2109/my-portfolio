import React, { useState } from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'
import confetti from 'canvas-confetti'

const Hero = () => {
  const [theme, setTheme] = useState('cyberpunk');

  const handleDownloadCV = () => {
    // Multi-stage confetti celebration
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#ec4899', '#38bdf8', '#c084fc']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#a855f7', '#38bdf8']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#c084fc', '#38bdf8']
      });
    }, 250);

    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    }
  };

  useGSAP(()=>{
      gsap.fromTo('.hero-text h1',{
          y: 50,
          opacity: 0
      },
      {
          y:0,
          opacity: 1,
          stagger : 0.2,
          duration: 1,
          ease: 'power2.inOut'
      })
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10 pointer-events-none opacity-40'>
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout'>
        {/*Left Hero Content */}
        <header className='flex flex-col justify-center w-full xl:w-1/2 md:px-20 px-5 relative z-20'>
          <div className='flex flex-col gap-6 md:gap-7'>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-tech tracking-wider uppercase text-xs text-emerald-300 border border-emerald-500/30 bg-emerald-950/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Global Remote &amp; Full-Time Roles</span>
              </span>
              <span className="font-tech text-xs text-purple-300/80 hidden sm:inline-block">
                🌍 Sweden (CET) &amp; India (IST)
              </span>
            </div>

            <div className='hero-text font-display'>
              <h1>Shaping 
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, idx) => (
                      <span key={`${word.text}-${idx}`} className='flex items-center md:gap-3 gap-1'>
                        <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50 ' />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into <span className="font-serif-italic font-normal text-purple-300 tracking-wide drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">Real Projects</span></h1>
              <h1>that <span className="font-serif-italic font-normal text-pink-300 tracking-wide drop-shadow-[0_0_20px_rgba(244,63,94,0.4)]">Deliver Results</span></h1>
            </div>

            <p className='text-white-50 md:text-xl text-base relative z-10 pointer-events-auto max-w-xl leading-relaxed'>
              Hi, I am <span className="font-calligraphy text-2xl md:text-3xl text-white font-bold tracking-wide underline decoration-purple-400/70 decoration-wavy underline-offset-4">Alfiya Khan</span>, a Full-Stack &amp; Generative AI Developer with a passion for building immersive 3D experiences, scalable web apps, and modern digital interfaces.
            </p>
            
            <div className='flex flex-wrap items-center gap-3.5 relative z-10'>
              <Button className="md:w-52 md:h-14 w-44 h-12" id='work' text='Explore Work'/> 
              
              <a
                href="/Alfiya_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  confetti({
                    particleCount: 70,
                    spread: 60,
                    origin: { y: 0.7 },
                    colors: ['#a855f7', '#ec4899', '#38bdf8', '#c084fc']
                  });
                }}
                className="px-5 py-3.5 md:px-6 md:py-4 rounded-xl border border-purple-500/40 bg-purple-950/50 text-purple-100 font-tech font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-purple-600/30 hover:border-purple-300 transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer group shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              >
                <span>📄 View Resume (PDF)</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>

              <button
                onClick={handleDownloadCV}
                className="px-4 py-3.5 md:px-5 md:py-4 rounded-xl border border-white/10 bg-black-100/60 text-white-50 font-tech font-medium uppercase tracking-wider text-xs md:text-sm hover:text-white hover:border-white/25 transition-all duration-300 backdrop-blur-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Get In Touch</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </header>

        {/*RIGHT: 3D Model */}
        <figure className='relative w-full xl:w-[52%] h-[400px] sm:h-[480px] md:h-[540px] xl:h-[650px] 2xl:h-[720px] flex flex-col items-center justify-center mt-4 xl:mt-0'>
          {/* Room Lighting Switch Badge */}
          <div className="absolute top-5 md:top-6 right-4 md:right-8 z-30 flex items-center gap-2 bg-black-100/90 border border-purple-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg pointer-events-auto">
            <span className="text-xs text-white-50 font-medium">Room Mood:</span>
            <button
              type="button"
              onClick={() => setTheme(prev => prev === 'cyberpunk' ? 'studio' : 'cyberpunk')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                theme === 'cyberpunk' 
                  ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_12px_#c084fc] hover:brightness-110' 
                  : 'bg-amber-400 text-black shadow-[0_0_12px_#fbbf24] hover:bg-amber-300'
              }`}
            >
              {theme === 'cyberpunk' ? '⚡ Cyber Violet' : '☀️ Rose Warm'}
            </button>
          </div>

          <div className='hero-3d-layout'>
            <HeroExperience theme={theme} />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  )
}

export default Hero
