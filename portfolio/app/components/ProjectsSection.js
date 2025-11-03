'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Classifier Vision',
    stack: 'PyTorch, FastAPI',
    desc: 'Modèle CNN pour classification d’images industrielles.',
    details:
      'Ce projet utilise un réseau convolutionnel optimisé pour détecter des défauts visuels sur des pièces mécaniques. Déploiement via FastAPI et monitoring Prometheus.',
  },
  {
    title: 'NLP Pipeline',
    stack: 'Transformers, Docker',
    desc: 'Analyse de texte et API scalable.',
    details:
      'Pipeline complet de traitement de texte, fine-tuning de modèles BERT et intégration dans une architecture conteneurisée pour production.',
  },
  {
    title: 'ForecastX',
    stack: 'TensorFlow, Airflow',
    desc: 'Prédiction de séries temporelles.',
    details:
      'Modèle LSTM automatisé pour prévision de données énergétiques, orchestration via Airflow et stockage sur PostgreSQL.',
  },
]

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative w-full h-full overflow-hidden pt-24">
      <AnimatePresence initial={false} mode="wait">
        {!selected && (
          <motion.div
            key="list"
            className="grid gap-6 px-4"
            initial={{ x: 0, opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-400">Projets</h2>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                onClick={() => setSelected(i)}
                className="border border-gray-700 p-4 rounded-xl cursor-pointer hover:border-cyan-400 transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-gray-400">{p.stack}</p>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Couche persistante du détail (jamais démontée) */}
      {selected !== null && (
        <motion.div
          key="detail"
          className="absolute inset-0 px-8 pb-8 pt-24 flex flex-col justify-between bg-gray-900"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ ease: [0.4, 0.0, 0.2, 1], duration: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-cyan-400">
                  {projects[selected].title}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Retour
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-4">{projects[selected].stack}</p>
              <p className="leading-relaxed">{projects[selected].details}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-8">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`border px-3 py-1 rounded-lg text-sm ${i === selected
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
