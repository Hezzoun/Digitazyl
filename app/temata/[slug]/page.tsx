import { notFound } from "next/navigation"
import { TopicPage } from "@/components/topic-page"
import { getTopic, topicDefinitions } from "@/lib/topics"

export function generateStaticParams() { return topicDefinitions.map(({ slug }) => ({ slug })) }
export default async function TopicRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const topic = getTopic(slug)
  if (!topic) notFound()
  return <TopicPage topic={topic} />
}
