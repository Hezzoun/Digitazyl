"use client"

import Link from "next/link"
import { ArrowLeft, Feather, Eye, EyeOff, LoaderCircle } from "lucide-react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function RegistracePage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ nickname: "", email: "", password: "", confirmation: "" })
  const [message, setMessage] = useState("")
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (form.password !== form.confirmation) return setMessage("Hesla se musí shodovat.")
    setPending(true)
    setMessage("")
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`,
        data: { nickname: form.nickname },
      },
    })
    if (error) {
      setMessage(error.message.toLowerCase().includes("password") ? "Heslo musí být silnější." : "Registraci se nepodařilo dokončit. Zkontroluj údaje.")
    } else if (data.session) {
      router.push("/app")
    } else {
      setMessage("Účet je vytvořený. Zkontroluj e-mail a potvrď registraci.")
    }
    setPending(false)
  }

  return <main className="auth-shell"><header className="auth-header"><Link href="/home" className="brand" aria-label="Digitazyl domů"><img src="/icon.svg" alt="" className="size-8" /><span>DIGITAZYL</span></Link><Link href="/home" className="auth-back"><ArrowLeft className="size-4" /> Zpět</Link></header><section className="auth-content"><div className="auth-card"><div className="auth-intro"><p className="eyebrow">Tiché místo uvnitř hlučného internetu</p><h1>Vytvoř si účet</h1><p>Přidej se k bezpečnému prostoru pro sdílení.</p><div className="auth-rule"><span /><Feather className="size-4" /><span /></div></div><form className="auth-form" onSubmit={handleSubmit}><label>Přezdívka<input value={form.nickname} onChange={(e) => setForm({ ...form, nickname: e.target.value })} placeholder="Tvoje přezdívka" required maxLength={40} /></label><label>Email<input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="tvuj@email.cz" required /></label><label>Heslo<div className="password-wrap"><input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type={showPassword ? "text" : "password"} placeholder="Min. 8 znaků" minLength={8} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}>{showPassword ? <EyeOff /> : <Eye />}</button></div></label><label>Potvrzení hesla<input value={form.confirmation} onChange={(e) => setForm({ ...form, confirmation: e.target.value })} type="password" minLength={8} required /></label>{message && <p className="auth-message" role="status">{message}</p>}<button className="gold-button" type="submit" disabled={pending}>{pending ? <LoaderCircle className="animate-spin" /> : <Feather />} {pending ? "Vytvářím účet…" : "Vytvořit účet"}</button></form><div className="auth-divider"><span>nebo</span></div><Link href="/app" className="ghost-button">Pokračovat anonymně</Link><p className="auth-switch">Už máš účet? <Link href="/prihlaseni">Přihlásit se</Link></p></div></section></main>
}
