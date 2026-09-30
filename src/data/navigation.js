export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Vertical Autoclave", href: "/products" },
      { label: "Horizontal Autoclave", href: "/products" },
      { label: "Table Top Autoclave", href: "/products" },
      { label: "Pure Steam Generator", href: "/products" },
      { label: "Fermenter", href: "/products" },
      { label: "View All Products", href: "/products" },
    ],
  },
  { label: "Industries", href: "/#industries" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
