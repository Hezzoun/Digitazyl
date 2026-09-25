import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { getTopic, topicDefinitions } from "@/lib/topics"

export function generateStaticParams() { return topicDefinitions.flatMap((topic) => topic.subtopics.map((subtopic) => ({ slug: topic.slug, subtopic: subtopic.toLowerCase().replaceAll(" ", "-") }))) }
export default async function SubtopicRoute({ params }: { params: Promise<{ slug: string; subtopic: string }> }) {
  const { slug, subtopic } = await params
  const topic = getTopic(slug)
  const item = topic?.subtopics.find((value) => value.toLowerCase().replaceAll(" ", "-") === subtopic)
  if (!topic || !item) notFound()
  return <main className="topic-detail-page"><Link href={`/temata/${slug}`} className="topic-back"><ArrowLeft /> Zpět na {topic.name}</Link><section className="topic-detail-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(5,8,8,.2),rgba(5,7,8,.92)),url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Temata-27IzjaPImXMP9hnkRakoZjmNjwXmB4.png)` }}><div><p>Téma Digitazyl</p><h1>{item}</h1><span>Diskuze, zkušenosti a příspěvky v tématu {topic.name}.</span></div></section><section className="topic-detail-main subtopic-placeholder"><p>Prostor pro nejnovější diskuze</p><h2>{item}</h2><span>Brzy zde najdeš příspěvky komunity.</span></section></main>
}
