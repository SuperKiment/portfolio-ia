import Layout from '../components/Layout'

const projects = [
  { title: 'Classifier Vision', stack: 'PyTorch, FastAPI', desc: 'Modèle CNN pour classification d’images.' },
  { title: 'NLP Pipeline', stack: 'Transformers, Docker', desc: 'Analyse de texte et API scalable.' },
]

export default function Projects() {
  return (
    <Layout>
      <section className="pt-24 space-y-6">
        <h2 className="text-2xl font-semibold text-cyan-400">Projets</h2>
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border border-gray-700 p-4 rounded-xl hover:border-cyan-400 transition">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.stack}</p>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
