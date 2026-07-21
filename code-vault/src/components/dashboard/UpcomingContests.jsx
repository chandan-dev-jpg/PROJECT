import { CalendarClock, Users } from 'lucide-react'
import Card from '../ui/Card'
import { upcomingContests } from '../../data/mockData'

export default function UpcomingContests() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Upcoming Contests</h3>
      <div className="space-y-3">
        {upcomingContests.map(c => (
          <div key={c.id} className="rounded-xl border border-ink-100 dark:border-white/5 p-3.5 transition-colors hover:border-brand-200 dark:hover:border-brand-500/30">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{c.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400">
                  <CalendarClock className="h-3.5 w-3.5" /> {c.date} · {c.time}
                </p>
              </div>
              <button className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${c.registered ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-brand-500 text-white hover:bg-brand-600'}`}>
                {c.registered ? 'Registered' : 'Register'}
              </button>
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-400">
              <Users className="h-3.5 w-3.5" /> {c.participants.toLocaleString()} joined
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
