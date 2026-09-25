"use client"

import Link from "next/link"
import { ArrowLeft, Feather, Eye, EyeOff } from "lucide-react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function PrihlaseniPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setMessage("")
    const form = new FormData(event.currentTarget)
    const { error } = await createClient().auth.signInWithPassword({
      email: String(form.get("email") ?? ""),
      password: String(form.get("password") ?? ""),
    })
    if (error) {
      setMessage(error.message.toLowerCase().includes("email not confirmed") ? "Nejdřív potvrď svůj e-mail a potom se přihlas." : "Neplatný e-mail nebo heslo.")
      setPending(false)
      return
    }
    router.push("/app")
  }

  return (
    <main className="auth-shell">
      <header className="auth-header">
        <Link href="/home" className="brand" aria-label="Digitazyl domů"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9TE7My27g32NGDlGFAyK5g02sJMBuB.png" alt="Digitazyl" className="size-10 rounded-full object-contain" /><span>DIGITAZYL</span></Link>
        <Link href="/home" className="auth-back"><ArrowLeft className="size-4" /> Zpět</Link>
      </header>
      <section className="auth-content">
        <div className="auth-card">
          <div className="auth-intro"><p className="eyebrow">Tiché místo uvnitř hlučného internetu</p><h1>Vítej zpět.</h1><p>Tvůj prostor na tebe čeká.</p><div className="auth-rule"><span /><Feather className="size-4" /><span /></div></div>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>Email<input name="email" type="email" placeholder="tvuj@email.cz" autoComplete="email" required /></label>
            <label>Heslo<div className="password-wrap"><input name="password" type={showPassword ? "text" : "password"} placeholder="Tvoje heslo" autoComplete="current-password" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}>{showPassword ? <EyeOff /> : <Eye />}</button></div></label>
            <button className="gold-button" type="submit" disabled={pending}>{pending ? "Přihlašuji…" : "Přihlásit se"} <Feather /></button>
          </form>
          {message && <p className="auth-message" role="status">{message}</p>}
          <p className="auth-switch">Ještě nemáš účet? <Link href="/registrace">Vytvořit účet</Link></p>
        </div>
      </section>
    </main>
  )
}
