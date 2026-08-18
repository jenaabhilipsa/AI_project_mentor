import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

// Derives the page title from the current route.
const titles = {
  '/': 'Dashboard',
  '/projects': 'Projects',
  '/tasks': 'Tasks',
  '/ai-mentor': 'AI Mentor',
  '/ai-history': 'AI History',
}

export default function AppLayout({ search, onSearchChange, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  let title = titles[location.pathname]
  if (!title) {
    if (location.pathname.startsWith('/projects/')) {
      title = 'Project Details'
    } else {
      title = 'Page Not Found'
    }
  }

  return (
    <div className="app-shell">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Header
          title={title}
          onMenuClick={() => setSidebarOpen(true)}
          search={search}
          onSearchChange={onSearchChange}
        />
        <main className="app-content">{children}</main>
      </div>
    </div>
  )
}
