import { motion } from 'framer-motion'

const stats = [
  { label: 'Years building printers', value: '10+' },
  { label: 'Installations worldwide', value: '2,500+' },
  { label: 'Avg. uptime', value: '99.7%' },
  { label: 'NPS', value: '72' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm text-cyan-300/90 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            About us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Building reliable 3D printing for real businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-blue-200/80">
            We started BluePrint 3D to make additive manufacturing accessible and dependable. From materials science to cloud software, our team focuses on outcomes that matter: speed, accuracy, and uptime.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-blue-200/80">
            Today we power print fleets at startups, Fortune 500 factories, and research labs in over 40 countries.
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-blue-200/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.15),rgba(34,211,238,0.15),transparent)]" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="text-white/90 font-semibold text-lg">Our mission</div>
            <p className="text-blue-200/80 text-sm mt-1 max-w-md">Empower every team to design, iterate, and produce with confidence through dependable 3D printing systems and software.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
