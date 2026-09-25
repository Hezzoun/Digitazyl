import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function SubtopicList({ items, slug }: { items: string[]; slug: string }) {
  return <div className="subtopic-list">{items.map((item) => <Link href={`/temata/${slug}/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, "-"))}`} key={item}><span>{item}</span><ChevronRight /></Link>)}</div>
}
