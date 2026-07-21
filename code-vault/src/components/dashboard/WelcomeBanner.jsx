import { motion } from 'framer-motion'
import { Flame, ArrowRight } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function WelcomeBanner() {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] || 'Developer'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-2xl bg-vault-gradient p-6 text-white shadow-glow-lg sm:p-8"
    >
      <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 right-24 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-white/70">Welcome back,</p>
          <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{firstName} 👋</h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-white/80">
            <Flame className="h-4 w-4 text-amber-300" /> 27-day streak — keep it alive today.
          </p>
        </div>
        <button className="group flex items-center gap-2 self-start rounded-xl bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur transition-all hover:bg-white/25 sm:self-center">
          Continue Practice
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.div>
  )
}
