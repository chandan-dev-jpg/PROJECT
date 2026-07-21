import { Search, SlidersHorizontal } from 'lucide-react'

export default function FilterBar({ search, setSearch, difficulty, setDifficulty, status, setStatus }) {
  return (
    <div className="glass-card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search problems..."
          className="input-field pl-10"
        />
      </div>
      <div className="flex items-center gap-2 overflow-x-auto">
        <SlidersHorizontal className="h-4 w-4 shrink-0 text-ink-400" />
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="input-field w-auto shrink-0 py-2 text-sm">
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)} className="input-field w-auto shrink-0 py-2 text-sm">
          <option value="All">All Status</option>
          <option value="Solved">Solved</option>
          <option value="Attempted">Attempted</option>
          <option value="Todo">Todo</option>
        </select>
      </div>
    </div>
  )
}
