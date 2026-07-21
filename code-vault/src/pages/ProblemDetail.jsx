import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { motion } from 'framer-motion'
import { Play, Send, RotateCcw, ChevronDown, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'
import ProblemStatement from '../components/problem/ProblemStatement'
import OutputConsole from '../components/problem/OutputConsole'
import TestCasesPanel from '../components/problem/TestCasesPanel'
import Modal from '../components/ui/Modal'
import { languages, problemDetail } from '../data/mockData'
import { useTheme } from '../context/ThemeContext'

export default function ProblemDetail() {
  const { theme } = useTheme()
  const [langId, setLangId] = useState('java')
  const [code, setCode] = useState(languages[0].starter)
  const [runState, setRunState] = useState('idle')
  const [testResults, setTestResults] = useState([])
  const [activeCase, setActiveCase] = useState(0)
  const [hintOpen, setHintOpen] = useState(false)

  const language = languages.find(l => l.id === langId)

  const handleLangChange = e => {
    const next = languages.find(l => l.id === e.target.value)
    setLangId(next.id)
    setCode(next.starter)
  }

  const runCode = () => {
    setRunState('running')
    setTimeout(() => {
      const results = problemDetail.testCases.map((t, i) => ({
        ...t,
        output: t.expected,
        passed: i !== 1,
      }))
      setTestResults(results)
      setRunState('done')
    }, 1000)
  }

  const submitCode = () => {
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 1200)),
      { loading: 'Submitting solution...', success: 'Accepted! All test cases passed 🎉', error: 'Submission failed' }
    )
  }

  const monacoLangMap = { java: 'java', javascript: 'javascript', python: 'python', cpp: 'cpp' }

  return (
    <div className="grid h-[calc(100vh-6rem)] grid-cols-1 gap-6 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="glass-card overflow-y-auto p-6">
        <ProblemStatement onHint={() => setHintOpen(true)} />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-4">
        <div className="glass-card flex items-center justify-between p-3">
          <div className="relative">
            <select value={langId} onChange={handleLangChange} className="appearance-none rounded-lg border border-ink-200 dark:border-white/10 bg-white dark:bg-ink-900 py-1.5 pl-3 pr-8 text-sm font-medium outline-none">
              {languages.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-400" />
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCode(language.starter)} className="btn-ghost px-3 py-1.5 text-xs">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
            <button onClick={runCode} className="btn-secondary px-3.5 py-1.5 text-xs">
              <Play className="h-3.5 w-3.5" /> Run Code
            </button>
            <button onClick={submitCode} className="btn-primary px-3.5 py-1.5 text-xs">
              <Send className="h-3.5 w-3.5" /> Submit
            </button>
          </div>
        </div>

        <div className="glass-card flex-1 overflow-hidden p-0">
          <Editor
            height="100%"
            language={monacoLangMap[langId]}
            value={code}
            onChange={v => setCode(v ?? '')}
            theme={theme === 'dark' ? 'vs-dark' : 'light'}
            options={{ fontSize: 13, minimap: { enabled: false }, padding: { top: 16 }, fontFamily: 'JetBrains Mono, monospace', scrollBeyondLastLine: false }}
          />
        </div>

        <TestCasesPanel active={activeCase} setActive={setActiveCase} />

        <div className="h-44 shrink-0">
          <OutputConsole state={runState} testResults={testResults} />
        </div>
      </motion.div>

      <Modal open={hintOpen} onClose={() => setHintOpen(false)} title="AI Hint">
        <div className="flex items-start gap-3 rounded-xl bg-vault-violet/5 p-4">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-vault-violet" />
          <p className="text-sm text-ink-600 dark:text-ink-300">
            Try using a min-heap to always pick the smallest head among the k lists — that gets you O(N log k) instead of repeatedly comparing all list heads.
          </p>
        </div>
      </Modal>
    </div>
  )
}
