import type { JSX } from 'react'
import { Bell } from 'lucide-react'
import { dashboardMockData } from '../../data/dashboardMockData'
import DashboardSidebar from './DashboardSidebar'
import LearningProgressChart from './LearningProgressChart'
import RecentFeedbackCard from './RecentFeedbackCard'
import RecommendedLessonCard from './RecommendedLessonCard'
import StudentProgressCard from './StudentProgressCard'
import StudyStreakCard from './StudyStreakCard'

function DashboardPreview(): JSX.Element {
  const {
    isDemoData,
    navigationItems,
    student,
    studentProgress,
    studyStreak,
    recommendedLesson,
    recentFeedback,
  } = dashboardMockData

  return (
    <section
      aria-label="Student dashboard preview"
      className="w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10"
    >
      <div className="flex min-h-[520px]">
        <div className="hidden shrink-0 sm:flex">
          <DashboardSidebar items={navigationItems} />
        </div>

        <div className="min-w-0 flex-1 bg-slate-50/80 p-3 sm:p-4">
          <header className="mb-3 flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-navy-950">Welcome back, {student.name}</h2>
                {isDemoData && (
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-royal-600">
                    Demo
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[10px] text-slate-500">
                Continue your IELTS learning journey today.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm">
                <Bell aria-hidden="true" size={14} />
              </span>
              <span
                aria-label={`${student.name} profile`}
                className="flex size-8 items-center justify-center rounded-full bg-royal-600 text-[11px] font-bold text-white"
              >
                {student.name.charAt(0)}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <StudentProgressCard progress={studentProgress} />
            <StudyStreakCard streak={studyStreak} />
            <RecommendedLessonCard lesson={recommendedLesson} />
            <RecentFeedbackCard feedback={recentFeedback} />
          </div>

          <div className="mt-3">
            <LearningProgressChart />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview
