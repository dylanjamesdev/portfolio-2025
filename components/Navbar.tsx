"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 mt-4">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="text-md text-foreground hover:text-purple-400 transition-colors">
            dylan.tritan.gg
          </Link>
        </motion.a>

        <ul className="flex space-x-4">
          {["About", "Projects"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={`/${item.toLowerCase()}`} className="text-foreground hover:text-purple-400 transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

