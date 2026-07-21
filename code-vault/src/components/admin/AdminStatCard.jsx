import * as Icons from 'lucide-react'
import Card from '../ui/Card'

export default function AdminStatCard({ label, value, delta, icon }) {
  const Icon = Icons[icon]
  return (
    <Card hover className="flex items-start justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
        <p className="mt-2 font-display text-2xl font-bold text-ink-900 dark:text-white font-mono-num">{value}</p>
        <p className="mt-1 text-xs font-medium text-brand-600 dark:text-brand-400">{delta}</p>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-vault-violet/10 text-vault-violet">
        <Icon className="h-5 w-5" />
      </div>
    </Card>
  )
}
