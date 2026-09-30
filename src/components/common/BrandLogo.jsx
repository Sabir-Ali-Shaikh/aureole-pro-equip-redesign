import { siteConfig } from "../../config/site";

export default function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={siteConfig.assets.logo}
        alt={`${siteConfig.shortName} logo`}
        className={compact ? "h-12 w-auto" : "h-14 w-auto sm:h-16"}
      />
    </div>
  );
}
