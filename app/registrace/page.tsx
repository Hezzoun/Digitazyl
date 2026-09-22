"use client"

import Link from "next/link"
import { ArrowLeft, Feather, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function RegistracePage() {
  const [showPassword, setShowPassword] = useState(false)
  return <main className="auth-shell"><header className="auth-header"><Link href="/home" className="brand" aria-label="Digitazyl domů"><img src="/icon.svg" alt="" className="size-8" /><span>DIGITAZYL</span></Link><Link href="/home" className="auth-back"><ArrowLeft className="size-4" /> Zpět</Link></header><section className="auth-content"><div className="auth-card"><div className="auth-intro"><p className="eyebrow">Tiché místo uvnitř hlučného internetu</p><h1>Vytvoř si účet</h1><p>Přidej se k bezpečnému prostoru pro sdílení.</p><div className="auth-rule"><span /><Feather className="size-4" /><span /></div></div><form className="auth-form" onSubmit={(event) => event.preventDefault()}><label>Uživatelské jméno<input type="text" placeholder="Tvoje přezdívka" required /></label><label>Email<input type="email" placeholder="tvuj@email.cz" required /></label><label>Heslo<div className="password-wrap"><input type={showPassword ? "text" : "password"} placeholder="Min. 8 znaků" minLength={8} required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Skrýt heslo" : "Zobrazit heslo"}>{showPassword ? <EyeOff /> : <Eye />}</button></div></label><button className="gold-button" type="submit">Vytvořit účet <Feather /></button></form><div className="auth-divider"><span>nebo</span></div><Link href="/home" className="ghost-button">Pokračovat anonymně</Link><p className="auth-switch">Už máš účet? <Link href="/prihlaseni">Přihlásit se</Link></p></div></section></main>
}
