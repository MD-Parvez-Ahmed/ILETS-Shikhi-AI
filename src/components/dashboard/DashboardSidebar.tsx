import type { JSX } from 'react'
import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  LayoutDashboard,
  MessageSquareText,
  Target,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { DashboardNavItem } from '../../types/dashboard'

interface DashboardSidebarProps {
  items: DashboardNavItem[]
}

interface SidebarItem {
  label: string
  icon: LucideIcon
  isActive?: boolean
}

const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, isActive: true },
  { label: 'My Learning', icon: BookOpen },
  { label: 'Practice', icon: Target },
  { label: 'AI Feedback', icon: MessageSquareText },
  { label: 'Progress', icon: BarChart3 },
  { label: 'Mock Tests', icon: ClipboardCheck },
]

function DashboardSidebar(_props: DashboardSidebarProps): JSX.Element {
  return (
    <aside
      aria-label="Dashboard navigation"
      className="flex h-full w-44 shrink-0 flex-col rounded-l-2xl bg-navy-950 px-3 py-4 text-slate-300"
    >
      <div className="mb-5 flex items-center gap-2 px-2">
        <span className="flex size-7 items-center justify-center rounded-lg bg-royal-500 text-white">
          <GraduationCap aria-hidden="true" size={16} strokeWidth={2.25} />
        </span>
        <span className="text-xs font-bold tracking-tight text-white">IELTS Shikhi AI</span>
      </div>

      <nav aria-label="Preview menu">
        <ul className="space-y-1">
          {sidebarItems.map(({ label, icon: Icon, isActive }) => (
            <li key={label}>
              <div
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                  isActive ? 'bg-royal-600 text-white shadow-sm' : 'text-slate-400'
                }`}
              >
                <Icon aria-hidden="true" size={14} strokeWidth={2} />
                <span>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default DashboardSidebar
