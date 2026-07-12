import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Calendar,
  Send,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Users,
  Code2,
  PlayCircle,
  Zap,
} from 'lucide-react'
import SectionHeader from './SectionHeader'

const quickLinks = [
  {
    icon: Calendar,
    title: 'Book a Free Call',
    sub: '30-min discovery call',
    href: '#',
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email Me',
    sub: 'mhmd96.essam@gmail.com',
    href: 'mailto:mhmd96.essam@gmail.com',
    primary: false,
  },
  {
    icon: Users,
    title: 'LinkedIn',
    sub: 'linkedin.com/in/mhmdessam96',
    href: 'https://linkedin.com/in/mhmdessam96/',
    primary: false,
  },
  {
    icon: Code2,
    title: 'GitHub',
    sub: 'github.com/mohamedessamcs96',
    href: 'https://github.com/mohamedessamcs96',
    primary: false,
  },
  {
    icon: PlayCircle,
    title: 'YouTube',
    sub: 'Watch my video series',
    href: 'https://www.youtube.com/watch?v=yss5QplqsvU',
    primary: false,
  },
]

const interests = [
  'AI Consulting',
  'Corporate Workshops',
  'Team Training',
  'Mentoring',
  'Speaking / Conference',
  'Research Collaboration',
  'Technical Advisory',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="CONTACT"
          title="Let's Build "
          highlight="Together"
          subtitle="Whether you need AI consulting, team training, mentorship, or want to collaborate — I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand rounded-3xl p-6 text-white"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-sm font-bold text-green-300">Available for Projects</span>
              </div>
              <h3 className="text-lg font-extrabold mb-1.5">Currently accepting</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                AI consulting, corporate workshops, and mentoring cohorts for Q3–Q4 2026.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <MapPin size={12} />
                Berlin, Germany · Remote & On-site Worldwide
              </div>
            </motion.div>

            {/* Response time */}
            <div className="bg-white border border-border rounded-3xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-light flex items-center justify-center flex-shrink-0">
                <Zap size={18} className="text-brand" />
              </div>
              <div>
                <div className="text-sm font-bold text-text-primary">Avg. Response Time</div>
                <div className="text-brand font-extrabold text-lg leading-none mt-0.5">{'< 24 hours'}</div>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-2">
              {quickLinks.map(({ icon: Icon, title, sub, href }) => (
                <motion.a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white hover:bg-brand-light border border-border hover:border-brand/30 rounded-2xl px-4 py-3 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-light group-hover:bg-brand flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon size={16} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-text-primary group-hover:text-brand transition-colors">{title}</div>
                    <div className="text-xs text-text-secondary truncate">{sub}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-border p-8 shadow-sm"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-brand" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', interest: '', message: '' }) }}
                    className="mt-6 text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">
                        Your Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ahmed Mohamed"
                        className="w-full bg-surface border border-border rounded-2xl px-4 py-3 text-sm text-text-primary placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ahmed@company.com"
                        className="w-full bg-surface border border-border rounded-2xl px-4 py-3 text-sm text-text-primary placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">
                      Company / Organization
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Corp (optional)"
                      className="w-full bg-surface border border-border rounded-2xl px-4 py-3 text-sm text-text-primary placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-2 block">
                      I'm Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((int) => (
                        <button
                          key={int}
                          type="button"
                          onClick={() => setForm({ ...form, interest: int })}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                            form.interest === int
                              ? 'bg-brand text-white shadow-md shadow-brand/25'
                              : 'bg-surface border border-border text-text-secondary hover:border-brand/30 hover:text-brand'
                          }`}
                        >
                          {int}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1.5 block">
                      Your Message *
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, team size, timeline, and goals. The more detail the better!"
                      rows={5}
                      className="w-full bg-surface border border-border rounded-2xl px-4 py-3 text-sm text-text-primary placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-brand text-white py-4 rounded-2xl font-bold text-sm hover:bg-brand-hover transition-all duration-200 hover:shadow-xl hover:shadow-brand/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <MessageSquare size={16} />
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
