import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug, productCategories } from "../../data/products";
import NotFoundPage from "../NotFound/NotFoundPage";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <NotFoundPage />;

  const categoryLabel =
    productCategories.find((category) => category.id === product.category)?.label ?? "Equipment";

  return (
    <>
      <section className="overflow-hidden border-b border-border bg-brand-soft/45">
        <div className="container-shell grid items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand">
              <ArrowLeft size={16} />
              Back to products
            </Link>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {categoryLabel}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Quote
                <ArrowRight className="ml-2" size={17} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Talk to an Engineer
              </Link>
            </div>
          </div>

          <div className="relative min-h-[390px] rounded-[2rem] border border-border bg-surface p-8 sm:min-h-[500px] sm:p-12">
            <div className="absolute inset-6 rounded-[1.5rem] border border-brand/10" />
            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 h-full max-h-[440px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <div className="max-w-3xl">
          <span className="eyebrow">PRODUCT OVERVIEW</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical information will live in this reusable product template.
          </h2>
          <p className="mt-5 leading-7 text-muted">
            This page is already driven by the shared product dataset. In the dedicated product-details stage, we will extend the same object with applications, features, specifications, downloads and related equipment without creating separate page components for every machine.
          </p>
        </div>
      </section>
    </>
  );
}
