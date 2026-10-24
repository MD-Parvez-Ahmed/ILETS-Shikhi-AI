import type { JSX } from 'react'
import {
  BookOpenCheck,
  ChartNoAxesCombined,
  Languages,
  MessageSquareText,
  WandSparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
  iconClasses: string
}

const features: Feature[] = [
  {
    title: 'Structured Lessons',
    description: 'Follow clear, step-by-step lessons that build your English skills in the right order.',
    icon: BookOpenCheck,
    iconClasses: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'AI Writing Feedback',
    description: 'Get instant guidance on your writing, with practical tips to improve every response.',
    icon: MessageSquareText,
    iconClasses: 'bg-blue-50 text-royal-600',
  },
  {
    title: 'Personalized Recommendations',
    description: 'Receive lesson and practice suggestions shaped around your progress and learning needs.',
    icon: WandSparkles,
    iconClasses: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Progress Tracking',
    description: 'See your completed lessons, learning streaks, and improvement over time at a glance.',
    icon: ChartNoAxesCombined,
    iconClasses: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Bangla Support',
    description: 'Understand difficult English concepts with helpful Bangla explanations when you need them.',
    icon: Languages,
    iconClasses: 'bg-cyan-50 text-cyan-600',
  },
]

function Features(): JSX.Element {
  return (
    <section id="ielts-prep" className="site-section bg-white py-16 sm:py-20">
      <div className="site-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
            Built for better learning
          </p>
          <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
            Everything you need to learn smarter.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Focused tools and support that help you learn consistently and prepare with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map(({ title, description, icon: Icon, iconClasses }) => (
            <article
              key={title}
              className="surface-card group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10"
            >
              <span
                className={`flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${iconClasses}`}
              >
                <Icon aria-hidden="true" size={21} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-base font-bold leading-snug text-navy-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
