export default function Input({ label, icon: Icon, error, className = '', ...props }) {
  return (
    <label className="block">
      {label && <span className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-300">{label}</span>}
      <div className="relative">
        {Icon && <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />}
        <input className={`input-field ${Icon ? 'pl-10' : ''} ${className}`} {...props} />
      </div>
      {error && <span className="mt-1 block text-xs font-medium text-vault-rose">{error}</span>}
    </label>
  )
}
