import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import FeaturedProducts from "./components/FeaturedProducts";
import CapabilitiesSection from "./components/CapabilitiesSection";
import IndustriesSection from "./components/IndustriesSection";
import ManufacturingSection from "./components/ManufacturingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <CapabilitiesSection />
      <IndustriesSection />
      <ManufacturingSection />
    </>
  );
}
