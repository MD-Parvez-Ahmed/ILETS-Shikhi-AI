import type {
  LearnerProgressDashboardData,
  WritingFeedbackShowcase,
} from '../types'

const sampleWritingResponse = `Many universities encourage students to take part in community service, and some people argue that this should be a compulsory element of every degree. I largely agree with this view because volunteering develops practical skills and strengthens the relationship between universities and their local communities.

Firstly, unpaid community work gives students experience that cannot always be gained in a classroom. For example, a business student who helps a local charity organise donations may improve communication, teamwork and problem-solving skills. These abilities are valuable when graduates apply for employment. Community projects can also expose students to people from different backgrounds, which may help them become more responsible and empathetic citizens.

Secondly, universities benefit when their students make a visible contribution to the surrounding area. Local residents may view the institution more positively, while charities receive support that they could not otherwise afford. However, the requirement should remain flexible. Students who already have jobs, caring responsibilities or health difficulties should be allowed to complete a smaller project or choose an alternative activity. Without such flexibility, compulsory volunteering could create unnecessary stress.

In conclusion, I believe community service should be included in university programmes because it provides useful experience and benefits society. Nevertheless, institutions should offer several types of project and make reasonable adjustments so that every student can participate fairly.`

export const writingFeedbackShowcase: WritingFeedbackShowcase = {
  isDemo: true,
  taskLabel: 'IELTS Academic Writing Task 2',
  question:
    'Some people believe that university students should be required to do unpaid community work as part of their studies. To what extent do you agree or disagree?',
  studentResponse: sampleWritingResponse,
  wordCount: sampleWritingResponse.trim().split(/\s+/).length,
  criteria: [
    {
      name: 'Task Response',
      bandEstimate: 6.5,
      strength: 'Presents a clear position and supports it with relevant examples.',
      areaToImprove: 'Explore the opposing view in more depth before reaching the conclusion.',
    },
    {
      name: 'Coherence and Cohesion',
      bandEstimate: 6,
      strength: 'Ideas follow a logical paragraph structure with clear progression.',
      areaToImprove: 'Use a wider range of linking phrases and avoid repeated transitions.',
    },
    {
      name: 'Lexical Resource',
      bandEstimate: 6.5,
      strength: 'Uses appropriate topic vocabulary such as “community service” and “empathetic”.',
      areaToImprove: 'Vary repeated words and check a few less natural word combinations.',
    },
    {
      name: 'Grammatical Range and Accuracy',
      bandEstimate: 6,
      strength: 'Combines simple and complex sentences with generally clear meaning.',
      areaToImprove: 'Improve article use and punctuation in longer complex sentences.',
    },
  ],
  notice: 'Sample AI Evaluation — Not an official IELTS score.',
}

export const learnerProgressDashboard: LearnerProgressDashboardData = {
  isDemo: true,
  currentLevel: 'Elementary',
  studyStreakDays: 12,
  completedLessons: 7,
  recentAttempts: 4,
  weakAreas: ['Articles', 'Essay cohesion'],
  recommendedNextLesson: 'Daily Life Conversations',
  weeklyProgress: [
    { week: 'Week 1', lessonsCompleted: 1 },
    { week: 'Week 2', lessonsCompleted: 2 },
    { week: 'Week 3', lessonsCompleted: 4 },
    { week: 'Week 4', lessonsCompleted: 5 },
    { week: 'Week 5', lessonsCompleted: 7 },
  ],
  recentActivity: [
    {
      id: 'activity-lesson-1',
      type: 'lesson',
      title: 'Completed a speaking lesson',
      detail: 'Introducing Yourself',
      timeLabel: 'Today',
    },
    {
      id: 'activity-writing-1',
      type: 'writing',
      title: 'Submitted Writing Task 2',
      detail: 'Sample band estimate: 5.5',
      timeLabel: 'Yesterday',
    },
    {
      id: 'activity-quiz-1',
      type: 'quiz',
      title: 'Finished a listening quiz',
      detail: 'Everyday Directions · 8/10',
      timeLabel: '2 days ago',
    },
    {
      id: 'activity-streak-1',
      type: 'streak',
      title: 'Reached a 12-day streak',
      detail: 'Your longest study streak so far',
      timeLabel: 'Today',
    },
  ],
}
