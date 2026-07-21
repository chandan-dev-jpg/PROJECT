import { CheckCircle2, XCircle, Loader2, Terminal } from 'lucide-react'

export default function OutputConsole({ state, testResults }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ink-200 dark:border-white/10 bg-ink-950 text-ink-100">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <Terminal className="h-3.5 w-3.5 text-ink-400" />
        <span className="text-xs font-medium text-ink-400">Console Output</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 font-mono text-xs">
        {state === 'idle' && <p className="text-ink-500">Run your code to see output here.</p>}
        {state === 'running' && (
          <p className="flex items-center gap-2 text-brand-300">
            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Running against test cases...
          </p>
        )}
        {state === 'done' && (
          <div className="space-y-2.5">
            {testResults.map((t, i) => (
              <div key={i} className="rounded-lg bg-white/5 p-3">
                <div className="flex items-center gap-2">
                  {t.passed ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <XCircle className="h-4 w-4 text-rose-400" />}
                  <span className={t.passed ? 'text-emerald-300' : 'text-rose-300'}>Test Case {i + 1} {t.passed ? 'Passed' : 'Failed'}</span>
                </div>
                <p className="mt-1.5 pl-6 text-ink-400">Input: <span className="text-ink-200">{t.input}</span></p>
                <p className="pl-6 text-ink-400">Expected: <span className="text-ink-200">{t.expected}</span></p>
                <p className="pl-6 text-ink-400">Output: <span className="text-ink-200">{t.output}</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
