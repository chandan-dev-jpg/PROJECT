import { useState } from 'react'
import { Menu, Search, Sun, Moon, Bell, ChevronDown, LogOut, Settings, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../ui/Avatar'
import { AnimatePresence, motion } from 'framer-motion'

export default function Topbar({ onMenuClick }) {
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-ink-100 dark:border-white/5 bg-white/70 dark:bg-ink-950/70 backdrop-blur-xl px-4 py-3 lg:px-8">
      <button onClick={onMenuClick} className="rounded-lg p-2 text-ink-500 hover:bg-ink-100 dark:hover:bg-white/5 lg:hidden">
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
        <input
          placeholder="Search problems, contests, users..."
          className="w-full rounded-xl border border-ink-200 dark:border-white/10 bg-ink-50 dark:bg-white/5 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 focus:bg-white dark:focus:bg-ink-900"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="rounded-xl p-2.5 text-ink-500 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        <button className="relative rounded-xl p-2.5 text-ink-500 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-white/5 transition-colors">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-vault-rose ring-2 ring-white dark:ring-ink-950" />
        </button>

        <div className="relative">
          <button onClick={() => setMenuOpen(o => !o)} className="flex items-center gap-2 rounded-xl p-1 pr-2 hover:bg-ink-100 dark:hover:bg-white/5 transition-colors">
            <Avatar initials={user?.avatar || 'CB'} size="sm" />
            <ChevronDown className="hidden h-4 w-4 text-ink-400 sm:block" />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="glass-card absolute right-0 z-20 mt-2 w-56 bg-white dark:bg-ink-900 p-2"
                >
                  <div className="border-b border-ink-100 dark:border-white/5 px-3 py-2">
                    <p className="text-sm font-semibold">{user?.name}</p>
                    <p className="text-xs text-ink-400">{user?.email}</p>
                  </div>
                  <button onClick={() => { navigate('/profile'); setMenuOpen(false) }} className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-white/5">
                    <User className="h-4 w-4" /> View Profile
                  </button>
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-white/5">
                    <Settings className="h-4 w-4" /> Settings
                  </button>
                  <button onClick={() => { logout(); navigate('/login') }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-vault-rose hover:bg-vault-rose/10">
                    <LogOut className="h-4 w-4" /> Log Out
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
