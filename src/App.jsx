import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import CreditDashboard from './components/CreditDashboard'
import Pricing from './components/Pricing'

function App() {
  // simple state for demo interactions
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4">
        <Hero />
        <Catalog />
        <CreditDashboard />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} BRACKK. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
