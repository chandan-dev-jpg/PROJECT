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

export default function RecentBadges() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Recent Badges</h3>
      <div className="grid grid-cols-3 gap-3">
        {badges.map(b => {
          const Icon = Icons[b.icon]
          return (
            <div key={b.name} className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-center ${b.earned ? '' : 'opacity-35 grayscale'}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorClasses[b.color]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-medium leading-tight text-ink-600 dark:text-ink-300">{b.name}</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
