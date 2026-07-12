import { motion } from 'framer-motion'
import { MapPin, Award, Mic2, BookOpen, Building2, GraduationCap } from 'lucide-react'
import SectionHeader from './SectionHeader'

const timeline = [
  {
    year: '2024–Now',
    role: 'Senior AI Engineer & Tech Consultant',
    org: 'Independent / Freelance',
    type: 'work',
    description: 'Building AI-powered products for international clients, delivering corporate workshops, and publishing educational content.',
    icon: Building2,
  },
  {
    year: '2022–2024',
    role: 'AI Engineering Lead',
    org: 'FinTech Startup (MENA)',
    type: 'work',
    description: 'Led a team of 8 engineers building LLM-powered financial analytics and intelligent automation systems.',
    icon: Building2,
  },
  {
    year: '2021–2023',
    role: 'Adjunct Lecturer – AI & Software Engineering',
    org: 'Cairo University',
    type: 'education',
    description: 'Teaching AI Engineering, Software Architecture, and Backend Development to 200+ students per semester.',
    icon: GraduationCap,
  },
  {
    year: '2020–2022',
    role: 'Senior Backend Engineer',
    org: 'PropTech Platform (Dubai)',
    type: 'work',
    description: 'Architected scalable microservices infrastructure processing 2M+ daily transactions. Led AI feature integration.',
    icon: Building2,
  },
  {
    year: '2019',
    role: 'MSc Computer Science – AI Track',
    org: 'Cairo University',
    type: 'education',
    description: 'Thesis: Deep learning approaches for autonomous driving perception. Graduated with distinction.',
    icon: GraduationCap,
  },
  {
    year: '2017',
    role: 'BSc Software Engineering',
    org: 'Cairo University',
    type: 'education',
    description: 'Graduated top of class. Final year project: AI-powered medical image analysis system.',
    icon: GraduationCap,
  },
]

const achievements = [
  { icon: Award, label: 'IEEE Best Paper Award', sub: 'IROS 2023 – Autonomous Driving' },
  { icon: Mic2, label: '12 Conference Talks', sub: 'PyCon, ArabicNLP, MENA Tech' },
  { icon: BookOpen, label: '6 Published Papers', sub: 'IEEE, ACM, arXiv' },
  { icon: MapPin, label: 'Clients in 8 Countries', sub: 'UAE, KSA, Egypt, UK, USA...' },
]

const skills = [
  { category: 'AI & ML', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'HuggingFace', 'LangChain', 'LangGraph', 'OpenAI API', 'Anthropic API', 'DSPy', 'RAG', 'Fine-tuning'] },
  { category: 'Backend', items: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Kafka', 'Celery', 'SQLAlchemy', 'Alembic'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'GitHub Actions', 'Nginx'] },
  { category: 'Research', items: ['Computer Vision', 'NLP', 'Autonomous Driving', 'Object Detection', 'Semantic Segmentation'] },
]

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Careem', 'Noon', 'talabat', 'Property Finder', 'Tabby',
]

export default function About() {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT"
          title="The "
          highlight="Story"
          subtitle="A decade of building AI systems, training engineers, and advancing the field through research and education."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand" />
              Professional Journey
            </h3>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand-accent to-transparent" />
              <div className="space-y-6">
                {timeline.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="relative pl-14"
                    >
                      <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        item.type === 'work'
                          ? 'bg-brand border-brand text-white'
                          : 'bg-white border-brand-accent text-brand-accent'
                      }`}>
                        <Icon size={16} />
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-border hover:border-brand/30 hover:shadow-sm transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h4 className="font-bold text-text-primary text-sm">{item.role}</h4>
                          <span className="font-mono text-xs text-brand bg-brand-light px-2 py-0.5 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-brand-accent mb-1.5">{item.org}</p>
                        <p className="text-sm text-text-secondary">{item.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Achievements */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-brand" />
                Highlights
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((a, i) => {
                  const Icon = a.icon
                  return (
                    <motion.div
                      key={a.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-border hover:border-brand/30 transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-brand" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-primary">{a.label}</div>
                        <div className="text-xs text-text-secondary">{a.sub}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-brand" />
                Tech Stack
              </h3>
              <div className="flex flex-col gap-3">
                {skills.map((s) => (
                  <div key={s.category} className="bg-white rounded-2xl p-4 border border-border">
                    <p className="text-xs font-bold text-brand uppercase tracking-wider mb-2">
                      {s.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <span key={item} className="font-mono text-xs bg-gray-100 text-text-secondary px-2 py-0.5 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-brand" />
                Worked With
              </h3>
              <div className="bg-white rounded-2xl p-4 border border-border">
                <div className="flex flex-wrap gap-2">
                  {companies.map((c) => (
                    <span key={c} className="bg-gray-100 text-text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
