import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Tag, TrendingUp, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

const categories = [
  "All",
  "AI/LLM",
  "Backend",
  "System Design",
  "Career",
  "Research",
];

const articles = [
  {
    id: 1,
    title: "Building Production-Ready RAG Pipelines: A Complete Guide",
    category: "AI/LLM",
    excerpt:
      "A comprehensive walkthrough of retrieval-augmented generation systems that actually work in production — covering chunking strategies, embedding models, retrieval algorithms, and evaluation frameworks.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=500&fit=crop&auto=format",
    readTime: "12 min",
    date: "Jul 8, 2026",
    tags: ["RAG", "LangChain", "OpenAI", "Production"],
    views: "8.4K",
    featured: true,
  },
  {
    id: 2,
    title: "AI Agents in 2026: Architecture Patterns That Scale",
    category: "AI/LLM",
    excerpt:
      "From single-agent loops to multi-agent orchestration — what works, what doesn't, and how to build reliable, observable, cost-efficient agents.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&h=400&fit=crop&auto=format",
    readTime: "9 min",
    date: "Jun 22, 2026",
    tags: ["Agents", "LangGraph", "MCP"],
    views: "6.2K",
    featured: false,
  },
  {
    id: 3,
    title: "Multi-Tenant SaaS Backend: Lessons from Production",
    category: "Backend",
    excerpt:
      "Hard-won lessons from building multi-tenant architectures. Schema strategies, isolation trade-offs, and how to avoid the pitfalls that bite you at scale.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=400&fit=crop&auto=format",
    readTime: "15 min",
    date: "Jun 10, 2026",
    tags: ["PostgreSQL", "FastAPI", "Architecture"],
    views: "5.1K",
    featured: false,
  },
  {
    id: 4,
    title: "From Software Engineer to AI Engineer in 18 Months",
    category: "Career",
    excerpt:
      "A candid breakdown of my transition — the skills I prioritized, the mistakes I made, and what I'd do differently starting today.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=400&fit=crop&auto=format",
    readTime: "8 min",
    date: "May 28, 2026",
    tags: ["Career", "AI", "Learning"],
    views: "14.2K",
    featured: false,
  },
  {
    id: 5,
    title: "The System Design Interview: A Staff Engineer's Framework",
    category: "System Design",
    excerpt:
      "A battle-tested framework for system design interviews. Requirements, capacity, components — the questions interviewers actually care about.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=700&h=400&fit=crop&auto=format",
    readTime: "11 min",
    date: "May 15, 2026",
    tags: ["System Design", "Interviews", "Career"],
    views: "9.8K",
    featured: false,
  },
  {
    id: 6,
    title: "FastAPI vs Django: Choosing the Right Backend for AI Apps",
    category: "Backend",
    excerpt:
      "Performance benchmarks, ecosystem maturity, async support, and when to choose each framework for AI-powered backends.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&h=400&fit=crop&auto=format",
    readTime: "7 min",
    date: "May 2, 2026",
    tags: ["FastAPI", "Django", "Python"],
    views: "7.3K",
    featured: false,
  },
  {
    id: 7,
    title: "LLM Evaluation: How to Know If Your AI Is Actually Working",
    category: "AI/LLM",
    excerpt:
      "RAGAS, G-Eval, custom evals — a practical guide to evaluating LLM applications in production with real metrics and frameworks.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=400&fit=crop&auto=format",
    readTime: "13 min",
    date: "Apr 18, 2026",
    tags: ["LLMs", "Evaluation", "RAGAS", "DSPy"],
    views: "4.9K",
    featured: false,
  },
];

const categoryColor: Record<string, string> = {
  "AI/LLM": "bg-brand-light text-brand",
  Backend: "bg-blue-50 text-blue-700",
  "System Design": "bg-violet-50 text-violet-700",
  Career: "bg-amber-50 text-amber-700",
  Research: "bg-rose-50 text-rose-700",
};

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <section id="articles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ARTICLES"
          title="Writing & "
          highlight="Insights"
          subtitle="In-depth technical articles on AI engineering, backend development, system design, and career growth. Published weekly."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === c
                  ? "bg-brand text-white shadow-lg shadow-brand/25"
                  : "bg-gray-100 text-text-secondary hover:bg-brand-light hover:text-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Featured */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group mb-6 grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-border card-hover cursor-pointer"
              >
                <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden bg-gray-100">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="bg-white/90 text-text-secondary text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp size={10} /> {featured.views} views
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColor[featured.category] || "bg-gray-100 text-gray-600"}`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs text-text-secondary flex items-center gap-1">
                      <Clock size={11} /> {featured.readTime} read
                    </span>
                    <span className="text-xs text-text-secondary">
                      {featured.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-text-primary mb-3 group-hover:text-brand transition-colors leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-5 text-sm">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.tags.map((t) => (
                      <span
                        key={t}
                        className="flex items-center gap-1 tag-badge"
                      >
                        <Tag size={9} /> {t}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-brand font-bold text-sm group-hover:gap-3 transition-all w-fit">
                    Read Article <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-border card-hover cursor-pointer"
                >
                  <div className="relative h-44 overflow-hidden bg-gray-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="glass text-text-secondary text-[10px] font-semibold px-2 py-0.5 rounded-lg flex items-center gap-1">
                        <BookOpen size={9} /> {article.views}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryColor[article.category] || "bg-gray-100 text-gray-600"}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-text-secondary flex items-center gap-1">
                        <Clock size={10} /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-text-primary mb-2 group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-2 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-secondary border-t border-border pt-3">
                      <span>{article.date}</span>
                      <button className="flex items-center gap-1 text-brand font-bold group-hover:gap-1.5 transition-all">
                        Read <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-brand-light border border-brand/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-lg font-extrabold text-brand mb-1">
              Get new articles in your inbox
            </h3>
            <p className="text-sm text-text-secondary">
              Weekly deep-dives on AI engineering, backend systems, and career
              growth.
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-56 bg-white border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            />
            <button className="bg-brand text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-hover transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
