'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import NavigationIsland from './NavigationIsland';
import GeminiChat from './GeminiChat';
import ScrollProgress from './ScrollProgress';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NeuralNetwork3D = dynamic(() => import('./NeuralNetwork3D'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#050505]" />,
});

interface SectionLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function SectionLayout({ children, title, subtitle }: SectionLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const router = useRouter();

  return (
    <main className="relative min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3D Background */}
      <NeuralNetwork3D />

      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505]/60 to-transparent" />
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        className="fixed top-8 left-8 z-50 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3
                   hover:glow transition-all duration-300 group"
      >
        <ArrowLeft size={18} className="text-white/70 group-hover:text-[#0a84ff] transition-colors" />
        <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
          Home
        </span>
      </motion.button>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center pt-28 pb-36 px-6">
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Decorative element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles size={14} className="text-[#0a84ff]" />
              <span className="text-xs text-white/50 uppercase tracking-widest font-medium">
                {subtitle || 'Portfolio'}
              </span>
              <Sparkles size={14} className="text-[#5e5ce6]" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text-animated">{title}</span>
            </h1>

            {subtitle && (
              <p className="text-white/40 text-lg md:text-xl font-light tracking-wide">
                {subtitle}
              </p>
            )}

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#0a84ff] to-transparent"
            />
          </motion.div>

          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {children}
          </motion.div>
        </div>
      </div>

      {/* Navigation Island */}
      <NavigationIsland
        showChat
        onChatToggle={() => setIsChatOpen(!isChatOpen)}
        isChatOpen={isChatOpen}
      />

      {/* Gemini Chat */}
      <GeminiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
}
