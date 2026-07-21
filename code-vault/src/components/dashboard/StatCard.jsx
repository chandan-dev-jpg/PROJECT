import * as Icons from 'lucide-react'
import Card from '../ui/Card'

const bg = {
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  amber: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  violet: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
  rose: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
}

export default function StatCard({ label, value, delta, icon, color }) {
  const Icon = Icons[icon]
  return (
    <Card hover className="flex items-start justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
        <p className="mt-2 font-display text-2xl font-bold text-ink-900 dark:text-white font-mono-num">{value}</p>
        <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{delta}</p>
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
    </Card>
  )
}
