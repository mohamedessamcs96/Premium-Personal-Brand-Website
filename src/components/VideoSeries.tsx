import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Clock, BookOpen, ChevronRight } from 'lucide-react'

const series = [
  {
    id: 1,
    title: 'AI Engineering Masterclass',
    subtitle: 'From Zero to Production',
    episodes: 24,
    hours: '18h',
    status: 'Complete',
    description:
      'The definitive guide to building production AI systems. Covers LLMs, RAG, agents, fine-tuning, evaluation, and deployment — everything you need to become a serious AI engineer.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=480&h=680&fit=crop&auto=format',
    tag: 'Most Watched',
    tagColor: 'bg-amber-500',
    views: '48K views',
    featured: true,
  },
  {
    id: 2,
    title: 'Backend Engineering',
    subtitle: 'Scalable Systems Deep Dive',
    episodes: 32,
    hours: '26h',
    status: 'Ongoing',
    description:
      'Deep-dive into Python backend development. APIs, databases, async programming, caching strategies, and scalability patterns used in top-tier companies.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=480&h=680&fit=crop&auto=format',
    tag: 'Ongoing',
    tagColor: 'bg-brand',
    views: '32K views',
    featured: false,
  },
  {
    id: 3,
    title: 'System Design',
    subtitle: 'Think Like a Staff Engineer',
    episodes: 18,
    hours: '14h',
    status: 'Complete',
    description:
      'How to design scalable, resilient systems. Real-world trade-offs, database selection, distributed caching, message queues, and 1:1 mock interview sessions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=480&h=680&fit=crop&auto=format',
    tag: 'Top Rated',
    tagColor: 'bg-violet-600',
    views: '29K views',
    featured: false,
  },
  {
    id: 4,
    title: 'LLM Bootcamp',
    subtitle: 'GPT-4, Claude & Open Models',
    episodes: 16,
    hours: '12h',
    status: 'Complete',
    description:
      'Build real projects with GPT-4, Claude, and open-source models. RAG, function calling, streaming, production deployment, and cost optimization.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=480&h=680&fit=crop&auto=format',
    tag: 'New',
    tagColor: 'bg-teal-600',
    views: '18K views',
    featured: false,
  },
  {
    id: 5,
    title: 'Docker Deep Dive',
    subtitle: 'Containers to Orchestration',
    episodes: 14,
    hours: '10h',
    status: 'Complete',
    description:
      'Containerize applications like a pro. Multi-stage builds, networking, Docker Compose, and intro to Kubernetes — the complete container journey.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=480&h=680&fit=crop&auto=format',
    tag: null,
    tagColor: '',
    views: '22K views',
    featured: false,
  },
  {
    id: 6,
    title: 'Computer Vision',
    subtitle: 'PyTorch & Real Deployments',
    episodes: 20,
    hours: '16h',
    status: 'Complete',
    description:
      'Object detection, semantic segmentation, and image classification with PyTorch and OpenCV. Includes real-world medical imaging and autonomous driving projects.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=480&h=680&fit=crop&auto=format',
    tag: null,
    tagColor: '',
    views: '15K views',
    featured: false,
  },
  {
    id: 7,
    title: 'Prompt Engineering',
    subtitle: 'Advanced Techniques',
    episodes: 10,
    hours: '7h',
    status: 'Complete',
    description:
      'Master chain-of-thought, few-shot, self-consistency, tree of thoughts, and automated prompt optimization using DSPy.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=480&h=680&fit=crop&auto=format',
    tag: null,
    tagColor: '',
    views: '20K views',
    featured: false,
  },
  {
    id: 8,
    title: 'Career Roadmap',
    subtitle: 'Land Your Dream Role',
    episodes: 12,
    hours: '8h',
    status: 'Ongoing',
    description:
      'Resume crafting, technical interviews, system design rounds, and salary negotiation. Strategies that helped students land Google, Amazon, and Microsoft offers.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=480&h=680&fit=crop&auto=format',
    tag: 'Ongoing',
    tagColor: 'bg-brand',
    views: '25K views',
    featured: false,
  },
]

export default function VideoSeries() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const featured = series[0]
  const rest = series.slice(1)

  return (
    <section id="videos" className="py-24 bg-[#060a06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — white text on dark */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 bg-brand/30 border border-brand/40 text-brand-muted px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wide mb-4">
            VIDEO SERIES
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Educational{' '}
            <span className="gradient-text">Series</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Binge-worthy, deep-dive content that takes you from concept to production. Arabic &amp; English.
          </p>
        </div>

        {/* Featured row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-6"
        >
          {/* Featured poster — large */}
          <div
            className="lg:col-span-2 relative group cursor-pointer rounded-3xl overflow-hidden"
            style={{ aspectRatio: '2/2.5' }}
            onMouseEnter={() => setHoveredId(featured.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {featured.tag}
              </span>
              <span className="glass-dark text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {featured.views}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-extrabold text-xl mb-1">{featured.title}</h3>
              <p className="text-white/70 text-sm mb-3">{featured.subtitle}</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white/50 text-xs flex items-center gap-1">
                  <BookOpen size={11} /> {featured.episodes} episodes
                </span>
                <span className="text-white/50 text-xs flex items-center gap-1">
                  <Clock size={11} /> {featured.hours}
                </span>
              </div>
              <AnimatePresence>
                {hoveredId === featured.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <p className="text-white/80 text-xs leading-relaxed mb-4 line-clamp-3">
                      {featured.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <button className="flex items-center gap-2 bg-white text-brand px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-light transition-colors">
                <Play size={14} className="fill-brand" />
                Watch Series
              </button>
            </div>
          </div>

          {/* Right side — episode list */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1 font-mono">
              Featured Episodes
            </p>
            {[1, 2, 3, 4, 5].map((ep) => (
              <motion.div
                key={ep}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ep * 0.05 }}
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand/40 rounded-2xl p-4 cursor-pointer transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <Play size={14} className="text-brand group-hover:text-white transition-colors fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold">
                    Episode {ep}: {['LLM Fundamentals', 'Building RAG Pipelines', 'Agent Architectures', 'Fine-tuning Models', 'Production Deployment'][ep - 1]}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5 font-mono">{['45min', '62min', '55min', '78min', '90min'][ep - 1]} • Free preview</div>
                </div>
                <ChevronRight size={16} className="text-white/30 group-hover:text-brand transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regular poster grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {rest.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden"
              style={{ aspectRatio: '2/3' }}
              onMouseEnter={() => setHoveredId(s.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {s.tag && (
                <div className="absolute top-2 left-2">
                  <span className={`${s.tagColor} text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full`}>
                    {s.tag}
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <h3 className="text-white font-bold text-[11px] leading-tight">{s.title}</h3>
                <div className="text-white/50 text-[9px] mt-0.5 font-mono">{s.episodes} eps</div>
              </div>

              <AnimatePresence>
                {hoveredId === s.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 poster-overlay flex flex-col justify-end p-3"
                  >
                    <p className="text-white/90 text-[10px] leading-relaxed mb-2 line-clamp-4">
                      {s.description}
                    </p>
                    <button className="flex items-center justify-center gap-1 bg-white text-brand py-1.5 rounded-lg text-[10px] font-bold">
                      <Play size={10} className="fill-brand" />
                      Watch
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
