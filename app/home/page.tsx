"use client"

import { useState } from "react"
import { AnonymousInput } from "@/components/anonymous-input"
import { PostCard, type Post } from "@/components/story-card"
import { CategoryFilters } from "@/components/category-filters"
import { TrustBadges } from "@/components/trust-badges"
import Image from "next/image"
import Link from "next/link"
import { Feather } from "lucide-react"

const examplePosts: Post[] = [
  { id: "example-1", text: "Dneska je jeden z těch dnů, kdy mám pocit, že už nemůžu dál. Všechno je tak těžké. Co vám pomáhá, když je všechno naprd?", category: "vypsat", timeAgo: "před 45 min", reactions: { rozumim: 23, nejsi: 8, drz: 4 } },
  { id: "example-2", text: "Po měsíci jsem konečně uklidil celý byt. Možná maličkost, ale pro mě obrovský krok. Dlouho jsem jen prokrastinoval. Jsem rád, že jsem objevil místo, které mě motivuje.", category: "uspechy", timeAgo: "před 1 h", reactions: { rozumim: 47, nejsi: 12, drz: 5 } },
  { id: "example-3", text: "Dnes jsem se smála tak, že mě bolelo břicho. Dlouho jsem se takhle nezasmála. Někdy stačí malý okamžik a den se úplně změní.", category: "radosti", timeAgo: "před 2 h", reactions: { rozumim: 36, nejsi: 9, drz: 3 } },
  { id: "example-4", text: "Mám týden plný zkoušek a nemůžu popsat, jak moc jsou důležité. Jsem z toho nervózní a vystresovaný. Nevím, jestli moje snaha stačí.", category: "podpora", timeAgo: "před 3 h", reactions: { rozumim: 19, nejsi: 14, drz: 7 } },
  { id: "example-5", text: "Dnes bych chtěla poděkovat jednomu neznámému člověku. Malý balíček se vzkazem mi dokázal vykouzlit úsměv na tváři.", category: "vděčnost", timeAgo: "před 4 h", reactions: { rozumim: 31, nejsi: 6, drz: 2 } },
]

const initialPost: Post = {
  id: "latest-message",
  text: "Dneska jsem potřeboval někde říct, co mám v hlavě.",
  category: "vypsat",
  timeAgo: "před chvílí",
  reactions: { rozumim: 12, nejsi: 5, drz: 2 },
}

export default function Home() {
  const [text, setText] = useState("")
  const [latestMessage, setLatestMessage] = useState(initialPost)
  const [activeCategory, setActiveCategory] = useState("všechno")

  const handleSubmit = () => {
    const submittedText = text.trim()
    if (!submittedText) return
    setLatestMessage({ ...initialPost, text: submittedText, timeAgo: "právě teď" })
    setText("")
  }

  const handleComposerKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) {
      event.preventDefault()
      handleSubmit()
    }
  }

  const posts = [latestMessage, ...examplePosts].filter((post) =>
    activeCategory === "všechno" || post.category === activeCategory
  )

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/lake-mountains-bg1.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="pt-6 pb-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
                <div className="w-2 h-3 bg-white/80 rounded-full" />
              </div>
              <span className="text-sm font-medium tracking-[0.2em] text-white uppercase">
                DIGITAZYL
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm text-white/80 hover:text-white transition-colors">
                Přihlásit se
              </button>
              <Link href="/registrace" className="flex items-center gap-2 bg-[#2d4a3e] hover:bg-[#243d33] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                Registrovat
                <Feather className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 pt-12 pb-6 md:pt-16 md:pb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight text-balance">
              Tady můžeš být sám sebou.
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white/80 font-light">
              Tady nemusíš bojovat o pozornost.
            </p>

            {/* Decorative line with feather */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-white/30" />
              <Feather className="w-4 h-4 text-white/50" />
              <div className="w-16 h-px bg-white/30" />
            </div>
          </div>
        </section>

        {/* Input Section */}
        <section className="px-6 pb-6">
          <div className="max-w-2xl mx-auto">
            <AnonymousInput
              value={text}
              onChange={setText}
              onSubmit={handleSubmit}
              onKeyDown={handleComposerKeyDown}
            />
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 py-6">
          <div className="max-w-5xl mx-auto">
            <CategoryFilters 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </section>

        {/* Stories Section Title */}
        <section className="px-6 pt-4 pb-2">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-lg text-white/90 font-light">
                Příběhy skutečných lidí, kteří tě vyslyší.
              </h2>
              <span className="text-white/60">🤍</span>
            </div>
          </div>
        </section>

        {/* Stories Cards - Horizontal Scroll */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />
      </div>
    </main>
  )
}
