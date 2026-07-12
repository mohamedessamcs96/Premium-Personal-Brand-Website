import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code2, ArrowRight, TrendingUp, Layers } from 'lucide-react'
import SectionHeader from './SectionHeader'

const projects = [
  {
    id: 1,
    title: 'AI Real Estate Assistant',
    category: 'AI/ML',
    size: 'large',
    tags: ['LLMs', 'RAG', 'FastAPI', 'Pinecone'],
    description:
      'Intelligent property search and recommendation engine powered by GPT-4 and RAG pipelines. Handles natural language queries, contract analysis, and market forecasting for 50,000+ listings.',
    tech: ['Python', 'LangChain', 'Pinecone', 'FastAPI', 'React', 'PostgreSQL'],
    result: '40% faster discovery',
    metric: '50K+ listings',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'LLM-Powered FinTech Platform',
    category: 'FinTech',
    size: 'medium',
    tags: ['GPT-4', 'Kafka', 'Microservices'],
    description:
      'Enterprise financial analytics with AI-driven insights, automated reporting, and fraud detection using transformer models.',
    tech: ['Python', 'OpenAI', 'Kafka', 'Docker', 'K8s'],
    result: '99.2% fraud detection',
    metric: '2M+ daily txns',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'Autonomous Driving Research',
    category: 'Research',
    size: 'medium',
    tags: ['CV', 'PyTorch', 'YOLO', 'ROS'],
    description:
      'End-to-end perception pipeline for autonomous vehicles combining semantic segmentation, object detection, and path planning.',
    tech: ['PyTorch', 'OpenCV', 'ROS 2', 'C++'],
    result: 'IEEE Conference',
    metric: 'Published Paper',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 4,
    title: 'Enterprise AI Agents Platform',
    category: 'AI/ML',
    size: 'large',
    tags: ['LangGraph', 'Claude', 'MCP', 'Multi-Agent'],
    description:
      'Multi-agent orchestration system enabling enterprises to automate complex workflows using Claude, GPT-4, and custom fine-tuned models with MCP integrations.',
    tech: ['Python', 'LangGraph', 'Claude API', 'FastAPI', 'Redis'],
    result: '70% automation',
    metric: '12+ enterprise clients',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 5,
    title: 'Medical CV Backend',
    category: 'Backend',
    size: 'small',
    tags: ['PyTorch', 'DICOM', 'AWS'],
    description:
      'HIPAA-compliant high-throughput image processing backend for medical imaging with real-time AI inference.',
    tech: ['FastAPI', 'PyTorch', 'AWS'],
    result: '<200ms latency',
    metric: 'HIPAA Compliant',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 6,
    title: 'Prompt Engineering Toolkit',
    category: 'AI/ML',
    size: 'small',
    tags: ['DSPy', 'Evals', 'OSS'],
    description:
      'Open-source toolkit for systematic prompt optimization, automated evaluation pipelines, and A/B testing of LLM configurations.',
    tech: ['Python', 'DSPy', 'OpenAI', 'W&B'],
    result: '2.4K GitHub Stars',
    metric: 'Open Source',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format',
  },
]

const filters = ['All', 'AI/ML', 'Backend', 'FinTech', 'Research']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PORTFOLIO"
          title="Selected "
          highlight="Projects"
          subtitle="AI systems, backend platforms, and research work — built for real-world impact at scale."
        />

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-brand text-white shadow-lg shadow-brand/25'
                  : 'bg-gray-100 text-text-secondary hover:bg-brand-light hover:text-brand'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
                className={`group relative bg-white border border-border rounded-3xl overflow-hidden cursor-pointer card-hover ${
                  (project.size === 'large') ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden bg-gray-100 ${project.size === 'large' ? 'h-60' : 'h-48'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Category chip */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-brand text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Result badge */}
                  <div className="absolute top-4 right-4">
                    <div className="glass rounded-xl px-3 py-1.5 text-center">
                      <div className="text-[10px] font-bold text-brand leading-none">{project.result}</div>
                      <div className="text-[9px] text-text-secondary leading-none mt-0.5">{project.metric}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Expanded tech stack */}
                  <AnimatePresence>
                    {selectedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-1 border-t border-border">
                          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest mb-2 flex items-center gap-1.5">
                            <Layers size={10} /> Full Stack
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span key={t} className="font-mono bg-gray-100 text-text-secondary text-[10px] px-2 py-0.5 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                    <button className="flex items-center gap-1.5 text-sm font-bold text-brand hover:gap-2.5 transition-all">
                      Case Study <ArrowRight size={14} />
                    </button>
                    <div className="flex gap-1.5">
                      <button className="p-2 rounded-xl text-text-secondary hover:text-brand hover:bg-brand-light transition-all">
                        <Code2 size={15} />
                      </button>
                      <button className="p-2 rounded-xl text-text-secondary hover:text-brand hover:bg-brand-light transition-all">
                        <ExternalLink size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom row — metrics banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: TrendingUp, label: 'Avg. Performance Improvement', value: '45%' },
            { icon: Code2, label: 'Lines of Production Code', value: '2M+' },
            { icon: Layers, label: 'Cloud Platforms Used', value: 'AWS · GCP · Azure' },
            { icon: ExternalLink, label: 'Open Source Projects', value: '12+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bento-highlight rounded-2xl p-4 text-center">
              <Icon size={18} className="text-brand mx-auto mb-1.5" />
              <div className="text-xl font-extrabold text-brand mb-0.5">{value}</div>
              <div className="text-xs text-text-secondary leading-tight">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
