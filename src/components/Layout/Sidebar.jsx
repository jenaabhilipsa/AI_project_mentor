import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  Sparkles,
  History,
  Brain,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/tasks', label: 'Tasks', icon: ListTodo },
  { to: '/ai-mentor', label: 'AI Mentor', icon: Sparkles },
  { to: '/ai-history', label: 'AI History', icon: History },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15,23,42,0.5)',
            zIndex: 40,
          }}
          aria-hidden="true"
        />
      )}

      <aside
        className="app-sidebar"
        data-open={open}
        style={{
          width: 'var(--sidebar-width)',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, var(--primary-700), var(--primary-900))',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 50,
          transform: open ? 'translateX(0)' : undefined,
        }}
      >
        <div style={{ padding: 'var(--space-6) var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Brain size={22} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>AI Project Mentor</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Full-stack training app</div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: 'var(--space-4) var(--space-3)' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={onClose}
                  style={({ isActive }) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.75)',
                    background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'background 0.15s ease, color 0.15s ease',
                  })}
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ padding: 'var(--space-5)', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, opacity: 0.6 }}>
          Mock data mode — frontend only
        </div>
      </aside>
    </>
  )
}
