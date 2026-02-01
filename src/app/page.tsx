'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ProfileHero from '@/components/ProfileHero';
import FloatingShortcuts from '@/components/FloatingShortcuts';
import LinkedInHighlights from '@/components/LinkedInHighlights';
import GeminiChat from '@/components/GeminiChat';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const NeuralNetwork3D = dynamic(() => import('@/components/NeuralNetwork3D'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#050505]" />
  ),
});

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <NeuralNetwork3D />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <ProfileHero />
        <FloatingShortcuts />
      </div>

      {/* LinkedIn Highlights */}
      <LinkedInHighlights />

      {/* Chat Button (visible on home) */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 glass-strong p-4 rounded-full
                   hover:glow-accent transition-all duration-300"
      >
        <MessageCircle size={24} className="text-[#0a84ff]" />
      </motion.button>

      {/* Gemini Chat */}
      <GeminiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
}
