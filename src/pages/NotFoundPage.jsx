import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
export default function NotFoundPage() { return <div className="card empty-state"><SearchX size={44} style={{ color: 'var(--primary-400)', marginBottom: 16 }} /><h2 style={{ marginBottom: 8 }}>Page not found</h2><p className="text-muted" style={{ marginBottom: 20 }}>The page you are looking for does not exist.</p><Link to="/" className="btn btn-primary">Back to Dashboard</Link></div> }
