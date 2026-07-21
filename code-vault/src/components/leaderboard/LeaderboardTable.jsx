import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import Avatar from '../ui/Avatar'

const trendIcon = {
  up: <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />,
  down: <TrendingDown className="h-3.5 w-3.5 text-rose-500" />,
  same: <Minus className="h-3.5 w-3.5 text-ink-300" />,
}

export default function LeaderboardTable({ users }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-100 dark:border-white/5 text-xs uppercase tracking-wide text-ink-400">
              <th className="px-5 py-3.5 font-medium">Rank</th>
              <th className="px-5 py-3.5 font-medium">User</th>
              <th className="px-5 py-3.5 font-medium">Rating</th>
              <th className="px-5 py-3.5 font-medium">Points</th>
              <th className="px-5 py-3.5 font-medium">Trend</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.rank} className="border-b border-ink-50 dark:border-white/5 last:border-0 transition-colors hover:bg-ink-50/70 dark:hover:bg-white/5">
                <td className="px-5 py-3.5 font-mono-num font-bold text-ink-400">#{u.rank}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar initials={u.avatar} size="sm" />
                    <div>
                      <p className="font-medium text-ink-800 dark:text-ink-100">{u.name}</p>
                      <p className="text-xs text-ink-400">@{u.username}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 font-mono-num font-semibold text-brand-600 dark:text-brand-400">{u.rating}</td>
                <td className="px-5 py-3.5 font-mono-num text-ink-500 dark:text-ink-400">{u.points.toLocaleString()}</td>
                <td className="px-5 py-3.5">{trendIcon[u.trend]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
