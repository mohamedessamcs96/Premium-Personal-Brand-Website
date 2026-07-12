import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Clock, Users, BookOpen, Building2, ChevronRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

const workshops = [
  {
    title: 'AI for Developers',
    emoji: '🤖',
    duration: '2 days',
    audience: 'Software Engineers',
    level: 'Intermediate',
    outcomes: ['LLM fundamentals & APIs', 'Building AI-powered features', 'Prompt engineering basics', 'AI integration patterns'],
    labs: 3,
    color: 'bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200',
    tag: 'Most Popular',
  },
  {
    title: 'Prompt Engineering Mastery',
    emoji: '✨',
    duration: '1 day',
    audience: 'Developers & PMs',
    level: 'All Levels',
    outcomes: ['Prompt design patterns', 'Chain-of-thought techniques', 'Few-shot & zero-shot', 'Evaluation frameworks'],
    labs: 4,
    color: 'bg-gradient-to-br from-violet-50 to-purple-100 border-violet-200',
    tag: null,
  },
  {
    title: 'Building AI Agents',
    emoji: '⚡',
    duration: '2 days',
    audience: 'Senior Engineers',
    level: 'Advanced',
    outcomes: ['Agent architectures', 'Tool use & MCP', 'Multi-agent orchestration', 'LangGraph & LangChain'],
    labs: 5,
    color: 'bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200',
    tag: 'New',
  },
  {
    title: 'GitHub Copilot & AI Dev Tools',
    emoji: '🛠',
    duration: '1 day',
    audience: 'Engineering Teams',
    level: 'Beginner',
    outcomes: ['Copilot workflow mastery', 'AI-assisted code review', 'Test generation', 'Documentation AI'],
    labs: 3,
    color: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200',
    tag: null,
  },
  {
    title: 'LLM APIs & Integration',
    emoji: '🔌',
    duration: '1 day',
    audience: 'Backend Engineers',
    level: 'Intermediate',
    outcomes: ['OpenAI & Anthropic APIs', 'Streaming responses', 'Function calling', 'Cost optimization'],
    labs: 4,
    color: 'bg-gradient-to-br from-teal-50 to-cyan-100 border-teal-200',
    tag: null,
  },
  {
    title: 'Backend Best Practices',
    emoji: '🏗',
    duration: '2 days',
    audience: 'Backend Engineers',
    level: 'Intermediate',
    outcomes: ['API design principles', 'Database optimization', 'Caching strategies', 'Security patterns'],
    labs: 6,
    color: 'bg-gradient-to-br from-slate-50 to-gray-100 border-slate-200',
    tag: null,
  },
  {
    title: 'Docker & Kubernetes',
    emoji: '🐳',
    duration: '3 days',
    audience: 'DevOps & Engineers',
    level: 'Intermediate',
    outcomes: ['Container fundamentals', 'Kubernetes orchestration', 'Helm charts', 'CI/CD pipelines'],
    labs: 8,
    color: 'bg-gradient-to-br from-sky-50 to-blue-100 border-sky-200',
    tag: null,
  },
  {
    title: 'System Design for Engineers',
    emoji: '📐',
    duration: '2 days',
    audience: 'Mid–Senior Engineers',
    level: 'Advanced',
    outcomes: ['Scalability patterns', 'Database selection', 'Distributed systems', 'Trade-off analysis'],
    labs: 5,
    color: 'bg-gradient-to-br from-rose-50 to-pink-100 border-rose-200',
    tag: 'Top Rated',
  },
]

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-blue-100 text-blue-700',
  Advanced: 'bg-purple-100 text-purple-700',
  'All Levels': 'bg-gray-100 text-gray-600',
}

export default function Workshops() {
  const navigate = useNavigate()
  const scrollToContact = () => navigate('/contact')

  return (
    <section id="workshops" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="WORKSHOPS"
          title="Hands-On "
          highlight="Workshops"
          subtitle="Intensive, practical workshops designed for engineering teams. All sessions include live coding labs, Q&A, and take-home resources."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg card-hover ${w.color}`}
            >
              {w.tag && (
                <div className="absolute top-3 right-3">
                  <span className="bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {w.tag}
                  </span>
                </div>
              )}

              <div className="text-3xl mb-3">{w.emoji}</div>
              <h3 className="text-base font-bold text-text-primary mb-1">{w.title}</h3>

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColor[w.level]}`}>
                  {w.level}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 mb-4 text-xs text-text-secondary">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-brand" />
                  {w.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={12} className="text-brand" />
                  {w.audience}
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={12} className="text-brand" />
                  {w.labs} hands-on labs
                </div>
              </div>

              <ul className="space-y-1 mb-5">
                {w.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-1.5 text-xs text-text-secondary">
                    <ChevronRight size={11} className="text-brand mt-0.5 flex-shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-1.5 bg-white/80 hover:bg-brand hover:text-white border border-brand/20 text-brand text-xs font-semibold py-2 rounded-xl transition-all duration-200"
              >
                <Building2 size={12} />
                Book for Team
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-text-secondary"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            All workshops available in-person or remote
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            Custom content tailored to your stack
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent" />
            Arabic & English delivery available
          </div>
        </motion.div>
      </div>
    </section>
  )
}
