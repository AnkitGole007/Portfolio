'use client';

import { useState, useEffect } from 'react';
import ProfileHero from '@/components/ProfileHero';
import OrbitalNavigation from '@/components/OrbitalNavigation';
import LinkedInHighlights from '@/components/LinkedInHighlights';
import GeminiChat from '@/components/GeminiChat';
import CommandPalette from '@/components/CommandPalette';
import LoadingScreen from '@/components/LoadingScreen';
import CursorParticles from '@/components/CursorParticles';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Command palette keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Tesla Coil Sparkles */}
      <CursorParticles />

      {/* Command Palette */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />

      <main className="relative min-h-screen overflow-hidden bg-[var(--background)]">
        {/* 3D Orbital Navigation */}
        <OrbitalNavigation />

        {/* Profile Hero - Centered overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="pointer-events-auto">
            <ProfileHero />
          </div>
        </div>

        {/* LinkedIn Highlights */}
        <LinkedInHighlights />

        {/* Chat Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: 'spring' }}
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 glass-strong p-4 rounded-full
                     hover:glow-accent transition-all duration-300 group"
        >
          <MessageCircle size={24} className="text-[#0a84ff] group-hover:text-white transition-colors" />
        </motion.button>

        {/* Gemini Chat */}
        <GeminiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </main>
    </>
  );
}
