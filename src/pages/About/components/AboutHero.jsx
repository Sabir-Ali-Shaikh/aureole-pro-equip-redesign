import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { aboutStats } from "../../../data/about";
import { siteConfig } from "../../../config/site";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-aureole-slate text-white">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_12%,rgba(1,194,251,.18),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(29,105,176,.24),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-14 -z-10 -translate-x-1/2 whitespace-nowrap font-display text-[clamp(7rem,23vw,24rem)] leading-none tracking-[0.02em] text-white/[0.025]"
        aria-hidden="true"
      >
        ABOUT
      </motion.p>

      <div className="container-shell grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-[10px] border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-aureole-accent backdrop-blur">
            <Sparkles size={15} />
            About Aureole
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Inspired by distinction.
            <span className="block text-brand-gradient">Built around engineering.</span>
          </h1>

          <p className="type-body mt-7 max-w-2xl text-white/68">
            The name Aureole is inspired by the idea of a radiant halo—a symbol the company connects with excellence and distinction. That philosophy continues through its focus on quality, integrity, innovation and multidisciplinary engineering.
          </p>

          <a
            href="#company-story"
            className="mt-8 inline-flex items-center gap-2 font-bold text-aureole-accent transition hover:gap-3"
          >
            Discover our story
            <ArrowDownRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-aureole-accent/8 blur-3xl" />
          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.05] p-3 shadow-[0_34px_90px_rgba(0,0,0,.28)] backdrop-blur">
            <div className="relative min-h-[480px] overflow-hidden rounded-[calc(var(--radius-card)-8px)] bg-aureole-deep sm:min-h-[570px]">
              <motion.img
                src={siteConfig.assets.manufacturing}
                alt="Aureole manufacturing environment"
                animate={shouldReduceMotion ? undefined : { scale: [1.02, 1.07, 1.02] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,21,41,.08),rgba(0,21,41,.32)_50%,rgba(0,21,41,.92))]" />

              <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-white/12 bg-aureole-slate/78 backdrop-blur sm:grid-cols-4">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.48 + index * 0.08, duration: 0.42 }}
                    className="border-r border-t border-white/10 px-4 py-5 last:border-r-0 sm:border-t-0"
                  >
                    <p className="font-display text-4xl leading-none tracking-wide text-aureole-accent">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/48">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
