import { Download, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-white">
      <div className="container-shell flex min-h-10 items-center justify-between gap-4 py-2 text-xs sm:text-[13px]">
        <div className="flex min-w-0 items-center gap-5">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex shrink-0 items-center gap-2 text-white/85 transition hover:text-white"
          >
            <Phone size={13} aria-hidden="true" />
            <span>{siteConfig.contact.phone}</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hidden items-center gap-2 text-white/85 transition hover:text-white sm:inline-flex"
          >
            <Mail size={13} aria-hidden="true" />
            <span>{siteConfig.contact.email}</span>
          </a>

          <div className="hidden min-w-0 items-center gap-2 text-white/70 xl:flex">
            <MapPin size={13} className="shrink-0" aria-hidden="true" />
            <span className="truncate">Malegaon MIDC, Sinnar, Nashik</span>
          </div>
        </div>

        <a
          href={siteConfig.links.catalogue}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 font-semibold text-white transition hover:text-white/75"
        >
          <Download size={13} aria-hidden="true" />
          <span className="hidden sm:inline">Download Catalogue</span>
          <span className="sm:hidden">Catalogue</span>
        </a>
      </div>
    </div>
  );
}
