import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  { number: "01", title: "Quality", detail: "Disciplined engineering and manufacturing standards." },
  { number: "02", title: "Integrity", detail: "Transparent decisions and dependable partnerships." },
  { number: "03", title: "Innovation", detail: "Practical improvements shaped around process needs." },
];

export default function AboutSection() {
  return (
    <section className="wave-bg lazy-section relative overflow-hidden bg-surface py-20 sm:py-28" id="about-home">
      <div className="pointer-events-none absolute inset-0 bg-surface/88" />
      <div className="container-shell relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="font-display text-[clamp(5rem,16vw,14rem)] leading-[0.75] tracking-[0.02em] text-aureole-surface"
          aria-hidden="true"
        >
          AUREOLE
        </motion.p>

        <div className="relative -mt-4 grid gap-12 lg:-mt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">ABOUT AUREOLE</span>
            <h2 className="type-title mt-4 max-w-3xl text-aureole-slate">
              Engineering shaped by experience, curiosity and responsibility.
            </h2>
            <p className="type-body mt-6 max-w-2xl text-muted">
              Aureole Process Equipment describes itself as a multidisciplinary organization combining experienced consultants and subject-matter expertise with a younger engineering team. Its work spans pharmaceutical and industrial process applications, with quality, integrity and innovation positioned at the center of the company philosophy.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-aureole-blue transition hover:gap-3"
            >
              Discover the company
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="border-t border-border">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[70px_1fr] sm:items-start"
              >
                <span className="font-display text-3xl tracking-wider text-aureole-cyan">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-aureole-slate sm:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                    {principle.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
