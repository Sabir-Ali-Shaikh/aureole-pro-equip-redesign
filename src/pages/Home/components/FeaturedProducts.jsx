import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { featuredProducts } from "../../../data/products";
import ProductCard from "../../../features/products/components/ProductCard";

export default function FeaturedProducts() {
  const carouselRef = useRef(null);
  const showcaseProducts = featuredProducts.slice(0, 6);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector("[data-carousel-card]");
    const gap = 24;
    const distance = card ? card.getBoundingClientRect().width + gap : 360;

    carouselRef.current.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="lazy-section overflow-hidden bg-aureole-soft py-20 sm:py-28"
      id="products-showcase"
    >
      <div className="container-shell">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">ENGINEERED SOLUTIONS</span>
            <h2 className="type-title mt-4 text-aureole-slate">
              Explore equipment without turning the homepage into a catalogue.
            </h2>
            <p className="type-body mt-5 max-w-2xl text-muted">
              Swipe or use the controls to browse Aureole's core sterilization,
              clean utility and process systems. The complete technical range
              remains available in the product catalogue.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Previous products"
              aria-controls="featured-products-carousel"
              className="grid size-11 place-items-center rounded-[10px] border border-border bg-surface text-aureole-slate transition hover:border-aureole-cyan hover:bg-aureole-surface hover:text-aureole-blue"
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Next products"
              aria-controls="featured-products-carousel"
              className="grid size-11 place-items-center rounded-[10px] bg-aureole-primary text-white transition hover:bg-aureole-blue"
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-aureole-soft to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-aureole-soft to-transparent md:block" />

          <div
            id="featured-products-carousel"
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured products"
            tabIndex="0"
            className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {showcaseProducts.map((product, index) => (
              <div
                key={product.id}
                data-carousel-card
                className="w-[86vw] shrink-0 snap-start sm:w-[58vw] lg:w-[36vw] xl:w-[31vw] 3xl:w-[27vw]"
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-meta font-bold text-muted">
            Drag, swipe or use the arrows to browse
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-bold text-aureole-blue transition hover:gap-3"
          >
            Browse complete equipment range
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
