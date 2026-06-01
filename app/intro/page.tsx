"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function IntroPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.04, 1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            {/* SYMBOL */}
            <div className="w-24 h-24 rounded-full border-[6px] border-[#E8C58A] flex items-center justify-center shadow-[0_0_40px_rgba(232,197,138,0.35)]">

              <div className="w-4 h-4 rounded-full bg-[#E8C58A]" />
            </div>

            {/* TEXT */}
            <h1 className="mt-8 text-5xl tracking-[0.4em] font-light">
              DIGITAZYL
            </h1>
          </motion.div>
        </motion.div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 2,
          }}
          className="text-white/70 text-lg tracking-wide"
        >
          Objev nový prostor
        </motion.p>

        {/* ENTER BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1.5,
          }}
          className="mt-16"
        >
          <Link href="/">
            <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:scale-110 transition duration-500 shadow-[0_0_30px_rgba(255,255,255,0.08)]">

              <span className="text-2xl">
                👁
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}