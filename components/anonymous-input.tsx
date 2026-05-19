"use client"

import { cn } from "@/lib/utils"
import { Lock, CheckCircle, Send } from "lucide-react"

interface AnonymousInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  isSubmitting: boolean
  submitted: boolean
}

export function AnonymousInput({ 
  value, 
  onChange, 
  onSubmit, 
  isSubmitting,
  submitted 
}: AnonymousInputProps) {
  return (
    <div className="relative">
      {/* Success message */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-[#1a1a1a]/95 backdrop-blur-md rounded-2xl transition-all duration-500 z-10 border border-amber-500/20",
          submitted ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="text-center">
          <span className="text-2xl mb-2 block">🌱</span>
          <p className="font-serif text-lg text-amber-100">Dekujeme za sdileni</p>
          <p className="text-sm text-amber-100/60 mt-1">Nejsi v tom sam/sama</p>
        </div>
      </div>

      {/* Input area - Premium cream card as focal point */}
      <div className="bg-[#f5f0e6] rounded-2xl p-6 shadow-2xl shadow-black/30">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Co mas v sobe?"
          className={cn(
            "w-full bg-transparent",
            "text-[#2d4a3e] placeholder:text-[#2d4a3e]/50",
            "text-lg md:text-xl",
            "focus:outline-none",
            "font-light"
          )}
        />
        
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#2d4a3e]/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[#2d4a3e]/60">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Anonymni</span>
            </div>
            <div className="w-px h-4 bg-[#2d4a3e]/20" />
            <div className="flex items-center gap-2 text-[#2d4a3e]/60">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Bez soudu</span>
            </div>
          </div>
          
          <button
            onClick={onSubmit}
            disabled={!value.trim() || isSubmitting}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-[#2d4a3e] hover:bg-[#243d33] text-white",
              "transition-all duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "shadow-lg hover:shadow-xl"
            )}
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
