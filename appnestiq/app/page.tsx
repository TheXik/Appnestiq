'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <main className="bg-gradient-to-b from-[#0f0c1b] to-[#1a1035] text-white min-h-screen scroll-smooth">
            {/* NAVBAR */}
            <header className="w-full py-6 px-6 md:px-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Appnestiq Logo" width={40} height={40} />
                    <span className="text-xl font-bold text-[#c084fc]">Appnestiq</span>
                </div>
                <nav className="hidden md:flex gap-6 text-sm text-white/80">
                    <Link href="#about" className="hover:text-white">About</Link>
                    <Link href="#contact" className="hover:text-white">Contact</Link>
                </nav>
            </header>

            {/* HERO */}
            <section className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-tight"
                >
                    Build your future.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-lg text-white/70 max-w-xl mb-8"
                >
                    Custom software. Premium delivery. Equity-first mindset.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Link
                        href="#about"
                        className="bg-[#c084fc] hover:bg-[#a855f7] text-black font-semibold py-3 px-6 rounded-full text-lg transition"
                    >
                        Let’s Talk
                    </Link>
                </motion.div>
            </section>

            {/* ABOUT */}
            <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-[#1a1035] text-center">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Appnestiq?</h2>
                    <p className="text-white/70 text-lg">
                        We deliver custom-built applications with the mindset of long-term partnership. Our unique equity model helps you grow faster while keeping your cashflow stable.
                    </p>
                </div>
            </section>
        </main>
    )
}
