import { Link } from "react-router-dom";
import CommunityHero from "../../components/common/CommunityHero";
import { clientLogos } from "../../data/clientLogos";

export default function ClientsPage() {
  return (
    <>
      <CommunityHero eyebrow="Our Clients" title="Our clients." accent="Our pride." description="Explore the client portfolio of Aureole Process Equipment." />
      <section aria-labelledby="clients-heading" className="bg-surface-alt py-16 sm:py-24">
        <div className="container-shell">
          <p className="eyebrow">Our client portfolio</p>
          <h2 id="clients-heading" className="type-title mt-4 font-bold">Relationships that matter.</h2>
          <ul className="mt-10 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {clientLogos.map((client) => (
              <li key={client.id} className="flex min-h-36 items-center justify-center rounded-[var(--radius-card)] border border-border bg-white p-5 sm:min-h-44 sm:p-7">
                <img src={client.src} alt={client.name} loading="lazy" decoding="async" width="240" height="160" className="aspect-[3/2] w-full object-contain" />
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] border border-border bg-surface p-7 sm:p-10 lg:flex-row lg:items-center">
            <div><h2 className="type-heading font-bold">Let's discuss your next project.</h2><p className="type-body mt-3 text-muted">Talk to Aureole about your process equipment requirements.</p></div>
            <Link to="/contact#quote" className="btn-primary shrink-0">Request a Quote <span aria-hidden="true" className="ml-3">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
