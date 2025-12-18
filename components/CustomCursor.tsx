import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isClicking, setIsClicking] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      setIsHoveringLink(
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.style.cursor === 'pointer'
      );
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

  return (
    <>
      {/* Main Probe */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-blue rounded-full pointer-events-none z-[10000] mix-blend-screen shadow-[0_0_15px_rgba(0,87,255,0.8)]"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.5 : isHoveringLink ? 1.5 : 1,
          opacity: 0.8
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border border-gold rounded-full pointer-events-none z-[9999] opacity-30"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        transition={{ delay: 0.1 }} // Artificial Lag
      />
    </>
  );
};