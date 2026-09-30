import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      className="group overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_20px_55px_-40px_var(--foreground)] transition hover:-translate-y-1 hover:border-brand/35"
    >
      <Link to={`/products/${product.slug}`} className="block h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt p-7 sm:p-8">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="rounded-full border border-border bg-surface/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted backdrop-blur">
              {product.eyebrow}
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-surface text-foreground shadow-sm transition duration-300 group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.045]"
          />
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="text-xl font-bold tracking-tight transition group-hover:text-brand sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted sm:text-[15px]">
            {product.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand">
            View Product
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
