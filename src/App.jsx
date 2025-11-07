import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Pricing from './components/Pricing';

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Homesy. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#catalog" className="hover:text-gray-900">Catalog</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
