import { AlertCircle, X } from 'lucide-react'

export default function ErrorMessage({ message, onDismiss }) {
  if (!message) return null
  return (
    <div className="alert alert-error" role="alert">
      <AlertCircle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
      <span style={{ flex: 1 }}>{message}</span>
      {onDismiss && (
        <button className="btn-icon" onClick={onDismiss} aria-label="Dismiss error">
          <X size={16} />
        </button>
      )}
    </div>
  )
}
