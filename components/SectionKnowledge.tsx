import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const initialPosts = [
  { id: '1', title: 'LLM FINE-TUNING', type: 'VIDEO', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400' },
  { id: '2', title: 'REACT CONCURRENCY', type: 'ARTICLE', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400' },
  { id: '3', title: 'SYSTEM DESIGN 101', type: 'GUIDE', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  { id: '4', title: 'THE AGENTIC WEB', type: 'ESSAY', img: 'https://images.unsplash.com/photo-1531297461136-8200b2765d1d?auto=format&fit=crop&q=80&w=400' },
  { id: '5', title: 'RUST FOR WEB', type: 'TUTORIAL', img: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=400' },
  { id: '6', title: 'SCALING VECTOR DB', type: 'CASE STUDY', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
  { id: '7', title: 'WEB3 SECURITY', type: 'VIDEO', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400' },
  { id: '8', title: 'AESTHETIC UI', type: 'OPINION', img: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=400' },
];

export const SectionKnowledge: React.FC = () => {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    // Mosaic Shuffle Effect
    const interval = setInterval(() => {
      setPosts((prev) => {
        const newArr = [...prev];
        const idx1 = Math.floor(Math.random() * newArr.length);
        let idx2 = Math.floor(Math.random() * newArr.length);
        while (idx1 === idx2) idx2 = Math.floor(Math.random() * newArr.length);
        
        [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];
        return newArr;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-obsidian py-32 border-t border-offwhite/5">
       <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <h2 className="font-serif text-5xl text-offwhite mb-2">SIGNALS</h2>
            <p className="font-mono text-gold text-xs">KNOWLEDGE BASE // INSIGHTS</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.div
              layout
              key={post.id}
              className="relative aspect-square group overflow-hidden bg-slate border border-offwhite/5 cursor-pointer"
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
            >
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <span className="font-mono text-[10px] text-blue border border-blue/30 px-1 mb-2 inline-block bg-obsidian/50 backdrop-blur-md">{post.type}</span>
                <h3 className="font-mono text-sm text-offwhite group-hover:text-gold transition-colors">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};