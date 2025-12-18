import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Node } from '../types';

// Initial Positions
const initialNodes: Node[] = [
  { id: '1', x: 25, y: 35, label: 'AGENTIC AI', tech: 'LangChain / AutoGPT', description: 'Orchestrating multi-agent systems that autonomously research, code, and execute business logic.' },
  { id: '2', x: 50, y: 50, label: 'SYSTEMS', tech: 'Rust / Python', description: 'Engineered for speed. Leveraging Rust for critical paths and Python for rapid AI integration.' },
  { id: '3', x: 75, y: 35, label: 'DESIGN', tech: 'Figma / Generative', description: 'High-fidelity UI/UX mockups and AI-generated commercial assets that convert.' },
  { id: '4', x: 35, y: 70, label: 'WEB', tech: 'React / Next.js', description: 'Minimalist, SEO-optimized frontends connected to robust, scalable backends.' },
  { id: '5', x: 65, y: 70, label: 'STRATEGY', tech: 'Bootcamps / Advisory', description: 'Transferring deep technical knowledge through MasterSessions and corporate training.' },
];

export const SectionNetwork: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Calculate dynamic positions based on selection
  const getPosition = (node: Node, index: number) => {
    if (!selectedId) return { top: `${node.y}%`, left: `${node.x}%`, scale: 1 };
    
    if (node.id === selectedId) {
        return { top: '50%', left: '50%', scale: 1.5, zIndex: 20 };
    } else {
        // Distribute others in a circle
        const angle = (index * (360 / (initialNodes.length - 1))) * (Math.PI / 180);
        const radius = 30; // 30% distance
        return { 
            top: `${50 + Math.sin(angle) * radius}%`, 
            left: `${50 + Math.cos(angle) * radius}%`, 
            scale: 0.8,
            zIndex: 10
        };
    }
  };

  const selectedNode = initialNodes.find(n => n.id === selectedId);

  return (
    <section className="relative h-screen bg-slate overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate via-obsidian to-obsidian opacity-90" />
      
      {/* Header */}
      <div className="absolute top-12 left-0 w-full text-center pointer-events-none px-4 z-30">
        <h2 className="font-serif text-3xl text-offwhite/50">THE NEURAL STACK</h2>
        <p className="font-mono text-xs text-blue mt-2">CLICK TO ANALYZE NODES</p>
      </div>

      <div className="relative w-full max-w-5xl aspect-video mx-auto">
        <svg className="w-full h-full absolute inset-0 pointer-events-none">
             {/* Dynamic lines could go here, simplified for cleaner motion */}
        </svg>

        {initialNodes.map((node, index) => {
            const pos = getPosition(node, index);
            return (
              <motion.div
                key={node.id}
                layout
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                initial={false}
                animate={pos}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
                onClick={() => setSelectedId(selectedId === node.id ? null : node.id)}
              >
                <div className="relative group">
                    {/* Node visual */}
                    <motion.div 
                        className={`w-6 h-6 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(46,92,255,0.3)] transition-colors duration-300
                            ${selectedId === node.id ? 'bg-blue shadow-[0_0_50px_rgba(46,92,255,1)]' : 'bg-obsidian border border-blue group-hover:bg-blue'}
                        `}
                    >
                        <div className="w-2 h-2 bg-offwhite rounded-full" />
                    </motion.div>
                    
                    {/* Label */}
                    <motion.div 
                        className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        animate={{ opacity: selectedId && selectedId !== node.id ? 0 : 1 }}
                    >
                        <span className="font-mono text-[10px] text-blue tracking-wider bg-obsidian/90 border border-blue/20 px-3 py-1 uppercase rounded-sm">{node.label}</span>
                    </motion.div>
                </div>
              </motion.div>
            );
        })}
      </div>

      <AnimatePresence>
        {selectedNode && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-black/90 border-t border-blue/30 p-8 md:p-12 z-50 backdrop-blur-xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                <div>
                    <h3 className="font-serif text-4xl text-offwhite mb-2">{selectedNode.label}</h3>
                    <div className="font-mono text-gold text-sm mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                        CORE_TECH: {selectedNode.tech}
                    </div>
                    <p className="font-mono text-offwhite/80 max-w-xl text-sm leading-relaxed">{selectedNode.description}</p>
                </div>
                <button 
                    onClick={() => setSelectedId(null)}
                    className="font-mono text-xs text-offwhite/40 hover:text-white border border-white/20 px-6 py-3 hover:bg-white/10 transition-colors uppercase self-start md:self-center"
                >
                    Close_Node
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};