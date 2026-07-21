import { useState } from 'react'
import { motion } from 'framer-motion'
import TopThree from '../components/leaderboard/TopThree'
import LeaderboardTable from '../components/leaderboard/LeaderboardTable'
import { leaderboard } from '../data/mockData'

export default function Leaderboard() {
  const [range, setRange] = useState('Weekly')

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Leaderboard</h1>
          <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">See how you stack up against the best.</p>
        </div>
        <div className="flex gap-1 rounded-xl bg-ink-100 dark:bg-white/5 p-1">
          {['Weekly', 'Monthly', 'All Time'].map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
                range === r ? 'bg-white dark:bg-ink-800 text-brand-600 dark:text-brand-300 shadow-sm' : 'text-ink-500'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <TopThree users={leaderboard} />
      <LeaderboardTable users={leaderboard} />
    </motion.div>
  )
}
