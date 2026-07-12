import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code2, ArrowRight, TrendingUp, Layers } from 'lucide-react'
import SectionHeader from './SectionHeader'

const projects = [
  {
    id: 1,
    title: 'DropMe',
    category: 'AI/ML',
    size: 'large',
    tags: ['IoT', 'Computer Vision', 'Real-Time Dashboards'],
    description:
      'IoT & AI recycling platform transforming plastic waste. Connects recycling machines to cloud infrastructure with real-time dashboards processing 10,000+ daily transactions and an AI material-classification model.',
    tech: ['Python', 'IoT', 'PyTorch', 'AWS', 'React'],
    result: '92% classification accuracy',
    metric: '10K+ daily transactions',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'Rawatb',
    category: 'FinTech',
    size: 'medium',
    tags: ['Payroll', 'Payments', 'ERP Integration'],
    description:
      'Payroll & salary-advance management system for a UK fintech client. Integrated payment gateways, automated financial reconciliation, and led the Wafeq ERP integration for financial synchronization.',
    tech: ['Node.js', 'NestJS', 'PostgreSQL', 'Wafeq API'],
    result: '35% faster backend',
    metric: 'Automated reconciliation',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'Stilt',
    category: 'FinTech',
    size: 'medium',
    tags: ['Django', 'Flask', 'Financial Workflows'],
    description:
      'Comprehensive financial services platform for a US-based fintech company. Built scalable backend systems with RESTful APIs, integrations, and automated data-processing pipelines.',
    tech: ['Django', 'Flask', 'Python', 'PostgreSQL'],
    result: 'US-based client',
    metric: 'Automated workflows',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 4,
    title: 'AI-Powered Content Creator',
    category: 'AI/ML',
    size: 'large',
    tags: ['Next.js', 'NestJS', 'Prompt Engineering'],
    description:
      'Full-stack, AI-enabled content generation platform built for a leading US-based AI solutions company, integrating advanced prompt engineering for dynamic, AI-driven interactions.',
    tech: ['Next.js', 'NestJS', 'Node.js', 'OpenAI API'],
    result: 'Secure & scalable',
    metric: 'NDA-compliant delivery',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 5,
    title: 'Atlas Visa',
    category: 'Backend',
    size: 'small',
    tags: ['Automation', 'ML', 'Payments'],
    description:
      'Visa application & payment management system for a US client. AI-driven automation with ML-based document processing workflows, improving operational efficiency.',
    tech: ['Python', 'ML', 'Payments API'],
    result: 'Improved efficiency',
    metric: 'Document automation',
    image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 6,
    title: 'OIA Clinic',
    category: 'Backend',
    size: 'small',
    tags: ['Healthcare', 'Reporting'],
    description:
      'Advanced healthcare management & reporting system, built to streamline clinic operations and patient data reporting.',
    tech: ['Python', 'Django', 'PostgreSQL'],
    result: 'Healthcare platform',
    metric: 'Reporting system',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 7,
    title: 'Marketing Analysis & Reporting',
    category: 'Research',
    size: 'small',
    tags: ['Data Analysis', 'Reporting'],
    description:
      'Data-driven insights platform for marketing analytics and reporting, turning raw campaign data into actionable decisions.',
    tech: ['Python', 'Data Pipelines'],
    result: 'Data-driven insights',
    metric: 'Analytics platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
  },
  {
    id: 8,
    title: 'Aqar Chat',
    category: 'AI/ML',
    size: 'large',
    tags: ['WhatsApp API', 'Gemini', 'GPT', 'Lead Qualification'],
    description:
      'AI-powered WhatsApp real estate assistant built on the Meta WhatsApp Business API. Uses Google Gemini and OpenAI GPT to understand client requirements, recommend properties, answer questions, qualify leads, and schedule visits — connecting buyers and renters with the right brokers.',
    tech: ['WhatsApp Business API', 'Google Gemini', 'OpenAI GPT', 'Node.js'],
    result: 'Jan 2026–Present',
    metric: 'Soft Blue Ocean',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=600&fit=crop&auto=format',
  },
  {
    id: 9,
    title: 'MaaQraah',
    category: 'AI/ML',
    size: 'medium',
    tags: ['Speech-to-Text', 'Prompt Engineering', 'Zoom API'],
    description:
      'AI-powered Quran learning platform analyzing recitation with speech-to-text models, generating personalized feedback and automated tests. Designed the backend architecture, built the AI recitation-analysis and assessment system, integrated Zoom for live classes, and managed production deployment.',
    tech: ['Python', 'Speech-to-Text AI', 'Zoom API', 'Prompt Engineering'],
    result: 'Nov 2025–Present',
    metric: 'Soft Blue Ocean',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=700&h=500&fit=crop&auto=format',
  },
  {
    id: 10,
    title: 'Waqood Amin (MVP)',
    category: 'Backend',
    size: 'small',
    tags: ['Prototype', 'Geolocation'],
    description:
      'Prototype app for tracking gas stations across Saudi Arabia, giving drivers real-time location, availability, and service information.',
    tech: ['Backend API', 'Geolocation'],
    result: 'MVP Prototype',
    metric: 'Jan–May 2024',
    image: 'https://images.unsplash.com/photo-1545262810-77515befe149?w=600&h=400&fit=crop&auto=format',
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
