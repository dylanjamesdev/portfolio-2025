"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50 mt-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-md text-primary">
        dylan.tritan.gg
        </Link>
        <ul className="flex space-x-4">
          {["About",  "Projects"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={`/${item.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar

