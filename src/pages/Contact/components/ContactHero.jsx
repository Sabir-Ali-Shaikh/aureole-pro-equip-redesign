import { motion } from "framer-motion";
import { ArrowDownRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../../../config/site";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-aureole-slate text-white">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_16%,rgba(1,194,251,.18),transparent_28%),radial-gradient(circle_at_16%_82%,rgba(29,105,176,.24),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container-shell grid min-h-[620px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">CONTACT AUREOLE</span>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Start with the process requirement.
            <span className="block text-brand-gradient">We’ll take it from there.</span>
          </h1>
          <p className="type-body mt-7 max-w-2xl text-white/68">
            Discuss autoclaves, sterilizers, clean utilities, fermenters, WFI systems or custom process equipment with the Aureole team.
          </p>

          <a href="#quote" className="mt-8 inline-flex items-center gap-2 font-bold text-aureole-accent transition hover:gap-3">
            Request a quote
            <ArrowDownRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-white/14 lg:border-l lg:border-t-0 lg:pl-10"
        >
          <ContactLine icon={Phone} label="Phone" href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
            {siteConfig.contact.phone}
          </ContactLine>
          <ContactLine icon={Mail} label="Email" href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </ContactLine>
          <ContactLine icon={MapPin} label="Registered Office & Factory">
            {siteConfig.contact.address}
          </ContactLine>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, href, children }) {
  const content = (
    <div className="group flex gap-4 border-b border-white/12 py-6">
      <span className="grid size-11 shrink-0 place-items-center rounded-[10px] border border-white/12 bg-white/[0.05] text-aureole-accent transition group-hover:border-aureole-accent/40 group-hover:bg-white/[0.08]">
        <Icon size={19} />
      </span>
      <div>
        <p className="type-meta font-bold text-white/42">{label}</p>
        <p className="mt-2 max-w-md text-base font-semibold leading-7 text-white/82">{children}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
