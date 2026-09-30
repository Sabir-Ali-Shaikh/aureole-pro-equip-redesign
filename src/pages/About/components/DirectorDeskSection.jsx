import { motion } from "framer-motion";

export default function DirectorDeskSection() {
  return (
    <section className="lazy-section overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">DIRECTOR'S DESK</span>
            <div className="mt-8 border-l-2 border-aureole-cyan pl-5">
              <p className="font-display text-7xl leading-none tracking-wide text-aureole-primary">27+</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                Years of industry experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="relative"
          >
            <span
              className="pointer-events-none absolute -left-4 -top-16 font-display text-[10rem] leading-none text-aureole-surface"
              aria-hidden="true"
            >
              “
            </span>
            <p className="relative text-3xl font-semibold leading-tight text-aureole-slate sm:text-4xl lg:text-5xl">
              Innovation matters most when it is supported by integrity, reliability, quality and service.
            </p>
            <p className="type-body relative mt-7 max-w-3xl text-muted">
              In Aureole's current Director's Desk message, Dr. Kiran Badgujar reflects on a journey that grew from an initial vision into an operating business. He connects the company's development with more than 27 years of industry experience and highlights innovation, integrity and reliability as principles behind its growth.
            </p>
            <p className="type-body relative mt-5 max-w-3xl text-muted">
              The message also places strong emphasis on raising benchmarks in quality and service while continuing to build equipment and relationships that support customers over the long term.
            </p>

            <div className="relative mt-8 border-t border-border pt-6">
              <p className="text-xl font-bold text-aureole-slate">Dr. Kiran Badgujar</p>
              <p className="mt-1 type-meta font-bold text-aureole-cyan">Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
