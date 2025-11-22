import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      {/* light beams */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(34,211,238,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 w-full items-center">
        <div className="text-left pt-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm text-cyan-300/90 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            Next‑gen print technology
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_40px_rgba(59,130,246,0.35)]">
            Precision Printers for a 3D World
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-blue-100/90 max-w-xl">
            From desktop to industrial scale, our printers deliver stunning quality, speed, and reliability with immersive 3D visualization.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex items-center gap-4">
            <a href="#products" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:opacity-95 transition">Explore Products</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/20 transition">Talk to Sales</a>
          </motion.div>
        </div>

        {/* 3D scene */}
        <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="absolute inset-0 opacity-[0.97]">
            {/* This Spline scene is a placeholder generic tech model; can be replaced with a custom printer model URL */}
            <Spline scene="https://prod.spline.design/8p2M3f9kQ7nX2d8E/scene.splinecode" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-cyan-300/10" />
        </div>
      </div>
    </section>
  )
}
