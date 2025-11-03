'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import '../globals.css'

export default function Layout({ children }) {
  const [page, setPage] = useState(0)

  return (
    <html lang="fr">
      <body>
        <div className="h-screen overflow-hidden bg-gray-900 text-gray-100 font-inter">
          <Navbar setPage={setPage} />
          <div className="h-full pt-20 relative">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${page * 100}vw` }}
              transition={{
                ease: [0.4, 0.0, 0.2, 1], // cubic-bezier douce (équivalent easeInOut standard)
                duration: 0.9,
              }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  )
}
