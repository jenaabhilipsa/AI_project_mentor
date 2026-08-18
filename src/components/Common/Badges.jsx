// Maps a status string to the matching badge CSS class.
export const statusBadgeClass = (status) => {
  switch (status) {
    case 'Pending':
      return 'badge badge-pending'
    case 'In Progress':
      return 'badge badge-progress'
    case 'Completed':
      return 'badge badge-completed'
    default:
      return 'badge badge-neutral'
  }
}

// Maps a priority string to the matching badge CSS class.
export const priorityBadgeClass = (priority) => {
  switch (priority) {
    case 'High':
      return 'badge badge-high'
    case 'Medium':
      return 'badge badge-medium'
    case 'Low':
      return 'badge badge-low'
    default:
      return 'badge badge-neutral'
  }
}

export const StatusBadge = ({ status }) => (
  <span className={statusBadgeClass(status)}>{status}</span>
)

export const PriorityBadge = ({ priority }) => (
  <span className={priorityBadgeClass(priority)}>{priority}</span>
)
