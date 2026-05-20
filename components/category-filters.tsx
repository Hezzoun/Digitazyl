"use client"

import { cn } from "@/lib/utils"
import { Globe, Cloud, HeartHandshake, Sprout, Sun, Heart } from "lucide-react"

interface CategoryFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "všechno", label: "Klábosení", icon: <Globe className="w-4 h-4" /> },
  { id: "vypsat", label: "Pochopení", icon: <Cloud className="w-4 h-4" /> },
  { id: "podpora", label: "Podpora", icon: <HeartHandshake className="w-4 h-4" /> },
  { id: "výhry", label: "Úspěchy", icon: <Sprout className="w-4 h-4" /> },
  { id: "radosti", label: "Radost", icon: <Sun className="w-4 h-4" /> },
  { id: "vděčnost", label: "Vděčnost", icon: <Heart className="w-4 h-4" /> },
]

export function CategoryFilters({ activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all duration-200",
            "border backdrop-blur-md",
            activeCategory === category.id
              ? "bg-[#f5f0e6] border-amber-200/50 text-[#2d4a3e] shadow-lg"
              : "bg-black/30 border-white/20 text-white/90 hover:bg-black/40 hover:border-white/30"
          )}
        >
          {category.icon}
          <span className="font-light">{category.label}</span>
        </button>
      ))}
    </div>
  )
}
