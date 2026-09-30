import { products } from "../../../data/products";
import ProductCard from "../../../features/products/components/ProductCard";

export default function RelatedProducts({ product }) {
  const sameCategory = products.filter(
    (item) => item.id !== product.id && item.category === product.category,
  );
  const fallback = products.filter(
    (item) => item.id !== product.id && !sameCategory.some((related) => related.id === item.id),
  );
  const relatedProducts = [...sameCategory, ...fallback].slice(0, 3);

  if (!relatedProducts.length) return null;

  return (
    <section className="lazy-section bg-aureole-pearl py-20 sm:py-28">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">RELATED EQUIPMENT</span>
          <h2 className="type-title mt-4 text-aureole-slate">
            Continue exploring the Aureole equipment range.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((relatedProduct, index) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
