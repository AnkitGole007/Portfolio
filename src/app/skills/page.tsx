'use client';

import SectionLayout from '@/components/SectionLayout';
import { motion } from 'framer-motion';
import {
  Brain,
  Database,
  Cloud,
  Code2,
  Sparkles,
  GitBranch
} from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: 'Generative AI & LLM Engineering',
    icon: <Sparkles size={24} />,
    color: '#0a84ff',
    skills: [
      'PyTorch', 'Python', 'Hugging Face', 'CUDA', 'TensorRT',
      'LLMs', 'FLAN-T5', 'DistilBERT', 'MiniLM', 'CLIP',
      'RAG', 'Vector Search (Qdrant)', 'Embeddings',
      'LoRA/QLoRA Fine-tuning', 'Diffusion Models',
      'CycleGAN', 'StyleGAN2', 'Prompt Engineering'
    ],
  },
  {
    id: 2,
    title: 'RAG, Agents & Evaluation',
    icon: <Brain size={24} />,
    color: '#5e5ce6',
    skills: [
      'RAG Architectures', 'Chunking', 'Embedding Selection',
      'Qdrant', 'FAISS', 'Milvus', 'Pinecone',
      'Hybrid Search', 'Re-ranking', 'RAGAS', 'DeepEval',
      'Guardrails', 'Hallucination Tests', 'PII Redaction',
      'LangChain', 'LlamaIndex', 'Semantic Kernel',
      'Planner-Executor', 'Observability & Tracing'
    ],
  },
  {
    id: 3,
    title: 'Machine Learning & Data Science',
    icon: <Database size={24} />,
    color: '#bf5af2',
    skills: [
      'PEFT', 'LoRA', 'QLoRA', 'Diffusion Models',
      'Sentence Transformers', 'BM25', 'MRR@K',
      'A/B Testing', 'Drift Detection', 'Uplift Modeling',
      'NDCG', 'Hybrid Search', 'Reinforcement Learning',
      'TensorFlow', 'Scikit-Learn', 'PySpark', 'Keras'
    ],
  },
  {
    id: 4,
    title: 'Programming & Development',
    icon: <Code2 size={24} />,
    color: '#30d158',
    skills: [
      'Python', 'FastAPI', 'Flask', 'REST APIs',
      'Pydantic', 'OpenCV', 'MediaPipe',
      'React', 'AngularJS', 'Chrome MV3 Extensions',
      'Bash Scripting', 'Multithreading',
      'Object-Oriented Programming', 'Systems Integration'
    ],
  },
  {
    id: 5,
    title: 'Cloud & MLOps',
    icon: <Cloud size={24} />,
    color: '#ff375f',
    skills: [
      'Azure ML', 'Azure AI Foundry', 'GCP Vertex AI',
      'BigQuery', 'Docker', 'Kubernetes',
      'Terraform', 'GitHub Actions CI/CD',
      'MLflow', 'Prometheus', 'Grafana',
      'Infrastructure-as-Code', 'Model Registry'
    ],
  },
  {
    id: 6,
    title: 'Data & Databases',
    icon: <GitBranch size={24} />,
    color: '#ffd60a',
    skills: [
      'PostgreSQL', 'MySQL', 'SQLite', 'MongoDB',
      'Neo4j (Graph)', 'Redis',
      'PySpark', 'Pandas', 'NumPy',
      'Google Sheets/Drive APIs', 'n8n Orchestration'
    ],
  },
];

export default function SkillsPage() {
  return (
    <SectionLayout title="Skills" subtitle="My neural network stack">
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-3xl p-6 hover:glow transition-all duration-500"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <span style={{ color: category.color }}>{category.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium
                           border cursor-default transition-all duration-300"
                  style={{
                    backgroundColor: `${category.color}08`,
                    borderColor: `${category.color}25`,
                    color: `${category.color}`,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
