"use client"

import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Link from "next/link"

export default function About() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#040405] text-white flex flex-col">
      <Navbar />
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-2xl md:text-4xl font-bold mb-8 mt-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h3>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I{"'"}m a 24 year old from the United States who loves networking and software development.
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          I run a not for profit community isp and hosting company! <Link className="text-indigo-400 underline" href="https://tritan.gg">Tritan Internet</Link> provides IP transit, hosting, and network connectivity solutions to hobbyists, developers, and network engineers throughout the world.
        </motion.p>

        <motion.h2
          className="text-2xl md:text-4xl font-bold mt-4 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          I really hope you don{"'"}t, but incase you want to reach out to me, here{"'"}s how you can do it.
        </motion.p>

        <motion.div
          className="text-xl md:text-2xl text-gray-400 mb-8 text-left w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <p>Email: <Link className='text-indigo-400 underline' href='mailto:dylan@tritan.gg'>dylan@tritan.gg</Link></p>
          <p>Discord: <Link className='text-indigo-400 underline' href='https://discord.com/users/359498825150365699'>@sys.op</Link></p>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-4xl font-bold  mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          My Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <div className="p-4 rounded-lg border border-zinc-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>

            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">React</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Next</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Tailwind</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Material UI</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">TypeScript</span>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-zinc-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Node.js</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Typescript</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Go</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Express</span>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-zinc-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Misc</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Perl</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Bash</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">KVM</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Docker</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">FRR</span>
              <span className="bg-indigo-600 text-white py-1 px-2 rounded">Pathvector</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.footer
        className="p-4 text-center text-sm text-gray-500 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        © 2025 Dylan James. All rights reserved.
      </motion.footer>
    </main>
  )
}

