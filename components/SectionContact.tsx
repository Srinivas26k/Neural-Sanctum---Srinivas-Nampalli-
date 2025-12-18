import React from 'react';
import { motion } from 'framer-motion';

export const SectionContact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[70vh] bg-obsidian flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-20">
         <div className="absolute bottom-0 w-full h-px bg-blue shadow-[0_0_50px_rgba(0,87,255,0.5)]" />
         <div className="absolute top-0 w-full h-px bg-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        <p className="font-mono text-blue text-xs mb-8 tracking-widest blink">INITIALIZE SEQUENCE</p>
        
        <div className="relative group">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-2xl text-blue md:text-3xl">{">"}</span>
            <input 
                type="text" 
                placeholder="enter_email_address_" 
                className="w-full bg-transparent border-b border-white/20 py-4 pl-12 pr-4 font-mono text-xl md:text-3xl text-offwhite placeholder:text-white/20 focus:outline-none focus:border-blue transition-colors"
            />
        </div>

        <motion.button 
            className="mt-16 group relative px-12 py-4 border border-white/20 hover:bg-offwhite transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="font-serif text-xl text-offwhite group-hover:text-black relative z-10">EXECUTE</span>
        </motion.button>
      </div>

      <footer className="absolute bottom-8 w-full text-center">
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] text-white/20">
            <p>© 2025 SRINIVAS NAMPALLI. REGISTERED IN THE NEURAL CLOUD.</p>
            <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-blue transition-colors">TWITTER</a>
                <a href="#" className="hover:text-blue transition-colors">GITHUB</a>
                <a href="#" className="hover:text-blue transition-colors">LINKEDIN</a>
            </div>
        </div>
      </footer>
    </section>
  );
};