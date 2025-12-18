import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'HOME', href: '#' },
    { name: 'CAPABILITIES', href: '#services' },
    { name: 'WORKS', href: '#works' },
    { name: 'SIGNALS', href: '#signals' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navigation - Top Right */}
      <motion.nav
        className={`hidden md:flex fixed top-8 right-8 z-50 items-center gap-8 px-8 py-4 rounded-full border transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-lg shadow-blue/5' 
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-mono text-xs text-offwhite/60 hover:text-blue hover:tracking-widest transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </motion.nav>

      {/* Mobile Navigation - Bottom Center Pill */}
      <motion.nav
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center gap-4 shadow-2xl">
           <span className="font-mono text-xs text-blue font-bold">MENU</span>
           <div className="h-4 w-[1px] bg-white/20" />
           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-offwhite">
             {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center gap-8 md:hidden"
            >
                {links.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-serif text-3xl text-offwhite hover:text-blue transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};