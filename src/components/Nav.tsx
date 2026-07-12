import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, Sparkles } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Consulting', href: 'consulting' },
  { label: 'Workshops', href: 'workshops' },
  { label: 'Courses', href: 'courses' },
  { label: 'Mentoring', href: 'mentoring' },
  { label: 'Videos', href: 'videos' },
  { label: 'Articles', href: 'articles' },
  { label: 'About', href: 'about' },
  { label: 'Contact', href: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(({ href }) => document.getElementById(href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.25 }
    )
    sections.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100/80'
          : 'bg-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center text-white font-extrabold text-xs font-mono shadow-sm shadow-brand/30 hover:shadow-brand/50 transition-shadow">
              ME
            </div>
            <div className="hidden sm:block">
              <div className="text-[13px] font-bold text-text-primary leading-none tracking-tight">
                Mohamed Essam
              </div>
              <div className="text-[10px] text-brand font-mono leading-none mt-0.5 font-medium">
                AI Engineer & Consultant
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`relative px-3 py-1.5 text-[13px] font-semibold rounded-xl transition-all duration-200 ${
                  activeSection === href
                    ? 'text-brand'
                    : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                }`}
              >
                {label}
                {activeSection === href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-brand"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + mobile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:flex items-center gap-1.5 bg-brand text-white px-4 py-2 rounded-xl text-[13px] font-bold hover:bg-brand-hover transition-all duration-200 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles size={13} />
              Book Consultation
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-text-secondary hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    activeSection === href
                      ? 'text-brand bg-brand-light'
                      : 'text-text-secondary hover:text-brand hover:bg-brand-light'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 rounded-2xl text-sm font-bold hover:bg-brand-hover transition-all"
              >
                <Calendar size={14} />
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
