import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GridSlot } from '../types';
import { X, Calendar } from 'lucide-react';

const generateSlots = (): GridSlot[] => {
  return Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    status: Math.random() > 0.6 ? 'locked' : 'available',
    date: `NOV ${1 + i}`,
  }));
};

export const SectionEngagement: React.FC = () => {
  const [slots] = useState<GridSlot[]>(generateSlots());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, status: string) => {
    if (status === 'locked') return;
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 800); // Ripple reset
  };

  return (
    <section className="bg-obsidian py-32 border-t border-offwhite/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-offwhite/10 pb-8">
            <div>
                <h2 className="font-serif text-5xl text-offwhite">COLLABORATION</h2>
                <h3 className="font-serif text-2xl text-offwhite/40 mt-2">MENTORSHIP & ENGINEERING</h3>
            </div>
            <div className="text-right mt-8 md:mt-0">
                <p className="font-mono text-xs text-blue">AVAILABILITY_MATRIX</p>
                <p className="font-mono text-xs text-offwhite/30">Q4 2024</p>
            </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-[1px] bg-offwhite/10 border border-offwhite/10">
          {slots.map((slot, idx) => (
            <motion.div
              key={slot.id}
              className={`
                aspect-square relative flex flex-col items-center justify-center cursor-pointer bg-obsidian
                ${slot.status === 'locked' ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue/5'}
              `}
              onClick={() => handleClick(idx, slot.status)}
            >
              {/* Ripple Effect */}
              {activeIndex === idx && (
                <motion.div 
                    className="absolute inset-0 border border-blue"
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.6 }}
                />
              )}

              {slot.status === 'locked' ? (
                <div className="relative">
                    <span className="font-mono text-xs text-offwhite/20 line-through">{slot.date}</span>
                    <X className="absolute -top-3 -right-4 w-8 h-8 text-red-900/50 opacity-50" strokeWidth={1} />
                </div>
              ) : (
                <>
                    <Calendar className="w-4 h-4 text-blue mb-2 opacity-50" />
                    <span className="font-mono text-xs text-offwhite">{slot.date}</span>
                </>
              )}
              
              {slot.status === 'available' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-blue/90 z-10">
                    <span className="font-mono text-obsidian font-bold text-[10px] tracking-widest">INITIALIZE</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-between font-mono text-[10px] text-offwhite/30">
            <span>[*] SELECT DATE TO REQUEST ACCESS</span>
            <span>SECURE CHANNEL ENCRYPTED</span>
        </div>
      </div>
    </section>
  );
};