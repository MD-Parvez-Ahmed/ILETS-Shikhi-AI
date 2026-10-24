import type { JSX } from 'react'
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, UserRound } from 'lucide-react'
import DashboardPreview from './dashboard/DashboardPreview'

interface StudentPhotoProps {
  className?: string
}

function StudentPhoto({ className = '' }: StudentPhotoProps): JSX.Element {
  return (
    <div
      className={`relative overflow-hidden rounded-t-[6rem] rounded-b-[2rem] border-4 border-white bg-gradient-to-b from-blue-100 to-blue-50 shadow-xl shadow-blue-950/15 ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center text-royal-500" aria-hidden="true">
        <UserRound size={64} strokeWidth={1.4} />
      </div>
      <img
        src="/images/Student.png"
        alt="A student holding English learning books"
        className="relative h-full w-full object-cover object-center"
        onError={(event) => {
          event.currentTarget.hidden = true
        }}
      />
    </div>
  )
}

function Hero(): JSX.Element {
  return (
    <section id="home" className="site-section relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 size-72 rounded-full bg-blue-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-8 size-44 rounded-full border-[28px] border-blue-50/80"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-[42%] size-36 rounded-full bg-cyan-100/50 blur-2xl"
      />

      <div className="site-container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(540px,1.18fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.82fr)_9rem_minmax(0,1.25fr)] xl:gap-0">
          <div className="relative z-30 max-w-xl text-center lg:text-left xl:pr-6">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-royal-600 shadow-sm">
              <Sparkles aria-hidden="true" size={14} />
              AI-powered IELTS learning
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-navy-950 sm:text-5xl lg:text-[3.35rem]">
              Learn English.{' '}
              <span className="text-royal-600">Master IELTS.</span>
              <br />
              Build your future.
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 lg:mx-0 lg:text-[17px]">
              Build confidence with guided lessons, realistic practice, and instant AI feedback
              designed for every step of your IELTS journey.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#get-started"
                className="primary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-royal-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
              >
                Start Learning Free
                <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a
                href="#learning-path"
                className="secondary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-blue-50 hover:text-royal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2"
              >
                <PlayCircle aria-hidden="true" size={17} className="text-royal-600" />
                Explore Lessons
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 lg:justify-start">
              {['Personal learning path', 'Instant AI feedback', 'IELTS-ready practice'].map(
                (benefit) => (
                  <span key={benefit} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 aria-hidden="true" size={14} className="text-royal-500" />
                    {benefit}
                  </span>
                ),
              )}
            </div>

            <StudentPhoto className="mx-auto mt-9 aspect-[2/3] w-44 sm:w-52 lg:w-44 xl:hidden" />
          </div>

          <div className="relative z-20 hidden h-full items-end justify-center xl:flex">
            <StudentPhoto className="h-[390px] w-[220px] translate-x-3" />
          </div>

          <div className="relative z-10 min-w-0 lg:col-start-2 xl:col-start-3 xl:-ml-5">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-blue-100/50 blur-2xl"
            />
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
