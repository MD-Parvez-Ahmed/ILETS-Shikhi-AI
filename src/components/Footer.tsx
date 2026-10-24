import type { JSX } from 'react'
import { BookOpen } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Learning Path', href: '#learning-path' },
  { label: 'IELTS Prep', href: '#ielts-prep' },
  { label: 'About', href: '#about' },
] as const

function Footer(): JSX.Element {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="site-container mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a
              href="#home"
              aria-label="IELTS Shikhi AI home"
              className="inline-flex items-center gap-2.5 rounded-md text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-royal-600">
                <BookOpen aria-hidden="true" size={20} strokeWidth={2.2} />
              </span>
              <span className="text-lg font-bold tracking-tight">IELTS Shikhi AI</span>
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Learn English with structure and prepare for IELTS-style tasks with confidence.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded-sm text-sm font-medium text-slate-300 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs leading-5 text-slate-500 md:flex-row md:items-start md:justify-between">
          <p>© 2026 IELTS Shikhi AI. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            IELTS Shikhi AI provides independent IELTS-style learning and practice. It is not
            affiliated with, approved by, or endorsed by any official IELTS test partner.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
