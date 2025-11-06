'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import '../globals.css'

export default function Layout({ children }) {
  const [page, setPage] = useState(0)

  return (
    <html lang="fr">
      <body>
        <div className="h-screen bg-gray-900 text-gray-100 font-inter">
          <Navbar setPage={setPage} />
          <div className="h-full pt-20 relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
