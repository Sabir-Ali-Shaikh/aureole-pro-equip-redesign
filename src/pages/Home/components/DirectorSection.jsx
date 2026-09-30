import { motion } from "framer-motion";

export default function DirectorSection() {
  return (
    <section className="lazy-section overflow-hidden bg-aureole-deep py-20 text-white sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -left-8 -top-8 font-display text-[12rem] leading-none text-white/[0.035]" aria-hidden="true">
            “
          </div>
          <p className="type-meta font-bold text-aureole-accent">DIRECTOR'S DESK</p>
          <p className="mt-7 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Innovation, integrity and reliability have guided Aureole's growth from a vision into an operating reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-8 border-l border-white/14 pl-0 sm:grid-cols-[170px_1fr] sm:pl-8"
        >
          <div>
            <p className="font-display text-7xl leading-none tracking-wide text-aureole-accent">27+</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/52">
              Years of experience
            </p>
          </div>
          <div>
            <p className="type-body text-white/68">
              In the current Director's Desk message, Dr. Kiran Badgujar reflects on more than 27 years of industry experience and emphasizes innovation, integrity, reliability, quality and service as principles behind the company's development.
            </p>
            <div className="mt-7 border-t border-white/14 pt-5">
              <p className="text-xl font-bold text-white">Dr. Kiran Badgujar</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-aureole-accent">Director</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
