"use client"

import { Search } from "lucide-react"

export function TopicSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <label className="topics-hero-search"><Search aria-hidden="true" /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Hledat téma..." aria-label="Hledat téma" /></label>
}
