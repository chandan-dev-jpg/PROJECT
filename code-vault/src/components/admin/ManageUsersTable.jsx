import { MoreVertical } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { adminUsers } from '../../data/mockData'

export default function ManageUsersTable() {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between p-5 pb-0">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Manage Users</h3>
        <button className="btn-primary py-1.5 text-xs">+ Add User</button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 dark:border-white/5 text-xs uppercase tracking-wide text-ink-400">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Joined</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers.map(u => (
              <tr key={u.id} className="border-b border-ink-50 dark:border-white/5 last:border-0 hover:bg-ink-50/70 dark:hover:bg-white/5">
                <td className="px-5 py-3">
                  <p className="font-medium text-ink-800 dark:text-ink-100">{u.name}</p>
                  <p className="text-xs text-ink-400">{u.email}</p>
                </td>
                <td className="px-5 py-3"><Badge tone={u.role === 'Admin' ? 'violet' : 'gray'}>{u.role}</Badge></td>
                <td className="px-5 py-3"><Badge tone={u.status === 'Active' ? 'emerald' : 'rose'}>{u.status}</Badge></td>
                <td className="px-5 py-3 text-ink-500 dark:text-ink-400">{u.joined}</td>
                <td className="px-5 py-3 text-right">
                  <button className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-100 dark:hover:bg-white/5"><MoreVertical className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
