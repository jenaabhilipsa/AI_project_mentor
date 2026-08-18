export default function LoadingSpinner({ message }) {
  return (
    <div className="empty-state" role="status" aria-live="polite">
      <div className="spinner" style={{ margin: '0 auto var(--space-4)' }} />
      {message && <p>{message}</p>}
    </div>
  )
}
