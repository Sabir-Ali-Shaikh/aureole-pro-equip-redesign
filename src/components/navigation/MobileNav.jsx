import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import BrandLogo from "../common/BrandLogo";

export default function MobileNav({ open, onClose }) {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close mobile menu overlay"
            className="fixed inset-0 z-[70] bg-foreground/35 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-[80] flex h-dvh w-[min(90vw,390px)] flex-col bg-surface shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link to="/" onClick={onClose}>
                <BrandLogo compact />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="grid size-10 place-items-center rounded-full border border-border transition hover:border-brand hover:text-brand"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <div className="space-y-1">
                {navigation.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.label} className="border-b border-border/70 py-1">
                        <div className="flex items-center justify-between gap-3">
                          <NavLink
                            to={item.href}
                            onClick={onClose}
                            className="flex-1 py-3 text-base font-semibold"
                          >
                            {item.label}
                          </NavLink>
                          <button
                            type="button"
                            aria-label="Toggle product links"
                            aria-expanded={productsOpen}
                            onClick={() => setProductsOpen((value) => !value)}
                            className="grid size-10 place-items-center rounded-full hover:bg-brand-soft hover:text-brand"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {productsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mb-3 grid gap-1 border-l-2 border-brand/20 pl-4">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    onClick={onClose}
                                    className="py-2 text-sm text-muted transition hover:text-brand"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      onClick={onClose}
                      className="block border-b border-border/70 py-4 text-base font-semibold transition hover:text-brand"
                    >
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-border p-5">
              <Link to="/contact" className="btn-primary w-full" onClick={onClose}>
                Request a Quote
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
