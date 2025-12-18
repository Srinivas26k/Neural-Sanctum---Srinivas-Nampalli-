import React, { useState, useRef, useEffect } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { SectionHero } from './components/SectionHero';
import { SectionProcess } from './components/SectionProcess';
import { SectionSelectedWorks } from './components/SectionSelectedWorks';
import { SectionNetwork } from './components/SectionNetwork';
import { SectionEngagement } from './components/SectionEngagement';
import { SectionKnowledge } from './components/SectionKnowledge';
import { Footer } from './components/Footer';
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle audio toggle
  const toggleAudio = () => {
    if (audioRef.current) {
        if (muted) {
            audioRef.current.play().catch(e => console.log("Audio autoplay prevented"));
            audioRef.current.volume = 0.2; // Low ambient hum
        } else {
            audioRef.current.pause();
        }
        setMuted(!muted);
    }
  };

  return (
    <div className="bg-obsidian min-h-screen text-offwhite selection:bg-blue selection:text-white">
      <CustomCursor />
      
      {/* Ambient Audio (Brownian Noise / Server Hum) */}
      <audio ref={audioRef} loop>
         {/* Using a placeholder white noise generator url or file */}
         <source src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3" type="audio/mpeg" />
      </audio>

      {/* Audio Toggle */}
      <div 
        onClick={toggleAudio}
        className="fixed bottom-8 left-8 z-50 p-3 border border-offwhite/10 rounded-full cursor-pointer bg-obsidian/80 hover:bg-blue/20 transition-colors"
      >
        {muted ? <VolumeX size={16} className="text-offwhite/50" /> : <Volume2 size={16} className="text-blue" />}
      </div>
      
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <SectionHero />
          <SectionProcess />
          <SectionSelectedWorks />
          <SectionNetwork />
          <SectionEngagement />
          <SectionKnowledge />
          <Footer />
        </main>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .blink {
            animation: blink 2s infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

export default App;