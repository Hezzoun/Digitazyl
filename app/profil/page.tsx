"use client"

import Link from "next/link"
import { ArrowLeft, Feather, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function ProfilPage() {
  const router = useRouter()
  async function signOut() { await createClient().auth.signOut(); router.push("/home") }
  return <main className="auth-shell"><header className="auth-header"><Link href="/home" className="brand"><img src="/icon.svg" alt="" className="size-8" /><span>DIGITAZYL</span></Link><Link href="/home" className="auth-back"><ArrowLeft className="size-4" /> Domů</Link></header><section className="auth-content"><div className="auth-card auth-intro"><p className="eyebrow">Tvé místo</p><h1>Profil</h1><p>Vítej zpět v Digitazylu.</p><div className="auth-rule"><span /><Feather className="size-4" /><span /></div><button className="ghost-button" onClick={signOut}><LogOut className="size-4" /> Odhlásit se</button></div></section></main>
}
