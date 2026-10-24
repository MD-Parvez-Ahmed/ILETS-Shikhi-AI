import type { JSX } from 'react'
import { ArrowRight, Clock3, MessageCircle } from 'lucide-react'
import { dashboardMockData } from '../../data/dashboardMockData'
import type { RecommendedLesson } from '../../types/dashboard'

interface RecommendedLessonCardProps {
  lesson?: RecommendedLesson
}

function RecommendedLessonCard({
  lesson = dashboardMockData.recommendedLesson,
}: RecommendedLessonCardProps): JSX.Element {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-royal-600">
          <MessageCircle aria-hidden="true" size={16} />
        </span>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wide text-royal-600">
            Next lesson
          </p>
          <h3 className="text-xs font-semibold text-navy-950">{lesson.title}</h3>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-1 text-[10px] text-slate-500">
          <Clock3 aria-hidden="true" size={12} />
          {lesson.skill} · {lesson.durationMinutes} min
        </p>
        <span className="inline-flex items-center gap-1 rounded-lg bg-royal-600 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-sm">
          Start Lesson
          <ArrowRight aria-hidden="true" size={12} />
        </span>
      </div>
    </article>
  )
}

export default RecommendedLessonCard
