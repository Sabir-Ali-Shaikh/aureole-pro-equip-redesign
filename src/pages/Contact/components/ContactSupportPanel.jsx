import { Download, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../../config/site";

const enquirySteps = [
  ["01", "Share requirement", "Tell us the process, capacity, utilities and automation expectations."],
  ["02", "Technical review", "The enquiry can be reviewed against the relevant equipment configuration and application."],
  ["03", "Commercial follow-up", "The Aureole team can continue with technical clarification, scope and proposal discussions."],
];

export default function ContactSupportPanel() {
  return (
    <aside className="space-y-8 lg:sticky lg:top-32">
      <div className="rounded-[var(--radius-card)] bg-aureole-slate p-6 text-white sm:p-8">
        <p className="type-meta font-bold text-aureole-accent">DIRECT CONTACT</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Prefer to speak first?</h2>
        <p className="mt-4 text-sm leading-7 text-white/62">
          Use the form for detailed requirements, or contact Aureole directly for a technical conversation.
        </p>

        <div className="mt-7 space-y-4 border-t border-white/12 pt-6">
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-sm font-semibold text-white/76 transition hover:text-white">
            <Phone size={17} className="text-aureole-accent" />
            {siteConfig.contact.phone}
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm font-semibold text-white/76 transition hover:text-white">
            <Mail size={17} className="text-aureole-accent" />
            {siteConfig.contact.email}
          </a>
          <div className="flex items-start gap-3 text-sm leading-6 text-white/60">
            <MapPin size={17} className="mt-1 shrink-0 text-aureole-accent" />
            <span>{siteConfig.contact.address}</span>
          </div>
        </div>

        <a
          href={siteConfig.links.catalogue}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-button)] border border-white/16 bg-white/[0.06] px-4 text-sm font-bold text-white transition hover:border-aureole-accent/45 hover:bg-white/[0.1]"
        >
          <Download size={16} className="mr-2" />
          Product Catalogue
        </a>
      </div>

      <div className="border-t border-border bg-surface pt-2">
        <p className="type-meta font-bold text-aureole-cyan">ENQUIRY FLOW</p>
        <div className="mt-4">
          {enquirySteps.map(([number, title, description]) => (
            <div key={number} className="grid grid-cols-[54px_1fr] gap-4 border-b border-border py-5">
              <span className="font-display text-3xl leading-none tracking-wider text-aureole-cyan">{number}</span>
              <div>
                <h3 className="text-base font-bold text-aureole-slate">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
