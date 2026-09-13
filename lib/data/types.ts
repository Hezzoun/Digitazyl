export type Reaction = "rozumim" | "nejsi" | "drz"
export type PostCategory = "vypsat" | "podpora" | "uspechy" | "radosti" | "vděčnost"
export type Post = { id: string; text: string; category: PostCategory; timeAgo: string; reactions: Record<Reaction, number> }
export type Topic = { id: string; name: string; description: string; count: number; custom?: boolean }
export type MediaItem = { id: string; type: "hudba" | "obrazy" | "texty" | "fotografie" | "videa" | "projekty"; title: string }
export type AnonymousUser = { id: string }
export type SavedItem = { postId: string; savedAt: string }

export const categoryLabels: Record<PostCategory | "všechno", string> = {
  všechno: "Všechno", vypsat: "Potřebuji se vypsat", podpora: "Potřebuji podporu", uspechy: "Malé úspěchy", radosti: "Radosti", "vděčnost": "Vděčnost",
}

export const demoPosts: Post[] = [
  { id: "example-1", text: "Poslední dobou mám pocit, že všechno zvládám jen proto, že musím. Dnes jsem si dovolil na chvíli zastavit.", category: "vypsat", timeAgo: "před 45 min", reactions: { rozumim: 23, nejsi: 8, drz: 4 } },
  { id: "example-2", text: "Po dlouhé době jsem dnes udělal něco jen pro sebe. Byla to malá věc, ale vrátila mi trochu klidu.", category: "uspechy", timeAgo: "před 1 h", reactions: { rozumim: 47, nejsi: 12, drz: 5 } },
  { id: "example-3", text: "Dnes jsem se konečně odhodlal k malému kroku. Není vidět zvenčí, ale pro mě znamená hodně.", category: "radosti", timeAgo: "před 2 h", reactions: { rozumim: 36, nejsi: 9, drz: 3 } },
  { id: "example-4", text: "Zítra mě čeká něco důležitého a mám z toho strach. Snažím se připomenout si, že nemusím být dokonalý.", category: "podpora", timeAgo: "před 3 h", reactions: { rozumim: 19, nejsi: 14, drz: 7 } },
  { id: "example-5", text: "Dnes bych chtěla poděkovat jednomu neznámému člověku. Malý vzkaz mi dokázal vykouzlit úsměv na tváři.", category: "vděčnost", timeAgo: "před 4 h", reactions: { rozumim: 31, nejsi: 6, drz: 2 } },
]

export const defaultPost: Post = { id: "latest-message", text: "Dneska jsem potřeboval někde říct, co mám v hlavě.", category: "vypsat", timeAgo: "před chvílí", reactions: { rozumim: 12, nejsi: 5, drz: 2 } }
export const defaultTopics: Topic[] = ["Vztahy", "Rodina", "Práce", "Samota", "Strach", "Sebevědomí", "Radosti", "Každodenní život", "Tvorba", "Hudba", "Myšlenky"].map((name, index) => ({ id: `topic-${index}`, name, description: "Místo pro myšlenky, zkušenosti a vzájemnou podporu.", count: 0 }))

export const storageKeys = { latest: "digitazyl.latest-message", reactions: "digitazyl.reactions", saved: "digitazyl.saved", user: "digitazyl.anonymous-user", topics: "digitazyl.topics" }

export function readStorage<T>(key: string, fallback: T): T { if (typeof window === "undefined") return fallback; try { const raw = window.localStorage.getItem(key); return raw ? JSON.parse(raw) as T : fallback } catch { return fallback } }
export function writeStorage<T>(key: string, value: T) { if (typeof window !== "undefined") window.localStorage.setItem(key, JSON.stringify(value)) }
export function getAnonymousUser(): AnonymousUser { const existing = readStorage<AnonymousUser | null>(storageKeys.user, null); if (existing) return existing; const user = { id: `anon-${crypto.randomUUID?.() ?? Date.now()}` }; writeStorage(storageKeys.user, user); return user }
