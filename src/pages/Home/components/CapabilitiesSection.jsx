import { motion } from "framer-motion";
import { BadgeCheck, Factory, FlaskConical, PencilRuler } from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "Design & Engineering",
    description:
      "Requirement-led equipment design, process understanding and engineering documentation for critical pharmaceutical applications.",
    icon: PencilRuler,
  },
  {
    id: "02",
    title: "Production & Technical Capability",
    description:
      "Fabrication, assembly and automation brought together through disciplined manufacturing processes and technical expertise.",
    icon: Factory,
  },
  {
    id: "03",
    title: "Quality Assurance",
    description:
      "Quality controls are integrated throughout production to support consistent build standards, traceability and dependable operation.",
    icon: BadgeCheck,
  },
  {
    id: "04",
    title: "Testing & Validation",
    description:
      "Equipment is checked through defined testing and validation activities before it moves toward commissioning and handover.",
    icon: FlaskConical,
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="lazy-section relative isolate overflow-hidden bg-aureole-slate py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_80%_0%,rgba(1,194,251,0.16),transparent_34%),radial-gradient(circle_at_10%_80%,rgba(29,105,176,0.2),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-brand-gradient" />

      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <span className="eyebrow">FROM CONCEPT TO COMMISSIONING</span>
            <h2 className="type-title mt-4 max-w-xl text-white">
              Engineering capability across the complete equipment lifecycle.
            </h2>
            <p className="type-body mt-5 max-w-lg text-white/65">
              Aureole brings engineering, manufacturing, quality and testing together as one connected process rather than isolated services.
            </p>
          </div>

          <div className="border-t border-white/16">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="grid gap-5 border-b border-white/16 py-7 sm:grid-cols-[80px_56px_1fr] sm:items-start sm:gap-7"
                >
                  <span className="font-display text-5xl leading-none tracking-wide text-aureole-accent">
                    {item.id}
                  </span>
                  <span className="grid size-12 place-items-center rounded-[var(--radius-standard)] border border-white/15 bg-white/5 text-aureole-accent">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="type-body mt-3 max-w-2xl text-white/62">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
