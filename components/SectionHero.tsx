import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const SectionHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const baseFreqX = useTransform(mouseX, [0, window.innerWidth], [0.005, 0.02]);
  const baseFreqY = useTransform(mouseY, [0, window.innerHeight], [0.005, 0.02]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian" ref={containerRef}>
      {/* Background - Neural Network Abstract */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue/20 via-obsidian to-obsidian" />
        <img 
            src="https://picsum.photos/seed/neuralnet/1920/1080?grayscale&blur=2" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
            alt="Data Network"
        />
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <svg className="hidden">
        <filter id="liquid-filter">
          <motion.feTurbulence 
            type="fractalNoise" 
            baseFrequency={baseFreqX} 
            numOctaves="1" 
            result="turbulence" 
          />
          <feDisplacementMap 
            in2="turbulence" 
            in="SourceGraphic" 
            scale="40" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>

      <div className="relative z-10 text-center px-4">
        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="relative inline-block"
        >
            <motion.h1 
              className="font-serif text-6xl md:text-9xl lg:text-[10rem] leading-none text-offwhite tracking-tighter relative z-20 mix-blend-luminosity"
              style={{ filter: 'url(#liquid-filter)' }}
            >
              SRINIVAS
              <br />
              NAMPALLI
            </motion.h1>
            
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue blur-[100px] opacity-20 pointer-events-none" />
        </motion.div>

        <motion.div 
          className="flex flex-col items-center mt-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-blue to-transparent" />
          <p className="font-mono text-blue text-sm md:text-base tracking-[0.3em] uppercase">
            The AI & Digital Architect
          </p>
          <p className="font-mono text-offwhite/40 text-xs tracking-widest">
            BUILDING INTELLIGENT ECOSYSTEMS
          </p>
        </motion.div>
      </div>
    </section>
  );
};