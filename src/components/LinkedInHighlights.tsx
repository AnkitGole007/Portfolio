'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Zap, TrendingUp, Target } from 'lucide-react';

const highlights = [
  {
    icon: <Trophy size={20} />,
    title: 'GQP MVP Award',
    description: 'Data Science MVP - PayPal',
    color: 'oklch(0.8 0.15 85)', // Gold in OKLCH
    size: 'large',
  },
  {
    icon: <Award size={18} />,
    title: '3rd Best GQP Team',
    description: 'Data Science Fall 2025',
    color: 'var(--accent-blue)',
    size: 'normal',
  },
  {
    icon: <Star size={18} />,
    title: '3.88 GPA',
    description: 'Masters in AI at WPI',
    color: 'var(--accent-purple)',
    size: 'normal',
  },
  {
    icon: <Zap size={18} />,
    title: '0.85 F1 Score',
    description: 'PayPal Risk Decisioning',
    color: 'var(--accent-green)',
    size: 'wide',
  },
  {
    icon: <TrendingUp size={18} />,
    title: '20x Efficiency',
    description: 'Training Data Reduction',
    color: 'var(--accent-violet)',
    size: 'normal',
  },
  {
    icon: <Target size={18} />,
    title: '87.4% Accuracy',
    description: 'Entity Matching',
    color: 'var(--accent-amber)',
    size: 'normal',
  },
];

export default function LinkedInHighlights() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <div className="glass-strong rounded-2xl p-4 w-[220px]">
        <h3 className="text-white/60 text-[10px] font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)]" />
          Highlights
        </h3>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-2">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + idx * 0.08 }}
              className={`
                group relative overflow-hidden rounded-xl p-3
                bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                border border-white/[0.08] hover:border-white/20
                transition-all duration-300 hover:-translate-y-0.5
                ${item.size === 'large' ? 'col-span-2 row-span-1' : ''}
                ${item.size === 'wide' ? 'col-span-2' : ''}
              `}
              style={{
                '--highlight-color': item.color,
              } as React.CSSProperties}
            >
              {/* Gradient accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                }}
              />

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 60%)`,
                }}
              />

              <div className={`flex ${item.size === 'large' ? 'flex-row items-center gap-4' : 'flex-col gap-2'}`}>
                <div
                  className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110 w-fit"
                  style={{
                    backgroundColor: `color-mix(in oklch, ${item.color} 15%, transparent)`,
                  }}
                >
                  <span style={{ color: item.color }} className="block">
                    {item.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-xs font-semibold truncate group-hover:text-white transition-colors">
                    {item.title}
                  </p>
                  <p className="text-white/40 text-[10px] truncate group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated border effect for the container */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: 'conic-gradient(from var(--gradient-angle), var(--accent-blue), var(--accent-purple), var(--accent-violet), var(--accent-blue))',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '1px',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
