import {
  FolderKanban,
  ListTodo,
  Clock3,
  PlayCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { PriorityBadge, StatusBadge } from '../components/Common/Badges'

const formatDate = (date) => new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

export default function DashboardPage() {
  const { projects, tasks, projectName } = useApp()
  const completed = tasks.filter((task) => task.status === 'Completed').length
  const pending = tasks.filter((task) => task.status === 'Pending').length
  const inProgress = tasks.filter((task) => task.status === 'In Progress').length
  const recentTasks = [...tasks].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 6)
  const recommendedTask = tasks.find((task) => task.status === 'In Progress') || tasks[0]

  const summaryCards = [
    { label: 'Total Projects', value: projects.length, icon: FolderKanban, color: 'var(--primary-600)', bg: 'var(--primary-50)' },
    { label: 'Total Tasks', value: tasks.length, icon: ListTodo, color: 'var(--cyan-600)', bg: 'var(--cyan-50)' },
    { label: 'Pending Tasks', value: pending, icon: Clock3, color: 'var(--warning-600)', bg: 'var(--warning-50)' },
    { label: 'In Progress', value: inProgress, icon: PlayCircle, color: 'var(--primary-600)', bg: 'var(--primary-50)' },
    { label: 'Completed Tasks', value: completed, icon: CheckCircle2, color: 'var(--success-600)', bg: 'var(--success-50)' },
  ]

  return (
    <div className="stack" style={{ gap: 'var(--space-7)' }}>
      <div>
        <p className="text-muted" style={{ marginTop: 4 }}>A focused workspace to plan, build, and learn full-stack development.</p>
      </div>

      <div className="grid grid-5">
        {summaryCards.map(({ label, value, icon: Icon, color, bg }) => (
          <div className="card" key={label} style={{ padding: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={21} />
            </div>
            <div>
              <p className="text-muted text-sm">{label}</p>
              <p style={{ fontSize: 24, fontWeight: 700, color: 'var(--neutral-900)', lineHeight: 1.2 }}>{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        <section className="card">
          <div className="card-header">
            <h2 className="card-title">Project Progress</h2>
            <Link to="/projects" className="text-sm">View all <ArrowRight size={13} style={{ verticalAlign: -2 }} /></Link>
          </div>
          <div className="card-body stack">
            {projects.map((project) => {
              const projectTasks = tasks.filter((task) => task.projectId === project.id)
              const projectCompleted = projectTasks.filter((task) => task.status === 'Completed').length
              const progress = projectTasks.length ? Math.round((projectCompleted / projectTasks.length) * 100) : 0
              return (
                <div key={project.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>{project.name}</p>
                      <p className="text-muted text-sm">{project.techStack.slice(0, 3).join(' · ')}</p>
                    </div>
                    <span style={{ fontWeight: 600, color: 'var(--primary-600)', fontSize: 14 }}>{progress}%</span>
                  </div>
                  <div className="progress"><div className="progress-bar" style={{ width: `${progress}%` }} /></div>
                  <p className="text-muted text-sm" style={{ marginTop: 6 }}>{projectCompleted} of {projectTasks.length} tasks complete</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h2 className="card-title">AI Recommended Next Task</h2>
            <Sparkles size={18} style={{ color: 'var(--indigo-600)' }} />
          </div>
          <div className="card-body" style={{ minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {recommendedTask && (
              <>
                <p className="text-muted text-sm" style={{ marginBottom: 6 }}>For {projectName(recommendedTask.projectId)}</p>
                <h3 style={{ fontSize: 20, marginBottom: 12 }}>{recommendedTask.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: 'var(--space-5)' }}>
                  This task is already in progress and is a good next focus because it helps unlock the rest of the project workflow.
                </p>
                <Link to="/ai-mentor" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  View Recommendation <ArrowRight size={16} />
                </Link>
              </>
            )}
          </div>
        </section>
      </div>

      <section className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Tasks</h2>
          <Link to="/tasks" className="text-sm">View all <ArrowRight size={13} style={{ verticalAlign: -2 }} /></Link>
        </div>
        <div className="table-wrapper" style={{ border: 0, borderRadius: 0 }}>
          <table className="data-table">
            <thead><tr><th>Task</th><th>Project</th><th>Priority</th><th>Status</th><th>Updated</th></tr></thead>
            <tbody>
              {recentTasks.map((task) => (
                <tr key={task.id}>
                  <td style={{ fontWeight: 500, color: 'var(--neutral-800)' }}>{task.title}</td>
                  <td>{projectName(task.projectId)}</td>
                  <td><PriorityBadge priority={task.priority} /></td>
                  <td><StatusBadge status={task.status} /></td>
                  <td className="text-muted">{formatDate(task.updatedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
