import { createContext, useContext, useMemo, useState } from 'react'
import {
  mockProjects,
  mockTasks,
  mockAIHistory,
} from '../data/mockData'

// Central app state. For now all data lives in memory (mock data).
// When the FastAPI backend is ready, replace these actions with calls
// to the helpers in src/services/api.js.
const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [projects, setProjects] = useState(mockProjects)
  const [tasks, setTasks] = useState(mockTasks)
  const [aiHistory, setAiHistory] = useState(mockAIHistory)

  // ---- Project helpers ----
  const addProject = (data) => {
    const id = projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1
    const newProject = {
      id,
      name: data.name,
      description: data.description,
      techStack: data.techStack,
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setProjects((prev) => [...prev, newProject])
    return newProject
  }

  const updateProject = (id, data) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    )
  }

  const removeProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
    // Also remove tasks that belonged to the deleted project.
    setTasks((prev) => prev.filter((t) => t.projectId !== id))
  }

  // ---- Task helpers ----
  const addTask = (data) => {
    const id = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1
    const today = new Date().toISOString().slice(0, 10)
    const newTask = {
      id,
      projectId: Number(data.projectId),
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
      aiGenerated: Boolean(data.aiGenerated),
      createdAt: today,
      updatedAt: today,
    }
    setTasks((prev) => [...prev, newTask])
    return newTask
  }

  const updateTask = (id, data) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              ...data,
              projectId: data.projectId ? Number(data.projectId) : t.projectId,
              updatedAt: new Date().toISOString().slice(0, 10),
            }
          : t
      )
    )
  }

  const changeTaskStatus = (id, status) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status, updatedAt: new Date().toISOString().slice(0, 10) } : t
      )
    )
  }

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  // ---- AI history helpers ----
  const addAIHistory = (entry) => {
    const id = aiHistory.length ? Math.max(...aiHistory.map((h) => h.id)) + 1 : 1
    const newEntry = {
      id,
      createdAt: new Date().toISOString().slice(0, 10),
      ...entry,
    }
    setAiHistory((prev) => [newEntry, ...prev])
    return newEntry
  }

  const removeAIHistory = (id) => {
    setAiHistory((prev) => prev.filter((h) => h.id !== id))
  }

  // ---- Derived helpers ----
  const getProject = (id) => projects.find((p) => p.id === Number(id))
  const tasksForProject = (projectId) =>
    tasks.filter((t) => t.projectId === Number(projectId))
  const projectName = (projectId) => {
    const p = projects.find((pr) => pr.id === Number(projectId))
    return p ? p.name : 'Unknown project'
  }

  const value = useMemo(
    () => ({
      projects,
      tasks,
      aiHistory,
      addProject,
      updateProject,
      removeProject,
      addTask,
      updateTask,
      changeTaskStatus,
      removeTask,
      addAIHistory,
      removeAIHistory,
      getProject,
      tasksForProject,
      projectName,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [projects, tasks, aiHistory]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside an AppProvider')
  return ctx
}
