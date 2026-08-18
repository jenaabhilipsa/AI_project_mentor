import axios from 'axios'

// Base URL for the future FastAPI backend.
// Read from the Vite environment variable, falling back to the local dev URL.
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

// Shared axios instance. Import this and call the helper functions below
// once the Python backend is available.
const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

// Switch used across the app to decide whether to use mock data.
// Set VITE_USE_MOCK_DATA=false in .env once the backend is connected.
export const useMockData =
  String(import.meta.env.VITE_USE_MOCK_DATA ?? 'true').toLowerCase() === 'true'

// ---- Project endpoints ----
export const getProjects = () => apiClient.get('/api/projects').then((r) => r.data)
export const getProjectById = (projectId) =>
  apiClient.get(`/api/projects/${projectId}`).then((r) => r.data)
export const createProject = (projectData) =>
  apiClient.post('/api/projects', projectData).then((r) => r.data)
export const updateProject = (projectId, projectData) =>
  apiClient.put(`/api/projects/${projectId}`, projectData).then((r) => r.data)
export const deleteProject = (projectId) =>
  apiClient.delete(`/api/projects/${projectId}`).then((r) => r.data)

// ---- Task endpoints ----
export const getTasks = () => apiClient.get('/api/tasks').then((r) => r.data)
export const getTaskById = (taskId) =>
  apiClient.get(`/api/tasks/${taskId}`).then((r) => r.data)
export const createTask = (taskData) =>
  apiClient.post('/api/tasks', taskData).then((r) => r.data)
export const updateTask = (taskId, taskData) =>
  apiClient.put(`/api/tasks/${taskId}`, taskData).then((r) => r.data)
export const updateTaskStatus = (taskId, status) =>
  apiClient.patch(`/api/tasks/${taskId}/status`, { status }).then((r) => r.data)
export const deleteTask = (taskId) =>
  apiClient.delete(`/api/tasks/${taskId}`).then((r) => r.data)

// ---- AI endpoints ----
export const generateAIPlan = (requestData) =>
  apiClient.post('/api/ai/plan', requestData).then((r) => r.data)
export const recommendNextTask = (requestData) =>
  apiClient.post('/api/ai/next-task', requestData).then((r) => r.data)
export const getAIHistory = (projectId) =>
  apiClient.get(`/api/ai/history/${projectId}`).then((r) => r.data)

// ---- Dashboard endpoint ----
export const getDashboardStatistics = () =>
  apiClient.get('/api/dashboard').then((r) => r.data)

// ---- Health check ----
export const checkBackendHealth = () =>
  apiClient.get('/api/health').then((r) => r.data)

export default apiClient
