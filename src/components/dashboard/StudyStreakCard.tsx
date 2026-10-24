import type { JSX } from 'react'
import { Flame } from 'lucide-react'
import { dashboardMockData } from '../../data/dashboardMockData'
import type { StudyStreak } from '../../types/dashboard'

interface StudyStreakCardProps {
  streak?: StudyStreak
}

function StudyStreakCard({
  streak = dashboardMockData.studyStreak,
}: StudyStreakCardProps): JSX.Element {
  return (
    <article className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-royal-600">
          <Flame aria-hidden="true" size={19} fill="currentColor" />
        </span>
        <div>
          <h3 className="text-xs font-semibold text-navy-950">Study streak</h3>
          <p className="mt-0.5 text-lg font-bold leading-none text-navy-950">
            {streak.currentDays} <span className="text-xs font-medium text-slate-500">days</span>
          </p>
        </div>
      </div>
      <p className="mt-3 border-t border-slate-100 pt-2 text-[10px] text-slate-500">
        Keep learning every day to grow your streak.
      </p>
    </article>
  )
}

export default StudyStreakCard
