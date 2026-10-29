import { siteConfig } from "../../config/site";

export default function BrandLogo({ compact = false, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={`${import.meta.env.BASE_URL}images/hero/aureole-logo.png`}
        alt={`${siteConfig.shortName} logo`}
        className={`${compact ? "h-12 w-auto" : "h-14 w-auto sm:h-16"} ${dark ? "brand-logo-dark" : ""}`}
      />
      {dark && <span className="brand-wordmark" aria-hidden="true">AUREOLE<small>PROCESS EQUIPMENT</small></span>}
    </div>
  );
}
