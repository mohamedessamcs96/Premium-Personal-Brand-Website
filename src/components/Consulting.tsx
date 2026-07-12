import { motion } from 'framer-motion'
import {
  Brain,
  Layers,
  Server,
  GitBranch,
  Zap,
  Users,
  Code2,
  Map,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import SectionHeader from './SectionHeader'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Roadmap',
    description:
      'Define a clear AI adoption strategy tailored to your business goals, tech stack, and team capabilities.',
    deliverables: ['AI readiness assessment', 'Prioritized use-case backlog', '12-month roadmap', 'ROI projections'],
    industries: ['FinTech', 'HealthTech', 'PropTech', 'E-commerce'],
    featured: true,
  },
  {
    icon: Layers,
    title: 'LLM Integration',
    description:
      'End-to-end integration of large language models into your products using RAG, fine-tuning, and agent frameworks.',
    deliverables: ['LLM selection & benchmarking', 'RAG pipeline design', 'Production deployment', 'Monitoring setup'],
    industries: ['SaaS', 'Legal', 'HR Tech', 'EdTech'],
    featured: false,
  },
  {
    icon: Server,
    title: 'Backend Architecture',
    description:
      'Design scalable, resilient backend systems optimized for AI workloads — from microservices to event-driven pipelines.',
    deliverables: ['System design docs', 'API standards', 'Infrastructure blueprint', 'Performance benchmarks'],
    industries: ['All industries'],
    featured: false,
  },
  {
    icon: GitBranch,
    title: 'System Design Review',
    description:
      'Deep architectural review of your existing systems to identify bottlenecks, risks, and improvement opportunities.',
    deliverables: ['Architecture audit', 'Risk assessment', 'Refactoring plan', 'Best practices guide'],
    industries: ['Scale-ups', 'Enterprises'],
    featured: false,
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Identify and eliminate performance bottlenecks in AI inference pipelines, databases, and distributed systems.',
    deliverables: ['Profiling report', 'Optimization plan', 'Before/after benchmarks', 'Implementation support'],
    industries: ['All industries'],
    featured: false,
  },
  {
    icon: Users,
    title: 'Engineering Leadership',
    description:
      'Interim CTO or Staff Engineer engagement to elevate engineering culture, hiring standards, and delivery velocity.',
    deliverables: ['Hiring frameworks', 'Engineering ladder', 'OKR alignment', 'Tech talks'],
    industries: ['Startups', 'Scale-ups'],
    featured: false,
  },
  {
    icon: Code2,
    title: 'Code Reviews & Quality',
    description:
      'Thorough codebase reviews focusing on AI/ML code, API design, security, and maintainability standards.',
    deliverables: ['Code audit report', 'Prioritized findings', 'Pair programming sessions', 'Style guides'],
    industries: ['All industries'],
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: 'AI Governance & Safety',
    description:
      'Implement responsible AI practices: bias detection, explainability, data privacy, and compliance frameworks.',
    deliverables: ['AI risk assessment', 'Governance policy', 'Bias testing suite', 'Compliance checklist'],
    industries: ['FinTech', 'HealthTech', 'Government'],
    featured: false,
  },
  {
    icon: Map,
    title: 'Team AI Training',
    description:
      'Tailored corporate training programs that upskill your engineering teams on AI/ML, LLMs, and modern tooling.',
    deliverables: ['Custom curriculum', 'Hands-on workshops', 'Take-home exercises', 'Certification'],
    industries: ['All industries'],
    featured: true,
  },
]

export default function Consulting() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="consulting" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FOR COMPANIES"
          title="AI Consulting "
          highlight="Services"
          subtitle="Strategic AI consulting and hands-on engineering support for companies ready to build the next generation of intelligent products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group bg-white rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 ${
                  service.featured
                    ? 'border-brand/30 shadow-md shadow-brand/10 ring-1 ring-brand/10'
                    : 'border-border hover:border-brand/30'
                }`}
              >
                {service.featured && (
                  <div className="mb-3">
                    <span className="bg-brand text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Icon size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    Deliverables
                  </p>
                  <ul className="space-y-1">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.industries.map((ind) => (
                    <span key={ind} className="bg-brand-light text-brand text-xs font-medium px-2 py-0.5 rounded-md">
                      {ind}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all"
                >
                  Book Consultation <ArrowRight size={14} />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand rounded-3xl p-10 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to transform your engineering team?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Book a free 30-minute discovery call to discuss your AI challenges and how I can help.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-brand px-8 py-3 rounded-2xl font-bold hover:bg-brand-light transition-colors text-sm"
          >
            Schedule a Free Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}
