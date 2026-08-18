import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import AppLayout from './components/Layout/AppLayout'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import TasksPage from './pages/TasksPage'
import AIMentorPage from './pages/AIMentorPage'
import AIHistoryPage from './pages/AIHistoryPage'
import NotFoundPage from './pages/NotFoundPage'
import { AppProvider } from './context/AppContext'

function App() {
  const [search, setSearch] = useState('')
  return <AppProvider><BrowserRouter><AppLayout search={search} onSearchChange={setSearch}><Routes><Route path="/" element={<DashboardPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/projects/:id" element={<ProjectDetailsPage />} /><Route path="/tasks" element={<TasksPage />} /><Route path="/ai-mentor" element={<AIMentorPage />} /><Route path="/ai-history" element={<AIHistoryPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></AppLayout></BrowserRouter></AppProvider>
}
export default App
