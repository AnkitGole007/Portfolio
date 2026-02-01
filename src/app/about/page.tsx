'use client';

import SectionLayout from '@/components/SectionLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Github,
  Linkedin
} from 'lucide-react';

const personalInfo = [
  { icon: <MapPin size={18} />, label: 'Location', value: 'Worcester, MA' },
  { icon: <Mail size={18} />, label: 'Email', value: 'aggole@wpi.edu' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+1 (774) 525-2916' },
];

const socialLinks = [
  { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/AnkitGole007' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/ankit-gole' },
];

export default function AboutPage() {
  return (
    <SectionLayout title="About Me" subtitle="The human behind the algorithms">
      <div className="space-y-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start"
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6] rounded-2xl blur-xl opacity-30" />
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={`${basePath}/profile.jpeg`}
                alt="Ankit Gole"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Ankit Gole</h2>
            <p className="text-[#0a84ff] font-medium mb-4">AI Engineer & Researcher</p>
            <p className="text-white/60 leading-relaxed mb-6">
              Agentic AI Engineer specializing in LLM fine-tuning, retrieval systems, and
              evaluation for commerce signals and user behavior modeling. I build reproducible
              AI prototypes on Azure and HPC infrastructure with calibrated metrics,
              audit-ready artifacts, and deployment-focused testing.
            </p>

            {/* Personal Info */}
            <div className="space-y-3">
              {personalInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-[#0a84ff]">{item.icon}</span>
                  <span className="text-white/50 text-sm">{item.label}:</span>
                  <span className="text-white/90 text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10
                           hover:border-[#0a84ff]/50 hover:bg-[#0a84ff]/10
                           transition-all duration-300 text-white/70 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[#0a84ff]/20">
              <GraduationCap size={24} className="text-[#0a84ff]" />
            </div>
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
              <div>
                <h4 className="text-lg font-medium text-white">
                  Worcester Polytechnic Institute (WPI)
                </h4>
                <p className="text-[#0a84ff]">Masters in Artificial Intelligence</p>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Calendar size={14} />
                <span>Aug 2024 - May 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="text-white/70">GPA:</span>
              <span className="text-white font-medium">3.88/4.0</span>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm mb-3">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'Generative AI', 'Deep Learning', 'NLP', 'MLOps', 'Information Retrieval'].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10
                             text-white/70 text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'LLM Fine-tuning',
                description: 'LoRA/QLoRA adapters, PEFT methods, and threshold calibration for domain-specific tasks'
              },
              {
                title: 'RAG Systems',
                description: 'Vector databases, hybrid search, re-ranking, and grounding with evaluation harnesses'
              },
              {
                title: 'Agentic AI',
                description: 'Multi-agent orchestration with LangChain, tool use, and controllable autonomous systems'
              },
              {
                title: 'Generative Models',
                description: 'Diffusion models, GANs, and image generation with production optimization'
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10
                         hover:border-[#0a84ff]/30 transition-colors"
              >
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
