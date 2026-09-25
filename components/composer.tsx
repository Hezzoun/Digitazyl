"use client"

import { cn } from "@/lib/utils"
import { Lock, ShieldCheck, Send } from "lucide-react"

interface ComposerProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

export function Composer({ 
  value, 
  onChange, 
  onSubmit,
  onKeyDown,
}: ComposerProps) {
  return (
    <div className="rounded-3xl border border-white/15 bg-[#101b1b]/75 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-7">
      <label htmlFor="main-composer" className="mb-3 block font-serif text-2xl text-amber-50 md:text-3xl">Co máš v sobě?</label>
      <textarea
        id="main-composer"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Co máš v sobě? Napiš to sem..."
        rows={3}
        className="w-full resize-none bg-transparent text-lg font-light leading-relaxed text-white outline-none placeholder:text-white/40"
        aria-describedby="composer-safety"
      />
      <div id="composer-safety" className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/55">
          <span className="flex items-center gap-2"><Lock className="size-3.5" /> Bezpečný prostor</span>
          <span className="flex items-center gap-2"><ShieldCheck className="size-3.5" /> Bezpečný prostor</span>
          <span className="hidden text-white/35 sm:inline">Enter odešle · Shift + Enter nový řádek</span>
        </div>
        <button
          type="button"
          onClick={onSubmit}
          disabled={!value.trim()}
          aria-label="Odeslat příspěvek"
          className={cn("grid size-12 shrink-0 place-items-center rounded-full bg-amber-200 text-[#18302b] shadow-lg shadow-amber-950/20 transition-all hover:bg-amber-100 hover:shadow-amber-200/20 disabled:cursor-not-allowed disabled:opacity-35")}
        >
          <Send className="size-5" />
        </button>
      </div>
    </div>
  )
}
