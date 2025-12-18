import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Matrix-lite binary rain effect
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "10";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0057FF"; // Blue text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none" />
      
      <div className="z-10 relative">
        <p className="font-mono text-blue text-xs mb-8 tracking-widest blink">AWAITING INPUT...</p>
        
        <motion.button 
          className="group relative font-serif text-4xl md:text-6xl text-offwhite border border-offwhite/10 px-12 py-6 bg-obsidian/80 backdrop-blur-sm overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 group-hover:text-obsidian transition-colors duration-300">INITIATE SEQUENCE</span>
          <div className="absolute inset-0 bg-offwhite translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.button>

        <div className="mt-20 flex flex-col gap-4">
            <a href="mailto:hello@srinivas.ai" className="font-mono text-sm text-gold hover:text-white hover:tracking-widest transition-all duration-300">hello@srinivas.ai</a>
            <div className="flex justify-center gap-8 font-mono text-xs text-offwhite/30">
                <a href="#" className="hover:text-blue">LINKEDIN</a>
                <a href="#" className="hover:text-blue">GITHUB</a>
                <a href="#" className="hover:text-blue">TWITTER</a>
            </div>
            <p className="font-mono text-[10px] text-offwhite/10 mt-8">© 2024 SRINIVAS NAMPALLI // ARCHITECT</p>
        </div>
      </div>
    </footer>
  );
};