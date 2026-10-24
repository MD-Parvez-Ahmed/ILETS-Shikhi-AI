import type { JSX } from 'react'

const journeyStages = [
  {
    number: 1,
    title: 'Basic English',
    description: 'Build a strong foundation in grammar, vocabulary, reading, and everyday English.',
    circleClasses: 'bg-emerald-500 ring-emerald-100',
    accentClasses: 'text-emerald-600 bg-emerald-50',
  },
  {
    number: 2,
    title: 'Communication Skills',
    description: 'Grow your speaking and listening confidence through practical conversations.',
    circleClasses: 'bg-royal-600 ring-blue-100',
    accentClasses: 'text-royal-600 bg-blue-50',
  },
  {
    number: 3,
    title: 'IELTS Preparation',
    description: 'Prepare for every IELTS skill with focused practice, mock tests, and AI feedback.',
    circleClasses: 'bg-purple-600 ring-purple-100',
    accentClasses: 'text-purple-600 bg-purple-50',
  },
] as const

function LearningJourney(): JSX.Element {
  return (
    <section id="learning-path" className="site-section bg-blue-50/70 py-16 sm:py-20">
      <div className="site-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
            Your learning path
          </p>
          <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
            One journey. Three connected stages.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Progress naturally from English foundations to confident IELTS preparation.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[16.667%] right-[16.667%] top-6 hidden h-1 rounded-full bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 md:block"
          />

          <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
            {journeyStages.map((stage, index) => (
              <li key={stage.title} className="relative flex items-start gap-4 md:block md:text-center">
                {index < journeyStages.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-[-1.5rem] left-[23px] top-12 w-0.5 md:hidden ${
                      index === 0 ? 'bg-gradient-to-b from-emerald-300 to-blue-300' : 'bg-gradient-to-b from-blue-300 to-purple-300'
                    }`}
                  />
                )}

                <span
                  className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-base font-bold text-white shadow-md ring-8 ${stage.circleClasses} md:mx-auto`}
                >
                  {stage.number}
                </span>

                <article className="flex-1 rounded-2xl border border-white/90 bg-white p-5 text-left shadow-sm shadow-blue-950/5 md:mt-6 md:min-h-44 md:p-6 md:text-center">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${stage.accentClasses}`}
                  >
                    Stage {stage.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy-950">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stage.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default LearningJourney
