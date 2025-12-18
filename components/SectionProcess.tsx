import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const SectionProcess: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);
  
  // "Liquid Wipe" Overlay Control
  // We simulate a wipe by moving a mask or overlay as scroll progresses
  const wipeY = useTransform(scrollYProgress, [0, 0.3, 0.35, 0.6, 0.65, 1], ["100%", "100%", "0%", "100%", "0%", "100%"]);

  const steps = [
    {
      id: "I",
      title: "ARCHITECTURE",
      subtitle: "The Blueprint",
      desc: "System design, scalar strategy, and foundational logic.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
    },
    {
      id: "II",
      title: "INTELLIGENCE",
      subtitle: "AI/ML Integration",
      desc: "Training models, fine-tuning LLMs, and neural injections.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3"
    },
    {
      id: "III",
      title: "DEPLOYMENT",
      subtitle: "Global Scale",
      desc: "CI/CD pipelines, edge computing, and immersive frontend delivery.",
      img: "https://images.unsplash.com/photo-1558494949-ef526b01201b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center bg-slate overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                 <img src={step.img} alt="bg" className="w-full h-full object-cover grayscale opacity-20" />
                 <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
              </div>

              {/* Liquid Data Wipe Overlay (Between slides) */}
              <motion.div 
                className="absolute inset-0 z-20 bg-blue/10 backdrop-blur-sm pointer-events-none flex flex-col items-center justify-center"
                style={{ 
                    y: wipeY,
                    opacity: useTransform(wipeY, ["100%", "0%"], [0, 1])
                }}
              >
                  <div className="font-mono text-blue text-opacity-50 text-xs">
                      {Array.from({length: 20}).map((_, i) => (
                          <div key={i}>{Math.random().toString(36).substring(2)}</div>
                      ))}
                  </div>
              </motion.div>
              
              <div className="relative z-10 p-12 max-w-5xl w-full flex flex-col md:flex-row items-end gap-12">
                <div className="flex-1">
                    <span className="font-mono text-blue text-sm tracking-widest block mb-4 border-b border-blue/30 pb-2 w-fit">PHASE {step.id}</span>
                    <h2 className="font-serif text-6xl md:text-8xl text-offwhite mb-2">{step.title}</h2>
                    <h3 className="font-serif text-2xl text-offwhite/50 italic mb-8">{step.subtitle}</h3>
                    
                    <div className="font-mono text-offwhite/70 text-lg border-l-2 border-gold pl-6 py-2 max-w-md">
                        {step.desc}
                    </div>
                </div>
                
                {/* Visual Data Decorator */}
                <div className="hidden md:block w-64 h-64 border border-offwhite/10 relative bg-black/50 backdrop-blur-sm p-4">
                    <div className="text-[10px] font-mono text-blue h-full overflow-hidden">
                        <div>> SYS_MONITOR_PHASE_{step.id}</div>
                        <div>> CPU: {30 + idx * 20}%</div>
                        <div>> MEM: {12 + idx * 8}GB</div>
                        <br/>
                        <div className="opacity-50">
                            {Array.from({length: 10}).map((_, i) => (
                                <div key={i}>0x{Math.random().toString(16).substring(2, 8).toUpperCase()} ... OK</div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-full h-[1px] bg-offwhite/20 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};