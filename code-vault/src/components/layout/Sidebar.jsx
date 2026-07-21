import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Code2, Swords, Trophy, User, ShieldCheck, Lock, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/problems', label: 'Problems', icon: Code2 },
  { to: '/contests', label: 'Contests', icon: Swords },
  { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function Sidebar({ open, onClose }) {
  const { user } = useAuth()

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-ink-950/40 backdrop-blur-sm lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-ink-100 dark:border-white/5 bg-white/80 dark:bg-ink-950/80 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <a href="/dashboard" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-vault-gradient shadow-glow">
              <Lock className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">Code Vault</span>
          </a>
          <button onClick={onClose} className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-100 dark:hover:bg-white/5 lg:hidden">
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-600 dark:text-brand-300'
                    : 'text-ink-500 dark:text-ink-400 hover:bg-ink-100 dark:hover:bg-white/5 hover:text-ink-800 dark:hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`h-4.5 w-4.5 ${isActive ? 'text-brand-500' : 'text-ink-400 group-hover:text-ink-600 dark:group-hover:text-ink-200'}`} />
                  {item.label}
                  {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-500" />}
                </>
              )}
            </NavLink>
          ))}

          {user?.role === 'Admin' && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-vault-violet/10 text-vault-violet' : 'text-ink-500 dark:text-ink-400 hover:bg-ink-100 dark:hover:bg-white/5 hover:text-ink-800 dark:hover:text-white'
                }`
              }
            >
              <ShieldCheck className="h-4.5 w-4.5 text-vault-violet" />
              Admin Panel
            </NavLink>
          )}
        </nav>

        <div className="mx-4 mb-6 rounded-2xl bg-vault-gradient p-4 text-white shadow-glow">
          <p className="font-display text-sm font-semibold">Go Premium</p>
          <p className="mt-1 text-xs text-white/80">Unlock 900+ premium problems & mock interviews.</p>
          <button className="mt-3 w-full rounded-lg bg-white/15 py-1.5 text-xs font-semibold backdrop-blur hover:bg-white/25 transition-colors">
            Upgrade Now
          </button>
        </div>
      </aside>
    </>
  )
}
