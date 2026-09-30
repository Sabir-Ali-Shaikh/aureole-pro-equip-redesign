import { motion } from "framer-motion";

const stats = [
  { value: "2000+", label: "Units Sold" },
  { value: "1422+", label: "Installations Done" },
  { value: "150+", label: "Employees" },
  { value: "558+", label: "Happy Clients" },
];

export default function TrustBar() {
  return (
    <section className="lazy-section border-y border-border bg-aureole-pearl" aria-label="Company statistics">
      <div className="container-shell grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="relative px-4 py-7 text-center sm:py-9"
          >
            {index !== 0 && (
              <span className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-border md:block" />
            )}
            <p className="font-display text-5xl leading-none tracking-wide text-aureole-primary">{stat.value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
