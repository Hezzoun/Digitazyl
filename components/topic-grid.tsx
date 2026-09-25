import { TopicCard } from "@/components/topic-card"
import { TopicDefinition } from "@/lib/topics"

export function TopicGrid({ topics }: { topics: TopicDefinition[] }) {
  return <>
    <div className="topic-grid">{topics.map((topic) => <TopicCard key={topic.slug} topic={topic} />)}</div>
    {!topics.length && <p className="topics-empty">Nic jsme nenašli. Zkus jiné slovo.</p>}
  </>
}
