import type { JSX } from 'react'
import { ChartNoAxesCombined, Compass, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Benefit {
  title: string
  description: string
  icon: LucideIcon
  iconClasses: string
  accentClasses: string
}

const benefits: Benefit[] = [
  {
    title: 'Build Confidence',
    description:
      'Practice English and IELTS skills in small, manageable steps until challenging tasks feel familiar.',
    icon: ShieldCheck,
    iconClasses: 'bg-emerald-100 text-emerald-600',
    accentClasses: 'bg-emerald-300',
  },
  {
    title: 'Get Clear Guidance',
    description:
      'Follow focused lessons and practical feedback that clearly explain what to improve and how to do it.',
    icon: Compass,
    iconClasses: 'bg-blue-100 text-royal-600',
    accentClasses: 'bg-blue-300',
  },
  {
    title: 'Track Your Progress',
    description:
      'See completed lessons, study consistency, and skill development so you always know your next step.',
    icon: ChartNoAxesCombined,
    iconClasses: 'bg-purple-100 text-purple-600',
    accentClasses: 'bg-purple-300',
  },
]

function WhyChooseUs(): JSX.Element {
  return (
    <section id="about" className="site-section bg-gradient-to-b from-white to-blue-50/70 py-16 sm:py-20">
      <div className="site-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
            Learn with purpose
          </p>
          <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
            Why choose IELTS Shikhi AI?
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            A guided learning experience designed to make progress feel clear, practical, and achievable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon, iconClasses, accentClasses }) => (
            <article
              key={title}
              className="surface-card relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-blue-950/5 sm:p-7"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${accentClasses}`} />
              <span className={`flex size-12 items-center justify-center rounded-2xl ${iconClasses}`}>
                <Icon aria-hidden="true" size={23} strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
