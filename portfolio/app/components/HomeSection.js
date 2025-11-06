export default function Home({ setPage }) {
  return (
    <section className="pt-24">
      <div className="max-w-4xl text-center space-y-8">
        <div className="inline-block">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
            Bienvenue sur mon portfolio
          </span>
        </div>
        <h2 className="text-6xl font-bold leading-tight">
          Développeur
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Full Stack
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Spécialisé en développement web moderne avec React, Node.js et cloud computing.
          Je crée des applications performantes et évolutives.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <button
            onClick={() => setPage(1)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => setPage(3)}
            className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300"
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  )
}
