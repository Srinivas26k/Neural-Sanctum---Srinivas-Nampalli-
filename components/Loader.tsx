import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  
  const bootSequence = [
    "INITIALIZING KERNEL...",
    "LOADING NEURAL MAPS...",
    "OPTIMIZING TENSORS...",
    "ESTABLISHING SECURE HANDSHAKE...",
    "DECRYPTING PORTFOLIO DATA...",
    "SYSTEM READY."
  ];

  useEffect(() => {
    // Progress Bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 5; // Random speed
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Log Sequence
    const logInterval = setInterval(() => {
        const nextLogIndex = Math.floor((progress / 100) * bootSequence.length);
        if (bootSequence[nextLogIndex] && !log.includes(bootSequence[nextLogIndex])) {
            setLog(prev => [...prev, bootSequence[nextLogIndex]].slice(-4));
        }
    }, 100);
    return () => clearInterval(logInterval);
  }, [progress, log]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian text-offwhite font-mono">
      <div className="w-80">
        <div className="flex justify-between text-xs text-blue mb-2">
            <span>COMPILING</span>
            <span>{Math.min(100, Math.floor(progress))}%</span>
        </div>
        <div className="h-1 w-full bg-slate relative overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-blue"
                style={{ width: `${progress}%` }}
            />
        </div>
        <div className="mt-4 h-24 flex flex-col justify-end">
            {log.map((line, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-xs ${line === "SYSTEM READY." ? "text-gold font-bold" : "text-offwhite/50"}`}
                >
                    {`> ${line}`}
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};