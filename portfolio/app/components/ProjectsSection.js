'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      stack: 'React, Node.js, MongoDB',
      desc: 'Plateforme de vente en ligne avec paiement sécurisé.',
      details: 'Application full-stack avec gestion des utilisateurs, panier d\'achats, et intégration Stripe pour les paiements.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop'
    },
    {
      title: 'Task Manager App',
      stack: 'Vue.js, Firebase',
      desc: 'Gestionnaire de tâches collaboratif en temps réel.',
      details: 'Application de productivité avec synchronisation temps réel, notifications push et mode hors-ligne.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop'
    },
    {
      title: 'Portfolio Generator',
      stack: 'Next.js, Tailwind CSS',
      desc: 'Outil de création de portfolios personnalisés.',
      details: 'Générateur de sites portfolio avec templates personnalisables, hébergement gratuit et analytics intégrés.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold">Mes Projets</h2>
        </div>

        {!selectedProject ? (
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(idx)}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-cyan-400">{project.stack}</p>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-cyan-400">{projects[selectedProject].stack}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕ Retour
              </button>
            </div>

            <div className="h-64 rounded-xl overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              {projects[selectedProject].details}
            </p>

            <div className="flex gap-4 pt-4">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedProject(i)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${i === selectedProject
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
