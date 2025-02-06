"use client"

import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"

export default function Projects() {
  const projects = [
    { name: "Tritan Internet LLC", description: "A not for profit internet service provider.", link: "https://tritan.gg" },
    { name: "Xeleron VPN", description: "A high-speed VPN service.", link: "https://xeleron.tech" },
    { name: "FRR Prefix List Generator", description: "A tool to generate prefix lists for FRR.", link: "https://github.com/team-tritan/frr-prefix-list-generator" },
    { name: "Encrypted Pastebin", description: "A secure pastebin service with encryption.", link: "https://github.com/team-tritan/tritan-pastes" },
    { name: "Disposable Email Service", description: "A service to generate disposable email addresses.", link: "https://github.com/team-tritan/disposable-email" },
    { name: "ShareX Image Host", description: "An image hosting service for ShareX.", link: "https://i.tritan.gg" },
    { name: "BGP rDNS Daemon", description: "A daemon for reverse DNS lookups in BGP.", link: "https://github.com/Team-Tritan/BGP-rDNS-Updater" },
    { name: "Tritan Bot", description: "A multi-purpose Discord bot.", link: "https://github.com/team-tritan/tritan-bot" },
    { name: "Windy Pink", description: "A personal blog and portfolio site.", link: "https://windy.pink" },
    { name: "Authentication API", description: "An API for user authentication.", link: "https://github.com/Team-Tritan/Authentication-API" },
    { name: "Email Verification API", description: "An API for email verification.", link: "https://github.com/Team-Tritan/Email-Verification-API" },
    { name: "OpenAI CLI Client", description: "A CLI client for OpenAI's GPT-3 API.", link: "https://github.com/Team-Tritan/OpenAI-Client"}
  ];

  return (
    <main className="relative h-screen w-screen overflow-auto bg-[#040405] text-white flex flex-col">
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        className="flex-grow flex flex-col items-center justify-center p-4 relative z-10 max-w-4xl mx-auto mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            Projects
        </motion.h3>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
            Here are some of the projects I{"'"}ve wasted my time on. 
        </motion.p>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {projects.map((project, index) => (
            <li key={index} className="mb-4 p-4 border border-zinc-800 rounded-lg bg-transparent">
              <a href={project.link} className="text-xl font-semibold text-indigo-400 hover:underline">
                {project.name}
              </a>
              <p className="text-sm text-gray-400">{project.description}</p>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.footer
        className="fixed bottom-0 left-0 w-full p-4 text-center text-sm text-gray-500 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        © 2025 Dylan James. All rights reserved.
      </motion.footer>
    </main>
  )
}
