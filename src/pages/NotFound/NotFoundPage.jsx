import { ArrowRight, Home, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="relative isolate overflow-hidden bg-aureole-soft py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(1,194,251,.16),transparent_26%),radial-gradient(circle_at_12%_82%,rgba(29,105,176,.12),transparent_30%)]" />
      <div className="pointer-events-none absolute left-1/2 top-8 -z-10 -translate-x-1/2 font-display text-[clamp(11rem,32vw,32rem)] leading-none tracking-wider text-aureole-primary/[0.045]" aria-hidden="true">
        404
      </div>

      <div className="container-shell text-center">
        <span className="eyebrow">PAGE NOT FOUND</span>
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-aureole-slate sm:text-6xl lg:text-7xl">
          This route isn’t part of the equipment map.
        </h1>
        <p className="type-body mx-auto mt-6 max-w-2xl text-muted">
          The page may have moved, the link may be outdated, or the address may have been entered incorrectly.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary group">
            <Home size={17} className="mr-2" />
            Back to Home
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/products" className="btn-secondary">
            <PackageSearch size={17} className="mr-2" />
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
