import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../ui/Card'

const data = [
  { day: 'Mon', submissions: 6200 },
  { day: 'Tue', submissions: 7100 },
  { day: 'Wed', submissions: 6800 },
  { day: 'Thu', submissions: 8200 },
  { day: 'Fri', submissions: 9100 },
  { day: 'Sat', submissions: 11400 },
  { day: 'Sun', submissions: 9200 },
]

export default function AdminAnalyticsChart() {
  return (
    <Card>
      <h3 className="mb-4 font-display text-base font-semibold text-ink-900 dark:text-white">Weekly Submissions</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ left: -20, right: 10, top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-ink-200 dark:text-white/5" />
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
          <Bar dataKey="submissions" fill="#7C3AED" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
