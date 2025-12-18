import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Terminal, Wand2, MonitorPlay } from 'lucide-react';

export const SectionSelectedWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax Values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <section id="works" className="py-24 md:py-32 bg-slate border-t border-white/5 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
                <h2 className="font-serif text-4xl md:text-6xl text-offwhite mb-4">SELECTED WORKS</h2>
                <p className="font-mono text-blue text-xs tracking-widest">AGENCY PORTFOLIO</p>
            </div>
            <div className="font-mono text-xs text-offwhite/40 text-right hidden md:block">
                <p>QUALITY: PREMIUM</p>
                <p>STATUS: PRODUCTION_READY</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1 - Faster Parallax */}
            <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                {/* Project 1: Agentic System */}
                <motion.div 
                    className="relative h-[600px] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden group rounded-sm"
                    whileHover={{ scale: 0.98 }}
                >
                    <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-5" />
                    <div className="absolute top-0 right-0 p-6 z-20">
                        <ExternalLink className="text-offwhite/40 hover:text-blue transition-colors cursor-pointer" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
                        <div className="flex items-center gap-2 mb-2">
                            <Terminal size={16} className="text-blue" />
                            <span className="font-mono text-xs text-blue">FINANCIAL AGENT SWARM</span>
                        </div>
                        <h3 className="font-serif text-4xl text-offwhite mb-2">VELOCITY RAG</h3>
                        <p className="font-mono text-sm text-offwhite/60 max-w-xl">
                            Multi-agent architecture. Autonomously ingests market reports and generates summaries.
                        </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                        <div className="w-3/4 h-3/4 bg-black border border-white/20 rounded-lg p-6 font-mono text-xs text-green-500 shadow-2xl overflow-hidden relative">
                             <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                             </div>
                             <div className="mt-6 space-y-2 opacity-80">
                                <p>> Initializing Agent Swarm...</p>
                                <p>> User Query: "Summarize Q3 Tech Trends"</p>
                                <p className="text-blue">>> PROCESSING...</p>
                             </div>
                        </div>
                    </div>
                </motion.div>

                 {/* Project 3: Minimalist SaaS (Moved to Col 1 for layout) */}
                <motion.div className="relative h-[500px] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden group rounded-sm">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <MonitorPlay className="w-24 h-24 text-white/5 group-hover:text-blue/20 transition-colors duration-500" strokeWidth={0.5} />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
                         <div className="flex items-center gap-2 mb-2">
                            <MonitorPlay size={16} className="text-blue" />
                            <span className="font-mono text-xs text-blue">RUST & REACT SAAS</span>
                        </div>
                        <h3 className="font-serif text-3xl text-offwhite">NEXUS DASHBOARD</h3>
                        <p className="font-mono text-xs text-offwhite/50 mt-2">High-performance Landing Page & App</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Column 2 - Slower Parallax */}
            <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:pt-32">
                 {/* Project 2: Generative Ad Campaign */}
                <motion.div className="relative h-[500px] border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden group rounded-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                             <img 
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
                                className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105" 
                                alt="AI Art"
                             />
                             <div className="absolute inset-0 bg-black/50" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
                         <div className="flex items-center gap-2 mb-2">
                            <Wand2 size={16} className="text-gold" />
                            <span className="font-mono text-xs text-gold">AI AD GENERATION</span>
                        </div>
                        <h3 className="font-serif text-3xl text-offwhite">LUMINA CAMPAIGN</h3>
                        <p className="font-mono text-xs text-offwhite/50 mt-2">Midjourney + Figma + Motion</p>
                    </div>
                </motion.div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};