import { Pencil, Trash2 } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { problems } from '../../data/mockData'

export default function ManageProblemsTable() {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between p-5 pb-0">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Manage Problems</h3>
        <button className="btn-primary py-1.5 text-xs">+ Create Problem</button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 dark:border-white/5 text-xs uppercase tracking-wide text-ink-400">
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Difficulty</th>
              <th className="px-5 py-3 font-medium">Acceptance</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {problems.slice(0, 6).map(p => (
              <tr key={p.id} className="border-b border-ink-50 dark:border-white/5 last:border-0 hover:bg-ink-50/70 dark:hover:bg-white/5">
                <td className="px-5 py-3 font-medium text-ink-800 dark:text-ink-100">{p.title}</td>
                <td className="px-5 py-3"><Badge tone={p.difficulty}>{p.difficulty}</Badge></td>
                <td className="px-5 py-3 font-mono-num text-ink-500 dark:text-ink-400">{p.acceptance}%</td>
                <td className="px-5 py-3 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="rounded-lg p-1.5 text-ink-400 hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-500/10"><Pencil className="h-3.5 w-3.5" /></button>
                    <button className="rounded-lg p-1.5 text-ink-400 hover:bg-rose-50 hover:text-vault-rose dark:hover:bg-rose-500/10"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
