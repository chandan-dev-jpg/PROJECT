import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Circle, MinusCircle } from 'lucide-react'
import Badge from '../ui/Badge'

const statusIcon = {
  Solved: <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />,
  Attempted: <MinusCircle className="h-4.5 w-4.5 text-amber-500" />,
  Todo: <Circle className="h-4.5 w-4.5 text-ink-300 dark:text-ink-600" />,
}

export default function ProblemsTable({ rows }) {
  const navigate = useNavigate()

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 dark:border-white/5 text-xs uppercase tracking-wide text-ink-400">
              <th className="px-5 py-3.5 font-medium">Status</th>
              <th className="px-5 py-3.5 font-medium">Title</th>
              <th className="px-5 py-3.5 font-medium">Difficulty</th>
              <th className="px-5 py-3.5 font-medium">Acceptance</th>
              <th className="px-5 py-3.5 font-medium">Tags</th>
              <th className="px-5 py-3.5 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p => (
              <tr key={p.id} className="border-b border-ink-50 dark:border-white/5 transition-colors last:border-0 hover:bg-ink-50/70 dark:hover:bg-white/5">
                <td className="px-5 py-3.5">{statusIcon[p.status]}</td>
                <td className="px-5 py-3.5 font-medium text-ink-800 dark:text-ink-100">{p.title}</td>
                <td className="px-5 py-3.5"><Badge tone={p.difficulty}>{p.difficulty}</Badge></td>
                <td className="px-5 py-3.5 font-mono-num text-ink-500 dark:text-ink-400">{p.acceptance}%</td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => <Badge key={t} tone="gray">{t}</Badge>)}
                  </div>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button onClick={() => navigate('/problems/' + p.id)} className="rounded-lg bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-600 transition-colors hover:bg-brand-500 hover:text-white dark:text-brand-300">
                    Solve
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-sm text-ink-400">No problems match your filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
