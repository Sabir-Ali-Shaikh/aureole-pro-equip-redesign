import { motion, useReducedMotion } from "framer-motion";
import { engineeringReferences, clients } from "../../../data/trust";

function MarqueeRow({ items, reverse = false }) {
  const shouldReduceMotion = useReducedMotion();
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border/80 bg-surface">
      <motion.div
        className="flex min-w-max items-center"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {repeatedItems.map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="flex min-w-[280px] items-center gap-5 border-r border-border/80 px-8 py-7 sm:min-w-[340px] sm:px-10"
          >
            <span className="font-display text-2xl tracking-wider text-aureole-cyan">
              {String((index % items.length) + 1).padStart(2, "0")}
            </span>
            <span className="text-xl font-bold text-aureole-slate sm:text-2xl">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="lazy-section overflow-hidden bg-aureole-pearl py-20 sm:py-28">
      <div className="container-shell mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
        <div>
          <span className="eyebrow">TRUSTED ACROSS INDUSTRY</span>
          <h2 className="type-title mt-4 max-w-xl text-aureole-slate">
            Equipment experience across pharmaceutical, healthcare and research teams.
          </h2>
        </div>
        <p className="type-body max-w-2xl text-muted lg:justify-self-end">
          Aureole's published client list includes leading pharmaceutical manufacturers, healthcare organizations and research institutions across India.
        </p>
      </div>

      <div className="space-y-3">
        <MarqueeRow items={clients.slice(0, 6)} />
        <MarqueeRow items={clients.slice(6)} reverse />
      </div>

      <div className="container-shell mt-12">
        <div className="grid gap-6 border-t border-border pt-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="type-meta font-bold text-aureole-cyan">ENGINEERING REFERENCES</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">
              Standards and validation references appearing across Aureole's product documentation and equipment specifications.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-4 lg:justify-end">
            {engineeringReferences.map((reference) => (
              <span
                key={reference}
                className="border-b border-aureole-cyan/35 pb-1 text-base font-bold text-aureole-deep"
              >
                {reference}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
