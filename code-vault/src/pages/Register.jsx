import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Lock as VaultLock, GraduationCap, ShieldCheck } from 'lucide-react'
import toast from 'react-hot-toast'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import AuthIllustration from '../components/layout/AuthIllustration'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '', role: 'Student' })
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const update = (key, value) => setForm(f => ({ ...f, [key]: value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    setLoading(true)
    setTimeout(() => {
      register(form)
      setLoading(false)
      toast.success('Account created! Welcome to Code Vault.')
      navigate('/dashboard')
    }, 700)
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          <div className="mb-8 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-vault-gradient shadow-glow">
              <VaultLock className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">Code Vault</span>
          </div>

          <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">Create your account</h1>
          <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">Start solving, competing, and climbing the leaderboard today.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input label="Full Name" icon={User} placeholder="Chandan Behera" value={form.fullName} onChange={e => update('fullName', e.target.value)} required />
            <Input label="Email" type="email" icon={Mail} placeholder="you@example.com" value={form.email} onChange={e => update('email', e.target.value)} required />
            <Input label="Password" type="password" icon={Lock} placeholder="••••••••" value={form.password} onChange={e => update('password', e.target.value)} required />
            <Input label="Confirm Password" type="password" icon={Lock} placeholder="••••••••" value={form.confirmPassword} onChange={e => update('confirmPassword', e.target.value)} required />

            <div>
              <span className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-300">Role</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'Student', icon: GraduationCap },
                  { id: 'Admin', icon: ShieldCheck },
                ].map(r => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => update('role', r.id)}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                      form.role === r.id
                        ? 'border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300'
                        : 'border-ink-200 dark:border-white/10 text-ink-500 hover:border-ink-300'
                    }`}
                  >
                    <r.icon className="h-4 w-4" /> {r.id}
                  </button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">Log In</Link>
          </p>
        </motion.div>
      </div>

      <AuthIllustration />
    </div>
  )
}
