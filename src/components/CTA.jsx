import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white">
                Ready to print the future?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-3 text-blue-200/80">
                Talk to our experts about workflows, materials, and ROI. We'll help you choose the right system and deploy with confidence.
              </motion.p>
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.15 }}
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will reach out shortly.'); }}
              className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="First name" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
                <input required placeholder="Last name" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
              </div>
              <input required type="email" placeholder="Work email" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
              <textarea placeholder="Tell us about your use case" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 h-28" />
              <button className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:opacity-95 transition">Request a demo</button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
