import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { recentSubmissions } from '../../data/mockData'

const statusTone = {
  Accepted: 'emerald',
  'Wrong Answer': 'rose',
  'Time Limit Exceeded': 'amber',
}

export default function RecentSubmissions() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Recent Submissions</h3>
      <div className="space-y-1">
        {recentSubmissions.map(s => (
          <div key={s.id} className="flex items-center justify-between rounded-xl px-2 py-2.5 transition-colors hover:bg-ink-50 dark:hover:bg-white/5">
            <div>
              <p className="text-sm font-medium text-ink-800 dark:text-ink-100">{s.problem}</p>
              <p className="text-xs text-ink-400">{s.language} • {s.time}</p>
            </div>
            <Badge tone={statusTone[s.status] || 'gray'}>{s.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
