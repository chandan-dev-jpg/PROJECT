export default function Avatar({ initials, size = 'md', ring = false, className = '' }) {
  const sizes = { sm: 'h-8 w-8 text-xs', md: 'h-11 w-11 text-sm', lg: 'h-16 w-16 text-lg', xl: 'h-24 w-24 text-2xl' }
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-vault-gradient font-display font-semibold text-white ${sizes[size]} ${ring ? 'ring-4 ring-brand-500/15' : ''} ${className}`}>
      {initials}
    </div>
  )
}
