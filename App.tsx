import React, { useState, useRef } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { SectionHero } from './components/SectionHero';
import { SectionServices } from './components/SectionServices';
import { SectionSelectedWorks } from './components/SectionSelectedWorks';
import { SectionTrust } from './components/SectionTrust';
import { SectionContact } from './components/SectionContact';
import { SectionKnowledge } from './components/SectionKnowledge'; // Keeping Signals/Knowledge
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
        if (muted) {
            audioRef.current.play().catch(e => console.log("Audio autoplay prevented"));
            audioRef.current.volume = 0.15; 
        } else {
            audioRef.current.pause();
        }
        setMuted(!muted);
    }
  };

  return (
    <div className="bg-obsidian min-h-screen text-offwhite selection:bg-blue selection:text-white overflow-x-hidden">
      <CustomCursor />
      
      <audio ref={audioRef} loop>
         <source src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Audio Toggle */}
      <div 
        onClick={toggleAudio}
        className="fixed bottom-6 left-6 z-50 p-3 border border-white/10 rounded-full cursor-pointer bg-black/60 backdrop-blur-md hover:bg-blue/20 transition-colors"
      >
        {muted ? <VolumeX size={16} className="text-offwhite/50" /> : <Volume2 size={16} className="text-blue" />}
      </div>
      
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <Navbar />
          <SectionHero />
          <SectionServices />
          <SectionTrust />
          <SectionSelectedWorks />
          <div id="signals">
             <SectionKnowledge />
          </div>
          <SectionContact />
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