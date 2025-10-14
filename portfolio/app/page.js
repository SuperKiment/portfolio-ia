import Layout from './components/Layout'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import HomeSection from './components/HomeSection'

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}
