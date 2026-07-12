import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Clock, Users, BookOpen, Building2, ChevronRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

const workshops = [
  {
    title: 'AI for Developers',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=480&h=320&fit=crop&auto=format',
    duration: '2 days',
    audience: 'Software Engineers',
    level: 'Intermediate',
    outcomes: ['LLM fundamentals & APIs', 'Building AI-powered features', 'Prompt engineering basics', 'AI integration patterns'],
    labs: 3,
    tag: 'Most Popular',
  },
  {
    title: 'Prompt Engineering Mastery',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=480&h=320&fit=crop&auto=format',
    duration: '1 day',
    audience: 'Developers & PMs',
    level: 'All Levels',
    outcomes: ['Prompt design patterns', 'Chain-of-thought techniques', 'Few-shot & zero-shot', 'Evaluation frameworks'],
    labs: 4,
    tag: null,
  },
  {
    title: 'Building AI Agents',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=480&h=320&fit=crop&auto=format',
    duration: '2 days',
    audience: 'Senior Engineers',
    level: 'Advanced',
    outcomes: ['Agent architectures', 'Tool use & MCP', 'Multi-agent orchestration', 'LangGraph & LangChain'],
    labs: 5,
    tag: 'New',
  },
  {
    title: 'GitHub Copilot & AI Dev Tools',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=480&h=320&fit=crop&auto=format',
    duration: '1 day',
    audience: 'Engineering Teams',
    level: 'Beginner',
    outcomes: ['Copilot workflow mastery', 'AI-assisted code review', 'Test generation', 'Documentation AI'],
    labs: 3,
    tag: null,
  },
  {
    title: 'LLM APIs & Integration',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=480&h=320&fit=crop&auto=format',
    duration: '1 day',
    audience: 'Backend Engineers',
    level: 'Intermediate',
    outcomes: ['OpenAI & Anthropic APIs', 'Streaming responses', 'Function calling', 'Cost optimization'],
    labs: 4,
    tag: null,
  },
  {
    title: 'Backend Best Practices',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=480&h=320&fit=crop&auto=format',
    duration: '2 days',
    audience: 'Backend Engineers',
    level: 'Intermediate',
    outcomes: ['API design principles', 'Database optimization', 'Caching strategies', 'Security patterns'],
    labs: 6,
    tag: null,
  },
  {
    title: 'Docker & Kubernetes',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=480&h=320&fit=crop&auto=format',
    duration: '3 days',
    audience: 'DevOps & Engineers',
    level: 'Intermediate',
    outcomes: ['Container fundamentals', 'Kubernetes orchestration', 'Helm charts', 'CI/CD pipelines'],
    labs: 8,
    tag: null,
  },
  {
    title: 'System Design for Engineers',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&h=320&fit=crop&auto=format',
    duration: '2 days',
    audience: 'Mid–Senior Engineers',
    level: 'Advanced',
    outcomes: ['Scalability patterns', 'Database selection', 'Distributed systems', 'Trade-off analysis'],
    labs: 5,
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
              className="group relative bg-white border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg card-hover"
            >
              <div className="relative h-32 overflow-hidden bg-gray-100">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {w.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-brand text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {w.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
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
                  className="w-full flex items-center justify-center gap-1.5 bg-surface hover:bg-brand hover:text-white border border-brand/20 text-brand text-xs font-semibold py-2 rounded-xl transition-all duration-200"
                >
                  <Building2 size={12} />
                  Book for Team
                </button>
              </div>
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
