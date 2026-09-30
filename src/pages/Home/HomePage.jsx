import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />

      <section className="container-shell py-20 sm:py-28">
        <span className="eyebrow">NEXT BUILD STAGE</span>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
          Product discovery, engineering capabilities and industry sections come next.
        </h2>
      </section>
    </>
  );
}
