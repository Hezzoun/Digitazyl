import type { ReactNode } from "react"

export function GlobalBackground({ children }: { children: ReactNode }) {
  return (
    <div className="digitazyl-global-shell">
      <div className="digitazyl-global-background" aria-hidden="true" />
      <div className="digitazyl-global-content">{children}</div>
    </div>
  )
}
