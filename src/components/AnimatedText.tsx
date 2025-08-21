import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedText({ children, className = '' }: { children: ReactNode, className?: string }) {
  const letters = String(children).split('')
  return (
    <span className={className}>
      {letters.map((l, i) => (
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block will-change-transform"
        >
          {l}
        </motion.span>
      ))}
    </span>
  )
}
