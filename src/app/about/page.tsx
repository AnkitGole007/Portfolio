'use client';

import SectionLayout from '@/components/SectionLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Github,
  Linkedin,
  Sparkles,
  Languages,
  Brain,
  Database,
  Bot,
  Palette,
} from 'lucide-react';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

const personalInfo = [
  { icon: <MapPin size={14} />, value: 'Worcester, MA' },
  { icon: <Mail size={14} />, value: 'ankit17.gole@gmail.com' },
  { icon: <Phone size={14} />, value: '+1 (774) 525-2916' },
];

const socialLinks = [
  { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/AnkitGole007' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/ankit-gole' },
];

const languages = [
  { name: 'English', level: 'Professional', color: 'var(--accent-blue)' },
  { name: 'Hindi', level: 'Professional', color: 'var(--accent-purple)' },
  { name: 'Marathi', level: 'Professional', color: 'var(--accent-violet)' },
];

const expertise = [
  {
    icon: <Brain size={20} />,
    title: 'LLM Fine-tuning',
    description: 'LoRA/QLoRA, PEFT methods, threshold calibration',
    color: 'var(--accent-blue)',
  },
  {
    icon: <Database size={20} />,
    title: 'RAG Systems',
    description: 'Vector DBs, hybrid search, re-ranking',
    color: 'var(--accent-purple)',
  },
  {
    icon: <Bot size={20} />,
    title: 'Agentic AI',
    description: 'Multi-agent orchestration, tool use',
    color: 'var(--accent-violet)',
  },
  {
    icon: <Palette size={20} />,
    title: 'Generative Models',
    description: 'Diffusion models, GANs, production optimization',
    color: 'var(--accent-amber)',
  },
];

export default function AboutPage() {
  return (
    <SectionLayout title="About Me" subtitle="The human behind the algorithms">
      {/* Main 2-Column Bento Grid */}
      <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-4 lg:space-y-5">

          {/* Profile Card - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-futuristic p-6"
          >
            <div className="flex flex-col items-center text-center">
              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative mb-4"
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-violet)] rounded-2xl blur-xl opacity-30 animate-pulse-glow" />
                <div className="relative w-28 h-28 rounded-xl overflow-hidden border-2 border-white/10">
                  <Image
                    src={`${basePath}/profile.jpeg`}
                    alt="Ankit Gole"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <h2 className="text-2xl font-bold text-white mb-1">Ankit Gole</h2>
              <p className="text-sm font-medium gradient-text-accent mb-3">
                Agentic AI Engineer & Researcher
              </p>

              {/* Social Links */}
              <div className="flex gap-2 mb-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-lg glass text-white/60 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* Contact Info - Stacked */}
              <div className="w-full space-y-2">
                {personalInfo.map((item) => (
                  <div
                    key={item.value}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] text-xs"
                  >
                    <span className="text-[var(--accent-blue)]">{item.icon}</span>
                    <span className="text-white/60">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="card-futuristic p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Languages size={16} className="text-[var(--accent-blue)]" />
              <h4 className="text-sm font-semibold text-white">Languages</h4>
            </div>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03]"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-white text-sm">{lang.name}</span>
                  </div>
                  <span className="text-white/40 text-xs">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Expertise - Compact Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-futuristic p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-[var(--accent-purple)]" />
              <h4 className="text-sm font-semibold text-white">Core Expertise</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + idx * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
                >
                  <div
                    className="p-2 rounded-lg w-fit mb-2"
                    style={{ backgroundColor: `color-mix(in oklch, ${item.color} 15%, transparent)` }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <h5 className="text-xs font-semibold text-white mb-1">{item.title}</h5>
                  <p className="text-[10px] text-white/40 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 space-y-4 lg:space-y-5">

          {/* About Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-futuristic p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-3">Background</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Specializing in LLM fine-tuning, retrieval systems, and evaluation for
              commerce signals and user behavior modeling. I build reproducible AI
              prototypes on Azure and HPC infrastructure with calibrated metrics,
              audit-ready artifacts, and deployment-focused testing.
            </p>
          </motion.div>

          {/* Education - Full Width on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="card-futuristic p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-purple)]/20">
                <GraduationCap size={20} className="text-[var(--accent-blue)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Education</h3>
                <p className="text-white/40 text-xs">Academic Background</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Masters */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-medium text-white">
                      Worcester Polytechnic Institute
                    </h4>
                    <p className="text-[var(--accent-blue)] text-sm">Masters in Artificial Intelligence</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs shrink-0">
                    <Calendar size={12} />
                    <span>2024 - 2026</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: 'oklch(0.7 0.2 145 / 0.15)',
                      color: 'var(--accent-green)'
                    }}>
                    GPA: 3.88/4.0
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['LLMs', 'Generative AI', 'Deep Learning', 'NLP', 'MLOps'].map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10
                               text-white/50 text-[10px]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bachelors */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h4 className="text-base font-medium text-white">
                      PES Modern College of Engineering
                    </h4>
                    <p className="text-[var(--accent-purple)] text-sm">Bachelor of Engineering - IT</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs shrink-0">
                    <Calendar size={12} />
                    <span>2018 - 2022</span>
                  </div>
                </div>
                <p className="text-white/40 text-xs">
                  Foundation in computer science, algorithms, and software development
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { value: '3.88', label: 'GPA', color: 'var(--accent-green)' },
              { value: '2+', label: 'Years AI/ML', color: 'var(--accent-blue)' },
              { value: '10+', label: 'Projects', color: 'var(--accent-purple)' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="card-futuristic p-4 text-center"
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionLayout>
  );
}
