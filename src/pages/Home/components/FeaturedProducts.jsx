import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../../../features/products/components/ProductCard";
import { featuredProducts } from "../../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-surface-alt py-20 sm:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">ENGINEERED SOLUTIONS</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Equipment built for critical environments.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              From sterilization to clean utilities and bioprocess systems, explore Aureole equipment designed around demanding pharmaceutical and industrial processes.
            </p>
          </div>

          <Link to="/products" className="inline-flex items-center gap-2 font-bold text-brand transition hover:gap-3">
            View all equipment
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
