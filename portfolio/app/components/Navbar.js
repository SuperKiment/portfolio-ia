export default function Navbar({ setPage }) {
  return (
    <nav className="fixed w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm border-b border-gray-800 z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-cyan-400 font-bold">Parisot Clément - Développeur</h1>
        <div className="space-x-4">
          <button onClick={() => setPage(0)}>Accueil</button>
          <button onClick={() => setPage(1)}>À propos</button>
          <button onClick={() => setPage(2)}>Projets</button>
          <button onClick={() => setPage(3)}>Contact</button>
        </div>
      </div>
    </nav>
  )
}
