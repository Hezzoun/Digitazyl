"use client"

import Link from "next/link"
import "./home.css"
import { ArrowRight, BookOpen, Camera, Car, ChefHat, CircleHelp, Compass, Cpu, Film, Gamepad2, Headphones, Heart, House, MapPin, Mountain, Music2, Search, Sparkles, Users, Utensils, WandSparkles } from "lucide-react"

const topics = [
  ["Příběhy", "Skutečné příběhy, které tvoříme.", BookOpen, "stories"], ["Poradna", "Otázky, rady, zkušenosti.", CircleHelp, "advice"], ["Gaming", "Hry, novinky, komunita.", Gamepad2, "gaming"], ["Hudba", "Poslouchej, sdílej, objevuj.", Music2, "music"], ["Příroda", "Krajina, zvířata, klid.", Heart, "nature"], ["Tvorba", "Fotografie, video, umění.", Camera, "create"], ["Technologie", "Novinky, AI, vybavení.", Cpu, "tech"], ["Auta & Moto", "Auta, motorky, úpravy.", Car, "cars"], ["Film & Seriály", "Tipy, recenze, diskuze.", Film, "films"], ["Vědomosti", "Fakta, zajímavosti, učení.", BookOpen, "knowledge"], ["Sport", "Pohyb, zdraví, motivace.", Mountain, "sport"], ["Jídlo & Vaření", "Recepty, tipy, inspirace.", Utensils, "food"], ["Cestování", "Místa, zážitky, průvodce.", MapPin, "travel"], ["Domov & Dílna", "Bydlení, projekty, nápady.", House, "home"], ["Knihy & Psaní", "Čtení, psaní, fantazie.", BookOpen, "books"], ["Komunity", "Lidé, skupiny, společné zájmy.", Users, "community"],
] as const

const navTopics = ["Příběhy", "Poradna", "Gaming", "Hudba", "Příroda", "Tvorba", "Technologie", "Auta & Moto", "Film & Seriály", "Vědomosti", "Sport", "Cestování", "Domov & Dílna", "Jídlo & Vaření", "Knihy & Psaní", "Komunity"]

export default function Home() {
  return <main className="home-reference">
    <header className="home-reference__header">
      <Link href="/home" className="home-reference__brand"><img src="/icon.svg" alt="Digitazyl" /><span>DIGITAZYL</span></Link>
      <div className="home-reference__actions"><Link href="/prihlaseni" className="home-reference__login">Přihlásit se</Link><Link href="/registrace" className="home-reference__register">Registrace</Link></div>
    </header>
    <section className="home-reference__hero">
      <div className="home-reference__hero-copy"><p className="home-reference__eyebrow">DOMOV</p><h1>Objev prostor,<br /><em>který tě zajímá.</em></h1><p>Vyber si téma, prozkoumej příběhy, zapoj se do diskuze<br className="desktop-only" /> a najdi komunitu, která rezonuje s tím, co máš v sobě.</p></div>
      <label className="home-reference__search"><Search aria-hidden="true" /><span className="sr-only">Hledat téma</span><input placeholder="Hledat téma..." /></label>
    </section>
    <section className="home-reference__content">
      <div className="home-reference__topic-nav"><button className="is-active"><Sparkles /> Všechna témata</button>{navTopics.map((topic, index) => <Link href={`/temata/${topic.toLowerCase().replaceAll(" ", "-")}`} key={topic}>{index % 4 === 0 ? <BookOpen /> : index % 4 === 1 ? <CircleHelp /> : index % 4 === 2 ? <Gamepad2 /> : <Music2 />}<span>{topic}</span></Link>)}</div>
      <div className="home-reference__grid">{topics.map(([name, description, Icon, slug]) => <Link href={`/temata/${slug}`} className={`reference-topic-card card-${slug}`} key={name}><div className="reference-topic-card__copy"><Icon /><h2>{name}</h2><p>{description}</p></div><ArrowRight /></Link>)}<aside className="reference-topic-card reference-topic-card--suggest"><WandSparkles /><div><h2>Nenašel jsi své téma?</h2><p>Navrhni nové téma a pomoz rozšířit<br />Digitazyl o další inspirativní oblasti.</p><Link href="/temata">Navrhnout téma <ArrowRight /></Link></div></aside></div>
    </section>
  </main>
}
