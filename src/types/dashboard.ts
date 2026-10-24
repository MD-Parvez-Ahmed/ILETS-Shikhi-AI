export interface DashboardNavItem {
  id: string
  label: string
  isActive?: boolean
}

export interface Student {
  name: string
  currentLevel: string
}

export interface StudentProgress {
  lessonProgressPercent: number
  currentBand: number
  targetBand: number
  completedLessons: number
  totalLessons: number
}

export interface StudyStreak {
  currentDays: number
  longestDays: number
}

export interface RecommendedLesson {
  id: string
  title: string
  skill: string
  durationMinutes: number
}

export interface RecentFeedback {
  id: string
  taskTitle: string
  summary: string
  bandScore: number
}

export interface WeeklyProgressPoint {
  week: string
  lessonsCompleted: number
}

export interface DashboardMockData {
  isDemoData: true
  navigationItems: DashboardNavItem[]
  student: Student
  studentProgress: StudentProgress
  studyStreak: StudyStreak
  recommendedLesson: RecommendedLesson
  recentFeedback: RecentFeedback
  weeklyProgress: WeeklyProgressPoint[]
}
