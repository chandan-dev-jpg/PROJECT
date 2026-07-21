import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`glass-card p-5 ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
