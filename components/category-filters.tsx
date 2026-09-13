"use client"

import { cn } from "@/lib/utils"
import { Cloud, HeartHandshake, Sprout, Sun, Heart, Globe2 } from "lucide-react"

interface CategoryFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "všechno", label: "Všechno", icon: Globe2 },
  { id: "vypsat", label: "Potřebuji se vypsat", icon: Cloud },
  { id: "podpora", label: "Potřebuji podporu", icon: HeartHandshake },
  { id: "uspechy", label: "Malé úspěchy", icon: Sprout },
  { id: "radosti", label: "Radosti", icon: Sun },
  { id: "vděčnost", label: "Vděčnost", icon: Heart },
]

export function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" aria-label="Témata příspěvků">
      {categories.map(({ id, label, icon: Icon }) => (
        <button key={id} type="button" onClick={() => onCategoryChange(id)} aria-pressed={activeCategory === id} className={cn("inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all", activeCategory === id ? "border-amber-100/50 bg-amber-100 text-[#243b35] shadow-lg shadow-amber-950/20" : "border-white/15 bg-black/25 text-white/75 hover:border-white/30 hover:bg-black/40") }>
          <Icon className="size-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
