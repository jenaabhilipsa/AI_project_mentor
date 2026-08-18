import { CheckCircle, X } from 'lucide-react'

export default function SuccessMessage({ message, onDismiss }) {
  if (!message) return null
  return (
    <div className="alert alert-success" role="status">
      <CheckCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
      <span style={{ flex: 1 }}>{message}</span>
      {onDismiss && (
        <button className="btn-icon" onClick={onDismiss} aria-label="Dismiss message">
          <X size={16} />
        </button>
      )}
    </div>
  )
}
