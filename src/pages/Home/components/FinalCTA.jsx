import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

export default function FinalCTA() {
  return (
    <section className="lazy-section bg-aureole-soft py-16 sm:py-20">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[var(--radius-card)] bg-brand-gradient px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-28 size-96 rounded-full border border-white/12" />
          <div className="pointer-events-none absolute -right-4 -top-16 size-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(255,255,255,.16),transparent_28%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="type-meta font-bold text-white/72">HAVE A PROCESS REQUIREMENT?</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's engineer the right equipment solution for your application.
              </h2>
            </div>

            <div className="lg:justify-self-end">
              <p className="type-body max-w-xl text-white/78">
                Share your process, capacity or sterilization requirement and start a technical conversation with the Aureole team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] bg-white px-5 font-bold text-aureole-deep transition hover:bg-aureole-soft hover:text-aureole-blue"
                >
                  Request a Quote
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-button)] border border-white/25 bg-white/8 px-5 font-bold text-white backdrop-blur transition hover:bg-white/14"
                >
                  <Phone size={17} className="mr-2" />
                  Call Aureole
                </a>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-white"
              >
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
