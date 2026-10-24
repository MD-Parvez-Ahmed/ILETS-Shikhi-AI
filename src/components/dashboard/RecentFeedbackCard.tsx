import type { JSX } from 'react'
import { FilePenLine, Lightbulb } from 'lucide-react'
import { dashboardMockData } from '../../data/dashboardMockData'
import type { RecentFeedback } from '../../types/dashboard'

interface RecentFeedbackCardProps {
  feedback?: RecentFeedback
}

function RecentFeedbackCard({
  feedback = dashboardMockData.recentFeedback,
}: RecentFeedbackCardProps): JSX.Element {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-royal-600">
            <FilePenLine aria-hidden="true" size={16} />
          </span>
          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-royal-600">
              Recent feedback
            </p>
            <h3 className="truncate text-xs font-semibold text-navy-950">
              {feedback.taskTitle}
            </h3>
          </div>
        </div>
        <div className="shrink-0 rounded-lg border border-blue-100 bg-blue-50 px-2 py-1 text-center">
          <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500">
            Estimated score
          </p>
          <p className="text-base font-bold leading-tight text-royal-600">{feedback.bandScore}</p>
        </div>
      </div>

      <div className="mt-3 flex gap-2 rounded-lg bg-slate-50 p-2 text-[10px] leading-relaxed text-slate-600">
        <Lightbulb aria-hidden="true" size={13} className="mt-0.5 shrink-0 text-royal-500" />
        <p>{feedback.summary}</p>
      </div>
    </article>
  )
}

export default RecentFeedbackCard
