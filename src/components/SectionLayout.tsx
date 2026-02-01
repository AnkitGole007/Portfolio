'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import NavigationIsland from './NavigationIsland';
import GeminiChat from './GeminiChat';
import { ArrowLeft } from 'lucide-react';
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
      {/* 3D Background */}
      <NeuralNetwork3D />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/')}
        className="fixed top-6 left-6 z-50 glass rounded-full p-3 flex items-center gap-2
                   hover:glow transition-all duration-300 group"
      >
        <ArrowLeft size={20} className="text-white/70 group-hover:text-white transition-colors" />
        <span className="text-white/70 group-hover:text-white text-sm pr-2 transition-colors">
          Home
        </span>
      </motion.button>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{title}</h1>
            {subtitle && (
              <p className="text-white/50 text-lg">{subtitle}</p>
            )}
          </motion.div>

          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
