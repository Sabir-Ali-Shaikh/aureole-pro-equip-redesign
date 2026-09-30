export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Vertical Autoclave", href: "/products/vertical-autoclave" },
      { label: "Horizontal Autoclave", href: "/products/horizontal-autoclave" },
      { label: "Table Top Autoclave", href: "/products/table-top-autoclave" },
      { label: "Pure Steam Generator", href: "/products/pure-steam-generator" },
      { label: "Fermenter", href: "/products/fermenter" },
      { label: "View All Products", href: "/products" },
    ],
  },
  { label: "Industries", href: "/#industries" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
