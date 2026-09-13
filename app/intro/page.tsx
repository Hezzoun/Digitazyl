"use client"

import Image from "next/image"
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
        <Image
          src="/images/lake-mountains-bg1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="intro__background"
        />
        <div className="intro__veil" />
      </div>

      <section className="intro__content" aria-labelledby="intro-title">
        <div className="intro__brand-wrap">
          <div className="intro__logo-stage" aria-hidden="true">
            <svg className="intro__logo" viewBox="0 0 180 180" role="img" aria-label="Digitazyl">
              <path className="intro__logo-line" d="M50 111C42 98 41 81 47 66C54 48 70 36 90 36C115 36 136 53 141 77C144 91 140 105 131 116" />
              <path className="intro__logo-line intro__logo-line--open" d="M64 127C78 138 99 141 116 132" />
              <circle className="intro__logo-dot" cx="90" cy="78" r="7" />
            </svg>
            <span className="intro__laser" />
          </div>
          <div className="intro__wordmark">DIGITAZYL</div>
        </div>

        <div className="intro__copy">
          <h1 id="intro-title">Objev nový prostor</h1>
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
        </div>
      </section>

      <p className="intro__hint" aria-hidden="true">vstoupit</p>
    </main>
  )
}
