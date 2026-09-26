"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react"
import { FormEvent, useState } from "react"
import "./login.css"
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
    <main className="login-reference">
      <header className="login-reference__topbar">
        <Link href="/home" className="login-reference__back" aria-label="Zpět na úvod"><span><ArrowLeft /></span>Zpět na úvod</Link>
        <Link href="/home" className="login-reference__brand" aria-label="Digitazyl domů"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9TE7My27g32NGDlGFAyK5g02sJMBuB.png" alt="Digitazyl" /><strong>DIGITAZYL</strong><small>MÍSTO, KDE MŮŽEŠ BÝT SÁM SEBOU.</small></Link>
      </header>
      <p className="login-reference__aside login-reference__aside--left">Někdy stačí<br />jen napsat.<br />Někdo to možná<br />právě teď<br />potřebuje číst.<span /></p>
      <p className="login-reference__aside login-reference__aside--right">Skuteční lidé.<br />Skutečné příběhy.<br />Skutečný prostor<br />pro tebe.<span /></p>
      <section className="login-reference__content" aria-label="Přihlášení">
        <div className="login-reference__card">
          <div className="login-reference__intro"><h1>Přihlásit <em>se</em></h1><p>Vítej zpět v Digitazylu.<br />Tady můžeš být sám sebou.</p></div>
          <form className="login-reference__form" onSubmit={handleSubmit}>
            <label><Mail aria-hidden="true" /><input name="email" type="email" placeholder="E-mail" autoComplete="email" required /></label>
            <label><LockKeyhole aria-hidden="true" /><span className="login-reference__password"><input name="password" type={showPassword ? "text" : "password"} placeholder="Heslo" autoComplete="current-password" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}>{showPassword ? <EyeOff /> : <Eye />}</button></span></label>
            <div className="login-reference__options"><label className="login-reference__remember"><input type="checkbox" name="remember" /><span><Check /></span>Zapamatovat si mě</label><button type="button" className="login-reference__forgot" onClick={() => setMessage("Obnovení hesla bude brzy k dispozici.")}>Zapomněl(a) jsem heslo?</button></div>
            <button className="login-reference__submit" type="submit" disabled={pending}>{pending ? "Přihlašuji…" : "Přihlásit se"}<ArrowRight /></button>
          </form>
          {message && <p className="login-reference__message" role="status">{message}</p>}
          <p className="login-reference__switch">Ještě nemáš účet? <Link href="/registrace">Zaregistruj se <ArrowRight /></Link></p>
        </div>
      </section>
      <section className="login-reference__features" aria-label="Digitazyl hodnoty">
        {[['Skutečné příběhy','Bez soudů. Bez masek.'],['Otevřená komunita','Lidé, kteří rozumí.'],['Témata, která dávají smysl','Od života po technologie.'],['Prostor pro sebe','Napiš, sdílej, objevuj.']].map(([title, copy]) => <article key={title}><span aria-hidden="true" /><h2>{title}</h2><p>{copy}</p></article>)}
      </section>
    </main>
  )
}
