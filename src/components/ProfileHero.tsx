'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TypingEffect from './TypingEffect';
import StatusBadge from './StatusBadge';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const roles = [
  'Agentic AI Engineer',
  'LLM Researcher',
  'ML Engineer',
  'RAG Systems Builder',
  'Full-Stack AI Developer',
];

export default function ProfileHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center z-10 relative"
    >
      {/* Profile Image with Animated Border */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="relative inline-block mb-8"
      >
        {/* Animated gradient rings using CSS @property */}
        <div className="absolute -inset-3 rounded-full animated-border opacity-60" />

        {/* Orbiting ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-5 rounded-full"
          style={{
            border: '1px solid oklch(0.65 0.2 250 / 0.25)',
          }}
        />

        {/* Orbiting ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-7 rounded-full"
          style={{
            border: '1px solid oklch(0.55 0.22 280 / 0.15)',
          }}
        />

        {/* Orbiting ring 3 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-9 rounded-full"
          style={{
            border: '1px solid oklch(0.6 0.25 310 / 0.1)',
          }}
        />

        {/* Pulsing glow effect */}
        <div
          className="absolute inset-0 rounded-full blur-2xl glow-pulse"
          style={{
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-violet))',
            opacity: 0.4,
          }}
        />

        {/* Image container with glass effect */}
        <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden glass-strong">
          <Image
            src={`${basePath}/profile.jpeg`}
            alt="Ankit Gole"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle inner glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 30px oklch(0.65 0.2 250 / 0.2)',
            }}
          />
        </div>
      </motion.div>

      {/* Name with enhanced gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
      >
        <span className="gradient-text-animated">Ankit Gole</span>
      </motion.h1>

      {/* Typing Title with OKLCH accent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="h-8 md:h-10 mb-4"
      >
        <TypingEffect
          texts={roles}
          className="text-xl md:text-2xl font-medium"
          style={{ color: 'var(--accent-blue)' }}
          typingSpeed={80}
          deletingSpeed={40}
          pauseTime={2500}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-sm md:text-base mb-2"
        style={{ color: 'oklch(0.7 0.02 260)' }}
      >
        Masters in Artificial Intelligence @ WPI
      </motion.p>

      {/* Tagline with subtle gradient */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-sm max-w-md mx-auto mb-4"
        style={{ color: 'oklch(0.55 0.02 260)' }}
      >
        Building intelligent systems with LLMs, RAG, and Diffusion Models
      </motion.p>

      {/* Status Badge */}
      <StatusBadge status="available" />

      {/* Command palette hint with modern styling */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 flex items-center justify-center gap-2 text-xs"
        style={{ color: 'oklch(0.5 0.02 260)' }}
      >
        <span>Press</span>
        <kbd
          className="px-2.5 py-1.5 rounded-lg font-mono text-[11px] transition-all duration-200 hover:scale-105"
          style={{
            background: 'oklch(0.15 0.02 260)',
            border: '1px solid oklch(1 0 0 / 0.1)',
            boxShadow: '0 2px 8px oklch(0 0 0 / 0.3), inset 0 1px 0 oklch(1 0 0 / 0.05)',
          }}
        >
          ⌘K
        </kbd>
        <span>to navigate</span>
      </motion.div>
    </motion.div>
  );
}
