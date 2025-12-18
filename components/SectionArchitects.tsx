import React from 'react';
import { motion } from 'framer-motion';
import { Architect } from '../types';

const architects: Architect[] = [
  { id: '1', name: "DR. A. VANCE", role: "Neural Architecture", imageUrl: "https://picsum.photos/seed/person1/400/500?grayscale" },
  { id: '2', name: "S. KOWALSKI", role: "Quantum Logic", imageUrl: "https://picsum.photos/seed/person2/400/500?grayscale" },
  { id: '3', name: "J. DOE", role: "System Ethics", imageUrl: "https://picsum.photos/seed/person3/400/500?grayscale" },
];

export const SectionArchitects: React.FC = () => {
  return (
    <section className="py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 border-b border-bone/20 pb-8">
            <h2 className="font-serif text-5xl text-bone">THE ARCHITECTS</h2>
            <p className="font-mono text-tungsten text-xs mt-2 tracking-widest">HUMAN OVERSIGHT COMMITTEE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {architects.map((arch, index) => (
            <ArchitectCard key={arch.id} architect={arch} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArchitectCard: React.FC<{ architect: Architect; index: number }> = ({ architect, index }) => {
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
        <motion.img 
            src={architect.imageUrl} 
            alt={architect.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 border border-bone/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute top-4 left-4 w-2 h-2 border-l border-t border-tungsten" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-r border-b border-tungsten" />
        </div>
      </div>
      
      <h3 className="font-serif text-2xl text-bone group-hover:text-tungsten transition-colors">{architect.name}</h3>
      <p className="font-mono text-xs text-bone/50 mt-2">{architect.role}</p>
    </motion.div>
  );
};