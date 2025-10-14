import Navbar from './Navbar'
import '../globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
          <Navbar />
          <main className="max-w-4xl mx-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
