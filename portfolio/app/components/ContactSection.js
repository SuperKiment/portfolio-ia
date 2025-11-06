export default function Contact() {
  return (
    <section className="min-w-screen h-screen flex items-center justify-center px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold">Contactez-moi</h2>
          <p className="text-gray-400 mt-4">
            Disponible pour des collaborations ou missions freelance
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                📧
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a
                  href="mailto:clement.parisot@exemple.fr"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  clement.parisot@exemple.fr
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
                💼
              </div>
              <div>
                <div className="text-sm text-gray-400">LinkedIn</div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  /in/clement-parisot
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full flex items-center justify-center">
                🐙
              </div>
              <div>
                <div className="text-sm text-gray-400">GitHub</div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  /clement-parisot
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center">
            <p className="text-gray-400 text-sm">
              Vous pouvez aussi me trouver sur d'autres plateformes
              ou m'envoyer un message directement par email.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
