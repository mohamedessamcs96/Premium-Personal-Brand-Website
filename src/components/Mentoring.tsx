import { motion } from 'framer-motion'
import { Star, ArrowRight, Quote, Briefcase, Code2, Brain, GraduationCap, Rocket, Search } from 'lucide-react'
import SectionHeader from './SectionHeader'

const services = [
  {
    icon: Briefcase,
    title: 'Career Coaching',
    description: 'Navigate your engineering career path with personalized 1:1 coaching. From IC to Staff/Principal, or breaking into big tech.',
    sessions: '8 sessions',
    outcomes: ['Custom growth plan', 'Manager feedback simulation', 'Salary negotiation coaching'],
  },
  {
    icon: Search,
    title: 'Interview Preparation',
    description: 'Comprehensive interview prep for FAANG and top-tier companies. LeetCode, system design, and behavioral rounds.',
    sessions: '12 sessions',
    outcomes: ['500+ curated problems', 'Live mock interviews', 'Personalized study plan'],
  },
  {
    icon: Code2,
    title: 'Backend Mentorship',
    description: 'Deep mentorship for backend engineers covering Python, APIs, databases, microservices, and cloud architecture.',
    sessions: '16 sessions',
    outcomes: ['Real project reviews', 'Code walkthroughs', 'Architecture guidance'],
  },
  {
    icon: Brain,
    title: 'AI Engineering Mentorship',
    description: 'Become a world-class AI engineer with structured mentorship on LLMs, agents, RAG pipelines, and deployment.',
    sessions: '16 sessions',
    outcomes: ['Portfolio project', 'LLM deep-dives', 'Production deployment'],
  },
  {
    icon: GraduationCap,
    title: 'Graduation Projects',
    description: 'Technical guidance for university graduation projects — from ideation to implementation to defence preparation.',
    sessions: 'Flexible',
    outcomes: ['Project scoping', 'Weekly check-ins', 'Documentation support'],
  },
  {
    icon: Rocket,
    title: 'Startup Advisory',
    description: 'Technical advisory for founders and CTOs. From MVP architecture to scaling infrastructure and team building.',
    sessions: 'Monthly retainer',
    outcomes: ['Tech stack decisions', 'Hiring criteria', 'Investor tech prep'],
  },
]

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Software Engineer @ Google',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    text: "Mohamed's mentorship completely transformed my career trajectory. Within 6 months of working with him, I landed a role at Google. His system design sessions are unlike anything else.",
    rating: 5,
  },
  {
    name: 'Sara Khalil',
    role: 'AI Engineer @ Microsoft',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c2?w=80&h=80&fit=crop&auto=format',
    text: "The AI engineering mentorship was incredible. Mohamed explained complex concepts in a way that just clicked. I went from knowing nothing about LLMs to deploying production RAG systems.",
    rating: 5,
  },
  {
    name: 'Omar Hassan',
    role: 'Senior Backend Engineer @ Amazon',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format',
    text: "Best investment I've made in my career. Mohamed's code reviews and architecture guidance pushed my skills to a completely different level. Highly recommend to any serious engineer.",
    rating: 5,
  },
]

export default function Mentoring() {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="mentoring" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FOR DEVELOPERS"
          title="1:1 "
          highlight="Mentoring"
          subtitle="Personalized mentorship programs designed to accelerate your growth as an engineer — structured, accountable, and results-driven."
        />

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white border border-border rounded-3xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 hover:border-brand/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand transition-all duration-300">
                  <Icon size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-brand transition-colors">
                    {s.title}
                  </h3>
                  <span className="text-xs font-mono text-text-secondary bg-gray-100 px-2 py-0.5 rounded-md">
                    {s.sessions}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all"
                >
                  Apply Now <ArrowRight size={14} />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            What mentees say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-surface rounded-3xl p-6 border border-border"
              >
                <Quote size={24} className="text-brand mb-3 opacity-40" />
                <p className="text-sm text-text-secondary leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold text-text-primary">{t.name}</div>
                    <div className="text-xs text-text-secondary">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-text-secondary mb-4 text-sm">
            Limited spots available each cohort — applications reviewed monthly
          </p>
          <button
            onClick={scrollToContact}
            className="bg-brand text-white px-8 py-3.5 rounded-2xl font-bold hover:bg-brand-hover transition-all hover:shadow-xl hover:shadow-brand/25 text-sm"
          >
            Apply for Mentorship
          </button>
        </motion.div>
      </div>
    </section>
  )
}
