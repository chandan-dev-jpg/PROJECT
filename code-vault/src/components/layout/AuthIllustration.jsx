import { motion } from 'framer-motion'
import { CheckCircle2, Flame, Trophy, Terminal } from 'lucide-react'

const codeLines = [
  { indent: 0, text: 'class Solution {', color: 'text-brand-300' },
  { indent: 1, text: 'public int[] twoSum(int[] nums, int target) {', color: 'text-white' },
  { indent: 2, text: 'Map<Integer, Integer> seen = new HashMap<>();', color: 'text-emerald-300' },
  { indent: 2, text: 'for (int i = 0; i < nums.length; i++) {', color: 'text-white' },
  { indent: 3, text: 'int need = target - nums[i];', color: 'text-amber-300' },
  { indent: 3, text: 'if (seen.containsKey(need))', color: 'text-white' },
  { indent: 4, text: 'return new int[]{seen.get(need), i};', color: 'text-emerald-300' },
  { indent: 3, text: 'seen.put(nums[i], i);', color: 'text-white' },
  { indent: 2, text: '}', color: 'text-white' },
  { indent: 2, text: 'return new int[]{};', color: 'text-white' },
  { indent: 1, text: '}', color: 'text-white' },
  { indent: 0, text: '}', color: 'text-brand-300' },
]

export default function AuthIllustration() {
  return (
    <div className="relative hidden h-full w-full flex-col items-center justify-center overflow-hidden bg-ink-950 p-10 lg:flex">
      <div className="absolute inset-0 bg-vault-radial" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-vault-violet/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8 max-w-md text-center"
      >
        <h2 className="font-display text-2xl font-bold text-white">Practice. Compete. Get Hired.</h2>
        <p className="mt-2 text-sm text-ink-400">Join 48,000+ developers sharpening their skills with real interview problems.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-glow-lg backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-vault-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-vault-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-vault-emerald/70" />
          <span className="ml-2 flex items-center gap-1.5 text-xs text-ink-400">
            <Terminal className="h-3 w-3" /> Solution.java
          </span>
        </div>
        <div className="space-y-1 px-5 py-4 font-mono text-[11.5px] leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className={line.color}
              style={{ paddingLeft: `${line.indent * 14}px` }}
            >
              {line.text}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + codeLines.length * 0.12 }}
            className="inline-block h-3.5 w-1.5 animate-blink bg-brand-400 align-middle"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="relative z-10 mt-8 flex gap-3"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-ink-300 backdrop-blur">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Accepted
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-ink-300 backdrop-blur">
          <Flame className="h-3.5 w-3.5 text-rose-400" /> 27 day streak
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-ink-300 backdrop-blur">
          <Trophy className="h-3.5 w-3.5 text-amber-400" /> Rank #342
        </div>
      </motion.div>
    </div>
  )
}
