import { useMemo, useState } from "react";
import ProductCard from "../../features/products/components/ProductCard";
import { productCategories, products } from "../../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="border-b border-border bg-brand-soft/55 py-16 sm:py-20">
        <div className="container-shell">
          <span className="eyebrow">PRODUCT CATALOGUE</span>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Process equipment for critical applications.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Browse Aureole's core sterilization, autoclave, clean utility and bioprocess equipment range.
          </p>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
          {productCategories.map((category) => {
            const active = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border-brand bg-brand text-white"
                    : "border-border bg-surface text-foreground hover:border-brand hover:text-brand"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
