import type { JSX } from 'react'
import {
  ArrowUpCircle,
  Braces,
  CheckCircle2,
  FilePenLine,
  Info,
  Library,
  ListTree,
  Sparkles,
  Target,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { writingFeedbackShowcase } from '../data/mockData'
import type { WritingCriterionName } from '../types'

const criterionIcons: Record<WritingCriterionName, LucideIcon> = {
  'Task Response': Target,
  'Coherence and Cohesion': ListTree,
  'Lexical Resource': Library,
  'Grammatical Range and Accuracy': Braces,
}

function AIFeedback(): JSX.Element {
  const { taskLabel, question, studentResponse, wordCount, criteria, notice } =
    writingFeedbackShowcase

  return (
    <section id="ai-feedback" className="site-section bg-white py-16 sm:py-20">
      <div className="site-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-600">
            <Sparkles aria-hidden="true" size={14} />
            AI-powered writing guidance
          </div>
          <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
            Understand your writing. Improve with confidence.
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            See how focused feedback can highlight strengths and show what to work on next.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-slate-200 bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-royal-600">
                <FilePenLine aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-royal-600">
                  {taskLabel}
                </p>
                <h3 className="mt-1 text-base font-bold text-navy-950">Question</h3>
              </div>
            </div>

            <blockquote className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-sm font-medium leading-6 text-navy-950 sm:p-5">
              {question}
            </blockquote>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <h3 className="text-sm font-bold text-navy-950">Sample student response</h3>
                <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                  {wordCount} words
                </span>
              </div>
              <div
                aria-label="Sample student writing response"
                className="max-h-[360px] overflow-y-auto p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-royal-600 sm:p-5"
                tabIndex={0}
              >
                <p className="whitespace-pre-line text-sm leading-6 text-slate-600">
                  {studentResponse}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/80 p-5 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-purple-600">
                  Writing assessment
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy-950">Four IELTS criteria</h3>
              </div>
              <span className="flex size-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Sparkles aria-hidden="true" size={19} />
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {criteria.map((criterion) => {
                const Icon = criterionIcons[criterion.name]

                return (
                  <article
                    key={criterion.name}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-royal-600">
                        <Icon aria-hidden="true" size={16} />
                      </span>
                      <div className="rounded-lg border border-purple-100 bg-purple-50 px-2 py-1 text-right">
                        <p className="text-[8px] font-bold uppercase tracking-wide text-slate-500">
                          Band estimate
                        </p>
                        <p className="text-lg font-bold leading-none text-purple-600">
                          {criterion.bandEstimate}
                        </p>
                      </div>
                    </div>

                    <h4 className="mt-3 text-sm font-bold leading-5 text-navy-950">
                      {criterion.name}
                    </h4>

                    <div className="mt-3 space-y-3">
                      <div className="flex gap-2 text-xs leading-5 text-slate-600">
                        <CheckCircle2
                          aria-hidden="true"
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />
                        <p>
                          <span className="font-semibold text-navy-950">Strength: </span>
                          {criterion.strength}
                        </p>
                      </div>
                      <div className="flex gap-2 text-xs leading-5 text-slate-600">
                        <ArrowUpCircle
                          aria-hidden="true"
                          size={15}
                          className="mt-0.5 shrink-0 text-amber-500"
                        />
                        <p>
                          <span className="font-semibold text-navy-950">Improve: </span>
                          {criterion.areaToImprove}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-4 flex gap-2 rounded-xl border border-blue-100 bg-blue-50 p-3 text-xs font-medium leading-5 text-blue-800">
              <Info aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
              <p>{notice}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIFeedback
