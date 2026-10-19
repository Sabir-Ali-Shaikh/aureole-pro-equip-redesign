import { Link } from "react-router-dom";

export default function CommunityHero({ eyebrow, title, accent, description }) {
  return (
    <section className="relative isolate overflow-hidden bg-aureole-slate py-20 text-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(1,194,251,.18),transparent_60%)]" />
      <div className="container-shell">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/70">
          <ol className="flex flex-wrap gap-3"><li><Link to="/" className="hover:text-white">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">{eyebrow}</li></ol>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}<span className="block text-brand-gradient">{accent}</span></h1>
        <p className="type-body mt-7 max-w-2xl text-white/70">{description}</p>
      </div>
    </section>
  );
}
