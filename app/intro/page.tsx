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
    window.setTimeout(() => router.replace("/home"), 1900)
  }

  const features = [
    { title: "Skutečné příběhy", copy: "Bez soudů. Bez masek.", icon: <path d="M12 21c-4-2.2-6-5-6-8.4C6 9.8 8.2 8 10.7 8c1.2 0 2.3.5 3.3 1.5C15 8.5 16.1 8 17.3 8 19.8 8 22 9.8 22 12.6c0 3.4-2 6.2-6 8.4l-2 1.1-2-1.1Z" /> },
    { title: "Otevřená komunita", copy: "Lidé, kteří rozumí.", icon: <><circle cx="12" cy="8" r="3" /><path d="M5 20v-1.5a4.5 4.5 0 0 1 9 0V20M17 11a3 3 0 0 1 2.5 5M19 20v-1a3.5 3.5 0 0 0-1.7-3" /></> },
    { title: "Témata, která dávají smysl", copy: "Od života po technologie.", icon: <><path d="M12 3a7 7 0 1 0 7 7 5.5 5.5 0 1 1-7-7Z" /><path d="M19 4v4M17 6h4" /></> },
    { title: "Prostor pro sebe", copy: "Napiš, sdílej, objevuj.", icon: <><path d="m4 19 6-10 4 6 2-3 4 7H4Z" /><path d="M10 9 12 5l2 3" /></> },
  ]

  return (
    <main className={`intro ${isLeaving ? "intro--leaving" : ""}`}>
      <div className="intro__backdrop" aria-hidden="true"><div className="intro__background" role="img" aria-label="Digitazyl portal artwork" /></div>
      <section className="intro__content" aria-label="Vstup do Digitazyl">
        
        <div className="intro__hero">
          <img className="intro__logo" src="/icon.svg" alt="Digitazyl" />
          <h1>Objev nový<br /><em>prostor.</em></h1>
          <p className="intro__tagline">Místo, kde můžeš být sám sebou.</p>
          <p className="intro__description">Skutečné příběhy, otevřená komunita a prostor<br />pro témata, která dávají smysl.</p>
          <div className="intro__portal-line"><span /></div>
          <button type="button" className="intro__entry" onClick={enterDigitazyl} aria-label="Vstoupit do Digitazyl" disabled={isLeaving}>
            <svg viewBox="0 0 48 32" aria-hidden="true"><path d="M3 16S10.2 4 24 4s21 12 21 12-7.2 12-21 12S3 16 3 16Z" /><circle cx="24" cy="16" r="6.5" /></svg>
          </button>
          <p className="intro__enter-label">Vstup do Digitazyl</p><span className="intro__chevron" aria-hidden="true" />
          <p className="intro__hint">Objev víc</p>
        </div>
        <div className="intro__features">{features.map((feature) => <div className="intro__feature" key={feature.title}><span className="intro__feature-icon"><svg viewBox="0 0 24 24" aria-hidden="true">{feature.icon}</svg></span><h2>{feature.title}</h2><p>{feature.copy}</p></div>)}</div>
      </section>
    </main>
  )
}
