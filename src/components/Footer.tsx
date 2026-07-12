import { Code2, Users, PlayCircle, Mail } from 'lucide-react'

const links = {
  services: [
    { label: 'AI Consulting', href: '#consulting' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Online Courses', href: '#courses' },
    { label: 'Mentoring', href: '#mentoring' },
    { label: 'Speaking', href: '#contact' },
  ],
  content: [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Video Series', href: '#videos' },
    { label: 'Articles', href: '#articles' },
    { label: 'Research', href: '#about' },
  ],
  connect: [
    { label: 'Contact Me', href: '#contact' },
    { label: 'Book a Call', href: '#contact' },
    { label: 'Newsletter', href: '#contact' },
  ],
}

const socials = [
  { icon: Code2, href: 'https://github.com/mohamedessamcs96', label: 'GitHub' },
  { icon: Users, href: 'https://linkedin.com/in/mhmdessam96/', label: 'LinkedIn' },
  { icon: PlayCircle, href: 'https://www.youtube.com/watch?v=yss5QplqsvU', label: 'YouTube' },
  { icon: Mail, href: 'mailto:mhmd96.essam@gmail.com', label: 'Email' },
]

const scrollTo = (href: string) => {
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-sm font-mono">
                ME
              </div>
              <div>
                <div className="text-white font-bold text-sm">Mohamed Essam</div>
                <div className="text-white/50 text-xs font-mono">AI Engineer & Consultant</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Building AI-powered products, training engineering teams, and mentoring developers worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand/80 hover:text-white flex items-center justify-center transition-all duration-200 text-white/50"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {links.services.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Content</h4>
            <ul className="space-y-2.5">
              {links.content.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2.5">
              {links.connect.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 mb-1">Currently available</p>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
                </span>
                <span className="text-xs text-brand-accent font-medium">Open to projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Mohamed Essam. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-mono">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
