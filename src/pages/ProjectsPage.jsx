import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Eye, Pencil, Trash2, FolderKanban } from 'lucide-react'
import { useApp } from '../context/AppContext'
import Modal from '../components/Common/Modal'
import ConfirmDialog from '../components/Common/ConfirmDialog'
import EmptyState from '../components/Common/EmptyState'
import SuccessMessage from '../components/Common/SuccessMessage'

const emptyForm = { name: '', description: '', techStack: '' }
const dateLabel = (date) => new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || emptyForm)
  const [errors, setErrors] = useState({})
  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))
  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Project name is required.'
    if (!form.description.trim()) next.description = 'Description is required.'
    if (!form.techStack.trim()) next.techStack = 'Technology stack is required.'
    setErrors(next)
    if (!Object.keys(next).length) onSave({ ...form, techStack: form.techStack.split(',').map((x) => x.trim()).filter(Boolean) })
  }
  return <form onSubmit={submit}>
    <div className="form-group"><label className="form-label" htmlFor="project-name">Project Name</label><input id="project-name" className="form-input" value={form.name} onChange={(e) => set('name', e.target.value)} />{errors.name && <span className="form-error">{errors.name}</span>}</div>
    <div className="form-group"><label className="form-label" htmlFor="project-description">Project Description</label><textarea id="project-description" className="form-textarea" value={form.description} onChange={(e) => set('description', e.target.value)} />{errors.description && <span className="form-error">{errors.description}</span>}</div>
    <div className="form-group"><label className="form-label" htmlFor="project-stack">Technology Stack</label><input id="project-stack" className="form-input" placeholder="React, FastAPI, SQL Server" value={form.techStack} onChange={(e) => set('techStack', e.target.value)} />{errors.techStack && <span className="form-error">{errors.techStack}</span>}</div>
    <div className="modal-footer" style={{ margin: 'var(--space-6) calc(var(--space-6) * -1) calc(var(--space-6) * -1)' }}><button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button><button className="btn btn-primary">Save Project</button></div>
  </form>
}

export default function ProjectsPage() {
  const { projects, tasks, addProject, updateProject, removeProject } = useApp()
  const [modal, setModal] = useState(null)
  const [confirm, setConfirm] = useState(null)
  const [message, setMessage] = useState('')
  const projectTaskCount = (id) => tasks.filter((task) => task.projectId === id)
  const save = (data) => { modal?.id ? updateProject(modal.id, data) : addProject(data); setModal(null); setMessage(modal?.id ? 'Project updated successfully.' : 'Project created successfully.') }
  return <div className="stack" style={{ gap: 'var(--space-6)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}><div><p className="text-muted" style={{ marginTop: 4 }}>Organise your learning projects and track their progress.</p></div><button className="btn btn-primary" onClick={() => setModal({})}><Plus size={17} /> Create Project</button></div>
    <SuccessMessage message={message} onDismiss={() => setMessage('')} />
    {projects.length === 0 ? <div className="card"><EmptyState title="No projects yet" message="Create your first software project to get started." /></div> : <div className="grid grid-3">{projects.map((project) => { const list = projectTaskCount(project.id); const completed = list.filter((task) => task.status === 'Completed').length; return <article className="card" key={project.id} style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 16 }}><div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}><div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--primary-50)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FolderKanban size={21} /></div><span className="text-muted text-sm">#{String(project.id).padStart(3, '0')}</span></div><div><h2 style={{ fontSize: 17, marginBottom: 8 }}>{project.name}</h2><p className="text-muted text-sm" style={{ lineHeight: 1.55, minHeight: 68 }}>{project.description}</p></div><div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{project.techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div><div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--neutral-100)', fontSize: 13 }}><span className="text-muted">{completed}/{list.length} tasks complete</span><span className="text-muted">{dateLabel(project.createdAt)}</span></div><div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}><Link className="btn btn-primary btn-sm" to={`/projects/${project.id}`}><Eye size={14} /> View</Link><button className="btn btn-secondary btn-sm" onClick={() => setModal({ ...project, techStack: project.techStack.join(', ') })}><Pencil size={14} /> Edit</button><button className="btn btn-icon" onClick={() => setConfirm(project)} aria-label={`Delete ${project.name}`}><Trash2 size={16} /></button></div></article> })}</div>}
    <Modal open={Boolean(modal)} title={modal?.id ? 'Edit Project' : 'Create Project'} onClose={() => setModal(null)}><ProjectForm initial={modal?.id ? modal : emptyForm} onSave={save} onCancel={() => setModal(null)} /></Modal>
    <ConfirmDialog open={Boolean(confirm)} title="Delete project?" message={`This will delete ${confirm?.name} and all of its tasks. This action cannot be undone.`} confirmLabel="Delete Project" onCancel={() => setConfirm(null)} onConfirm={() => { removeProject(confirm.id); setConfirm(null); setMessage('Project deleted successfully.') }} />
  </div>
}
