// Mock data for the AI Project Mentor frontend.
// Later this can be replaced with real API calls from src/services/api.js

export const mockProjects = [
  {
    id: 1,
    name: 'Student Placement Portal',
    description:
      'A portal where students can register, upload their resumes, and apply for campus placement drives. Admins can manage companies and track placement statistics.',
    techStack: ['React', 'FastAPI', 'SQL Server', 'Ollama'],
    createdAt: '2026-07-04',
  },
  {
    id: 2,
    name: 'Hospital Appointment System',
    description:
      'A booking system that lets patients schedule appointments with doctors, view available time slots, and receive reminders for upcoming visits.',
    techStack: ['React', 'FastAPI', 'SQL Server'],
    createdAt: '2026-07-18',
  },
  {
    id: 3,
    name: 'AI Resume Mentor',
    description:
      'An AI-powered resume review tool that analyses a student resume, suggests improvements, and generates tailored interview preparation questions.',
    techStack: ['React', 'FastAPI', 'SQL Server', 'GPT-OSS'],
    createdAt: '2026-08-01',
  },
]

export const mockTasks = [
  {
    id: 1,
    projectId: 1,
    title: 'Design student registration form',
    description: 'Create a responsive registration form with validation for name, email, and phone fields.',
    priority: 'High',
    status: 'Completed',
    aiGenerated: false,
    createdAt: '2026-07-05',
    updatedAt: '2026-07-10',
  },
  {
    id: 2,
    projectId: 1,
    title: 'Build resume upload component',
    description: 'Allow students to upload PDF resumes with a size limit and preview.',
    priority: 'Medium',
    status: 'In Progress',
    aiGenerated: false,
    createdAt: '2026-07-06',
    updatedAt: '2026-08-12',
  },
  {
    id: 3,
    projectId: 1,
    title: 'Create company dashboard',
    description: 'Admin dashboard to add companies, view drives, and track applicant counts.',
    priority: 'High',
    status: 'Pending',
    aiGenerated: false,
    createdAt: '2026-07-08',
    updatedAt: '2026-07-08',
  },
  {
    id: 4,
    projectId: 1,
    title: 'Implement placement statistics charts',
    description: 'Show placement trends and branch-wise statistics using charts.',
    priority: 'Low',
    status: 'Pending',
    aiGenerated: true,
    createdAt: '2026-07-12',
    updatedAt: '2026-07-12',
  },
  {
    id: 5,
    projectId: 2,
    title: 'Design doctor availability calendar',
    description: 'Calendar view showing available slots for each doctor per day.',
    priority: 'High',
    status: 'In Progress',
    aiGenerated: false,
    createdAt: '2026-07-20',
    updatedAt: '2026-08-14',
  },
  {
    id: 6,
    projectId: 2,
    title: 'Build patient appointment booking flow',
    description: 'Multi-step booking flow: select doctor, pick slot, confirm details.',
    priority: 'High',
    status: 'Pending',
    aiGenerated: false,
    createdAt: '2026-07-22',
    updatedAt: '2026-07-22',
  },
  {
    id: 7,
    projectId: 2,
    title: 'Add appointment reminder emails',
    description: 'Send reminder emails 24 hours before each appointment.',
    priority: 'Medium',
    status: 'Pending',
    aiGenerated: true,
    createdAt: '2026-07-25',
    updatedAt: '2026-07-25',
  },
  {
    id: 8,
    projectId: 3,
    title: 'Create resume parser service',
    description: 'Service that extracts skills, education, and experience from uploaded resumes.',
    priority: 'High',
    status: 'In Progress',
    aiGenerated: false,
    createdAt: '2026-08-02',
    updatedAt: '2026-08-15',
  },
  {
    id: 9,
    projectId: 3,
    title: 'Build AI feedback display',
    description: 'Show AI-generated resume suggestions in an editable, sectioned layout.',
    priority: 'Medium',
    status: 'Pending',
    aiGenerated: false,
    createdAt: '2026-08-05',
    updatedAt: '2026-08-05',
  },
  {
    id: 10,
    projectId: 3,
    title: 'Generate interview question bank',
    description: 'Create a question bank based on resume skills and job role.',
    priority: 'Low',
    status: 'Completed',
    aiGenerated: true,
    createdAt: '2026-08-08',
    updatedAt: '2026-08-16',
  },
]

export const mockAIHistory = [
  {
    id: 1,
    projectId: 1,
    projectName: 'Student Placement Portal',
    userPrompt:
      'I need a plan to build the student registration and resume upload features for the placement portal.',
    responsePreview:
      'Requirement understood: build registration and resume upload. Suggested 4 frontend tasks, 3 backend tasks, and 2 testing steps.',
    modelName: 'GPT-OSS',
    taskType: 'Break Requirement into Tasks',
    createdAt: '2026-07-06',
  },
  {
    id: 2,
    projectId: 2,
    projectName: 'Hospital Appointment System',
    userPrompt: 'What should I implement next for the appointment booking system?',
    responsePreview:
      'Recommended next task: build the patient appointment booking flow. Reason: it unblocks the reminder and calendar features.',
    modelName: 'GPT-OSS',
    taskType: 'Recommend Next Task',
    createdAt: '2026-07-24',
  },
  {
    id: 3,
    projectId: 3,
    projectName: 'AI Resume Mentor',
    userPrompt: 'Identify possible blockers for the resume parser feature.',
    responsePreview:
      'Possible blockers: inconsistent resume formats, large file handling, and rate limits on the AI model.',
    modelName: 'GPT-OSS',
    taskType: 'Identify Project Blockers',
    createdAt: '2026-08-04',
  },
  {
    id: 4,
    projectId: 1,
    projectName: 'Student Placement Portal',
    userPrompt: 'Generate a testing checklist for the company dashboard.',
    responsePreview:
      'Testing checklist: form validation, role-based access, data export, and responsive layout checks.',
    modelName: 'GPT-OSS',
    taskType: 'Generate Testing Checklist',
    createdAt: '2026-08-10',
  },
]

// A structured mock AI response used by the AI Mentor page.
export const mockAIResponse = {
  requirementUnderstanding:
    'The requirement asks for a structured plan covering frontend, backend, database, and testing for the selected project.',
  frontendTasks: [
    'Create reusable form components with validation.',
    'Build a responsive layout with navigation and header.',
    'Add loading and error states for API calls.',
  ],
  backendTasks: [
    'Create REST endpoints for the main resource.',
    'Add request validation and error handling.',
    'Connect the service layer to the database.',
  ],
  databaseTasks: [
    'Design tables for the core entities and relationships.',
    'Add indexes for frequently queried columns.',
    'Create a migration for the initial schema.',
  ],
  testingSteps: [
    'Write unit tests for the form validation logic.',
    'Write integration tests for the API endpoints.',
    'Manually test the responsive layout on mobile and desktop.',
  ],
  possibleBlockers: [
    'Unclear business rules may require clarification.',
    'External API rate limits could slow down development.',
    'Database schema changes may impact existing features.',
  ],
  recommendedNextAction:
    'Start with the backend endpoints and database schema, then build the frontend forms that consume them.',
}
