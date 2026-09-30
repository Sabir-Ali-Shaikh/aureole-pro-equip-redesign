import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { featuredProducts, productCategories } from "../../../data/products";

export default function FeaturedProducts() {
  const showcaseProducts = useMemo(() => featuredProducts.slice(0, 6), []);
  const [activeId, setActiveId] = useState(showcaseProducts[0]?.id);
  const activeProduct = showcaseProducts.find((product) => product.id === activeId) ?? showcaseProducts[0];

  if (!activeProduct) return null;

  const categoryLabel =
    productCategories.find((category) => category.id === activeProduct.category)?.label ?? "Equipment";

  return (
    <section className="lazy-section overflow-hidden bg-aureole-soft py-20 sm:py-28" id="products-showcase">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
          <div>
            <span className="eyebrow">ENGINEERED SOLUTIONS</span>
            <h2 className="type-title mt-4 max-w-xl text-aureole-slate">
              Find the right system for every critical process.
            </h2>
            <p className="type-body mt-5 max-w-xl text-muted">
              Explore Aureole's core sterilization, clean utility and process equipment through a focused product selector designed for faster technical discovery.
            </p>

            <div className="mt-10 border-t border-border">
              {showcaseProducts.map((product, index) => {
                const active = product.id === activeProduct.id;
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setActiveId(product.id)}
                    className={`group flex w-full items-center gap-5 border-b border-border py-4 text-left transition ${active ? "text-aureole-blue" : "text-aureole-slate hover:text-aureole-blue"}`}
                    aria-pressed={active}
                  >
                    <span className={`font-display text-xl tracking-wider transition ${active ? "text-aureole-cyan" : "text-muted/55"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xl font-bold">{product.name}</span>
                      <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                        {product.eyebrow}
                      </span>
                    </span>
                    <span className={`h-px transition-all duration-300 ${active ? "w-10 bg-aureole-cyan" : "w-0 bg-aureole-cyan group-hover:w-6"}`} />
                  </button>
                );
              })}
            </div>

            <Link to="/products" className="mt-7 inline-flex items-center gap-2 font-bold text-aureole-blue transition hover:gap-3">
              Browse complete equipment range
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[var(--radius-card)] bg-aureole-surface p-6 sm:p-10 lg:min-h-[650px]">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-aureole-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 size-80 rounded-full bg-aureole-primary/10 blur-3xl" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <p className="type-meta font-bold text-aureole-cyan">{categoryLabel}</p>
                <p className="mt-2 text-xl font-bold text-aureole-slate">Selected system</p>
              </div>
              <span className="rounded-[8px] bg-aureole-deep px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                Aureole
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 mt-6 grid min-h-[430px] items-center gap-8 lg:grid-cols-[1.15fr_.85fr]"
              >
                <div className="flex min-h-[360px] items-center justify-center">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    loading="lazy"
                    className="lazy-image max-h-[430px] w-full object-contain mix-blend-multiply"
                  />
                </div>

                <div className="self-end pb-4 lg:self-center lg:pb-0">
                  <p className="type-meta font-bold text-aureole-cyan">{activeProduct.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-bold text-aureole-slate">{activeProduct.name}</h3>
                  <p className="type-body mt-4 text-muted">{activeProduct.description}</p>
                  <Link
                    to={`/products/${activeProduct.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-aureole-blue transition hover:gap-3"
                  >
                    View product details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
