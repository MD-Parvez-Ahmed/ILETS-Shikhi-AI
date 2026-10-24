import type { JSX } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { dashboardMockData } from '../../data/dashboardMockData'

function LearningProgressChart(): JSX.Element {
  const { weeklyProgress } = dashboardMockData

  return (
    <section
      aria-labelledby="learning-progress-title"
      className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 id="learning-progress-title" className="text-xs font-semibold text-navy-950">
          Your Learning Progress
        </h3>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-semibold text-royal-600">
          Demo data
        </span>
      </div>

      <div
        aria-label="Demonstration chart of lessons completed by week"
        className="h-40 min-w-0 w-full"
        role="img"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyProgress} margin={{ top: 8, right: 8, left: 6, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="week"
              axisLine={false}
              tick={{ fill: '#64748b', fontSize: 9 }}
              tickLine={false}
              tickMargin={8}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              label={{
                value: 'Lessons Completed',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#64748b', fontSize: 9 },
              }}
              tick={{ fill: '#64748b', fontSize: 9 }}
              tickLine={false}
              width={45}
            />
            <Tooltip
              contentStyle={{
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                boxShadow: '0 4px 12px rgb(15 23 42 / 0.08)',
                fontSize: 11,
              }}
              cursor={{ stroke: '#bfdbfe', strokeDasharray: '3 3' }}
            />
            <Line
              dataKey="lessonsCompleted"
              dot={{ fill: '#ffffff', r: 3, stroke: '#1769f4', strokeWidth: 2 }}
              activeDot={{ fill: '#1769f4', r: 4, stroke: '#ffffff', strokeWidth: 2 }}
              name="Lessons Completed"
              stroke="#1769f4"
              strokeWidth={2.5}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}

export default LearningProgressChart
