import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

const itemMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,var(--border)_1px,transparent_1px),linear-gradient(var(--border)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.2]" />
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[620px] rounded-full bg-aureole-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 left-[30%] -z-10 size-[480px] rounded-full bg-aureole-surface blur-3xl" />

      <div className="container-shell grid min-h-[calc(100vh-128px)] items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
          className="relative z-10"
        >
          <motion.div
            variants={itemMotion}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-[10px] border border-aureole-cyan/20 bg-aureole-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-aureole-blue"
          >
            <ShieldCheck size={15} aria-hidden="true" />
            Pharmaceutical & Process Equipment
          </motion.div>

          <motion.h1
            variants={itemMotion}
            transition={{ duration: 0.55 }}
            className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-aureole-slate lg:text-7xl"
          >
            Engineering
            <span className="block text-brand-gradient">precision</span>
            into every process.
          </motion.h1>

          <motion.p
            variants={itemMotion}
            transition={{ duration: 0.55 }}
            className="type-body mt-7 max-w-2xl text-muted"
          >
            Advanced autoclaves, sterilization systems and process equipment engineered for pharmaceutical, healthcare, laboratory and industrial applications.
          </motion.p>

          <motion.div
            variants={itemMotion}
            transition={{ duration: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/products" className="btn-primary group">
              Explore Products
              <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Talk to an Engineer
            </Link>
          </motion.div>

          <motion.div
            variants={itemMotion}
            transition={{ duration: 0.55 }}
            className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6"
          >
            {["Custom engineered solutions", "Quality-focused manufacturing", "Pan-India support"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-base text-aureole-slate/80">
                <CheckCircle2 size={16} className="text-aureole-cyan" aria-hidden="true" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 22 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[650px] lg:mx-0"
        >
          <div className="absolute inset-x-[7%] bottom-[2%] h-[22%] rounded-[50%] bg-aureole-slate/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border/80 bg-[linear-gradient(145deg,var(--surface),var(--aureole-soft))] p-5 shadow-[0_30px_80px_rgba(0,21,41,0.12)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,var(--aureole-surface),transparent_37%)]" />

            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-aureole-cyan">Featured System</p>
                <p className="mt-2 text-xl font-bold text-aureole-slate">Vertical Autoclave</p>
              </div>
              <div className="rounded-[8px] border border-aureole-cyan/20 bg-aureole-surface px-3 py-1.5 text-xs font-bold text-aureole-blue">
                APE
              </div>
            </div>

            <div className="relative mt-4 flex min-h-[410px] items-center justify-center sm:min-h-[500px]">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[82%] max-w-[470px]"
              >
                <img
                  src={siteConfig.assets.heroProduct}
                  alt="Aureole vertical autoclave"
                  className="lazy-image h-auto w-full rounded-[var(--radius-standard)] object-contain mix-blend-multiply"
                />
              </motion.div>

              <div className="absolute left-1 top-10 rounded-[var(--radius-standard)] border border-border bg-surface/90 p-3 shadow-lg backdrop-blur sm:left-4 sm:p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Built for</p>
                <p className="mt-1 text-xl font-bold text-aureole-slate">Critical Processes</p>
              </div>

              <div className="absolute bottom-7 right-1 rounded-[var(--radius-standard)] bg-brand-gradient p-4 text-white shadow-xl shadow-aureole-primary/20 sm:right-3 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Engineered</p>
                <p className="mt-1 text-xl font-bold">For Precision</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
