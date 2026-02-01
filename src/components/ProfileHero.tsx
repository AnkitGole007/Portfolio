'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center z-10 relative"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="relative inline-block mb-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6] rounded-full blur-xl opacity-50 animate-pulse-glow" />
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 glass">
          <Image
            src="/profile.jpeg"
            alt="Ankit Gole"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        <span className="gradient-text">Ankit Gole</span>
      </motion.h1>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-2"
      >
        <p className="text-xl md:text-2xl text-white/80 font-light">
          AI Engineer & Researcher
        </p>
        <p className="text-sm md:text-base text-white/50">
          Masters in Artificial Intelligence @ WPI
        </p>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6 text-white/40 text-sm max-w-md mx-auto"
      >
        Building intelligent systems with LLMs, RAG, and Diffusion Models
      </motion.p>
    </motion.div>
  );
}
