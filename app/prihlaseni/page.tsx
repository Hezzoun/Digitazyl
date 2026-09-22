"use client"

import Link from "next/link"
import { ArrowLeft, Feather, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function PrihlaseniPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <main className="auth-shell">
      <header className="auth-header">
        <Link href="/home" className="brand" aria-label="Digitazyl domů"><img src="/icon.svg" alt="" className="size-8" /><span>DIGITAZYL</span></Link>
        <Link href="/home" className="auth-back"><ArrowLeft className="size-4" /> Zpět</Link>
      </header>
      <section className="auth-content">
        <div className="auth-card">
          <div className="auth-intro"><p className="eyebrow">Tiché místo uvnitř hlučného internetu</p><h1>Vítej zpět.</h1><p>Tvůj prostor na tebe čeká.</p><div className="auth-rule"><span /><Feather className="size-4" /><span /></div></div>
          <form className="auth-form" onSubmit={(event) => { event.preventDefault(); setMessage("Přihlášení bude dostupné po připojení účtu.") }}>
            <label>Email<input type="email" placeholder="tvuj@email.cz" required /></label>
            <label>Heslo<div className="password-wrap"><input type={showPassword ? "text" : "password"} placeholder="Tvoje heslo" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}>{showPassword ? <EyeOff /> : <Eye />}</button></div></label>
            <button className="gold-button" type="submit">Přihlásit se <Feather /></button>
          </form>
          {message && <p className="auth-message" role="status">{message}</p>}
          <div className="auth-divider"><span>nebo</span></div>
          <Link href="/home" className="ghost-button">Pokračovat anonymně</Link>
          <p className="auth-switch">Ještě nemáš účet? <Link href="/registrace">Vytvořit účet</Link></p>
        </div>
      </section>
    </main>
  )
}
