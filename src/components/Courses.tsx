import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, PlayCircle, BookOpen, TrendingUp, Lock } from 'lucide-react'
import SectionHeader from './SectionHeader'

const courses = [
  {
    id: 1,
    title: 'AI Engineering Masterclass',
    subtitle: 'From Zero to Production AI Systems',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop&auto=format',
    difficulty: 'Intermediate',
    modules: 12,
    hours: 28,
    rating: 4.9,
    students: 1840,
    tech: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
    status: 'Available',
    badge: 'Bestseller',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 2,
    title: 'Backend Engineering Fundamentals',
    subtitle: 'APIs, Databases & Scalable Systems',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop&auto=format',
    difficulty: 'Beginner',
    modules: 10,
    hours: 22,
    rating: 4.8,
    students: 3120,
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    status: 'Available',
    badge: 'Top Rated',
    badgeColor: 'bg-brand',
  },
  {
    id: 3,
    title: 'LLM Bootcamp',
    subtitle: 'Building with GPT-4, Claude & Open Models',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop&auto=format',
    difficulty: 'Intermediate',
    modules: 8,
    hours: 18,
    rating: 4.9,
    students: 920,
    tech: ['Python', 'OpenAI', 'Anthropic', 'HuggingFace'],
    status: 'Available',
    badge: 'New',
    badgeColor: 'bg-violet-600',
  },
  {
    id: 4,
    title: 'Prompt Engineering Pro',
    subtitle: 'Advanced Techniques for Production',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=340&fit=crop&auto=format',
    difficulty: 'All Levels',
    modules: 6,
    hours: 10,
    rating: 4.7,
    students: 2400,
    tech: ['OpenAI', 'Anthropic', 'DSPy', 'LMQL'],
    status: 'Available',
    badge: null,
    badgeColor: '',
  },
  {
    id: 5,
    title: 'System Design Mastery',
    subtitle: 'Design Scalable Systems Like a Staff Engineer',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop&auto=format',
    difficulty: 'Advanced',
    modules: 14,
    hours: 32,
    rating: 4.9,
    students: 680,
    tech: ['Architecture', 'Distributed Systems', 'Databases', 'Caching'],
    status: 'Available',
    badge: 'Premium',
    badgeColor: 'bg-gray-800',
  },
  {
    id: 6,
    title: 'Computer Vision with PyTorch',
    subtitle: 'Object Detection, Segmentation & Deployment',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=340&fit=crop&auto=format',
    difficulty: 'Advanced',
    modules: 10,
    hours: 24,
    rating: 4.8,
    students: 420,
    tech: ['PyTorch', 'OpenCV', 'YOLO', 'FastAPI'],
    status: 'Coming Soon',
    badge: 'Coming Soon',
    badgeColor: 'bg-teal-600',
  },
]

const difficultyColor: Record<string, string> = {
  Beginner: 'text-green-600 bg-green-50',
  Intermediate: 'text-blue-600 bg-blue-50',
  Advanced: 'text-purple-600 bg-purple-50',
  'All Levels': 'text-gray-600 bg-gray-100',
}

export default function Courses() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="courses" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ONLINE COURSES"
          title="Learn at Your "
          highlight="Own Pace"
          subtitle="Structured, project-based courses designed to take you from concept to production. Learn with real code, real projects, real results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-white rounded-3xl overflow-hidden border border-border card-hover shadow-sm"
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {course.badge && (
                  <div className="absolute top-3 left-3">
                    <span className={`${course.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>
                      {course.badge}
                    </span>
                  </div>
                )}

                {course.status === 'Coming Soon' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-white/90 text-text-primary px-4 py-2 rounded-full text-sm font-semibold">
                      <Lock size={14} />
                      Coming Soon
                    </div>
                  </div>
                )}

                {hovered === course.id && course.status === 'Available' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-brand/80 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <PlayCircle size={28} />
                      Preview Course
                    </div>
                  </motion.div>
                )}

                {/* Rating bottom-right */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/95 px-2 py-1 rounded-lg">
                  <Star size={11} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-text-primary">{course.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${difficultyColor[course.difficulty]}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-xs text-text-secondary font-mono">
                    {course.students.toLocaleString()} students
                  </span>
                </div>

                <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-brand transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">{course.subtitle}</p>

                <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen size={12} className="text-brand" />
                    {course.modules} modules
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-brand" />
                    {course.hours}h content
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={12} className="text-brand" />
                    Certificate
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tech.slice(0, 3).map((t) => (
                    <span key={t} className="font-mono text-xs bg-gray-100 text-text-secondary px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                  {course.tech.length > 3 && (
                    <span className="font-mono text-xs bg-gray-100 text-text-secondary px-2 py-0.5 rounded">
                      +{course.tech.length - 3}
                    </span>
                  )}
                </div>

                <button
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    course.status === 'Available'
                      ? 'bg-brand text-white hover:bg-brand-hover hover:shadow-md'
                      : 'bg-gray-100 text-text-secondary cursor-not-allowed'
                  }`}
                  disabled={course.status !== 'Available'}
                >
                  {course.status === 'Available' ? 'Enroll Now' : 'Notify Me'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
