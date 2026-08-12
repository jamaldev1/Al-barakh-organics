'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function MotionButton({
  href,
  onClick,
  children,
  className = '',
}: {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
}) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Component>
  )
}
