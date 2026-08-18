import { Inbox } from 'lucide-react'

export default function EmptyState({ title = 'Nothing here yet', message, icon: Icon = Inbox, action }) {
  return (
    <div className="empty-state">
      <Icon size={40} style={{ color: 'var(--neutral-300)', marginBottom: 'var(--space-4)' }} />
      <h3>{title}</h3>
      {message && <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>{message}</p>}
      {action}
    </div>
  )
}
