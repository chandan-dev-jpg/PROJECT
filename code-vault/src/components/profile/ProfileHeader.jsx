import { MapPin, Calendar, Pencil } from 'lucide-react'
import Avatar from '../ui/Avatar'
import Badge from '../ui/Badge'
import ProgressRing from '../ui/ProgressRing'
import { currentUser } from '../../data/mockData'

export default function ProfileHeader() {
  const u = currentUser
  const percent = Math.round((u.solved / u.totalProblems) * 100)

  return (
    <div className="glass-card overflow-hidden p-0">
      <div className="h-28 bg-vault-gradient" />
      <div className="px-6 pb-6">
        <div className="-mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-4">
            <Avatar initials={u.avatar} size="xl" ring className="border-4 border-white dark:border-ink-900" />
            <div className="pb-1">
              <h1 className="font-display text-xl font-bold text-ink-900 dark:text-white">{u.name}</h1>
              <p className="text-sm text-ink-400">@{u.username}</p>
            </div>
          </div>
          <button className="btn-secondary text-xs">
            <Pencil className="h-3.5 w-3.5" /> Edit Profile
          </button>
        </div>

        <p className="mt-4 max-w-xl text-sm text-ink-600 dark:text-ink-300">{u.bio}</p>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ink-400">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Joined {u.joinDate}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> India</span>
          <Badge tone="brand">{u.role}</Badge>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-ink-100 dark:border-white/5 pt-5">
          <ProgressRing percent={percent} size={72}>
            <span className="font-mono-num text-sm font-bold text-ink-800 dark:text-white">{percent}%</span>
          </ProgressRing>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
            {[
              ['Solved', `${u.solved}/${u.totalProblems}`],
              ['Rating', u.rating],
              ['Points', u.points.toLocaleString()],
              ['Rank', `#${u.rank}`],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-mono-num text-lg font-bold text-ink-900 dark:text-white">{value}</p>
                <p className="text-xs text-ink-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
