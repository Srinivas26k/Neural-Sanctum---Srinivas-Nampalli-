import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GridSlot } from '../types';
import { Lock, Zap } from 'lucide-react';

const generateSlots = (): GridSlot[] => {
  return Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    status: Math.random() > 0.7 ? 'locked' : 'available',
    date: `OCT ${10 + i}`,
  }));
};

export const SectionConsultation: React.FC = () => {
  const [slots, setSlots] = useState<GridSlot[]>(generateSlots());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, status: string) => {
    if (status === 'locked') return;
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 1000); // Shockwave reset
  };

  return (
    <section className="bg-obsidian py-32 border-t border-bone/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-5xl text-bone">CONSULTATION</h2>
            <div className="text-right">
                <p className="font-mono text-xs text-tungsten">SERVER_RACK_04</p>
                <p className="font-mono text-xs text-bone/30">SELECT A TERMINAL</p>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 bg-bone/5 border border-bone/10 p-1">
          {slots.map((slot, idx) => (
            <motion.div
              key={slot.id}
              className={`
                aspect-square relative flex flex-col items-center justify-center border border-bone/5 cursor-pointer overflow-hidden
                ${slot.status === 'locked' ? 'bg-stripes opacity-50 cursor-not-allowed' : 'hover:bg-bone/5'}
              `}
              onClick={() => handleClick(idx, slot.status)}
              whileHover={slot.status === 'available' ? { scale: 0.98 } : {}}
            >
              {/* Shockwave Effect */}
              {activeIndex === idx && (
                <motion.div 
                    className="absolute inset-0 bg-tungsten"
                    initial={{ opacity: 0.8, scale: 0 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 0.5 }}
                />
              )}

              {slot.status === 'locked' ? (
                <Lock className="w-5 h-5 text-bone/20 mb-2" />
              ) : (
                <Zap className="w-5 h-5 text-tungsten mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              <span className="font-mono text-xs text-bone/40">{slot.date}</span>
              
              {slot.status === 'available' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-obsidian/90">
                    <span className="font-mono text-tungsten text-xs blink">INITIALIZE</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};