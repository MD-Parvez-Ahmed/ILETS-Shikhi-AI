import type { DashboardMockData } from '../types/dashboard'

export const dashboardMockData: DashboardMockData = {
  isDemoData: true,
  navigationItems: [
    { id: 'overview', label: 'Overview', isActive: true },
    { id: 'lessons', label: 'Lessons' },
    { id: 'feedback', label: 'Feedback' },
  ],
  student: {
    name: 'Demo Learner',
    currentLevel: 'Elementary',
  },
  studentProgress: {
    lessonProgressPercent: 35,
    currentBand: 5.5,
    targetBand: 6.5,
    completedLessons: 7,
    totalLessons: 20,
  },
  studyStreak: {
    currentDays: 12,
    longestDays: 12,
  },
  recommendedLesson: {
    id: 'daily-life-conversations',
    title: 'Daily Life Conversations',
    skill: 'Speaking',
    durationMinutes: 15,
  },
  recentFeedback: {
    id: 'writing-task-2-feedback',
    taskTitle: 'Sample Writing Task 2',
    summary: 'Use clearer topic sentences and support each main idea with a specific example.',
    bandScore: 5.5,
  },
  weeklyProgress: [
    { week: 'Week 1', lessonsCompleted: 1 },
    { week: 'Week 2', lessonsCompleted: 2 },
    { week: 'Week 3', lessonsCompleted: 4 },
    { week: 'Week 4', lessonsCompleted: 5 },
    { week: 'Week 5', lessonsCompleted: 7 },
  ],
}
