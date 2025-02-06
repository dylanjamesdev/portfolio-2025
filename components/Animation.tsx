"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  id: string
  className?: string
}

const AnimatedSection = ({ children, id, className = "" }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection

