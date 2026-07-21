import * as Icons from 'lucide-react'
import Card from '../ui/Card'
import { badges } from '../../data/mockData'

const colorClasses = {
  rose: 'bg-rose-50 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400',
  amber: 'bg-amber-50 text-amber-500 dark:bg-amber-500/10 dark:text-amber-400',
  violet: 'bg-violet-50 text-violet-500 dark:bg-violet-500/10 dark:text-violet-400',
  brand: 'bg-brand-50 text-brand-500 dark:bg-brand-500/10 dark:text-brand-400',
  emerald: 'bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-400',
  cyan: 'bg-cyan-50 text-cyan-500 dark:bg-cyan-500/10 dark:text-cyan-400',
}

export default function AchievementsGrid() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Achievements & Badges</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {badges.map(b => {
          const Icon = Icons[b.icon]
          return (
            <div key={b.name} className={`flex flex-col items-center gap-2 rounded-xl border border-ink-100 dark:border-white/5 p-4 text-center transition-opacity ${b.earned ? '' : 'opacity-40 grayscale'}`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses[b.color]}`}>
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-medium text-ink-600 dark:text-ink-300">{b.name}</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
