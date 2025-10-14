import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm border-b border-gray-800 z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-cyan-400 font-bold">Kim — AI Dev</h1>
        <div className="space-x-4">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
