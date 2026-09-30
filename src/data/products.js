export const productCategories = [
  { id: "all", label: "All Equipment" },
  { id: "autoclaves", label: "Autoclaves" },
  { id: "sterilization", label: "Sterilization" },
  { id: "process-equipment", label: "Process Equipment" },
  { id: "water-systems", label: "Water Systems" },
];

export const products = [
  {
    id: "vertical-autoclave",
    slug: "vertical-autoclave",
    name: "Vertical Autoclave",
    category: "autoclaves",
    eyebrow: "Sterilization System",
    description:
      "A vertical autoclave engineered for reliable sterilization in laboratories, medical facilities and research environments.",
    image: "https://aureoleproequip.com/images/products/verticle-autoclave-swing.jpg",
    featured: true,
  },
  {
    id: "horizontal-autoclave",
    slug: "horizontal-autoclave",
    name: "Horizontal Autoclave",
    category: "autoclaves",
    eyebrow: "Industrial Autoclave",
    description:
      "High-capacity horizontal sterilization equipment designed for hospital, laboratory and industrial applications.",
    image: "https://aureoleproequip.com/images/products/horizontal-autoclave-rectanguler.jpg",
    featured: true,
  },
  {
    id: "table-top-autoclave",
    slug: "table-top-autoclave",
    name: "Table Top Autoclave",
    category: "autoclaves",
    eyebrow: "Compact Sterilization",
    description:
      "A compact sterilization system suited to medical and laboratory environments where space and dependable performance matter.",
    image: "https://aureoleproequip.com/images/products/table-top-autoclave.jpg",
    featured: true,
  },
  {
    id: "fermenter",
    slug: "fermenter",
    name: "Fermenter",
    category: "process-equipment",
    eyebrow: "Bioprocess Equipment",
    description:
      "Controlled fermentation systems for laboratory through industrial bioprocess applications, with scalable automation options.",
    image: "https://aureoleproequip.com/images/products/lab-fermenter2.jpg",
    featured: true,
  },
  {
    id: "pure-steam-generator",
    slug: "pure-steam-generator",
    name: "Pure Steam Generator",
    category: "water-systems",
    eyebrow: "Clean Utility System",
    description:
      "Pure steam generation engineered around pharmaceutical utility requirements and ASME, BPE and cGMP expectations.",
    image: "https://aureoleproequip.com/images/products/pure-steam-generator.jpg",
    featured: true,
  },
  {
    id: "sterilizer",
    slug: "sterilizer",
    name: "Sterilizer",
    category: "sterilization",
    eyebrow: "Critical Sterilization",
    description:
      "Sterilization equipment designed to eliminate microbial contamination from critical equipment, components and surfaces.",
    image: "https://aureoleproequip.com/images/products/super-heated-water-spray-sterilizer.jpg",
    featured: true,
  },
  {
    id: "steam-sterilizer-cum-bung-processor",
    slug: "steam-sterilizer-cum-bung-processor",
    name: "Steam Sterilizer Cum Bung Processor",
    category: "sterilization",
    eyebrow: "Pharmaceutical Sterilization",
    description:
      "A specialized system for washing, sterilizing and processing pharmaceutical rubber closures and bungs.",
    image: "https://aureoleproequip.com/images/products/steam-sterilizer-cum-bung-processor.jpg",
    featured: false,
  },
  {
    id: "multicolumn-distillation-plant",
    slug: "multicolumn-distillation-plant",
    name: "Multicolumn Distillation Plant",
    category: "water-systems",
    eyebrow: "WFI Generation",
    description:
      "A multi-column distillation solution for producing high-purity, sterile and pyrogen-free Water for Injection.",
    image: "https://aureoleproequip.com/images/products/multicolumn-distillation-plant.jpg",
    featured: false,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
