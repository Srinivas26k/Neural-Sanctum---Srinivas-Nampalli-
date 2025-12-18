import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const works = [
  { id: '1', title: "VELOCITY AI", role: "Full Stack & LLM", image: "https://images.unsplash.com/photo-1481487484168-9b995ecc1679?auto=format&fit=crop&q=80&w=1000", desc: "Enterprise RAG System" },
  { id: '2', title: "AETHER FINANCE", role: "Architecture", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000", desc: "DeFi Algorithmic Trading" },
  { id: '3', title: "OASIS PROTOCOL", role: "Web3 Engineering", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000", desc: "Smart Contract Audit" },
];

export const SectionSelectedWorks: React.FC = () => {
  return (
    <section className="py-32 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex items-end justify-between border-b border-offwhite/10 pb-8">
            <div>
                <h2 className="font-serif text-5xl text-offwhite">ENGINEERED REALITY</h2>
                <p className="font-mono text-blue text-xs mt-2 tracking-widest">SELECTED WORKS 2023-2024</p>
            </div>
            <div className="hidden md:block font-mono text-xs text-offwhite/30 text-right">
                STATUS: DEPLOYED<br/>
                UPTIME: 99.99%
            </div>
        </div>

        <div className="flex flex-col gap-32">
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkCard: React.FC<{ work: any; index: number }> = ({ work, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Container with Schematic Overlay */}
      <div className="relative group w-full md:w-3/5 aspect-video overflow-hidden border border-offwhite/10">
        <img 
            src={work.image} 
            alt={work.title}
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        
        {/* Schematic Grid Overlay - Appears on Hover */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute inset-0 border-2 border-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-95 group-hover:scale-100" />
        
        {/* Technical Label */}
        <div className="absolute bottom-0 right-0 bg-blue/90 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-mono text-xs text-white">VIEW_SOURCE</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full md:w-2/5">
        <span className="font-mono text-xs text-gold mb-2 block">0{index + 1} // {work.role}</span>
        <h3 className="font-serif text-4xl text-offwhite mb-4 group-hover:text-blue transition-colors cursor-pointer">{work.title}</h3>
        <p className="font-mono text-offwhite/60 text-sm leading-relaxed border-l border-offwhite/20 pl-4">{work.desc} — Delivering robust architecture capable of scaling to millions of users while maintaining sub-millisecond latency.</p>
        
        <button className="mt-8 font-mono text-xs border border-offwhite/20 px-6 py-3 hover:bg-offwhite hover:text-black transition-colors">
            CASE_STUDY
        </button>
      </div>
    </motion.div>
  );
};