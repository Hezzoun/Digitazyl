"use client"

import { useState } from "react"
import { AnonymousInput } from "@/components/anonymous-input"
import { StoryCard } from "@/components/story-card"
import { CategoryFilters } from "@/components/category-filters"
import { TrustBadges } from "@/components/trust-badges"
import Image from "next/image"
import { Send, Feather } from "lucide-react"

const exampleStories = [
  {
    id: 1,
    text: "Dneska je jeden z těch dnů, kdy mám pocit, že už nemůžu dál. Všechno je tak těžké.",
    category: "vypsat",
    timeAgo: "Pred 45 min",
    hearts: 23,
  },
  {
    id: 2,
    text: "Po měsíci jsem konečně uklidil celý byt. Možna maličkost, ale pro mě obrovský krok. Dlouho jsem jen prokrastinoval a jen scrolloval socialní sítě. Jsem rád, že jsem objevil místo, které mě motivuje :)",
    category: "vyhry",
    timeAgo: "Pred 1 h",
    hearts: 47,
    emoji: "🌿",
  },
  {
    id: 3,
    text: "Dnes jsem se smála tak, že mě bolelo břicho. Dlouho jsem se takhle nezasmála. Stačilo jen vidět jak můj kolega, rozlil v mé přítomnosti kávičku z toho jak je vždy nervozní když jsme spolu. Brzo si s ním vyjdu, když mě on nepozve tak já :)",
    category: "radosti",
    timeAgo: "Pred 2 h",
    hearts: 36,
    emoji: "🌟",
  },
  {
    id: 4,
    text: "Mám tejden plnej zkoušek a nemůžu popsat, jak moc jsou ty zkoušky důležitý. Budu na vejšce, jestli udělám maturitu, a jsem z toho tak nervózní a vystresovanej. Nevím, jestli moje snaha stačí.",
    category: "podpora",
    timeAgo: "Pred 3 h",
    hearts: 19,
    emoji: "🙏",
  },
  {
    id: 5,
    text: "Dnes bych chtěla poděkovat jednomu neznámému člověku. Našla jsem malý balíček se vzkazem, který mi dokázal vykouzlit úsměv na tváři. Možná to pro někoho byla jen drobnost, ale pro mě to má mnohem větší význam.",
    category: "vdecnost",
    timeAgo: "Pred 4 h",
    hearts: 31,
    emoji: "💗",
  },
]

export default function Home() {
  const [text, setText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("vsechno")

  const handleSubmit = async () => {
    if (!text.trim()) return
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setText("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/lake-mountains-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
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
              <button className="flex items-center gap-2 bg-[#2d4a3e] hover:bg-[#243d33] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                Registrovat
                <Feather className="w-4 h-4" />
              </button>
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
              Co máš v sobě?
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
              isSubmitting={isSubmitting}
              submitted={submitted}
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
                Pribehy lidi jako ty
              </h2>
              <span className="text-white/60">🤍</span>
            </div>
          </div>
        </section>

        {/* Stories Cards - Horizontal Scroll */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {exampleStories.map((story) => (
                <StoryCard key={story.id} story={story} />
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
