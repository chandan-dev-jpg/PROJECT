import { Link } from 'react-router-dom'
import { Trophy } from 'lucide-react'
import Card from '../ui/Card'
import Avatar from '../ui/Avatar'
import { leaderboard } from '../../data/mockData'

const medalColor = ['text-amber-400', 'text-ink-300', 'text-amber-700']

export default function LeaderboardMini() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Leaderboard</h3>
        <Link to="/leaderboard" className="text-xs font-semibold text-brand-600 hover:text-brand-700">View All</Link>
      </div>
      <div className="space-y-1">
        {leaderboard.slice(0, 5).map((u, i) => (
          <div key={u.rank} className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-ink-50 dark:hover:bg-white/5">
            <span className="w-5 text-center text-sm font-bold text-ink-400">
              {i < 3 ? <Trophy className={`mx-auto h-4 w-4 ${medalColor[i]}`} /> : u.rank}
            </span>
            <Avatar initials={u.avatar} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink-800 dark:text-ink-100">{u.name}</p>
              <p className="text-xs text-ink-400">@{u.username}</p>
            </div>
            <span className="font-mono-num text-sm font-semibold text-brand-600 dark:text-brand-400">{u.rating}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
