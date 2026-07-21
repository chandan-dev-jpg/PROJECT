import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../ui/Card'
import { progressData } from '../../data/mockData'

export default function ProgressChart() {
  return (
    <Card className="col-span-1">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">Progress Overview</h3>
          <p className="text-xs text-ink-400">Problems solved & rating over time</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={progressData} margin={{ left: -20, right: 10, top: 10 }}>
          <defs>
            <linearGradient id="solvedGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-ink-200 dark:text-white/5" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12, boxShadow: '0 8px 24px -8px rgba(15,23,42,0.15)' }}
          />
          <Area type="monotone" dataKey="solved" stroke="#2563EB" strokeWidth={2.5} fill="url(#solvedGrad)" name="Problems Solved" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
