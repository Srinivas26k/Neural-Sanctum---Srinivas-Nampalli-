import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Node } from '../types';

// Updated Skills Data
const nodes: Node[] = [
  { id: '1', x: 20, y: 30, label: 'LLM ENG', tech: 'LangChain / OpenAI', description: 'Designing autonomous agents and RAG pipelines for enterprise knowledge retrieval.' },
  { id: '2', x: 50, y: 50, label: 'CORE', tech: 'Python / Rust', description: 'High-performance backend logic and memory-safe systems programming.' },
  { id: '3', x: 80, y: 30, label: 'CLOUD', tech: 'AWS / Terraform', description: 'Infrastructure as Code (IaC) for scalable, self-healing deployments.' },
  { id: '4', x: 35, y: 70, label: 'VISUAL', tech: 'Three.js / WebGL', description: 'Creating immersive, GPU-accelerated web experiences.' },
  { id: '5', x: 65, y: 70, label: 'DATA', tech: 'Postgres / Vector', description: 'Complex schema design and high-dimensional vector search implementations.' },
];

export const SectionNetwork: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  return (
    <section className="relative h-screen bg-slate overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate via-obsidian to-obsidian opacity-90" />
      
      {/* Header */}
      <div className="absolute top-12 left-0 w-full text-center pointer-events-none">
        <h2 className="font-serif text-3xl text-offwhite/50">CORE COMPETENCIES</h2>
        <p className="font-mono text-xs text-blue">INTERACTIVE NETWORK GRAPH</p>
      </div>

      <div className="relative w-full max-w-5xl aspect-video mx-auto">
        <svg className="w-full h-full absolute inset-0 pointer-events-none">
          {/* Connecting Lines */}
          <motion.line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#0057FF" strokeWidth="1" strokeOpacity="0.2" />
          <motion.line x1="80%" y1="30%" x2="50%" y2="50%" stroke="#0057FF" strokeWidth="1" strokeOpacity="0.2" />
          <motion.line x1="35%" y1="70%" x2="50%" y2="50%" stroke="#0057FF" strokeWidth="1" strokeOpacity="0.2" />
          <motion.line x1="65%" y1="70%" x2="50%" y2="50%" stroke="#0057FF" strokeWidth="1" strokeOpacity="0.2" />
          <motion.line x1="35%" y1="70%" x2="20%" y2="30%" stroke="#0057FF" strokeWidth="1" strokeOpacity="0.1" />
        </svg>

        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onClick={() => setSelectedNode(node)}
            whileHover={{ scale: 1.2 }}
          >
            <div className="relative group">
                {/* Node visual */}
                <div className="w-6 h-6 bg-obsidian border border-blue rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,87,255,0.3)] group-hover:bg-blue group-hover:shadow-[0_0_25px_rgba(0,87,255,0.8)] transition-all duration-300">
                    <div className="w-2 h-2 bg-offwhite rounded-full" />
                </div>
                {/* Label */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="font-mono text-[10px] text-blue tracking-wider bg-obsidian/90 border border-blue/20 px-2 py-1 uppercase">{node.label}</span>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedNode && (
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-obsidian/95 border-t border-blue/30 p-8 md:p-12 z-50 backdrop-blur-xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="max-w-4xl mx-auto flex justify-between items-start">
                <div>
                    <h3 className="font-serif text-4xl text-offwhite mb-2">{selectedNode.label}</h3>
                    <div className="font-mono text-gold text-sm mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                        STACK: {selectedNode.tech}
                    </div>
                    <p className="font-mono text-offwhite/70 max-w-xl text-sm leading-relaxed">{selectedNode.description}</p>
                </div>
                <button 
                    onClick={() => setSelectedNode(null)}
                    className="font-mono text-xs text-offwhite/40 hover:text-white border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors"
                >
                    CLOSE
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};