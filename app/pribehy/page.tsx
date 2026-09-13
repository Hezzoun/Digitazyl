"use client"
import { useState } from "react"
import { PageShell } from "@/components/digitazyl/page-shell"
import { PostCard } from "@/components/digitazyl/post-card"
import { demoPosts, categoryLabels, type PostCategory } from "@/lib/data/types"
export default function StoriesPage() { const [filter, setFilter] = useState<"všechno" | PostCategory>("všechno"); const posts = filter === "všechno" ? demoPosts : demoPosts.filter((post) => post.category === filter); return <PageShell title="Příběhy" subtitle="Příběhy lidí, kteří se rozhodli něco pustit ven."><div className="flex gap-2 overflow-x-auto pb-4">{(["všechno", "podpora", "uspechy", "radosti", "vděčnost"] as const).map((item) => <button key={item} onClick={() => setFilter(item)} className={`shrink-0 rounded-full border px-4 py-2 text-xs ${filter === item ? "border-amber-100/50 bg-amber-100/10 text-amber-100" : "border-white/10 text-white/55"}`}>{item === "všechno" ? "Nejnovější" : categoryLabels[item]}</button>)}</div><div className="grid gap-4 md:grid-cols-2">{posts.map((post) => <PostCard key={post.id} post={post} />)}</div></PageShell> }
