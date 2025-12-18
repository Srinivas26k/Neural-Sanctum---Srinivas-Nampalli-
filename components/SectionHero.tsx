import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useVelocity } from 'framer-motion';

export const SectionHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Velocity of mouse determines turbulence scale (dissipation effect)
  const mouseXVelocity = useVelocity(mouseX);
  const mouseYVelocity = useVelocity(mouseY);
  
  // Transform velocity to turbulence scale
  const turbulenceScale = useTransform([mouseXVelocity, mouseYVelocity], ([vx, vy]) => {
     const velocity = Math.sqrt(vx * vx + vy * vy);
     return Math.min(velocity / 100, 50); // Cap at 50
  });
  
  const smoothTurbulence = useSpring(turbulenceScale, { damping: 10, stiffness: 50 });

  // Base frequency changes with movement to create "swirl"
  const baseFreq = useTransform(smoothTurbulence, [0, 50], [0.01, 0.2]);
  
  // Background pulse opacity (inverse of movement)
  const pulseOpacity = useTransform(smoothTurbulence, [0, 50], [0.4, 0.1]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian pt-20" ref={containerRef}>
      
      {/* System Status */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute top-6 right-6 md:top-8 md:right-12 font-mono text-[10px] md:text-xs text-offwhite/30 flex flex-col md:items-end gap-1 z-20 text-center md:text-right w-full md:w-auto"
      >
        <div className="flex items-center justify-center md:justify-end gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>SYSTEM: ONLINE</span>
        </div>
        <div>LOC: HYDERABAD, IN</div>
        <div>TIME: {time}</div>
      </motion.div>

      {/* SVG Fluid Filter */}
      <svg className="hidden">
        <filter id="liquid-filter">
          <motion.feTurbulence 
            type="fractalNoise" 
            baseFrequency={baseFreq} 
            numOctaves="2" 
            result="turbulence" 
          />
          <motion.feDisplacementMap 
            in2="turbulence" 
            in="SourceGraphic" 
            scale={smoothTurbulence} 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>

      {/* Pulsing Background Network */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity: pulseOpacity }}
      >
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,92,255,0.15)_0%,_transparent_70%)]" />
         <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20" />
      </motion.div>

      <div className="relative z-10 text-center px-4 w-full max-w-[90vw]">
        <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="relative"
        >
            <motion.h1 
              className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] text-offwhite tracking-tighter relative z-20 mix-blend-luminosity cursor-default"
              style={{ filter: 'url(#liquid-filter)' }}
            >
              SRINIVAS
              <br />
              NAMPALLI
            </motion.h1>
            
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue blur-[120px] opacity-10 pointer-events-none" />
        </motion.div>

        <motion.div 
          className="flex flex-col items-center mt-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="h-24 w-[1px] bg-gradient-to-b from-blue to-transparent" />
          <div className="border border-white/10 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white/5 transition-colors duration-300">
            <p className="font-mono text-blue text-xs md:text-sm tracking-[0.2em] uppercase">
                The AI & Digital Architect
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="font-mono text-[10px]">SCROLL_TO_INITIALIZE</span>
        <div className="w-[1px] h-8 bg-offwhite" />
      </div>
    </section>
  );
};