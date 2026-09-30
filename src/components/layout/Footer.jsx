import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

const footerProducts = [
  ["Vertical Autoclave", "/products/vertical-autoclave"],
  ["Horizontal Autoclave", "/products/horizontal-autoclave"],
  ["Pure Steam Generator", "/products/pure-steam-generator"],
  ["Fermenter", "/products/fermenter"],
];

const footerLinks = [
  ["About", "/about"],
  ["Products", "/products"],
  ["Industries", "/#industries"],
  ["Capabilities", "/#capabilities"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-aureole-slate text-white">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/12 pb-12 lg:grid-cols-[1.2fr_.8fr_.9fr_1.1fr] lg:gap-10">
          <div>
            <img
              src={siteConfig.assets.logo}
              alt="Aureole Process Equipment"
              className="h-12 w-auto max-w-[210px] object-contain brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/58">
              Pharmaceutical, sterilization and process equipment engineered for critical industrial applications.
            </p>
            <p className="mt-5 font-accent text-xl text-aureole-accent">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="type-meta font-bold text-aureole-accent">EXPLORE</p>
            <div className="mt-5 space-y-3">
              {footerLinks.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block text-sm font-semibold text-white/68 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="type-meta font-bold text-aureole-accent">KEY EQUIPMENT</p>
            <div className="mt-5 space-y-3">
              {footerProducts.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block text-sm font-semibold text-white/68 transition hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="type-meta font-bold text-aureole-accent">CONTACT</p>
            <div className="mt-5 space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-3 text-sm leading-6 text-white/68 transition hover:text-white"
              >
                <Phone size={17} className="mt-1 shrink-0 text-aureole-accent" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3 text-sm leading-6 text-white/68 transition hover:text-white"
              >
                <Mail size={17} className="mt-1 shrink-0 text-aureole-accent" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm leading-6 text-white/58">
                <MapPin size={17} className="mt-1 shrink-0 text-aureole-accent" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs font-semibold uppercase tracking-[0.1em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aureole Process Equipment Pvt. Ltd.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={siteConfig.links.catalogue}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              Product Catalogue
              <ArrowUpRight size={14} />
            </a>
            <span>Engineered in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
