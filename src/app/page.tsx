'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ProfileHero from '@/components/ProfileHero';
import FloatingShortcuts from '@/components/FloatingShortcuts';
import LinkedInHighlights from '@/components/LinkedInHighlights';
import GeminiChat from '@/components/GeminiChat';
import CommandPalette from '@/components/CommandPalette';
import EasterEgg from '@/components/EasterEgg';
import LoadingScreen from '@/components/LoadingScreen';
import CursorParticles from '@/components/CursorParticles';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const NeuralNetwork3D = dynamic(() => import('@/components/NeuralNetwork3D'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#030304]" />
  ),
});

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

      {/* Cursor Particles */}
      <CursorParticles />

      {/* Easter Egg */}
      <EasterEgg />

      {/* Command Palette */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />

      <main className="relative min-h-screen overflow-hidden">
        {/* 3D Background */}
        <NeuralNetwork3D />

        {/* Gradient overlays */}
        <div className="fixed inset-0 pointer-events-none z-[1]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030304]/80" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030304]/40 to-transparent" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <ProfileHero />
          <FloatingShortcuts />
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
