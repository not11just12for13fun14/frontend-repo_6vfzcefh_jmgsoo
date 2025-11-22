import { motion } from 'framer-motion'
import { Rocket, ShieldCheck, Gauge, Wrench, CloudLightning, Leaf } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Ultra‑fast throughput',
    desc: 'Print prototypes and production parts up to 3× faster with precision layer control.'
  },
  {
    icon: ShieldCheck,
    title: 'Industrial reliability',
    desc: '24/7 uptime with self‑calibration, auto‑bed leveling, and redundant sensors.'
  },
  {
    icon: Gauge,
    title: 'Micron‑level detail',
    desc: 'Engineered motion system delivers crisp edges and flawless surface finishes.'
  },
  {
    icon: Wrench,
    title: 'Tool‑less maintenance',
    desc: 'Modular hotend and quick‑swap nozzles keep you running with minimal downtime.'
  },
  {
    icon: CloudLightning,
    title: 'Cloud print management',
    desc: 'Fleet monitoring, analytics, and remote job control from any device.'
  },
  {
    icon: Leaf,
    title: 'Sustainable materials',
    desc: 'Recycled filaments and energy‑smart firmware reduce your footprint.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why teams choose BluePrint 3D</h2>
          <p className="mt-3 text-blue-200/80">Engineered for speed, accuracy, and business continuity</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-2xl group-hover:scale-110 transition" />
              <Icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
