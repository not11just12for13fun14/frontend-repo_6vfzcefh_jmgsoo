import { useState } from 'react'
import { Menu, X, Printer, Phone, Mail, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-lg border-b border-white/10"></div>
      <nav className="relative mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg shadow-lg shadow-blue-500/30">
            <Printer className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold tracking-tight text-lg">BluePrint 3D</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-blue-100 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg border border-white/10 transition-colors">
            <Phone className="w-4 h-4" /> Contact
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden relative bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100 hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-blue-200/80">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 012-3456</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@blueprint3d.com</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
