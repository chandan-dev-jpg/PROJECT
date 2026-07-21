import Card from '../ui/Card'
import { activityCalendar } from '../../data/mockData'

const levelColor = [
  'bg-ink-100 dark:bg-white/5',
  'bg-brand-200 dark:bg-brand-900',
  'bg-brand-300 dark:bg-brand-700',
  'bg-brand-500 dark:bg-brand-500',
  'bg-brand-700 dark:bg-brand-300',
]

export default function ActivityCalendar() {
  const weeks = []
  for (let i = 0; i < activityCalendar.length; i += 7) {
    weeks.push(activityCalendar.slice(i, i + 7))
  }

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Activity Calendar</h3>
        <p className="text-xs text-ink-400">{activityCalendar.filter(d => d.count > 0).length} active days</p>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-2">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((d, di) => (
              <div
                key={di}
                title={`${d.count} submissions`}
                className={`h-3 w-3 rounded-sm ${levelColor[Math.min(d.count, 4)]}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-400">
        Less
        {levelColor.map((c, i) => <div key={i} className={`h-3 w-3 rounded-sm ${c}`} />)}
        More
      </div>
    </Card>
  )
}
