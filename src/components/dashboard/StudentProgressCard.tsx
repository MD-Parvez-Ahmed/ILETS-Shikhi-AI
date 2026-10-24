import type { JSX } from 'react'
import { BookOpenCheck, GraduationCap } from 'lucide-react'
import { dashboardMockData } from '../../data/dashboardMockData'
import type { StudentProgress } from '../../types/dashboard'

interface StudentProgressCardProps {
  progress?: StudentProgress
}

function StudentProgressCard({
  progress = dashboardMockData.studentProgress,
}: StudentProgressCardProps): JSX.Element {
  const { student } = dashboardMockData

  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-blue-50 text-royal-600">
            <GraduationCap aria-hidden="true" size={16} />
          </span>
          <div>
            <h3 className="text-xs font-semibold text-navy-950">Learning progress</h3>
            <p className="text-[10px] text-slate-500">Level: {student.currentLevel}</p>
          </div>
        </div>
        <span className="text-lg font-bold text-royal-600">
          {progress.lessonProgressPercent}%
        </span>
      </div>

      <div
        aria-label={`${progress.lessonProgressPercent}% of lessons completed`}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress.lessonProgressPercent}
        className="h-1.5 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-royal-500"
          style={{ width: `${progress.lessonProgressPercent}%` }}
        />
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-500">
        <BookOpenCheck aria-hidden="true" size={12} className="text-royal-500" />
        {progress.completedLessons} of {progress.totalLessons} lessons completed
      </p>
    </article>
  )
}

export default StudentProgressCard
