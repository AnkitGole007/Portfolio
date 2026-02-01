'use client';

import SectionLayout from '@/components/SectionLayout';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Bot,
  Gamepad2,
  Image as ImageIcon,
  Brain,
  Search,
  Calendar
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Resume & Job Tracker Automation',
    period: 'July 2025 - Present',
    icon: <Bot size={24} />,
    description: 'End-to-end agentic workflow for RAG-guided resume tailoring, cutting manual edits ~90% and lifting ATS alignment +35%.',
    highlights: [
      'Chrome MV3 extension + n8n + FastAPI + Qdrant + Ollama (Llama-3.1/Mistral)',
      '~95% field accuracy across LinkedIn/Indeed with ~80% automation coverage over 500+ postings',
      '0.89 cosine JD-Resume relevance with recruiter-style critiques',
    ],
    tech: ['Chrome Extension', 'n8n', 'FastAPI', 'Qdrant', 'Ollama', 'RAG'],
    color: '#0a84ff',
  },
  {
    id: 2,
    title: 'MADWE: Multi-Agent Diffusion World Engine',
    period: 'Mar 2025 - Present',
    icon: <Gamepad2 size={24} />,
    description: '5-agent Unity-Python system with named-pipe IPC, PyTorch diffusion + LoRA, reducing level-design effort 65-75%.',
    highlights: [
      '1.9x training throughput with PyTorch AMP and torch.compile',
      '35% iteration time reduction via LoRA adapter extraction',
      'Production-minded: bounded tools, explicit handoffs, replayable traces',
    ],
    tech: ['Unity', 'PyTorch', 'Diffusion', 'LoRA', 'Wave Function Collapse', 'Multi-Agent'],
    github: 'https://github.com/AnkitGole007',
    color: '#5e5ce6',
  },
  {
    id: 3,
    title: 'Drag-A-GAN Paper Reimplementation',
    period: 'Feb 2025 - May 2025',
    icon: <ImageIcon size={24} />,
    description: 'Sub-pixel control on 20+ edits with point tracking and generator-feature loss, stabilized with AMP.',
    highlights: [
      '32% step time reduction through fused ops and larger microbatches',
      'Verified with Nsight Systems traces and PyTorch profiler',
      'Exported to ONNX with TensorRT engine benchmarks',
    ],
    tech: ['PyTorch', 'GAN', 'ONNX', 'TensorRT', 'CUDA'],
    github: 'https://github.com/AnkitGole007',
    color: '#bf5af2',
  },
  {
    id: 4,
    title: 'TumorLytix: Brain Tumor Detection',
    period: 'Sept 2024 - Dec 2024',
    icon: <Brain size={24} />,
    description: 'Unsupervised brain tumor detection using CycleGAN pseudo-pairs and conditional diffusion model refinement.',
    highlights: [
      '6-9 point Dice improvement validated across held-out slices',
      '~18-25% false positive reduction with 3.2x experiment turnaround',
      '22% VRAM improvement via gradient checkpointing and mixed precision',
    ],
    tech: ['CycleGAN', 'Diffusion', 'Medical Imaging', 'PyTorch', 'Mixed Precision'],
    github: 'https://github.com/AnkitGole007',
    color: '#30d158',
  },
  {
    id: 5,
    title: 'Fake Review Bounty Hunter',
    period: 'Feb 2025 - May 2025',
    icon: <Search size={24} />,
    description: 'User behavior modeling + graph analytics for fraud detection using DistilBERT and Neo4j.',
    highlights: [
      '32.2% sentiment-rating mismatches detected across 5,000 reviews',
      '15.0% high-rated entities with low positive sentiment surfaced via Neo4j',
      'Prioritized risk nodes using semantic similarity and time-window rules',
    ],
    tech: ['Neo4j', 'DistilBERT', 'Sentence Transformers', 'Graph Analytics', 'Fraud Detection'],
    github: 'https://github.com/AnkitGole007',
    color: '#ff375f',
  },
];

export default function ProjectsPage() {
  return (
    <SectionLayout title="Projects" subtitle="Where ideas become commits">
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-3xl p-8 group hover:glow transition-all duration-500"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl transition-colors"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <span style={{ color: project.color }}>{project.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#0a84ff] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm mt-1">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10
                             hover:border-[#0a84ff]/50 hover:bg-[#0a84ff]/10
                             transition-all duration-300 text-white/70 hover:text-white"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {project.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <p className="text-white/50 text-sm">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full text-xs font-medium
                           border transition-colors"
                  style={{
                    backgroundColor: `${project.color}10`,
                    borderColor: `${project.color}30`,
                    color: project.color,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
