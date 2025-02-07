"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import { FaNetworkWired, FaGithub } from "react-icons/fa"
import { BiKey } from "react-icons/bi"

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-[#040405] text-white flex flex-col">
      <Navbar />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-800 to-indigo-800 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        className="flex-grow flex flex-col items-center justify-center text-center p-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src="/img/dylan.png"
          alt="Dylan James"
          className="w-32 h-32 rounded-full mb-4 border border-zinc-800"
          initial={{ boxShadow: "0 0 0 rgba(67, 56, 202, 0)" }}
          animate={{ boxShadow: ["0 0 60px rgba(157, 149, 253, 0.4)", "0 0 60px rgba(67, 56, 202, 0.3)", "0 0 60px rgba(67, 56, 202, 0.4)"] }}
          transition={{ duration: 2, yoyo: Infinity }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Dylan James
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Developer & Network Engineer
        </motion.p>

        <div className="flex space-x-2">
          <motion.a
            href="https://tritan.gg/network"
            className="flex items-center space-x-2 text-white py-2 px-4 rounded transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaNetworkWired />
            <span>Network</span>
          </motion.a>

          <motion.a
            href="https://github.com/dylanjamesdev"
            className="flex items-center space-x-2 text-white py-2 px-4 rounded transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href="/pgp.txt"
            className="flex items-center space-x-2 text-white py-2 px-4 rounded transition-colors"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BiKey />
            <span>PGP Key</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.footer
        className="p-4 text-center text-sm text-gray-500 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        © 2025 Dylan James. All rights reserved.
      </motion.footer>
    </main>
  )
}

