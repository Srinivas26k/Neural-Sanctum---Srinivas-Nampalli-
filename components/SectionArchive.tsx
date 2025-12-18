import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const initialProjects: Project[] = [
  { id: 'p1', title: 'PROJECT_ALPHA', description: 'Neural Mapping', imageUrl: 'https://picsum.photos/seed/p1/400/400?grayscale' },
  { id: 'p2', title: 'PROJECT_BETA', description: 'Visual Synth', imageUrl: 'https://picsum.photos/seed/p2/400/400?grayscale' },
  { id: 'p3', title: 'PROJECT_GAMMA', description: 'Audio Reactive', imageUrl: 'https://picsum.photos/seed/p3/400/400?grayscale' },
  { id: 'p4', title: 'PROJECT_DELTA', description: 'Data Sculpt', imageUrl: 'https://picsum.photos/seed/p4/400/400?grayscale' },
  { id: 'p5', title: 'PROJECT_EPSILON', description: 'Void Structure', imageUrl: 'https://picsum.photos/seed/p5/400/400?grayscale' },
  { id: 'p6', title: 'PROJECT_ZETA', description: 'Light Echo', imageUrl: 'https://picsum.photos/seed/p6/400/400?grayscale' },
  { id: 'p7', title: 'PROJECT_ETA', description: 'Code Poet', imageUrl: 'https://picsum.photos/seed/p7/400/400?grayscale' },
  { id: 'p8', title: 'PROJECT_THETA', description: 'Silicon Mind', imageUrl: 'https://picsum.photos/seed/p8/400/400?grayscale' },
];

export const SectionArchive: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => {
        const newArr = [...prev];
        const idx1 = Math.floor(Math.random() * newArr.length);
        let idx2 = Math.floor(Math.random() * newArr.length);
        while (idx1 === idx2) idx2 = Math.floor(Math.random() * newArr.length);
        
        [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];
        return newArr;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-obsidian py-32">
       <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-5xl text-bone mb-12 border-b border-bone/10 pb-6">ARCHIVE_LOGS</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className="relative aspect-square group overflow-hidden bg-slate border border-bone/5"
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-mono text-sm text-tungsten">{project.title}</h3>
                <p className="font-mono text-xs text-bone/50">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};