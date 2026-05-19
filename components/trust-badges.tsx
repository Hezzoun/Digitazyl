import { Lock, Shield, Heart } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="px-6 py-8 bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Lock className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Anonymní</p>
              <p className="text-xs text-white/50">Nikdo neví, kdo jsi.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Bez soudu</p>
              <p className="text-xs text-white/50">Tady tě nikdo nehodnotí.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">Bezpečně</p>
              <p className="text-xs text-white/50">Tvůj prostor je v bezpečí.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
