"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, LockKeyhole, Mail, UserRound, UserRoundPlus } from "lucide-react"
import { FormEvent, useState, type ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import "../prihlaseni/login.css"
import "./register.css"

export default function RegistracePage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [form, setForm] = useState({ nickname: "", email: "", password: "", confirmation: "" })
  const [message, setMessage] = useState("")
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (form.password !== form.confirmation) return setMessage("Hesla se musí shodovat.")
    setPending(true); setMessage("")
    const { data, error } = await createClient().auth.signUp({
      email: form.email,
      password: form.password,
      options: { emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`, data: { nickname: form.nickname } },
    })
    if (error) setMessage(error.message.toLowerCase().includes("password") ? "Heslo musí být silnější." : "Registraci se nepodařilo dokončit. Zkontroluj údaje.")
    else if (data.session) router.push("/app")
    else setMessage("Účet je vytvořený. Zkontroluj e-mail a potvrď registraci.")
    setPending(false)
  }

  const update = (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement>) => setForm({ ...form, [key]: event.target.value })

  return <main className="login-reference register-reference">
    <header className="login-reference__topbar"><Link href="/home" className="login-reference__back" aria-label="Zpět na úvod"><span><ArrowLeft /></span>Zpět na úvod</Link><Link href="/home" className="login-reference__brand" aria-label="Digitazyl domů"><img src="/icon.svg" alt="Digitazyl" /><strong>DIGITAZYL</strong><small>MÍSTO, KDE MŮŽEŠ BÝT SÁM SEBOU.</small></Link></header>
    <p className="login-reference__aside login-reference__aside--left">Někdy stačí<br />jen napsat.<br />Někdo to možná<br />právě teď<br />potřebuje číst.<span /></p><p className="login-reference__aside login-reference__aside--right">Skuteční lidé.<br />Skutečné příběhy.<br />Skutečný prostor<br />pro tebe.<span /></p>
    <section className="login-reference__content register-reference__content" aria-label="Registrace"><div className="login-reference__card register-reference__card"><div className="login-reference__intro"><h1>Vytvořit <em>účet</em></h1><p>Připoj se k Digitazylu.<br /><small>Objev prostor pro své příběhy, myšlenky a lidi,<br />kteří rezonují s tím, co máš v sobě.</small></p></div><form className="login-reference__form" onSubmit={handleSubmit}>
      <label><UserRound aria-hidden="true" /><input value={form.nickname} onChange={update("nickname")} placeholder="Uživatelské jméno" required maxLength={40} /><small>Jméno, pod kterým tě ostatní uvidí.</small></label>
      <label><Mail aria-hidden="true" /><input value={form.email} onChange={update("email")} type="email" placeholder="E-mail" required /></label>
      <label><LockKeyhole aria-hidden="true" /><span className="login-reference__password"><input value={form.password} onChange={update("password")} type={showPassword ? "text" : "password"} placeholder="Heslo" minLength={8} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}>{showPassword ? <EyeOff /> : <Eye />}</button></span></label>
      <label><LockKeyhole aria-hidden="true" /><span className="login-reference__password"><input value={form.confirmation} onChange={update("confirmation")} type={showConfirmation ? "text" : "password"} placeholder="Potvrdit heslo" minLength={8} required /><button type="button" onClick={() => setShowConfirmation(!showConfirmation)} aria-label={showConfirmation ? "Skrýt heslo" : "Zobrazit heslo"}>{showConfirmation ? <EyeOff /> : <Eye />}</button></span></label>
      <div className="register-reference__checks"><label><input type="checkbox" required /><span><Check /></span>Souhlasím s <a href="#podminky">podmínkami použití</a></label><label><input type="checkbox" defaultChecked /><span><Check /></span>Chci dostávat novinky a důležitá oznámení</label></div>
      {message && <p className="login-reference__message" role="status">{message}</p>}<button className="login-reference__submit" type="submit" disabled={pending}>{pending ? "Vytvářím účet…" : "Vytvořit účet"}<UserRoundPlus /></button></form><p className="login-reference__switch">Už máš účet? <Link href="/prihlaseni">Přihlásit se <ArrowRight /></Link></p></div></section>
    <section className="login-reference__features" aria-label="Digitazyl hodnoty">{[["Skutečné příběhy","Bez soudů. Bez masek."],["Otevřená komunita","Lidé, kteří rozumí."],["Témata, která dávají smysl","Od života po technologie."],["Prostor pro sebe","Napiš, sdílej, objevuj."]].map(([title, copy]) => <article key={title}><span aria-hidden="true" /><h2>{title}</h2><p>{copy}</p></article>)}</section>
  </main>
}

// Keep the registration form's controlled inputs strongly typed without duplicating field handlers.
