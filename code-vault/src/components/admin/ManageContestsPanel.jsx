import { CalendarClock, Users } from 'lucide-react'
import Card from '../ui/Card'
import { upcomingContests } from '../../data/mockData'

export default function ManageContestsPanel() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Manage Contests</h3>
        <button className="btn-primary py-1.5 text-xs">+ Create Contest</button>
      </div>
      <div className="space-y-3">
        {upcomingContests.map(c => (
          <div key={c.id} className="flex items-center justify-between rounded-xl border border-ink-100 dark:border-white/5 p-3.5">
            <div>
              <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{c.name}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400"><CalendarClock className="h-3.5 w-3.5" /> {c.date}</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-ink-400"><Users className="h-3.5 w-3.5" /> {c.participants.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
