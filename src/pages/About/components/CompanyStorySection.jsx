import { motion } from "framer-motion";
import { companyValues } from "../../../data/about";

export default function CompanyStorySection() {
  return (
    <section id="company-story" className="lazy-section bg-surface py-20 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">OUR STORY</span>
            <h2 className="type-title mt-4 max-w-2xl text-aureole-slate">
              Experience and new thinking, working in the same engineering room.
            </h2>
            <p className="type-body mt-6 max-w-2xl text-muted">
              Aureole describes itself as a multidisciplinary organization built around seasoned consultants, subject-matter experts and a younger generation of engineers. The intent is to combine accumulated domain knowledge with fresh thinking across pharmaceutical and industrial process applications.
            </p>
            <p className="type-body mt-5 max-w-2xl text-muted">
              That mix supports equipment development for pharmaceutical, chemical, oil & gas, construction, textile, research and other process-driven environments in India and abroad.
            </p>
          </motion.div>

          <div className="border-t border-border">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[82px_1fr] sm:items-start"
              >
                <span className="font-display text-4xl leading-none tracking-wider text-aureole-cyan">
                  {value.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-aureole-slate">{value.title}</h3>
                  <p className="type-body mt-3 max-w-2xl text-muted">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
