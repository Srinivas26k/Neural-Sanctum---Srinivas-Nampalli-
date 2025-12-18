import React from 'react';
import { motion } from 'framer-motion';

export const SectionTrust: React.FC = () => {
  const stack = [
    "AGENTIC AI", "RUST", "PYTHON", "OPENAI", "ANTHROPIC", "LANGCHAIN", 
    "REACT", "FIGMA", "MIDJOURNEY", "THREE.JS", "NEXT.JS", "TAILWIND", 
    "PINECONE", "HUGGINGFACE", "WEBGPU"
  ];

  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
            {[...stack, ...stack].map((tech, i) => (
                <span 
                    key={i} 
                    className="font-mono text-xl md:text-3xl text-white/10 hover:text-white transition-colors duration-500 cursor-default select-none tracking-tight"
                >
                    {tech} <span className="text-blue/50 text-base align-middle ml-16">::</span>
                </span>
            ))}
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </section>
  );
};