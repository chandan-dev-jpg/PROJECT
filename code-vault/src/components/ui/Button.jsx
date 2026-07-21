import { motion } from 'framer-motion'

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  danger: 'inline-flex items-center justify-center gap-2 rounded-xl bg-vault-rose/10 px-5 py-2.5 text-sm font-semibold text-vault-rose transition-all duration-200 hover:bg-vault-rose/20 active:scale-[0.98]',
}

export default function Button({ children, variant = 'primary', className = '', icon: Icon, iconPosition = 'left', ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
    </motion.button>
  )
}
