import Link from "next/link"
import { ChevronRight, Plus } from "lucide-react"
import { TopicDefinition, topicIcon, topicStyle } from "@/lib/topics"
import { SubtopicList } from "@/components/subtopic-list"

export function TopicPage({ topic }: { topic: TopicDefinition }) {
  return <main className="topic-detail-page">
    <div className="topic-breadcrumb"><Link href="/temata">Témata</Link><ChevronRight aria-hidden="true" />{topic.name}</div>
    <section className="topic-detail-hero" style={topicStyle(topic)}><span className="topic-detail-icon" aria-hidden="true">{topicIcon(topic.name)}</span><div><p>Téma Digitazyl</p><h1>{topic.name}</h1><span>{topic.description}</span></div><Link href="/prihlaseni?next=/app" className="topic-create"><Plus aria-hidden="true" /> Vytvořit příspěvek</Link></section>
    <div className="topic-detail-layout"><section className="topic-detail-main"><div className="detail-heading"><div><p>Prozkoumej téma</p><h2>Podtémata</h2></div><span>{topic.subtopics.length} oblastí</span></div><SubtopicList items={topic.subtopics} slug={topic.slug} /><section className="discussion-preview"><div className="detail-heading"><div><p>Co se právě řeší</p><h2>Nejnovější diskuze</h2></div><Link href="/prihlaseni?next=/app">Zobrazit vše <ChevronRight aria-hidden="true" /></Link></div>{["Co vás v poslední době opravdu potěšilo?", `Tipy a zkušenosti z tématu ${topic.name}`, "Inspirace pro další krok"].map((title, index) => <article key={title}><span className="discussion-dot">0{index + 1}</span><div><strong>{title}</strong><small>{index + 4} odpovědi · před {index + 1} h</small></div><ChevronRight aria-hidden="true" /></article>)}</section></section><aside className="topic-detail-aside"><div className="topic-aside-card"><p>Najdi své místo</p><strong>{topic.name}</strong><span>{topic.subtopics.length} podtémat pro rozhovory, inspiraci a zkušenosti.</span><Link href="/komunita">Související komunity <ChevronRight aria-hidden="true" /></Link></div><div className="topic-aside-card"><p>Související témata</p>{["Příběhy", "Komunity", "Tvorba"].map((name) => <Link href="/temata" key={name}>{name}<ChevronRight aria-hidden="true" /></Link>)}</div></aside></div>
  </main>
}
