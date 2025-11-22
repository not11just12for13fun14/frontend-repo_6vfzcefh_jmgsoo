import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Features from './components/Features'
import Products from './components/Products'
import Industries from './components/Industries'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.10),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero3D />
        <Products />
        <Features />
        <Industries />
        <About />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/80">
          <p className="text-sm">© {new Date().getFullYear()} BluePrint 3D. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#industries" className="hover:text-white transition">Industries</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
