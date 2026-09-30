import { useParams } from "react-router-dom";
import { getProductBySlug } from "../../data/products";
import { getProductTechnicalDetails } from "../../data/productDetails";
import NotFoundPage from "../NotFound/NotFoundPage";
import ProductHero from "./components/ProductHero";
import ProductTechnicalContent from "./components/ProductTechnicalContent";
import RelatedProducts from "./components/RelatedProducts";
import ProductCTA from "./components/ProductCTA";

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <NotFoundPage />;

  const details = getProductTechnicalDetails(product.slug);

  return (
    <>
      <ProductHero product={product} details={details} />
      <ProductTechnicalContent product={product} details={details} />
      <RelatedProducts product={product} />
      <ProductCTA product={product} />
    </>
  );
}
