import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { industries } from "../../../data/industries";

export default function IndustriesSection() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const shouldReduceMotion = useReducedMotion();
  const activeIndustry = industries.find((industry) => industry.id === activeId) ?? industries[0];

  return (
    <section id="industries" className="lazy-section overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-36">
            <span className="eyebrow">INDUSTRIES WE SERVE</span>
            <h2 className="type-title mt-4 max-w-xl text-aureole-slate">
              One engineering mindset. Multiple industrial environments.
            </h2>
            <p className="type-body mt-5 max-w-xl text-muted">
              Aureole supports pharmaceutical and industrial applications with equipment tailored to different process, utility and operating requirements.
            </p>

            <div className="mt-10 border-t border-border">
              {industries.map((industry) => {
                const active = industry.id === activeIndustry.id;

                return (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => setActiveId(industry.id)}
                    onMouseEnter={() => setActiveId(industry.id)}
                    onFocus={() => setActiveId(industry.id)}
                    aria-pressed={active}
                    className={`group flex w-full items-center gap-5 border-b border-border py-4 text-left transition-colors ${
                      active
                        ? "text-aureole-blue"
                        : "text-aureole-slate hover:text-aureole-blue"
                    }`}
                  >
                    <span
                      className={`font-display text-2xl tracking-wider transition-colors ${
                        active ? "text-aureole-cyan" : "text-muted/50"
                      }`}
                    >
                      {industry.number}
                    </span>
                    <span className="flex-1 text-xl font-bold sm:text-2xl">
                      {industry.name}
                    </span>
                    <span
                      className={`grid size-9 place-items-center rounded-[10px] border transition ${
                        active
                          ? "border-aureole-cyan bg-aureole-surface text-aureole-blue"
                          : "border-transparent text-muted group-hover:border-border group-hover:text-aureole-blue"
                      }`}
                    >
                      <ArrowUpRight size={17} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[var(--radius-card)] bg-aureole-slate sm:min-h-[680px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndustry.id}
                src={activeIndustry.image}
                alt={`${activeIndustry.name} industry`}
                loading="lazy"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="lazy-image absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,41,0.08),rgba(0,21,41,0.22)_42%,rgba(0,21,41,0.92))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(1,194,251,0.2),transparent_30%)]" />

            <motion.div
              key={`${activeIndustry.id}-copy`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.12 }}
              className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-9 lg:p-10"
            >
              <div className="flex items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="font-display text-5xl leading-none tracking-wide text-aureole-accent sm:text-6xl">
                    {activeIndustry.number}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    {activeIndustry.name}
                  </h3>
                  <p className="type-body mt-4 max-w-xl text-white/70">
                    {activeIndustry.description}
                  </p>
                </div>
                <div className="hidden rounded-[10px] border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75 backdrop-blur sm:block">
                  Industry focus
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { x: ["-25%", "125%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
              className="pointer-events-none absolute inset-y-0 z-[5] w-32 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
