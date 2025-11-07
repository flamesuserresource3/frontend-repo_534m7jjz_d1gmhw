import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import CreditDashboard from './components/CreditDashboard';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Catalog />
      <CreditDashboard />
      <Pricing />
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BRACKK / Homesy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
