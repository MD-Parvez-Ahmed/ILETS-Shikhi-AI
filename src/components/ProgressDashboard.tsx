import type { JSX } from 'react'
import {
  BookOpenCheck,
  CheckCircle2,
  ClipboardPenLine,
  FilePenLine,
  Flame,
  Headphones,
  History,
  Layers3,
  ListChecks,
  Sparkles,
  TriangleAlert,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { learnerProgressDashboard } from '../data/mockData'
import type { LearnerActivityType } from '../types'

interface SummaryCard {
  label: string
  value: string
  detail: string
  icon: LucideIcon
  iconClasses: string
}

const activityIcons: Record<LearnerActivityType, LucideIcon> = {
  lesson: BookOpenCheck,
  writing: FilePenLine,
  quiz: Headphones,
  streak: Flame,
}

function ProgressDashboard(): JSX.Element {
  const {
    isDemo,
    currentLevel,
    studyStreakDays,
    completedLessons,
    recentAttempts,
    weakAreas,
    recommendedNextLesson,
    weeklyProgress,
    recentActivity,
  } = learnerProgressDashboard

  const summaryCards: SummaryCard[] = [
    {
      label: 'Current Level',
      value: currentLevel,
      detail: 'Foundation pathway',
      icon: Layers3,
      iconClasses: 'bg-blue-50 text-royal-600',
    },
    {
      label: 'Study Streak',
      value: `${studyStreakDays} days`,
      detail: 'Keep the momentum going',
      icon: Flame,
      iconClasses: 'bg-orange-50 text-orange-500',
    },
    {
      label: 'Completed Lessons',
      value: String(completedLessons),
      detail: 'Across your learning path',
      icon: CheckCircle2,
      iconClasses: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Recent Attempts',
      value: String(recentAttempts),
      detail: 'Practice activities this week',
      icon: ClipboardPenLine,
      iconClasses: 'bg-indigo-50 text-indigo-600',
    },
    {
      label: 'Weak Areas',
      value: `${weakAreas.length} topics`,
      detail: weakAreas.join(' · '),
      icon: TriangleAlert,
      iconClasses: 'bg-amber-50 text-amber-600',
    },
    {
      label: 'Recommended Next Lesson',
      value: recommendedNextLesson,
      detail: 'Personalized for your progress',
      icon: Sparkles,
      iconClasses: 'bg-purple-50 text-purple-600',
    },
  ]

  return (
    <section className="site-section bg-blue-50/60 py-16 sm:py-20">
      <div className="site-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-royal-600">
              Your learning dashboard
            </p>
            <h2 className="section-title text-3xl font-bold tracking-[-0.025em] text-navy-950 sm:text-4xl">
              Track your progress. Get personalized recommendations.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              See your learning momentum, recent work, and the most useful next step in one place.
            </p>
          </div>
          {isDemo && (
            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-royal-600 shadow-sm">
              <Sparkles aria-hidden="true" size={14} />
              Demonstration data
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {summaryCards.map(({ label, value, detail, icon: Icon, iconClasses }) => (
            <article
              key={label}
              className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-blue-950/5"
            >
              <span className={`flex size-9 items-center justify-center rounded-xl ${iconClasses}`}>
                <Icon aria-hidden="true" size={18} />
              </span>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {label}
              </p>
              <p className="mt-1 line-clamp-2 text-base font-bold leading-5 text-navy-950">{value}</p>
              <p className="mt-2 text-[11px] leading-4 text-slate-500">{detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
          <article className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-blue-950/5 sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-royal-600">
                  Demonstration data
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy-950">Lessons completed</h3>
                <p className="mt-1 text-xs text-slate-500">Five-week learning progress</p>
              </div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-royal-600">
                <ListChecks aria-hidden="true" size={18} />
              </span>
            </div>

            <div
              aria-label="Demonstration line chart of lessons completed by week"
              className="h-72 min-w-0 w-full"
              role="img"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyProgress} margin={{ top: 12, right: 12, left: -16, bottom: 0 }}>
                  <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="week"
                    axisLine={false}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis
                    allowDecimals={false}
                    axisLine={false}
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      border: '1px solid #e2e8f0',
                      borderRadius: 10,
                      boxShadow: '0 8px 20px rgb(15 23 42 / 0.08)',
                      fontSize: 12,
                    }}
                    cursor={{ stroke: '#bfdbfe', strokeDasharray: '3 3' }}
                  />
                  <Line
                    activeDot={{ fill: '#1769f4', r: 5, stroke: '#ffffff', strokeWidth: 2 }}
                    dataKey="lessonsCompleted"
                    dot={{ fill: '#ffffff', r: 4, stroke: '#1769f4', strokeWidth: 2.5 }}
                    name="Lessons Completed"
                    stroke="#1769f4"
                    strokeWidth={3}
                    type="monotone"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </article>

          <aside className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-blue-950/5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-purple-600">
                  Demonstration data
                </p>
                <h3 className="mt-1 text-lg font-bold text-navy-950">Recent Activity</h3>
              </div>
              <span className="flex size-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <History aria-hidden="true" size={18} />
              </span>
            </div>

            <div className="mt-5 divide-y divide-slate-100">
              {recentActivity.map((activity) => {
                const Icon = activityIcons[activity.type]

                return (
                  <div key={activity.id} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-royal-600">
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold leading-5 text-navy-950">{activity.title}</p>
                        <span className="shrink-0 text-[10px] font-medium text-slate-400">
                          {activity.timeLabel}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{activity.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-500">
          All learner statistics, activities, and recommendations shown above are demonstration data.
        </p>
      </div>
    </section>
  )
}

export default ProgressDashboard
