'use client';

import SectionLayout from '@/components/SectionLayout';
import { motion } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'PayPal',
    role: 'Applied LLM Researcher',
    subtitle: 'Global Credit Risk GQP (WPI)',
    period: 'Aug 2025 - Dec 2025',
    duration: '5 months',
    location: 'Worcester, MA',
    highlights: [
      'Improved decision quality with 0.85 F1, 0.835 MCC, 0.743 KS by fine-tuning Phi-4-mini using LoRA adapters and CALM-style tabular-to-text prompts',
      'Delivered 20x training-data efficiency by matching ML benchmark performance using 1/5 training slices',
      'Validated semantic robustness with feature-order A/B tests, holding accuracy near 0.947 and F1 near 0.85',
      'Implemented AES-GCM encrypted transfer workflow with restricted directories and one-time token handling',
      'Benchmarked Random Forest, SVM, and XGBoost across 10-seed stability tests on 692,922 records with 216 attributes',
    ],
    color: '#0a84ff',
  },
  {
    id: 2,
    company: 'Worcester Polytechnic Institute',
    role: 'AI Researcher',
    period: 'Aug 2025 - Present',
    duration: '7 months',
    location: 'Worcester, MA',
    highlights: [
      'Achieved 87.4% matching accuracy at 93% lower review cost with 4-tier cascading matcher using lexical rules, SBERT + Logistic Regression, Llama 3.1 8B chain-of-thought, and human escalation',
      'Improved F1-per-cost by 11.9x by routing 65% high-confidence pairs to low-cost matching with Platt and temperature scaling',
      'Improved upstream data quality by 20% via schema checks, null scans, normalization UDFs, and blocking rules',
      'Reduced deployment time 6x with Gradio dashboard featuring real-time budget tracking and audit-ready JSON export',
    ],
    color: '#5e5ce6',
  },
  {
    id: 3,
    company: 'Worcester Polytechnic Institute',
    role: 'Graduate Assistant',
    subtitle: 'FIN 530 - Cryptocurrencies and Financial Markets',
    period: 'Apr 2025 - Dec 2025',
    duration: '9 months',
    location: 'Worcester, MA',
    highlights: [
      'Assisted with labs on regulated stablecoins and CBDCs using Hyperledger Fabric, Docker, Python, and GitHub',
      'Mentored student teams designing token architectures and compliance processes',
      'Graded quizzes, midterms, and project reports on stablecoins, tokenization, and quantum-safe payments',
    ],
    color: '#30d158',
    isEducation: true,
  },
  {
    id: 4,
    company: 'Worcester Polytechnic Institute',
    role: 'Graduate Assistant',
    subtitle: 'FIN 540 - Financial Analytics',
    period: 'Jan 2025 - Mar 2025',
    duration: '3 months',
    location: 'Worcester, MA',
    highlights: [
      'Reviewed homework and projects on portfolio theory, risk and return, forecasting, and regression using Python and Excel',
      'Debugged student code and spreadsheets, demonstrating how changes affect risk metrics and investment decisions',
      'Contributed to refining grading rubrics by analyzing frequent errors',
    ],
    color: '#ffd60a',
    isEducation: true,
  },
  {
    id: 5,
    company: 'NeuralSeek',
    role: 'AI Intern (Agent Builder)',
    period: 'Aug 2025 - Sept 2025',
    duration: '2 months',
    location: 'Remote',
    highlights: [
      'Built scalable natural language AI agents using NeuralSeek\'s no-code generative AI platform',
      'Completed advanced certifications, designed and deployed original AI agents',
      'Conducted competitive analyses of AI platforms and collaborated on real-world problem solving',
      'Gained hands-on experience with cutting-edge AI agent architectures',
    ],
    color: '#bf5af2',
  },
  {
    id: 6,
    company: 'Atos IT Solutions and Services',
    role: 'System Engineer',
    period: 'Aug 2023 - Jul 2024',
    duration: '1 year',
    location: 'Pune, India',
    highlights: [
      'Progressed from Digital Workplace Trainee to System Engineer over 2+ years',
      'Worked on enterprise IT solutions and services',
    ],
    color: '#ff375f',
    subRoles: [
      { role: 'Associate Engineer', period: 'Nov 2022 - Aug 2023', duration: '10 months' },
      { role: 'Digital Workplace (DWP) Trainee', period: 'Jul 2022 - Dec 2022', duration: '6 months' },
    ],
  },
  {
    id: 7,
    company: 'Larsen & Toubro',
    role: 'Web Developer Intern',
    period: 'Aug 2020 - Nov 2020',
    duration: '4 months',
    location: 'Pune, India',
    highlights: [
      'Interned as a Website Developer at L&T Defence, Talegaon',
      'Made updates to Company Portal and improved element functionality',
      'Worked on Defence Newsletter website as a UI/UX developer',
    ],
    color: '#ff9500',
  },
];

export default function ExperiencePage() {
  return (
    <SectionLayout title="Experience" subtitle="From intern to AI whisperer">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0a84ff] via-[#5e5ce6] to-[#bf5af2] hidden md:block" />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-0 md:pl-16"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-8 w-12 h-12 rounded-full hidden md:flex items-center justify-center"
                style={{ backgroundColor: `${exp.color}20` }}
              >
                {exp.isEducation ? (
                  <GraduationCap size={20} style={{ color: exp.color }} />
                ) : (
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                )}
              </div>

              {/* Card */}
              <div className="glass rounded-3xl p-6 hover:glow transition-all duration-500">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <Building2 size={18} style={{ color: exp.color }} />
                      <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                    </div>
                    <p className="text-[#0a84ff] font-medium">{exp.role}</p>
                    {exp.subtitle && (
                      <p className="text-white/50 text-sm mt-0.5">{exp.subtitle}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-2 text-white/50">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/50">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <ChevronRight
                        size={14}
                        className="mt-1 flex-shrink-0"
                        style={{ color: exp.color }}
                      />
                      <p className="text-white/60 text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Sub-roles (for Atos) */}
                {exp.subRoles && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Previous Roles</p>
                    <div className="space-y-2">
                      {exp.subRoles.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between text-sm">
                          <span className="text-white/70">{sub.role}</span>
                          <span className="text-white/40">{sub.period}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
