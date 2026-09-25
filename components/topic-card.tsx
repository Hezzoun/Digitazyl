import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { TopicDefinition, topicIcon, topicStyle } from "@/lib/topics"

export function TopicCard({ topic, compact = false }: { topic: TopicDefinition; compact?: boolean }) {
  return <Link href={`/temata/${topic.slug}`} className={`topic-card ${compact ? "topic-card-compact" : ""}`} style={topicStyle(topic)}>
    <span className="topic-card-icon" aria-hidden="true">{topicIcon(topic.name)}</span>
    <span className="topic-card-copy"><strong>{topic.name}</strong>{!compact && <small>{topic.description}</small>}</span>
    <span className="topic-card-arrow"><ChevronRight /></span>
  </Link>
}
