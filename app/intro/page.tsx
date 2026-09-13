"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import "./intro.css"

export default function IntroPage() {
  const router = useRouter()
  const [isLeaving, setIsLeaving] = useState(false)

  const enterDigitazyl = () => {
    if (isLeaving) return
    setIsLeaving(true)
    window.setTimeout(() => router.replace("/home"), 850)
  }

  return (
    <main className={`intro ${isLeaving ? "intro--leaving" : ""}`}>
      <div className="intro__backdrop" aria-hidden="true">
        <div className="intro__background" role="img" aria-label="Digitazyl portal artwork" />
      </div>

      <section className="intro__content" aria-label="Vstup do Digitazyl">
          <button
            type="button"
            className="intro__entry"
            onClick={enterDigitazyl}
            aria-label="Vstoupit do Digitazyl"
            disabled={isLeaving}
          >
            <svg viewBox="0 0 48 32" aria-hidden="true">
              <path d="M3 16S10.2 4 24 4s21 12 21 12-7.2 12-21 12S3 16 3 16Z" />
              <circle cx="24" cy="16" r="6.5" />
            </svg>
          </button>
      </section>
    </main>
  )
}
