export type WritingCriterionName =
  | 'Task Response'
  | 'Coherence and Cohesion'
  | 'Lexical Resource'
  | 'Grammatical Range and Accuracy'

export interface WritingAssessmentCriterion {
  name: WritingCriterionName
  bandEstimate: number
  strength: string
  areaToImprove: string
}

export interface WritingFeedbackShowcase {
  isDemo: true
  taskLabel: string
  question: string
  studentResponse: string
  wordCount: number
  criteria: WritingAssessmentCriterion[]
  notice: string
}

export interface LearnerProgressPoint {
  week: string
  lessonsCompleted: number
}

export type LearnerActivityType = 'lesson' | 'writing' | 'quiz' | 'streak'

export interface LearnerActivity {
  id: string
  type: LearnerActivityType
  title: string
  detail: string
  timeLabel: string
}

export interface LearnerProgressDashboardData {
  isDemo: true
  currentLevel: string
  studyStreakDays: number
  completedLessons: number
  recentAttempts: number
  weakAreas: string[]
  recommendedNextLesson: string
  weeklyProgress: LearnerProgressPoint[]
  recentActivity: LearnerActivity[]
}
