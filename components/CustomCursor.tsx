import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isClicking, setIsClicking] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'link' | 'text'>('default');
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      
      // Check for custom cursor text
      const customText = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      
      if (customText) {
        setHoverState('text');
        setCursorText(customText);
      } else if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.style.cursor === 'pointer'
      ) {
        setHoverState('link');
        setCursorText('');
      } else {
        setHoverState('default');
        setCursorText('');
      }
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [cursorX, cursorY]);

  // Dynamic width based on text
  const width = hoverState === 'text' ? 'auto' : hoverState === 'link' ? 60 : 20;
  const height = hoverState === 'text' ? 40 : hoverState === 'link' ? 60 : 20;

  return (
    <>
      {/* Main Probe */}
      <motion.div
        className="fixed top-0 left-0 bg-blue rounded-full pointer-events-none z-[10000] mix-blend-screen flex items-center justify-center overflow-hidden backdrop-blur-sm"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: width,
          height: height,
          scale: isClicking ? 0.8 : 1,
          opacity: 0.8,
          backgroundColor: hoverState === 'text' ? 'rgba(0, 87, 255, 0.9)' : 'rgba(0, 87, 255, 0.6)'
        }}
      >
        {hoverState === 'text' && (
           <motion.span 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-white font-mono text-[10px] whitespace-nowrap px-3 font-bold tracking-widest"
           >
             {cursorText}
           </motion.span>
        )}
      </motion.div>
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9999] opacity-30"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ delay: 0.1 }}
      />
    </>
  );
};