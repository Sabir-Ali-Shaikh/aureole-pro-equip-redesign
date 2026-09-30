import { motion } from "framer-motion";
import { aboutPillars } from "../../../data/about";

export default function PurposeSection() {
  return (
    <section className="lazy-section overflow-hidden bg-aureole-soft py-20 sm:py-28">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">DIRECTION & PURPOSE</span>
          <h2 className="type-title mt-4 text-aureole-slate">
            Vision, mission and goal—treated as one connected direction.
          </h2>
        </div>

        <div className="mt-12 border-t border-border">
          {aboutPillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group grid gap-6 border-b border-border py-8 md:grid-cols-[92px_120px_1.15fr_.85fr] md:items-start md:gap-8 md:py-10"
            >
              <span className="font-display text-5xl leading-none tracking-wider text-aureole-cyan">
                {pillar.number}
              </span>

              <div className="grid size-20 place-items-center rounded-[var(--radius-standard)] bg-aureole-surface">
                <img
                  src={pillar.icon}
                  alt=""
                  loading="lazy"
                  className="h-11 w-11 object-contain opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              <div>
                <p className="type-meta font-bold text-aureole-cyan">{pillar.title}</p>
                <h3 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-aureole-slate sm:text-3xl">
                  {pillar.statement}
                </h3>
              </div>

              <p className="type-body text-muted md:pt-7">{pillar.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
