import { motion } from 'framer-motion'
import { Building2, HeartPulse, GraduationCap, Car, Hammer, Cpu } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Manufacturing',
    desc: 'Rapid tooling, jigs & fixtures, and end-use parts for the factory floor.'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Patient-specific models, surgical guides, and biocompatible materials.'
  },
  {
    icon: Car,
    title: 'Automotive',
    desc: 'Prototypes to production-grade components with heat‑resistant polymers.'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Hands-on learning, research tooling, and campus print farms.'
  },
  {
    icon: Hammer,
    title: 'AEC',
    desc: 'Concept models, site mockups, and on‑demand replacement parts.'
  },
  {
    icon: Cpu,
    title: 'Electronics',
    desc: 'Enclosures, test fixtures, and ESD‑safe materials for lab workflows.'
  }
]

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built for your industry</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">Teams across sectors rely on BluePrint 3D to accelerate development, reduce costs, and keep production moving.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-2xl group-hover:scale-110 transition" />
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
