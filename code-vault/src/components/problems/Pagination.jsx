import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex items-center justify-between px-1">
      <p className="text-xs text-ink-400">Page {page} of {totalPages}</p>
      <div className="flex items-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => Math.max(1, p - 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-200 dark:border-white/10 text-ink-500 disabled:opacity-40 hover:border-brand-300 hover:text-brand-600"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              n === page ? 'bg-brand-500 text-white' : 'text-ink-500 hover:bg-ink-100 dark:hover:bg-white/5'
            }`}
          >
            {n}
          </button>
        ))}
        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-200 dark:border-white/10 text-ink-500 disabled:opacity-40 hover:border-brand-300 hover:text-brand-600"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
