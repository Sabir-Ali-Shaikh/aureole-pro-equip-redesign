import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        opacity: { duration: 0.45, delay: Math.min(index * 0.06, 0.3) },
        y: { duration: 0.32, delay: Math.min(index * 0.06, 0.3) },
      }}
      className="group h-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface shadow-[0_20px_55px_-40px_var(--aureole-slate)] transition-colors hover:border-aureole-cyan/40"
    >
      <Link to={`/products/${product.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-aureole-soft p-7 sm:p-8">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="rounded-[8px] border border-border bg-surface/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-muted backdrop-blur">
              {product.eyebrow}
            </span>
            <span className="grid size-10 place-items-center rounded-[10px] bg-surface text-aureole-slate shadow-sm transition duration-300 group-hover:bg-aureole-primary group-hover:text-white">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            draggable="false"
            className="lazy-image h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.045]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight text-aureole-slate transition group-hover:text-aureole-blue">
            {product.name}
          </h3>
          <p className="type-body mt-3 line-clamp-3 text-muted">
            {product.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-bold text-aureole-blue">
            View Product
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
