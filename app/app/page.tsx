"use client"

import "./app.css"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Bell, Bookmark, ChevronRight, Compass, Heart, ImageIcon, LayoutGrid, MapPin, Menu, MessageCircle,
  MoreHorizontal, PenLine, Plus, Search, Send, Settings, Shield, Sparkles, UserRound, Users, X,
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const topics = [
  ["Příroda", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=85"],
  ["Gaming", "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=85"],
  ["Hudba", "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=85"],
  ["Poradna", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=85"],
  ["Technologie", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=85"],
  ["Auta & Moto", "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=500&q=85"],
]
const quickTopics = ["Příroda", "Gaming", "Hudba", "Poradna", "Technologie", "Auta & Moto", "Filmy & Seriály", "Knihy & Psaní", "Jídlo & Vaření", "Cestování", "Domov & Dílna", "Tvorba"]
const posts = [
  { author: "Luna", topic: "Příroda", time: "před 2 hodinami", title: "Ranní klid v horách", text: "Někdy stačí jen vyjít ven, zhluboka se nadechnout a nechat všechno být. Hory mají zvláštní způsob, jak vrátit člověka zpět k sobě.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85", likes: 128, comments: 24 },
  { author: "Rex", topic: "Gaming", time: "před 5 hodinami", title: "Nejlepší hry pro podzim?", text: "Co teď hrajete? Hledám něco, co má dobrou atmosféru a vtáhne mě do příběhu. Zatím ve výběru: Baldur’s Gate 3, Cyberpunk 2077 nebo něco úplně jiného.", image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85", likes: 86, comments: 52 },
  { author: "Kája", topic: "Hudba", time: "před 8 hodinami", title: "Nové album, které mě dostalo", text: "Některé desky si pustíš jednou a jiné se ti pomalu zabydlí v každém tichém okamžiku dne.", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85", likes: 64, comments: 18 },
]

export default function AppPage() {
  const [mobileNav, setMobileNav] = useState(false)
  const [composer, setComposer] = useState("")
  const [tab, setTab] = useState("Pro tebe")
  const router = useRouter()
  const [profileName, setProfileName] = useState("")
  const [sent, setSent] = useState(false)
  const [likedPosts, setLikedPosts] = useState<string[]>([])
  const [savedPosts, setSavedPosts] = useState<string[]>([])
  const [commentingPost, setCommentingPost] = useState<string | null>(null)
  const [comment, setComment] = useState("")
  const activePosts = useMemo(() => tab === "Nejnovější" ? [...posts].reverse() : posts, [tab])

  useEffect(() => {
    const supabase = createClient()
    let mounted = true
    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return
      const user = data.user
      if (!user) { router.replace("/prihlaseni"); return }
      setProfileName(user.user_metadata?.nickname ?? user.email?.split("@")[0] ?? "Člen Digitazyl")
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user
      if (!user) { router.replace("/prihlaseni"); return }
      setProfileName(user.user_metadata?.nickname ?? user.email?.split("@")[0] ?? "Člen Digitazyl")
    })
    return () => { mounted = false; listener.subscription.unsubscribe() }
  }, [])

  async function signOut() {
    await createClient().auth.signOut()
    window.location.href = "/home"
  }

  return <main className="app-shell">
    <header className="app-header">
      <button className="app-menu" aria-label="Otevřít menu" onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <X /> : <Menu />}</button>
      <Link href="/app" className="app-logo"><span className="logo-mark">◌</span><span><strong>DIGITAZYL</strong><small>Objev svůj vnitřní klid</small></span></Link>
      <label className="app-search"><Search /><input placeholder="Hledej příspěvky, témata, komunity..." aria-label="Hledej příspěvky, témata, komunity" /></label>
      <nav className="app-nav" aria-label="Hlavní navigace">
        {[["Domů", LayoutGrid, "/app"], ["Témata", Compass, "/home#topics"], ["Komunity", Users, "/komunita"], ["Příběhy", MessageCircle, "/pribehy"], ["Lidé", UserRound, "/lide"]].map(([label, Icon, href]) => <Link key={label as string} href={href as string} className={label === "Domů" ? "active" : ""}><Icon /><span>{label as string}</span></Link>)}
      </nav>
      <div className="app-actions"><button aria-label="Notifikace"><Bell /></button><button className="create-top" aria-label="Vytvořit příspěvek"><Plus /></button><Link href="/profil" className="profile-avatar" aria-label="Profil">{profileName[0]?.toUpperCase() ?? "A"}</Link></div>
    </header>
    <div className={`app-layout ${mobileNav ? "nav-open" : ""}`}>
      <aside className="app-sidebar glass-panel">
        <Link href="#composer" className="create-button"><Plus /> Vytvořit příspěvek</Link>
        <nav className="side-nav">{[["Můj feed", LayoutGrid, "/app"], ["Objevuj", Compass, "/temata"], ["Uložené", Bookmark, "/profil"], ["Moje příspěvky", PenLine, "/profil"], ["Moje komunity", Users, "/komunita"], ["Notifikace", Bell, "/app#notifications"], ["Zprávy", MessageCircle, "/app#messages"]].map(([label, Icon, href], i) => <Link key={label as string} className={i === 0 ? "selected" : ""} href={href as string}><Icon />{label as string}</Link>)}</nav>
        <div className="quick-topic-list"><p>RYCHLÉ TÉMATA</p>{quickTopics.map((topic, i) => <Link href="/temata" key={topic}><span className={`quick-image q${i}`} />{topic}</Link>)}<Link className="all-topics" href="/temata">Zobrazit všechna témata <ChevronRight /></Link></div>
      </aside>
      <section className="app-content">
        <div className="topic-strip">{topics.map(([topic, image]) => <Link href="/temata" className="topic-tile" key={topic} style={{ backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(1,7,10,.92)), url(${image})` }}><span>{topic}</span></Link>)}<Link href="/temata" className="topic-more">Další témata <ChevronRight /></Link></div>
        <section className="composer glass-panel" id="composer"><div className="composer-avatar">J</div><div className="composer-main"><button className="composer-input" onClick={() => document.getElementById("composer-text")?.focus()}>Co máš v sobě?</button><textarea id="composer-text" value={composer} onChange={(e) => setComposer(e.target.value)} placeholder="Co máš v sobě?" aria-label="Co máš v sobě" /><div className="composer-options"><button><PenLine /> Příspěvek</button><button><ImageIcon /> Obrázek</button><button><LayoutGrid /> Anketa</button><button><MessageCircle /> Otázka</button><button><Sparkles /> Příběh</button><button className="send-button" disabled={!composer.trim()} onClick={() => { if (composer.trim()) { setSent(true); setComposer("") } }}>{sent ? "Odesláno" : "Odeslat"}</button></div></div></section>
        <div className="feed-tabs">{["Pro tebe", "Nejnovější", "Oblíbené", "Z komunity"].map((item) => <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{item}</button>)}</div>
        <div className="post-list">{activePosts.map((post) => <article className="feed-post glass-panel" key={post.title}><div className="post-copy"><div className="post-author"><span className="author-avatar">{post.author[0]}</span><div><strong>{post.author}</strong><small>{post.time} · v <Link href="/temata">{post.topic}</Link></small></div></div><h2>{post.title}</h2><p>{post.text}</p><div className="post-meta"><button aria-pressed={likedPosts.includes(post.title)} onClick={() => setLikedPosts((current) => current.includes(post.title) ? current.filter((title) => title !== post.title) : [...current, post.title])}><Heart className={likedPosts.includes(post.title) ? "liked" : ""} /> {post.likes + (likedPosts.includes(post.title) ? 1 : 0)}</button><button onClick={() => setCommentingPost(commentingPost === post.title ? null : post.title)}><MessageCircle /> {post.comments}</button><button aria-label="Uložit" aria-pressed={savedPosts.includes(post.title)} onClick={() => setSavedPosts((current) => current.includes(post.title) ? current.filter((title) => title !== post.title) : [...current, post.title])}><Bookmark className={savedPosts.includes(post.title) ? "saved" : ""} /></button><button aria-label="Další možnosti"><MoreHorizontal /></button></div>{commentingPost === post.title && <form className="comment-form" onSubmit={(event) => { event.preventDefault(); if (comment.trim()) { setComment(""); setCommentingPost(null) } }}><input value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Napiš komentář..." aria-label="Napiš komentář" /><button type="submit">Odeslat</button></form>}</div><img className="post-image" src={post.image} alt="" /></article>)}</div>
      </section>
      <aside className="app-rightbar"><section className="space-card glass-panel"><div className="panel-title"><h2>Tvůj prostor</h2><Settings /></div><div className="space-user"><span className="large-avatar">{profileName[0]?.toUpperCase() ?? "A"}</span><div><strong>{profileName}</strong><small>@{profileName.toLowerCase().replace(/\s+/g, "")}</small></div></div><div className="space-stats"><span><strong>24</strong>Příspěvků</span><span><strong>5</strong>Komunit</span><span><strong>12</strong>Uložených</span></div><Link href="/profil" className="profile-button">Můj profil <ChevronRight /></Link>{!anonymous && <button className="sign-out" onClick={signOut}>Odhlásit se</button>}</section><section className="resume-card glass-panel"><h2>Pokračuj tam, kde jsi skončil</h2>{posts.slice(0, 3).map((post) => <Link href="#" className="resume-row" key={post.title}><span className="resume-thumb" style={{ backgroundImage: `url(${post.image})` }} /><span><strong>{post.title}</strong><small>{post.topic} · před 2 dny</small></span></Link>)}<Link className="see-more" href="#">Zobrazit více <ChevronRight /></Link></section><section className="community-card glass-panel"><div className="panel-title"><h2>Doporučené komunity</h2><Link href="/komunita">Zobrazit všechny</Link></div>{["Milovníci hor", "Herní doupě", "Hudební svět"].map((name, i) => <div className="community-row" key={name}><span className={`community-thumb q${i}`} /><span><strong>{name}</strong><small>{["1.2K", "3.4K", "2.1K"][i]} členů</small></span><button>Připojit se</button></div>)}</section></aside>
    </div>
    <nav className="mobile-bottom-nav"><Link href="/app"><LayoutGrid />Domů</Link><Link href="/temata"><Compass />Objevuj</Link><button onClick={() => document.getElementById("composer")?.scrollIntoView()}><Plus /></button><Link href="/komunita"><Users />Komunity</Link><Link href="/profil"><UserRound />Profil</Link></nav>
  </main>
}
