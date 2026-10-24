import { ArrowRight, BookOpen, Menu, X } from 'lucide-react'
import { useRef, useState, type JSX } from 'react'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Learning Path', href: '#learning-path' },
  { label: 'IELTS Prep', href: '#ielts-prep' },
  { label: 'AI Feedback', href: '#ai-feedback' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
] as const

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/95 shadow-[0_1px_12px_rgba(15,55,105,0.04)] backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <nav
        aria-label="Primary navigation"
        className="site-container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8"
      >
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5 rounded-md text-navy-950 outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-4"
          aria-label="IELTS Shikhi AI home"
          onClick={closeMenu}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-royal-600 text-white shadow-sm shadow-blue-200 transition-colors group-hover:bg-blue-700">
            <BookOpen aria-hidden="true" size={21} strokeWidth={2.2} />
          </span>
          <span className="text-lg font-bold tracking-[-0.02em] sm:text-xl">
            IELTS Shikhi AI
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative rounded-sm py-6 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-4 ${
                item.label === 'Home'
                  ? 'text-royal-600 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-royal-600'
                  : 'text-slate-600 hover:text-royal-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#sign-in"
            className="secondary-button inline-flex min-h-10 items-center justify-center rounded-lg border border-blue-200 bg-white px-5 text-sm font-semibold text-royal-600 outline-none transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
          >
            Sign In
          </a>
          <a
            href="#get-started"
            className="primary-button inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-royal-600 px-5 text-sm font-semibold text-white shadow-md shadow-blue-200 outline-none transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
          >
            Get Started
            <ArrowRight aria-hidden="true" size={16} strokeWidth={2.25} />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg text-navy-950 outline-none transition-colors hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={24} />
          ) : (
            <Menu aria-hidden="true" size={24} />
          )}
        </button>
      </nav>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="border-t border-blue-100 bg-white px-4 py-5 shadow-lg sm:px-6 lg:hidden"
      >
        <div className="site-container mx-auto flex max-w-7xl flex-col gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 outline-none transition-colors hover:bg-blue-50 hover:text-royal-600 focus-visible:ring-2 focus-visible:ring-royal-500"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
            <a
              href="#sign-in"
              className="secondary-button inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-200 bg-white px-4 text-sm font-semibold text-royal-600 outline-none transition-colors hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
              onClick={closeMenu}
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="primary-button inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-royal-600 px-4 text-sm font-semibold text-white shadow-md shadow-blue-200 outline-none transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
              onClick={closeMenu}
            >
              Get Started
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
