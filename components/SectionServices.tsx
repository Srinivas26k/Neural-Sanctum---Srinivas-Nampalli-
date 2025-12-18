import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Palette } from 'lucide-react';

export const SectionServices: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "COGNITIVE INFRASTRUCTURE",
      icon: <BrainCircuit className="w-8 h-8 md:w-12 md:h-12 text-blue" strokeWidth={1} />,
      items: ["Autonomous Agentic Systems", "Enterprise RAG Pipelines", "Custom LLM Fine-Tuning", "Intelligent Chatbots"],
      desc: "Replacing manual workflows with sentient, self-correcting AI workforce architectures."
    },
    {
      title: "HYPER-PERFORMANCE ENG",
      icon: <Cpu className="w-8 h-8 md:w-12 md:h-12 text-blue" strokeWidth={1} />,
      items: ["Rust & Python Logic", "Minimalist Backend Systems", "React/Next.js Frontends", "High-Speed Automation"],
      desc: "Building lean, lightning-fast digital products using memory-safe, low-latency technologies."
    },
    {
      title: "GENERATIVE AESTHETICS",
      icon: <Palette className="w-8 h-8 md:w-12 md:h-12 text-blue" strokeWidth={1} />,
      items: ["AI-Generated Ad Campaigns", "High-Fidelity Figma Mockups", "Bootcamps & MasterSessions", "Creative Direction"],
      desc: "Merging algorithmic precision with visual artistry to capture market attention."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:mb-24 border-b border-white/10 pb-8">
                <h2 className="font-serif text-4xl md:text-6xl text-offwhite mb-4">BESPOKE SERVICES</h2>
                <div className="flex justify-between items-end">
                    <p className="font-mono text-blue text-xs tracking-widest">AGENCY CAPABILITIES</p>
                    <p className="hidden md:block font-mono text-[10px] text-offwhite/40">SELECT_VECTOR</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        className={`
                            relative p-8 md:p-10 border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden group transition-all duration-700
                            ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-30 scale-95 grayscale' : 'opacity-100'}
                        `}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        whileHover={{ y: -10, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                        {/* Premium Holographic Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative z-10">
                            <div className="mb-8 p-4 bg-white/5 w-fit rounded-full border border-white/5 group-hover:border-blue/50 group-hover:shadow-[0_0_20px_rgba(46,92,255,0.3)] transition-all duration-500">
                                {service.icon}
                            </div>
                            
                            <h3 className="font-serif text-2xl text-offwhite mb-4 group-hover:text-blue transition-colors">{service.title}</h3>
                            <p className="font-mono text-xs text-offwhite/60 mb-8 h-12 leading-relaxed">{service.desc}</p>
                            
                            <ul className="space-y-3 border-t border-white/10 pt-6">
                                {service.items.map((item, i) => (
                                    <li key={i} className="font-mono text-sm text-offwhite/80 flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_5px_#2E5CFF] transition-all" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};