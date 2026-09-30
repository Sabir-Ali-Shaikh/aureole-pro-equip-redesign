import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  FlaskConical,
  Settings2,
  ShieldCheck,
} from "lucide-react";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="type-title mt-4 text-aureole-slate">{title}</h2>
      {description && <p className="type-body mt-5 text-muted">{description}</p>}
    </div>
  );
}

function FeatureList({ items, icon: Icon = CheckCircle2 }) {
  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          className="flex gap-4 border-b border-border py-5"
        >
          <Icon size={19} className="mt-1 shrink-0 text-aureole-cyan" />
          <p className="text-base leading-7 text-aureole-slate/82">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function ProductTechnicalContent({ product, details }) {
  const hasFeatureColumns =
    details.keyFeatures?.length || details.safetyFeatures?.length || details.automation?.length;

  return (
    <>
      <section className="lazy-section bg-surface py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:gap-28">
          <SectionHeading
            eyebrow="PRODUCT OVERVIEW"
            title="Built around the process, not just the machine."
            description={product.description}
          />

          <div>
            {details.applications?.length > 0 && (
              <>
                <div className="flex items-center gap-3">
                  <FlaskConical size={21} className="text-aureole-cyan" />
                  <h3 className="text-2xl font-bold text-aureole-slate">Typical Applications</h3>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {details.applications.map((application, index) => (
                    <motion.div
                      key={application}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.38, delay: index * 0.04 }}
                      className="border-l-2 border-aureole-cyan bg-aureole-soft px-4 py-4 text-sm font-semibold leading-6 text-aureole-slate"
                    >
                      {application}
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {hasFeatureColumns && (
        <section className="lazy-section bg-aureole-soft py-20 sm:py-28">
          <div className="container-shell">
            <SectionHeading
              eyebrow="ENGINEERING DETAILS"
              title="Features, controls and safeguards in one technical view."
            />

            <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
              {details.keyFeatures?.length > 0 && (
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <Settings2 size={20} className="text-aureole-cyan" />
                    <h3 className="text-xl font-bold text-aureole-slate">Key Features</h3>
                  </div>
                  <FeatureList items={details.keyFeatures} />
                </div>
              )}

              {details.safetyFeatures?.length > 0 && (
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <ShieldCheck size={20} className="text-aureole-cyan" />
                    <h3 className="text-xl font-bold text-aureole-slate">Safety</h3>
                  </div>
                  <FeatureList items={details.safetyFeatures} icon={ShieldCheck} />
                </div>
              )}

              {details.automation?.length > 0 && (
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <Cpu size={20} className="text-aureole-cyan" />
                    <h3 className="text-xl font-bold text-aureole-slate">Automation & Control</h3>
                  </div>
                  <FeatureList items={details.automation} icon={Cpu} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {details.specifications?.length > 0 && (
        <section className="lazy-section bg-surface py-20 sm:py-28">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
            <SectionHeading
              eyebrow="TECHNICAL SPECIFICATIONS"
              title="Core specification highlights."
              description="Values shown are based on Aureole's published standard configurations. Final project specifications may vary with capacity, options and customer requirements."
            />

            <div className="border-t border-border">
              {details.specifications.map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: index * 0.035 }}
                  className="grid gap-2 border-b border-border py-5 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-muted">{label}</p>
                  <p className="text-base font-semibold leading-7 text-aureole-slate">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {details.modelTable && (
        <section className="lazy-section overflow-hidden bg-aureole-slate py-20 text-white sm:py-28">
          <div className="container-shell">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="type-meta font-bold text-aureole-accent">STANDARD MODELS</p>
                <h2 className="type-title mt-4 text-white">Representative standard configurations.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/58">{details.modelTable.note}</p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-[var(--radius-standard)] border border-white/12 bg-white/[0.04]">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/14 bg-white/[0.04]">
                    {details.modelTable.columns.map((column) => (
                      <th
                        key={column}
                        className="px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-aureole-accent"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {details.modelTable.rows.map((row, index) => (
                    <tr key={`${row[0]}-${index}`} className="border-b border-white/10 last:border-b-0">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${cell}-${cellIndex}`}
                          className={`px-5 py-4 text-sm ${
                            cellIndex === 0 ? "font-bold text-white" : "text-white/66"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
