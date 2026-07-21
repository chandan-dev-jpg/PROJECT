import { ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react'
import Badge from '../ui/Badge'
import { problemDetail } from '../../data/mockData'

export default function ProblemStatement({ onHint }) {
  const p = problemDetail
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h1 className="font-display text-xl font-bold text-ink-900 dark:text-white">{p.id}. {p.title}</h1>
          <button onClick={onHint} className="flex shrink-0 items-center gap-1.5 rounded-lg bg-vault-violet/10 px-3 py-1.5 text-xs font-semibold text-vault-violet hover:bg-vault-violet/20 transition-colors">
            <Sparkles className="h-3.5 w-3.5" /> AI Hint
          </button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge tone={p.difficulty}>{p.difficulty}</Badge>
          <span className="text-xs text-ink-400">Acceptance: {p.acceptance}%</span>
          <span className="flex items-center gap-1 text-xs text-ink-400"><ThumbsUp className="h-3.5 w-3.5" /> {p.likes.toLocaleString()}</span>
          <span className="flex items-center gap-1 text-xs text-ink-400"><ThumbsDown className="h-3.5 w-3.5" /> {p.dislikes.toLocaleString()}</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {p.tags.map(t => <Badge key={t} tone="brand">{t}</Badge>)}
        </div>
      </div>

      <p className="whitespace-pre-line text-sm leading-relaxed text-ink-600 dark:text-ink-300">{p.statement}</p>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-800 dark:text-ink-100">Examples</h3>
        <div className="space-y-3">
          {p.examples.map((ex, i) => (
            <div key={i} className="rounded-xl bg-ink-50 dark:bg-white/5 p-3.5 font-mono text-xs">
              <p><span className="text-ink-400">Input:</span> <span className="text-ink-700 dark:text-ink-200">{ex.input}</span></p>
              <p className="mt-1"><span className="text-ink-400">Output:</span> <span className="text-ink-700 dark:text-ink-200">{ex.output}</span></p>
              {ex.explanation && <p className="mt-1 text-ink-400">{ex.explanation}</p>}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-ink-800 dark:text-ink-100">Constraints</h3>
        <ul className="space-y-1 font-mono text-xs text-ink-500 dark:text-ink-400">
          {p.constraints.map((c, i) => <li key={i}>• {c}</li>)}
        </ul>
      </div>
    </div>
  )
}
