import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { getProductBySlug } from "../../data/products";

const defaultMeta = {
  title: "Aureole Process Equipment | Pharmaceutical & Process Engineering",
  description:
    "Aureole Process Equipment designs and manufactures pharmaceutical, sterilization, clean utility and industrial process equipment.",
  image: siteConfig.assets.heroProduct,
};

function resolveRouteMeta(pathname) {
  if (pathname === "/") return defaultMeta;

  if (pathname === "/events") {
    return {
      title: "Events | Aureole Process Equipment",
      description: "Explore Aureole's PharmaTech Expo exhibition at Nesco and Diwali celebration through our event photo gallery.",
      image: "https://aureoleproequip.com/images/events/2.jpg",
    };
  }

  if (pathname === "/clients") {
    return {
      title: "Our Clients | Aureole Process Equipment",
      description: "Our clients, our pride. Discover the client portfolio of Aureole Process Equipment.",
      image: siteConfig.assets.manufacturing,
    };
  }

  if (pathname === "/products") {
    return {
      title: "Products | Aureole Process Equipment",
      description:
        "Explore Aureole autoclaves, sterilizers, fermenters, pure steam generators, WFI systems and pharmaceutical process equipment.",
      image: siteConfig.assets.heroProduct,
    };
  }

  if (pathname.startsWith("/products/")) {
    const slug = pathname.split("/").filter(Boolean).at(-1);
    const product = getProductBySlug(slug);

    if (product) {
      return {
        title: `${product.name} | Aureole Process Equipment`,
        description: product.description,
        image: product.image,
      };
    }
  }

  if (pathname === "/about") {
    return {
      title: "About Aureole | Process Equipment Engineering",
      description:
        "Learn about Aureole Process Equipment, its engineering philosophy, manufacturing infrastructure, vision, mission and Director's Desk.",
      image: siteConfig.assets.manufacturing,
    };
  }

  if (pathname === "/contact") {
    return {
      title: "Contact & Request a Quote | Aureole Process Equipment",
      description:
        "Discuss pharmaceutical, sterilization, clean utility or industrial process equipment requirements with the Aureole engineering team.",
      image: siteConfig.assets.manufacturing,
    };
  }

  return {
    title: "Page Not Found | Aureole Process Equipment",
    description: "The requested page could not be found on the Aureole Process Equipment website.",
    image: siteConfig.assets.heroProduct,
    noindex: true,
  };
}

function upsertMeta(selector, attribute, value, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!url) {
    canonical?.remove();
    return;
  }

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function upsertOrganizationSchema(siteUrl) {
  const id = "aureole-organization-schema";
  let script = document.getElementById(id);

  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    logo: siteConfig.assets.logo,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "IN",
    },
    ...(siteUrl ? { url: siteUrl } : {}),
  };

  script.textContent = JSON.stringify(schema);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveRouteMeta(pathname);
    const siteUrl = (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");
    const canonicalUrl = siteUrl ? `${siteUrl}${pathname === "/" ? "" : pathname}` : "";

    document.title = meta.title;

    upsertMeta('meta[name="description"]', "name", "description", meta.description);
    upsertMeta('meta[name="robots"]', "name", "robots", meta.noindex ? "noindex,nofollow" : "index,follow");
    upsertMeta('meta[property="og:title"]', "property", "og:title", meta.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", pathname.startsWith("/products/") ? "product" : "website");
    upsertMeta('meta[property="og:image"]', "property", "og:image", meta.image);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", meta.image);

    if (canonicalUrl) {
      upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    } else {
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    upsertCanonical(canonicalUrl);
    upsertOrganizationSchema(siteUrl);
  }, [pathname]);

  return null;
}
