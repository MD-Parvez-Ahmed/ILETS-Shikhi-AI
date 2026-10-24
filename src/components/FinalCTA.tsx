import type { JSX } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

function FinalCTA(): JSX.Element {
  return (
    <section id="get-started" className="site-section bg-white py-16 sm:py-20">
      <div className="site-container relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 px-4 py-8 shadow-sm shadow-blue-950/5 sm:px-8 sm:py-10 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute -right-14 -top-16 size-48 rounded-full bg-blue-200/50"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 right-28 size-40 rounded-full bg-purple-100/70"
        />

        <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-royal-600 shadow-sm">
              <Sparkles aria-hidden="true" size={14} />
              Learn at your own pace
            </span>
            <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
              Start your English journey today.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Begin with structured lessons, useful practice, and clear guidance for every step toward
              your IELTS goals.
            </p>
          </div>

          <a
            href="#home"
            className="primary-button inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-royal-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
          >
            Start Free
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
