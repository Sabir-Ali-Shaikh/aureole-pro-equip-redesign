import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";
import { productCategories } from "../../../data/products";

export default function ProductHero({ product, details }) {
  const shouldReduceMotion = useReducedMotion();
  const categoryLabel =
    productCategories.find((category) => category.id === product.category)?.label ?? "Equipment";
  const highlights = details.specifications?.slice(0, 3) ?? [];

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-aureole-soft">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,var(--border)_1px,transparent_1px),linear-gradient(var(--border)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.18]" />
      <div className="pointer-events-none absolute -right-40 -top-44 -z-10 size-[620px] rounded-full bg-aureole-accent/12 blur-3xl" />

      <div className="container-shell grid min-h-[720px] items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-aureole-blue"
          >
            <ArrowLeft size={16} />
            Back to products
          </Link>

          <div className="mt-10 inline-flex items-center gap-2 rounded-[10px] border border-aureole-cyan/20 bg-surface/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-aureole-blue backdrop-blur">
            <Sparkles size={14} />
            {categoryLabel}
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-aureole-slate sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>

          <p className="type-body mt-7 max-w-2xl text-muted">
            {details.intro ?? product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary group">
              Request a Quote
              <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.links.catalogue}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Download size={17} className="mr-2" />
              Download Catalogue
            </a>
          </div>

          {highlights.length > 0 && (
            <div className="mt-10 grid gap-0 border-y border-border sm:grid-cols-3">
              {highlights.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-border py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <p className="type-meta font-bold text-aureole-cyan">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-aureole-slate">{value}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.78, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[700px]"
        >
          <div className="absolute inset-x-[10%] bottom-[1%] h-[22%] rounded-[50%] bg-aureole-slate/12 blur-3xl" />
          <div className="relative min-h-[470px] overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-7 shadow-[0_34px_90px_rgba(0,21,41,.12)] sm:min-h-[600px] sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,var(--aureole-surface),transparent_38%)]" />
            <motion.div
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute right-8 top-20 size-72 rounded-full border border-dashed border-aureole-cyan/15"
            />
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex min-h-[410px] items-center justify-center sm:min-h-[520px]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="lazy-image max-h-[500px] w-full object-contain mix-blend-multiply"
              />
            </motion.div>
            <div className="absolute bottom-5 left-5 z-20 rounded-[10px] border border-border bg-surface/90 px-4 py-3 shadow-lg backdrop-blur sm:bottom-7 sm:left-7">
              <p className="type-meta font-bold text-aureole-cyan">{product.eyebrow}</p>
              <p className="mt-1 text-sm font-bold text-aureole-slate">Engineered by Aureole</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
