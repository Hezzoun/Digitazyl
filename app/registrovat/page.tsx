export default function RegistracePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl p-10">
        
        <h1 className="text-5xl font-serif mb-6">
          DIGITAZYL se probouzí.
        </h1>

        <p className="text-white/70 text-lg leading-relaxed mb-8">
          První testovací přístup otevřeme brzy.
          <br />
          Zanech kontakt a dáme ti vědět,
          až otevřeme dveře.
        </p>

        <input
          type="email"
          placeholder="Tvůj e-mail"
          className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 mb-4 text-white placeholder:text-white/40 outline-none"
        />

        <button className="w-full rounded-xl bg-green-700 hover:bg-green-600 transition px-5 py-4 text-white font-medium">
          Chci být u začátku
        </button>

        <p className="text-sm text-white/40 mt-6">
          Žádný spam. Jen pozvánka do první vlny.
        </p>
      </div>
    </main>
  )
}