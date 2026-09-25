export type TopicDefinition = {
  slug: string
  name: string
  description: string
  subtopics: string[]
  position: string
}

const topicImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Temata-27IzjaPImXMP9hnkRakoZjmNjwXmB4.png"

export const topicDefinitions: TopicDefinition[] = [
  ["priroda", "Příroda", "Zvířata, výlety a svět kolem nás.", ["Zvířata", "Houby", "Rostliny", "Les", "Výlety", "Turistika", "Kempování", "Outdoor", "Fotografie přírody", "Zahrada", "Pozorování přírody"], "0%"],
  ["gaming", "Gaming", "Hry, diskuze, novinky a vlastní tvorba.", ["Herní diskuze", "Novinky", "Recenze & dojmy", "Hledám spoluhráče", "Hardware & setup", "PC", "PlayStation", "Xbox", "Nintendo", "Mobilní hry", "Retro", "Indie", "Modding", "Streamy & videa", "Turnaje & eventy", "Herní tvorba"], "20%"],
  ["hudba", "Hudba", "Objevuj zvuk, který s tebou rezonuje.", ["Objev novou hudbu", "Co právě posloucháš", "Interpreti", "Alba", "Koncerty", "Hudební diskuze", "Vlastní tvorba", "Kapely", "Remix / DJ", "Hudební technika"], "40%"],
  ["poradna", "Poradna", "Otázky, zkušenosti a pomoc bez odsouzení.", ["Vztahy", "Rodina", "Práce", "Finance", "Zdraví", "Psychika", "Každodenní život", "Právní otázky", "Technická pomoc", "Nevím, co dál"], "60%"],
  ["technologie", "Technologie", "Nápady, zařízení a svět digitálních věcí.", ["Počítače", "Mobily", "AI", "Software", "Hardware", "Internet", "Programování", "Elektronika", "3D tisk", "Gadgety", "Technické problémy"], "80%"],
  ["auta-moto", "Auta & Moto", "Stroje, cesty, projekty a dobrodružství.", ["Auta", "Motorky", "Opravy", "Údržba", "Tuning", "Veteráni", "Off-road", "Diagnostika", "Projekty", "Moto výlety"], "100%"],
  ["film-serialy", "Film & Seriály", "Příběhy, které stojí za zhlédnutí.", ["Filmy", "Seriály", "Dokumenty", "Anime", "Netflix & streaming", "Recenze", "Doporučení", "Fanouškovské diskuze"], "10%"],
  ["tvorba", "Tvorba", "Místo pro nápady, proces a vlastní práci.", ["Fotografie", "Kreslení", "Malování", "Grafika", "Psaní", "Poezie", "Video", "3D tvorba", "DIY", "Ruční tvorba", "Hudební tvorba", "Projekty"], "30%"],
  ["vedomosti", "Vědomosti", "Ptej se, vysvětluj a objevuj nové souvislosti.", ["Věda", "Vesmír", "Historie", "Psychologie", "Filosofie", "Zajímavosti", "Záhady", "Technologie", "Vysvětli mi", "Otázky & odpovědi"], "50%"],
  ["sport", "Sport", "Pohyb, výkon a radost z hry.", ["Fotbal", "Hokej", "Motorsport", "Basketbal", "Tenis", "Fitness", "Běh", "Cyklistika", "Outdoor sport", "Ostatní"], "70%"],
  ["jidlo-vareni", "Jídlo & Vaření", "Recepty, chutě a každodenní experimenty.", ["Recepty", "Vaření", "Pečení", "Restaurace", "Street food", "Káva", "Experimenty", "Co dnes vaříš?"], "90%"],
  ["cestovani", "Cestování", "Tipy, místa a příběhy z cest.", ["Výlety", "Dovolená", "Česko", "Evropa", "Svět", "Tipy", "Ubytování", "Fotografie", "Cestovatelské příběhy", "Kam vyrazit?"], "5%"],
  ["domov-dilna", "Domov & Dílna", "Vytvářej si místo, kde se dobře žije.", ["Bydlení", "Rekonstrukce", "Opravy", "Dílna", "Zahrada", "Stavění", "Dekorace", "DIY", "Praktické vychytávky"], "25%"],
  ["knihy-psani", "Knihy & Psaní", "Čtení, slova a světy mezi řádky.", ["Knihy", "Autoři", "Doporučení", "Čtenářské kluby", "Povídky", "Poezie", "Vlastní tvorba", "Literární diskuze"], "45%"],
  ["pribehy", "Příběhy", "Životní zkušenosti, radosti i těžké chvíle.", ["Život", "Zpověď", "Radost", "Výhra", "Zkušenost", "Inspirace", "Nevyslyšené příběhy"], "65%"],
  ["komunity", "Komunity", "Lidé, kteří mají něco společného.", ["Místní komunity", "Podpůrné skupiny", "Společné zájmy", "Setkání", "Projekty", "Dobrovolnictví"], "85%"],
].map(([slug, name, description, subtopics, position]) => ({ slug, name, description, subtopics, position }))

export const topicImageUrl = topicImage
export const getTopic = (slug: string) => topicDefinitions.find((topic) => topic.slug === slug)
export const topicStyle = (topic: TopicDefinition) => ({ backgroundImage: `linear-gradient(180deg, rgba(5,8,8,.08), rgba(5,7,8,.94)), url(${topicImage})`, backgroundPosition: `${topic.position} center` })
export const topicIcon = (name: string) => ({ Příroda: "✦", Gaming: "⌘", Hudba: "♫", Poradna: "✧", Technologie: "◈", "Auta & Moto": "◉", "Film & Seriály": "◌", Tvorba: "✎", Vědomosti: "◇", Sport: "◇", "Jídlo & Vaření": "◒", Cestování: "✦", "Domov & Dílna": "⌂", "Knihy & Psaní": "▤", Příběhy: "✧", Komunity: "∞" }[name] ?? "✦")
export const featuredTopicImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48924b4c-176f-47ad-a383-1852827f558e-v6MQ6nWj9hgiNv7tgMVb5djiJOuk8j.png"
export const topicHeroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmek%20obrazovky%202026-09-25%20204815-gnzBd5JtRzXXm4tZxELggA3oERCyh4.png"
export const topicImageMap = { topicImage, featuredTopicImage, topicHeroImage }
export default topicDefinitions
