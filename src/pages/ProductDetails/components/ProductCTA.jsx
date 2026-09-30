import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

export default function ProductCTA({ product }) {
  const quoteLink = `/contact?product=${encodeURIComponent(product.slug)}#quote`;

  return (
    <section className="lazy-section bg-surface py-16 sm:py-20">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-brand-gradient px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 size-[430px] rounded-full border border-white/12" />
          <div className="pointer-events-none absolute -right-2 -top-16 size-72 rounded-full border border-white/10" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="type-meta font-bold text-white/72">DISCUSS THIS EQUIPMENT</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Need the {product.name} configured for your process?
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="type-body max-w-xl text-white/78">
                Share your required capacity, process conditions and automation expectations with the Aureole engineering team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to={quoteLink} className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] bg-white px-5 font-bold text-aureole-deep transition hover:bg-aureole-soft hover:text-aureole-blue">
                  Request a Quote
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href={siteConfig.links.catalogue}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] border border-white/25 bg-white/8 px-5 font-bold text-white backdrop-blur transition hover:bg-white/14"
                >
                  <Download size={17} className="mr-2" />
                  Catalogue
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-white/72">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 transition hover:text-white">
                  <Phone size={15} />
                  {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                  <Mail size={15} />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
