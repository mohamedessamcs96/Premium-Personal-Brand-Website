import { useEffect, useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Brain,
  Code2,
  GraduationCap,
  Mic2,
  BookOpen,
} from 'lucide-react'

const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 12, suffix: '+', label: 'Companies & Clients' },
  { value: 4, suffix: '+', label: 'Years in Research' },
  { value: 92, suffix: '%', label: 'AI Model Accuracy' },
  { value: 3, suffix: '', label: 'Languages Spoken' },
]

const floatingCards = [
  { icon: Brain, label: 'LLM Fine-Tuning', color: 'bg-emerald-50', iconColor: 'text-brand', delay: 0 },
  { icon: Code2, label: 'Backend Systems', color: 'bg-blue-50', iconColor: 'text-blue-600', delay: 0.3 },
  { icon: GraduationCap, label: 'Research', color: 'bg-violet-50', iconColor: 'text-violet-600', delay: 0.6 },
  { icon: Mic2, label: 'Computer Vision', color: 'bg-amber-50', iconColor: 'text-amber-600', delay: 0.9 },
  { icon: BookOpen, label: 'Teaching', color: 'bg-rose-50', iconColor: 'text-rose-600', delay: 1.2 },
]

const titles = [
  'Senior Software Engineer',
  'AI Engineer',
  'Backend Developer',
  'Research Assistant',
  'CS50 Educator',
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          let startTime: number | null = null
          const step = (ts: number) => {
            if (startTime === null) startTime = ts
            const elapsed = ts - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(target)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </div>
  )
}

const fadeUp: Variants = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white noise-texture">
      {/* Background orbs */}
      <div className="hero-orb w-[700px] h-[700px] bg-brand right-[-180px] top-[-140px]" />
      <div className="hero-orb hero-orb-2 w-[500px] h-[500px] bg-brand-accent left-[-120px] bottom-[-80px]" />
      <div className="hero-orb w-[300px] h-[300px] bg-emerald-400 left-1/2 top-1/3" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,68,27,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT — main content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Availability badge */}
            <motion.div variants={fadeUp} className="mb-7 inline-flex">
              <div className="flex items-center gap-2.5 bg-white border border-brand/20 shadow-sm text-brand px-4 py-2 rounded-full text-sm font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand" />
                </span>
                Available for AI Consulting &amp; Workshops in 2026
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(52px,8vw,96px)] font-extrabold text-text-primary tracking-[-0.03em] leading-[0.92] mb-5"
            >
              Mohamed
              <br />
              <span className="gradient-text">Essam</span>
            </motion.h1>

            {/* Title pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
              {titles.map((t, i) => (
                <span
                  key={t}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full font-mono tracking-tight ${
                    i === 0
                      ? 'bg-brand text-white shadow-md shadow-brand/25'
                      : i === 1
                      ? 'bg-brand-light text-brand border border-brand/20'
                      : 'bg-gray-100 text-text-secondary'
                  }`}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-text-secondary leading-[1.55] max-w-xl mb-9 font-light"
            >
              I build{' '}
              <span className="font-semibold text-brand">scalable backend systems</span> and
              integrate AI into production — working with GPT, Claude, and Gemini, fine-tuning
              LLMs, and shipping real{' '}
              <span className="font-semibold text-brand">computer vision products</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-2.5 bg-brand text-white px-7 py-3.5 rounded-2xl text-sm font-bold hover:bg-brand-hover transition-all duration-200 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles size={16} />
                Book a Consultation
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="flex items-center gap-2.5 bg-white text-brand border-2 border-brand/20 px-7 py-3.5 rounded-2xl text-sm font-bold hover:border-brand hover:bg-brand-light transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink size={15} />
                Explore My Work
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="grid grid-cols-5 gap-3">
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="text-center bg-white rounded-2xl p-3 border border-border shadow-sm hover:border-brand/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-2xl font-extrabold text-brand leading-none">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-[10px] text-text-secondary mt-1 font-medium leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — floating skill cards */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative w-72 h-96">
              {/* Central avatar placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-10 rounded-full bg-gradient-to-br from-brand-light to-white border-4 border-brand/20 shadow-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand mx-auto flex items-center justify-center text-white font-bold text-xl font-mono shadow-lg mb-2">
                    ME
                  </div>
                  <div className="text-xs font-semibold text-brand">AI Engineer</div>
                  <div className="text-xs text-text-secondary">&amp; Consultant</div>
                </div>
              </motion.div>

              {/* Orbit cards */}
              {floatingCards.map(({ icon: Icon, label, color, iconColor, delay }, i) => {
                const angle = (i / floatingCards.length) * 2 * Math.PI - Math.PI / 2
                const r = 148
                const x = Math.cos(angle) * r + 144 - 40
                const y = Math.sin(angle) * r + 192 - 24

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + delay, duration: 0.5, ease: 'easeOut' }}
                    style={{ left: x, top: y, position: 'absolute' }}
                    className={`animate-float flex items-center gap-2 ${color} rounded-2xl px-3 py-2 border border-white shadow-lg whitespace-nowrap`}
                    // offset float phase per card
                  >
                    <Icon size={14} className={iconColor} />
                    <span className="text-xs font-semibold text-text-primary">{label}</span>
                  </motion.div>
                )
              })}

              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollTo('portfolio')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-secondary hover:text-brand transition-colors"
      >
        <span className="text-xs font-medium tracking-wide uppercase font-mono">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
