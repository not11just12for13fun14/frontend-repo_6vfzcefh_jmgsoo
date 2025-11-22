import { motion } from 'framer-motion'

const products = [
  {
    name: 'BP‑One',
    tagline: 'Desktop precision printer',
    price: '$799',
    specs: ['220×220×250 mm', 'PLA / PETG / TPU', 'Wi‑Fi + USB'],
    img: 'https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'BP‑Pro',
    tagline: 'Performance for prosumers',
    price: '$1,599',
    specs: ['300×300×300 mm', 'ABS / Nylon / CF‑Nylon', 'Heated chamber'],
    img: 'https://images.unsplash.com/photo-1558487661-9d4f01e2ad63?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'BP‑X',
    tagline: 'Industrial production system',
    price: 'Talk to sales',
    specs: ['500×500×500 mm', 'PEEK / ULTEM', 'Dual extrusion'],
    img: 'https://images.unsplash.com/photo-1555617117-08fda9f1e8f9?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our printer lineup</h2>
          <p className="mt-3 text-blue-200/80">Explore systems built for every stage, from idea to production</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="h-48 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <p className="text-blue-200/80 text-sm">{p.tagline}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.specs.map(s => (
                    <span key={s} className="text-xs text-cyan-300/90 bg-white/5 border border-white/10 rounded-full px-2 py-1">{s}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-white/90 font-semibold">{p.price}</span>
                  <a href="#contact" className="text-cyan-300 hover:text-white transition">Learn more →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
