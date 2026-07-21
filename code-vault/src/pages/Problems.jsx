import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import FilterBar from '../components/problems/FilterBar'
import ProblemsTable from '../components/problems/ProblemsTable'
import Pagination from '../components/problems/Pagination'
import { problems } from '../data/mockData'

const PAGE_SIZE = 8

export default function Problems() {
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return problems.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
      const matchDiff = difficulty === 'All' || p.difficulty === difficulty
      const matchStatus = status === 'All' || p.status === status
      return matchSearch && matchDiff && matchStatus
    })
  }, [search, difficulty, status])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Problems</h1>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{filtered.length} problems · sharpen your skills one at a time.</p>
      </div>

      <FilterBar
        search={search} setSearch={v => { setSearch(v); setPage(1) }}
        difficulty={difficulty} setDifficulty={v => { setDifficulty(v); setPage(1) }}
        status={status} setStatus={v => { setStatus(v); setPage(1) }}
      />

      <ProblemsTable rows={paginated} />

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </motion.div>
  )
}
