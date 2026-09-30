import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

export default function AboutCTA() {
  return (
    <section className="lazy-section bg-aureole-soft py-16 sm:py-20">
      <div className="container-shell">
        <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-16">
          <div>
            <span className="eyebrow">WORK WITH AUREOLE</span>
            <h2 className="type-title mt-4 max-w-3xl text-aureole-slate">
              Bring us the process requirement. We’ll start with the engineering conversation.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="type-body max-w-xl text-muted">
              Discuss equipment, capacity, sterilization, clean utility or process requirements with the Aureole team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary group">
                Contact Aureole
                <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="btn-secondary"
              >
                <Mail size={17} className="mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
