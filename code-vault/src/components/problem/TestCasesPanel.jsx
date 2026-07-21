import { problemDetail } from '../../data/mockData'

export default function TestCasesPanel({ active, setActive }) {
  return (
    <div className="rounded-xl border border-ink-200 dark:border-white/10 bg-white dark:bg-ink-900/60 p-3">
      <div className="mb-3 flex flex-wrap gap-2">
        {problemDetail.testCases.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              active === i ? 'bg-brand-500 text-white' : 'bg-ink-100 dark:bg-white/5 text-ink-500 hover:bg-ink-200 dark:hover:bg-white/10'
            }`}
          >
            Case {i + 1}
          </button>
        ))}
      </div>
      <div className="space-y-2 font-mono text-xs">
        <div>
          <p className="mb-1 text-ink-400">Input</p>
          <div className="rounded-lg bg-ink-50 dark:bg-white/5 p-2.5 text-ink-700 dark:text-ink-200">{problemDetail.testCases[active].input}</div>
        </div>
        <div>
          <p className="mb-1 text-ink-400">Expected Output</p>
          <div className="rounded-lg bg-ink-50 dark:bg-white/5 p-2.5 text-ink-700 dark:text-ink-200">{problemDetail.testCases[active].expected}</div>
        </div>
      </div>
    </div>
  )
}
