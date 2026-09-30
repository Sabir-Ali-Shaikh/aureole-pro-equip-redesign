import ContactHero from "./components/ContactHero";
import QuoteRequestForm from "./components/QuoteRequestForm";
import ContactSupportPanel from "./components/ContactSupportPanel";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="lazy-section bg-aureole-soft py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-start lg:gap-12 xl:gap-16">
          <QuoteRequestForm />
          <ContactSupportPanel />
        </div>
      </section>
    </>
  );
}
