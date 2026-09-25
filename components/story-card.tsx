"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Cloud, HeartHandshake, MessageCircleHeart, Sprout, Sun, Heart } from "lucide-react"

export interface Post {
  id: string
  text: string
  category: string
  timeAgo: string
  reactions: { rozumim: number; nejsi: number; drz: number }
}

interface PostCardProps { post: Post }

const categoryConfig: Record<string, { label: string; icon: typeof Cloud; tone: string }> = {
  vypsat: { label: "Potřebuji se vypsat", icon: Cloud, tone: "text-rose-200 bg-rose-300/15" },
  podpora: { label: "Potřebuji podporu", icon: HeartHandshake, tone: "text-pink-200 bg-pink-300/15" },
  uspechy: { label: "Malé úspěchy", icon: Sprout, tone: "text-emerald-200 bg-emerald-300/15" },
  radosti: { label: "Radosti", icon: Sun, tone: "text-amber-100 bg-amber-300/15" },
  "vděčnost": { label: "Vděčnost", icon: Heart, tone: "text-rose-200 bg-rose-300/15" },
}

export function PostCard({ post }: PostCardProps) {
  const [reactions, setReactions] = useState(post.reactions)
  const [selected, setSelected] = useState<string | null>(null)
  const config = categoryConfig[post.category] ?? categoryConfig.vypsat
  const CategoryIcon = config.icon

  const react = (key: keyof Post["reactions"]) => {
    setReactions((current) => ({ ...current, [key]: current[key] + (selected === key ? -1 : 1) }))
    setSelected(selected === key ? null : key)
  }

  return (
    <article className="flex min-h-[286px] w-full shrink-0 snap-start flex-col rounded-3xl border border-white/12 bg-[#0c1718]/70 p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition-colors hover:bg-[#122020]/80 sm:w-[285px]">
      <div className="flex items-start justify-between gap-3">
        <span className={cn("inline-flex max-w-[88%] items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium", config.tone)}>
          <CategoryIcon className="size-3.5" />
          <span className="truncate">{config.label}</span>
        </span>
        <span className="mt-1 text-white/35" aria-hidden="true"><MessageCircleHeart className="size-4" /></span>
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-white/45">
        <span className="size-1.5 rounded-full bg-emerald-300/70" />
        <span>Anonymně</span><span aria-hidden="true">·</span><span>{post.timeAgo}</span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-7 text-white/85">{post.text}</p>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
        <ReactionButton label="Rozumím" count={reactions.rozumim} active={selected === "rozumim"} onClick={() => react("rozumim")} />
        <ReactionButton label="Nejsi v tom sám" count={reactions.nejsi} active={selected === "nejsi"} onClick={() => react("nejsi")} />
        <ReactionButton label="Drž se" count={reactions.drz} active={selected === "drz"} onClick={() => react("drz")} />
      </div>
    </article>
  )
}

function ReactionButton({ label, count, active, onClick }: { label: string; count: number; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} className={cn("rounded-full border px-2.5 py-1.5 text-[11px] transition-colors", active ? "border-amber-200/50 bg-amber-200/15 text-amber-100" : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80")}><span>{label}</span> <span className="text-white/35">{count}</span></button>
}

export { PostCard as StoryCard }
