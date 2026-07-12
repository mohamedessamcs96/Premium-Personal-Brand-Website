import { motion } from 'framer-motion'
import { MapPin, Award, Mic2, BookOpen, Building2, GraduationCap } from 'lucide-react'
import SectionHeader from './SectionHeader'

const timeline = [
  {
    year: 'Oct 2025–Now',
    role: 'Senior Software Engineer',
    org: 'Soft Blue Ocean (UK, Remote)',
    type: 'work',
    description: 'Designing scalable backend systems for fintech platforms (salary advance & payroll), leading Wafeq ERP integration, and building AI-powered LLM applications including a real estate assistant.',
    icon: Building2,
  },
  {
    year: 'Mar–Jul 2026',
    role: 'Research Assistant',
    org: 'GIU Berlin',
    type: 'education',
    description: 'Representing GIU Cairo in Berlin, supporting courses in Software Engineering, MERN Stack, Nest.js, Next.js, and Computer Vision, and continuing pedestrian intention prediction research.',
    icon: GraduationCap,
  },
  {
    year: 'May–Oct 2025',
    role: 'Senior Software Engineer',
    org: 'Drop Me',
    type: 'work',
    description: 'Led a team of 5 engineers building an IoT-enabled recycling platform, real-time dashboards processing 10,000+ daily transactions, and an AI material-classification model at 92% accuracy.',
    icon: Building2,
  },
  {
    year: '2023–2026',
    role: 'Master in Data Science',
    org: 'German International University',
    type: 'education',
    description: 'Thesis: Pedestrian Intention Prediction using LSTM & LLM Fine-Tuning.',
    icon: GraduationCap,
  },
  {
    year: 'May 2024–May 2025',
    role: 'Mid Level Software Engineer',
    org: 'Leading US-Based AI Solutions (Confidential Client)',
    type: 'work',
    description: 'Developed a full-stack AI-enabled platform using Next.js, NestJS, and Node.js with advanced prompt engineering for dynamic AI-driven interactions.',
    icon: Building2,
  },
  {
    year: 'Sept 2022–Now',
    role: 'Research Assistant',
    org: 'GIU Cairo',
    type: 'education',
    description: 'Teaching Software Engineering and Computer Vision; researching pedestrian intention prediction for autonomous vehicles with LSTM models; mentoring graduation theses.',
    icon: GraduationCap,
  },
  {
    year: 'Mar 2022–Feb 2024',
    role: 'Software Engineer (Remote)',
    org: 'Pseudo Code KSA',
    type: 'work',
    description: 'Designed scalable, high-performance web applications using Django for backend development, RESTful APIs, and secure workflows.',
    icon: Building2,
  },
  {
    year: '2015–2019',
    role: 'B.Sc. Computer Science',
    org: 'German International University',
    type: 'education',
    description: 'Alongside studies, taught CS50x in the Arabic Program supported by Harvard through Egyptian universities (2015–2021).',
    icon: GraduationCap,
  },
]

const achievements = [
  { icon: Award, label: 'Speaker, Google Solution Challenge 2023', sub: 'AUC' },
  { icon: Mic2, label: 'CS50x Educator', sub: 'Harvard Arabic Program, 2015–2021' },
  { icon: BookOpen, label: 'MSc Thesis in Progress', sub: 'Pedestrian Intention Prediction — LSTM & LLM Fine-Tuning' },
  { icon: MapPin, label: 'Clients Across 4 Countries', sub: 'UK, USA, KSA, Germany' },
]

const skills = [
  { category: 'AI & ML', items: ['LSTM', 'LLM Fine-Tuning', 'Computer Vision', 'OpenAI API', 'Anthropic API', 'Google Gemini'] },
  { category: 'Backend', items: ['Python', 'NestJS', 'Express', 'Flask', 'Django', 'FastAPI'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Databases & Infra', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Kubernetes', 'AWS'] },
]

const companies = [
  'Soft Blue Ocean', 'GIU Berlin', 'Drop Me', 'Atlas Visa', 'Nodogoro', 'Stilt Inc', 'SigmoidX', 'HarvardX (CS50x)',
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
