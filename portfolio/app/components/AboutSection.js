export default function About() {
  return (
    <section className="min-w-screen h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl space-y-8">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold">À propos de moi</h2>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
              CP
            </div>
            <div>
              <h3 className="text-2xl font-bold">Clément Parisot</h3>
              <p className="text-cyan-400">Développeur Full Stack</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-300">
            <p>
              Passionné par le développement web depuis plus de 3 ans, je me spécialise
              dans la création d'applications modernes et performantes.
            </p>
            <p>
              Mon expertise couvre l'ensemble de la stack : frontend avec React/Vue.js,
              backend avec Node.js/Express, et déploiement cloud sur AWS/Azure.
            </p>
            <p>
              J'aime relever des défis techniques et apprendre de nouvelles technologies
              pour créer des solutions innovantes.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400">3+</div>
              <div className="text-sm text-gray-400">Années d'expérience</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-400">Projets réalisés</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-xl">
              <div className="text-3xl font-bold text-pink-400">100%</div>
              <div className="text-sm text-gray-400">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
