import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { adminSubmissions } from '../../data/mockData'

const tone = { Accepted: 'emerald', 'Wrong Answer': 'rose', 'Runtime Error': 'amber' }

export default function SubmissionsFeed() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Live Submissions</h3>
      <div className="space-y-1">
        {adminSubmissions.map(s => (
          <div key={s.id} className="flex items-center justify-between rounded-xl px-2 py-2.5 hover:bg-ink-50 dark:hover:bg-white/5">
            <div>
              <p className="text-sm font-medium text-ink-800 dark:text-ink-100">@{s.user} · {s.problem}</p>
              <p className="text-xs text-ink-400">{s.language} · {s.time}</p>
            </div>
            <Badge tone={tone[s.status] || 'gray'}>{s.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
