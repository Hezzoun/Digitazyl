"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { TopicCard } from "@/components/topic-card"
import { TopicDefinition } from "@/lib/topics"

export function TopicGrid({ topics }: { topics: TopicDefinition[] }) {
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => topics.filter((topic) => `${topic.name} ${topic.description} ${topic.subtopics.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query, topics])
  return <>
    <label className="topics-search"><Search /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Hledat téma..." aria-label="Hledat téma" /></label>
    <div className="topic-grid">{filtered.map((topic) => <TopicCard key={topic.slug} topic={topic} />)}</div>
    {!filtered.length && <p className="topics-empty">Nic jsme nenašli. Zkus jiné slovo.</p>}
  </>
}
