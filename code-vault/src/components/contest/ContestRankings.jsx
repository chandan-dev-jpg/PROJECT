import Card from '../ui/Card'
import Avatar from '../ui/Avatar'
import { leaderboard } from '../../data/mockData'

export default function ContestRankings() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Live Contest Rankings</h3>
      <div className="space-y-1">
        {leaderboard.map(u => (
          <div key={u.rank} className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-ink-50 dark:hover:bg-white/5">
            <span className="w-6 text-center font-mono-num text-sm font-bold text-ink-400">{u.rank}</span>
            <Avatar initials={u.avatar} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink-800 dark:text-ink-100">{u.name}</p>
            </div>
            <span className="font-mono-num text-sm font-semibold text-brand-600 dark:text-brand-400">{u.points.toLocaleString()} pts</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
