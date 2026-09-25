import Link from "next/link"
import { Compass } from "lucide-react"
import { TopicGrid } from "@/components/topic-grid"
import { topicDefinitions, topicHeroImage } from "@/lib/topics"

export default function TopicsPage() {
  return <main className="topics-page"><header className="topics-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(3,7,8,.94), rgba(3,7,8,.38), rgba(3,7,8,.82)), url(${topicHeroImage})` }}><div><p className="eyebrow"><Compass /> Svět Digitazyl</p><h1>Témata</h1><p>Objev prostor, který tě zajímá.</p></div><aside><strong>Najdi své místo</strong><span>Téma, příběhy, zkušenosti a lidé, kteří rezonují s tím, co máš v sobě.</span></aside></header><section className="topics-body"><TopicGrid topics={topicDefinitions} /></section></main>
}
