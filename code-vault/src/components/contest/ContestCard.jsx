import { CalendarClock, Users, Clock } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import ContestTimer from './ContestTimer'

export default function ContestCard({ contest, live = false }) {
  return (
    <Card hover className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            {live && <Badge tone="rose"><span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-vault-rose" />Live</Badge>}
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">{contest.name}</h3>
          </div>
          {!live && (
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-400">
              <CalendarClock className="h-3.5 w-3.5" /> {contest.date} · {contest.time}
            </p>
          )}
        </div>
        {live && <ContestTimer initial={contest.endsIn} />}
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs text-ink-400">
        {!live && (
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {contest.duration}</span>
        )}
        <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {contest.participants.toLocaleString()} participants</span>
      </div>

      {live ? (
        <button className="btn-primary w-full">Enter Contest</button>
      ) : (
        <button className={`w-full rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${contest.registered ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'btn-primary'}`}>
          {contest.registered ? 'Registered ✓' : 'Register Now'}
        </button>
      )}
    </Card>
  )
}
