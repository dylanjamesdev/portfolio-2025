import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

export default function Pgp() {
    return (
        <main className="relative min-h-screen w-screen overflow-auto bg-[#040405] text-white flex flex-col">
            <div className="w-full z-20">
                <Navbar />
            </div>
            <motion.div
                className="inset-0 z-0"
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
                    PGP Key
                </motion.h3>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Here is my PGP key for secure communication.
                </motion.p>
            </motion.div>
        </main>

    )
}