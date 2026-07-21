import { Crown } from 'lucide-react'
import Avatar from '../ui/Avatar'
import { motion } from 'framer-motion'

const podium = [
  { pos: 2, height: 'h-24', order: 'order-1' },
  { pos: 1, height: 'h-32', order: 'order-2' },
  { pos: 3, height: 'h-20', order: 'order-3' },
]

const ringColor = { 1: 'ring-amber-400', 2: 'ring-ink-300', 3: 'ring-amber-700' }
const barColor = { 1: 'bg-gradient-to-t from-amber-400 to-amber-300', 2: 'bg-gradient-to-t from-ink-300 to-ink-200', 3: 'bg-gradient-to-t from-amber-700 to-amber-600' }

export default function TopThree({ users }) {
  return (
    <div className="glass-card flex items-end justify-center gap-4 overflow-hidden bg-vault-gradient p-8 pb-0 sm:gap-8">
      {podium.map(({ pos, height, order }) => {
        const u = users[pos - 1]
        if (!u) return null
        return (
          <motion.div
            key={pos}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: pos * 0.1, duration: 0.5 }}
            className={`flex flex-col items-center ${order}`}
          >
            {pos === 1 && <Crown className="mb-1 h-6 w-6 text-amber-300" fill="currentColor" />}
            <Avatar initials={u.avatar} size={pos === 1 ? 'lg' : 'md'} className={`ring-4 ${ringColor[pos]} ring-offset-2 ring-offset-brand-600`} />
            <p className="mt-2 max-w-[100px] truncate text-center text-sm font-semibold text-white">{u.name}</p>
            <p className="text-xs text-white/70">{u.rating} pts</p>
            <div className={`mt-3 w-20 sm:w-28 rounded-t-xl ${height} ${barColor[pos]} flex items-start justify-center pt-2`}>
              <span className="font-display text-xl font-bold text-white/90">#{pos}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
