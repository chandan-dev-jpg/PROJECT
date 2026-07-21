import { Sparkles, Clock, ArrowRight } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { dailyChallenge } from '../../data/mockData'

export default function DailyChallengeCard() {
  const d = dailyChallenge
  return (
    <Card hover className="relative overflow-hidden">
      <div className="absolute right-4 top-4 flex items-center gap-1 text-xs font-semibold text-vault-amber">
        <Sparkles className="h-3.5 w-3.5" /> +{d.reward} pts
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">Daily Coding Challenge</p>
      <h3 className="mt-2 font-display text-lg font-bold text-ink-900 dark:text-white">{d.title}</h3>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge tone={d.difficulty}>{d.difficulty}</Badge>
        {d.tags.map(t => <Badge key={t} tone="gray">{t}</Badge>)}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-ink-400">
          <Clock className="h-3.5 w-3.5" /> Resets in {d.timeLeft}
        </div>
        <button className="btn-primary py-2 text-xs">
          Solve Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </Card>
  )
}
