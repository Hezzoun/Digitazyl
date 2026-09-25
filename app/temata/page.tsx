import Link from "next/link"
import { Bell, ChevronRight, Compass, Plus, Search, Sparkles } from "lucide-react"
import { TopicGrid } from "@/components/topic-grid"
import { topicDefinitions, topicHeroImage, featuredTopicImage, topicStyle, topicIcon } from "@/lib/topics"

const gaming = topicDefinitions.find((topic) => topic.slug === "gaming")!

export default function TopicsPage() {
  return <main className="topics-page">
    <nav className="topics-nav" aria-label="Hlavní navigace"><Link href="/app" className="topics-brand"><span>✦</span> DIGITAZYL</Link><div className="topics-links"><Link href="/app">Domů</Link><Link href="/pribehy">Příběhy</Link><Link href="/lide">Lidé</Link><Link href="/komunita">Komunity</Link><Link href="/temata" className="active">Témata</Link><Link href="/store">Store</Link></div><label className="topics-nav-search"><Search /><input placeholder="Hledat..." aria-label="Hledat" /></label><Bell className="topics-bell" /><Link href="/profil" className="topics-avatar" aria-label="Profil">J</Link></nav>
    <header className="topics-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(3,7,8,.94), rgba(3,7,8,.38), rgba(3,7,8,.82)), url(${topicHeroImage})` }}><div><p className="eyebrow"><Compass /> Svět Digitazyl</p><h1>Témata</h1><p>Objev prostor, který tě zajímá.</p><label className="topics-hero-search"><Search /><input placeholder="Hledat téma..." aria-label="Hledat téma" /></label></div><aside><Sparkles /><strong>Najdi své místo</strong><span>Téma, příběhy, zkušenosti a lidé, kteří rezonují s tím, co máš v sobě.</span></aside></header>
    <section className="topics-body"><TopicGrid topics={topicDefinitions} /><section className="featured-topic" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,7,8,.1), rgba(4,7,8,.92) 43%), url(${featuredTopicImage})` }}><div className="featured-copy"><div className="featured-icon">{topicIcon(gaming.name)}</div><p className="eyebrow">Vybrané téma</p><h2>{gaming.name}</h2><p>{gaming.description} Vše, co patří do herního světa.</p><Link href="/prihlaseni?next=/app" className="topic-create"><Plus /> Vytvořit příspěvek</Link></div><div className="featured-subtopics"><div className="detail-heading"><h3>Podtémata</h3><Link href="/temata/gaming">Zobrazit všechna <ChevronRight /></Link></div><div>{gaming.subtopics.map((item) => <Link href={`/temata/gaming/${encodeURIComponent(item.toLowerCase().replaceAll(" ", "-"))}`} key={item}>{item}<ChevronRight /></Link>)}</div></div></section></section>
  </main>
}
