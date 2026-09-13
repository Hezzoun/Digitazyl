import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Topic } from "@/lib/data/types"
export function TopicCard({ topic }: { topic: Topic }) { return <Link href={`/komunita?topic=${encodeURIComponent(topic.name)}`} className="group rounded-2xl border border-white/10 bg-white/[.04] p-5 transition hover:border-amber-100/30 hover:bg-white/[.07]"><div className="flex items-start justify-between"><div><h3 className="font-serif text-xl text-amber-50">{topic.name}</h3><p className="mt-2 text-sm leading-6 text-white/50">{topic.description}</p></div><ArrowUpRight className="size-4 text-white/35 transition group-hover:text-amber-100" /></div><p className="mt-6 text-xs text-white/35">Prostor pro anonymní sdílení</p></Link> }
