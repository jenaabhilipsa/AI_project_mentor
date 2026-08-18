import { Menu, Search, Bell, User } from 'lucide-react'

export default function Header({ title, onMenuClick, search, onSearchChange }) {
  return (
    <header
      style={{
        height: 'var(--header-height)',
        background: 'var(--neutral-0)',
        borderBottom: '1px solid var(--neutral-200)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: '0 var(--space-6)',
        position: 'sticky',
        top: 0,
        zIndex: 30,
      }}
    >
      <button
        className="btn-icon header-menu-btn"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <Menu size={20} />
      </button>

      <h1 className="page-title" style={{ flexShrink: 0 }}>{title}</h1>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', maxWidth: 480, margin: '0 auto' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--neutral-400)',
            }}
          />
          <input
            type="search"
            className="form-input"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search tasks"
            style={{ paddingLeft: 34 }}
          />
        </div>
      </div>

      <button className="btn-icon" aria-label="Notifications" style={{ position: 'relative' }}>
        <Bell size={20} />
        <span style={{
          position: 'absolute', top: 6, right: 6,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--error-500)',
        }} />
      </button>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: '4px 12px', borderRadius: 999,
        background: 'var(--neutral-100)',
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'var(--primary-100)', color: 'var(--primary-700)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <User size={16} />
        </div>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--neutral-700)' }}>Student</span>
      </div>
    </header>
  )
}
