import { Fragment, type JSX } from 'react'
import {
  ArrowRight,
  BookOpenCheck,
  ChartNoAxesCombined,
  CirclePlay,
  PencilLine,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface WorkflowStep {
  title: string
  description: string
  icon: LucideIcon
  iconClasses: string
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Study',
    description: 'Learn each concept through clear, structured lessons.',
    icon: BookOpenCheck,
    iconClasses: 'bg-blue-50 text-royal-600 ring-blue-100',
  },
  {
    title: 'Practice',
    description: 'Apply what you learn with focused English exercises.',
    icon: PencilLine,
    iconClasses: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
  },
  {
    title: 'AI Feedback',
    description: 'Receive instant, practical feedback on your answers.',
    icon: Sparkles,
    iconClasses: 'bg-purple-50 text-purple-600 ring-purple-100',
  },
  {
    title: 'Improve',
    description: 'Use personalized guidance to strengthen weak areas.',
    icon: ChartNoAxesCombined,
    iconClasses: 'bg-blue-50 text-blue-600 ring-blue-100',
  },
  {
    title: 'Next Lesson',
    description: 'Continue with the lesson that best matches your progress.',
    icon: CirclePlay,
    iconClasses: 'bg-violet-50 text-violet-600 ring-violet-100',
  },
]

function HowItWorks(): JSX.Element {
  return (
    <section className="site-section bg-slate-50 py-16 sm:py-20">
      <div className="site-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
            A smarter learning cycle
          </p>
          <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
            How IELTS Shikhi AI works?
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Every lesson connects learning, practice, feedback, and improvement in one simple flow.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100/80 bg-white px-5 py-8 shadow-sm shadow-blue-950/5 sm:px-8 sm:py-10">
          <div
            role="list"
            aria-label="IELTS Shikhi AI learning workflow"
            className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start lg:gap-3"
          >
            {workflowSteps.map(({ title, description, icon: Icon, iconClasses }, index) => (
              <Fragment key={title}>
                <article role="listitem" className="flex max-w-xs flex-col items-center text-center">
                  <span
                    className={`flex size-14 items-center justify-center rounded-full shadow-sm ring-8 ${iconClasses}`}
                  >
                    <Icon aria-hidden="true" size={24} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>

                {index < workflowSteps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="flex h-10 items-center justify-center text-blue-300 lg:h-14"
                  >
                    <ArrowRight className="rotate-90 lg:rotate-0" size={22} strokeWidth={1.8} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
