'use client';

export default function Navbar({ setPage, page }) {
  const pages = ['Accueil', 'À propos', 'Projets', 'Contact'];
  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Clément Parisot
        </h1>
        <div className="flex gap-6">
          {['Accueil', 'À propos', 'Projets', 'Contact'].map((item, idx) => (
            <button
              key={item}
              onClick={() => setPage(idx)}
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${page === idx ? 'text-cyan-400' : 'text-gray-300'
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
