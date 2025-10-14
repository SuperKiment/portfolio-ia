import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="pt-24 space-y-4">
        <h2 className="text-2xl font-semibold text-cyan-400">Contact</h2>
        <p>Disponible pour collaborations ou missions freelance.</p>
        <p>📧 <a href="mailto:contact@kim.dev" className="text-cyan-400">contact@kim.dev</a></p>
      </section>
    </Layout>
  )
}
