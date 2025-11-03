import Layout from './components/Layout'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <Layout>
      <section className="min-w-full h-full flex items-center justify-center"><HomeSection /></section>
      <section className="min-w-full h-full flex items-center justify-center"><AboutSection /></section>
      <section className="min-w-full h-full flex items-center justify-center"><ProjectsSection /></section>
      <section className="min-w-full h-full flex items-center justify-center"><ContactSection /></section>
    </Layout>
  )
}
