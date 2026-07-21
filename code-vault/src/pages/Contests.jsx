import { motion } from 'framer-motion'
import ContestCard from '../components/contest/ContestCard'
import ContestRankings from '../components/contest/ContestRankings'
import { liveContests, upcomingContests } from '../data/mockData'

export default function Contests() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Contests</h1>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Compete live, climb the rankings, and earn exclusive badges.</p>
      </div>

      {liveContests.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">Live Now</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {liveContests.map(c => <ContestCard key={c.id} contest={c} live />)}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <section className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">Upcoming Contests</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {upcomingContests.map(c => <ContestCard key={c.id} contest={c} />)}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-400">Rankings</h2>
          <ContestRankings />
        </section>
      </div>
    </motion.div>
  )
}
