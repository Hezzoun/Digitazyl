"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Feather, ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function RegistracePage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration submitted:", formData)
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/lake-mountains-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-6 pb-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
                <div className="w-2 h-3 bg-white/80 rounded-full" />
              </div>
              <span className="text-sm font-medium tracking-[0.2em] text-white uppercase">
                DIGITAZYL
              </span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zpet na hlavni stranku
            </Link>
          </div>
        </header>

        {/* Registration Form Section */}
        <section className="px-6 pt-12 pb-12 md:pt-20">
          <div className="max-w-md mx-auto">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-white leading-tight tracking-tight">
                Vytvor si ucet
              </h1>
              <p className="mt-3 text-white/70">
                Pridej se k bezpecnemu prostoru pro sdileni
              </p>

              {/* Decorative line with feather */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-white/30" />
                <Feather className="w-4 h-4 text-white/50" />
                <div className="w-12 h-px bg-white/30" />
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-[#f5f0e8]/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-[#2d4a3e] mb-2">
                    Uzivatelske jmeno
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full px-4 py-3 bg-white/80 border border-[#d4cfc4] rounded-xl text-[#2d4a3e] placeholder-[#8a8578] focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/30 focus:border-[#2d4a3e] transition-all"
                    placeholder="Tvoje prezdivka"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2d4a3e] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/80 border border-[#d4cfc4] rounded-xl text-[#2d4a3e] placeholder-[#8a8578] focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/30 focus:border-[#2d4a3e] transition-all"
                    placeholder="tvuj@email.cz"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#2d4a3e] mb-2">
                    Heslo
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 pr-12 bg-white/80 border border-[#d4cfc4] rounded-xl text-[#2d4a3e] placeholder-[#8a8578] focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/30 focus:border-[#2d4a3e] transition-all"
                      placeholder="Min. 8 znaku"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a8578] hover:text-[#2d4a3e] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2d4a3e] hover:bg-[#243d33] text-white py-3.5 rounded-xl font-medium transition-colors mt-6"
                >
                  Vytvorit ucet
                  <Feather className="w-4 h-4" />
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-[#d4cfc4]" />
                <span className="text-sm text-[#8a8578]">nebo</span>
                <div className="flex-1 h-px bg-[#d4cfc4]" />
              </div>

              {/* Login Link */}
              <p className="text-center text-[#5a5549]">
                Uz mas ucet?{" "}
                <Link href="/prihlaseni" className="text-[#2d4a3e] font-medium hover:underline">
                  Prihlas se
                </Link>
              </p>
            </div>

            {/* Trust Note */}
            <p className="mt-6 text-center text-sm text-white/60">
              Tvoje data jsou v bezpeci. Nikdo neuvidi tvuj email.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
