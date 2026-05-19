"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Cloud, Sprout, Sun, Heart, HeartHandshake } from "lucide-react"

interface Story {
  id: number
  text: string
  category: string
  timeAgo: string
  hearts: number
  emoji?: string
}

interface StoryCardProps {
  story: Story
}

const categoryConfig: Record<string, { 
  label: string
  icon: React.ReactNode
  bgColor: string
  textColor: string
}> = {
  vypsat: { 
    label: "Potřebuji se vypsat", 
    icon: <Cloud className="w-3.5 h-3.5" />,
    bgColor: "bg-rose-400/20",
    textColor: "text-rose-300"
  },
  vyhry: { 
    label: "Malé výhry", 
    icon: <Sprout className="w-3.5 h-3.5" />,
    bgColor: "bg-emerald-400/20",
    textColor: "text-emerald-300"
  },
  radosti: { 
    label: "Radosti", 
    icon: <Sun className="w-3.5 h-3.5" />,
    bgColor: "bg-amber-400/20",
    textColor: "text-amber-300"
  },
  podpora: { 
    label: "Potřebuji podporu", 
    icon: <HeartHandshake className="w-3.5 h-3.5" />,
    bgColor: "bg-pink-400/20",
    textColor: "text-pink-300"
  },
  vdecnost: { 
    label: "Vděčnost", 
    icon: <Heart className="w-3.5 h-3.5" />,
    bgColor: "bg-rose-400/20",
    textColor: "text-rose-300"
  },
}

export function StoryCard({ story }: StoryCardProps) {
  const [hearts, setHearts] = useState(story.hearts)
  const [liked, setLiked] = useState(false)
  
  const config = categoryConfig[story.category] || categoryConfig.vypsat

  const handleLike = () => {
    if (liked) {
      setHearts(prev => prev - 1)
      setLiked(false)
    } else {
      setHearts(prev => prev + 1)
      setLiked(true)
    }
  }

  return (
    <article className="shrink-0 w-[220px] bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-xl snap-start hover:bg-black/50 transition-colors">
      {/* Category tag */}
      <div className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-4",
        config.bgColor,
        config.textColor
      )}>
        {config.icon}
        {config.label}
      </div>
      
      {/* Story text */}
      <p className="text-white/90 text-sm leading-relaxed font-light italic min-h-[80px]">
        {story.text}
        {story.emoji && <span className="ml-1">{story.emoji}</span>}
      </p>
      
      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
        <span className="text-xs text-white/40">
          {story.timeAgo}
        </span>
        <button 
          onClick={handleLike}
          className={cn(
            "flex items-center gap-1.5 transition-colors",
            liked ? "text-rose-400" : "text-white/40 hover:text-rose-300"
          )}
        >
          <Heart className={cn("w-4 h-4", liked && "fill-current")} />
          <span className="text-xs font-medium">{hearts}</span>
        </button>
      </div>
    </article>
  )
}
