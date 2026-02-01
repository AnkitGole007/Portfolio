'use client';

import { motion } from 'framer-motion';

interface StatusBadgeProps {
  status?: 'available' | 'busy' | 'open';
}

export default function StatusBadge({ status = 'available' }: StatusBadgeProps) {
  const statusConfig = {
    available: {
      text: 'Open to Opportunities',
      color: 'var(--accent-green)',
      bgColor: 'oklch(0.7 0.2 145 / 0.1)',
      borderColor: 'oklch(0.7 0.2 145 / 0.25)',
    },
    busy: {
      text: 'Currently Employed',
      color: 'var(--accent-amber)',
      bgColor: 'oklch(0.75 0.18 70 / 0.1)',
      borderColor: 'oklch(0.75 0.18 70 / 0.25)',
    },
    open: {
      text: 'Open for Freelance',
      color: 'var(--accent-blue)',
      bgColor: 'oklch(0.65 0.2 250 / 0.1)',
      borderColor: 'oklch(0.65 0.2 250 / 0.25)',
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: config.bgColor,
        border: `1px solid ${config.borderColor}`,
        boxShadow: `0 4px 20px ${config.bgColor}`,
      }}
    >
      {/* Pulsing dot with glow */}
      <span className="relative flex h-2.5 w-2.5">
        <motion.span
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inline-flex h-full w-full rounded-full"
          style={{ backgroundColor: config.color }}
        />
        <span
          className="relative inline-flex rounded-full h-2.5 w-2.5"
          style={{
            backgroundColor: config.color,
            boxShadow: `0 0 8px ${config.color}`,
          }}
        />
      </span>
      <span
        className="text-xs font-semibold tracking-wide"
        style={{ color: config.color }}
      >
        {config.text}
      </span>
    </motion.div>
  );
}
