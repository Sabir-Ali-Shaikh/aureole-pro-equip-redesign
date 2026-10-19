import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import CommunityHero from "../../components/common/CommunityHero";
import { eventCategories, events } from "../../data/events";

export default function EventsPage() {
  const [category, setCategory] = useState("All");
  const visibleEvents = events.filter((event) => category === "All" || event.category === category);

  return (
    <>
      <CommunityHero eyebrow="Events" title="Connecting with industry." accent="Celebrating our people." description="Explore moments from the PharmaTech Expo exhibition at Nesco and our Diwali celebration." />
      <section aria-labelledby="gallery-heading" className="bg-surface-alt py-16 sm:py-24">
        <div className="container-shell">
          <p className="eyebrow">Aureole in focus</p>
          <h2 id="gallery-heading" className="type-title mt-4 font-bold">Beyond the workshop.</h2>
          <div role="group" aria-label="Filter event photographs" className="mt-8 flex flex-wrap gap-3">
            {eventCategories.map((item) => <button key={item} type="button" aria-pressed={category === item} aria-controls="event-gallery" onClick={() => setCategory(item)} className={category === item ? "btn-primary" : "btn-secondary"}>{item}</button>)}
          </div>
          <p role="status" className="mt-6 text-sm text-muted">{visibleEvents.length} {visibleEvents.length === 1 ? "photograph" : "photographs"}</p>
          <div id="event-gallery" className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleEvents.map((event) => (
              <figure key={event.id} className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
                <a href={event.src} target="_blank" rel="noreferrer" aria-label={`View full photograph: ${event.alt} (opens in a new tab)`} className="group block overflow-hidden bg-aureole-pearl">
                  <img src={event.src} alt={event.alt} loading="lazy" decoding="async" width="900" height="675" className="aspect-[4/3] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                </a>
                <figcaption className="flex items-center justify-between gap-4 p-6 text-sm font-bold"><span>{event.category}</span><ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-brand" /></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
