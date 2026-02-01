'use client';

import SectionLayout from '@/components/SectionLayout';
import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  Star,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Data Science GQP MVP Award',
    organization: 'PayPal Global Credit Risk GQP',
    period: 'Fall 2025',
    icon: <Trophy size={28} />,
    description: 'Recognized as Most Valuable Player for exceptional contributions to LLM fine-tuning for risk decisioning.',
    color: '#ffd700',
  },
  {
    id: 2,
    title: '3rd Best Data Science GQP Team',
    organization: 'Worcester Polytechnic Institute',
    period: 'Fall 2025',
    icon: <Award size={28} />,
    description: 'Team recognized among top performers for outstanding data science research in the Graduate Qualifying Project.',
    color: '#0a84ff',
  },
  {
    id: 3,
    title: '3.88/4.0 GPA',
    organization: 'Masters in AI at WPI',
    period: '2024 - 2026',
    icon: <Star size={28} />,
    description: 'Maintaining exceptional academic performance while conducting research, TA duties, and internships.',
    color: '#5e5ce6',
  },
];

const metrics = [
  {
    value: '20x',
    label: 'Training Efficiency',
    description: 'Matched ML benchmark with 5% data',
    icon: <TrendingUp size={20} />,
    color: '#30d158',
  },
  {
    value: '87.4%',
    label: 'Matching Accuracy',
    description: 'At 93% lower review cost',
    icon: <Target size={20} />,
    color: '#0a84ff',
  },
  {
    value: '0.85 F1',
    label: 'Model Performance',
    description: 'PayPal risk decisioning',
    icon: <Zap size={20} />,
    color: '#bf5af2',
  },
  {
    value: '~95%',
    label: 'Intent Routing',
    description: 'Multi-agent accuracy',
    icon: <Star size={20} />,
    color: '#ff375f',
  },
];

export default function AchievementsPage() {
  return (
    <SectionLayout title="Achievements" subtitle="Milestones along the journey">
      <div className="space-y-8">
        {/* Main Achievements */}
        <div className="grid gap-6">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="glass rounded-3xl p-8 hover:glow transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div
                  className="p-4 rounded-2xl flex-shrink-0"
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <span style={{ color: achievement.color }}>{achievement.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <span className="text-white/40 text-sm">{achievement.period}</span>
                  </div>
                  <p className="text-[#0a84ff] font-medium mb-2">{achievement.organization}</p>
                  <p className="text-white/60 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-6">Key Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-5 text-center group cursor-default"
              >
                <div
                  className="inline-flex p-2 rounded-lg mb-3"
                  style={{ backgroundColor: `${metric.color}20` }}
                >
                  <span style={{ color: metric.color }}>{metric.icon}</span>
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-white/80 text-sm font-medium mb-1">{metric.label}</div>
                <div className="text-white/40 text-xs">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Research Impact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'PayPal Credit Risk Research',
                impact: 'Fine-tuned LLMs achieving industry-grade risk decisioning metrics with minimal training data',
              },
              {
                title: 'Cascading Matcher System',
                impact: 'Reduced review costs by 93% while maintaining 87.4% accuracy through intelligent routing',
              },
              {
                title: 'Medical Imaging (TumorLytix)',
                impact: 'Advanced unsupervised brain tumor detection aligned with FDA-authorized AI pathways',
              },
              {
                title: 'Multi-Agent Game Development',
                impact: 'Pioneered production-minded agent control with bounded tools and replayable traces',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10
                         hover:border-[#0a84ff]/30 transition-colors"
              >
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
