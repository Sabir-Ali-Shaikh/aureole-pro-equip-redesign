import AboutHero from "./components/AboutHero";
import CompanyStorySection from "./components/CompanyStorySection";
import PurposeSection from "./components/PurposeSection";
import InfrastructureSection from "./components/InfrastructureSection";
import DirectorDeskSection from "./components/DirectorDeskSection";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStorySection />
      <PurposeSection />
      <InfrastructureSection />
      <DirectorDeskSection />
      <AboutCTA />
    </>
  );
}
