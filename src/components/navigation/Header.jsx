import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";
import BrandLogo from "../common/BrandLogo";
import MobileNav from "./MobileNav";
import TopBar from "./TopBar";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface/95 shadow-[0_1px_0_var(--border)] backdrop-blur-xl">
        <TopBar />

        <div className="container-shell flex h-[76px] items-center justify-between gap-8 lg:h-[88px]">
          <Link to="/" aria-label="Aureole home" className="shrink-0">
            <BrandLogo />
          </Link>

          <nav className="hidden h-full items-center lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <div key={item.label} className="group relative flex h-full items-center">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `relative flex h-full items-center gap-1.5 px-4 text-sm font-semibold transition-colors xl:px-5 ${
                      isActive && item.href !== "/"
                        ? "text-brand"
                        : "text-foreground hover:text-brand"
                    }`
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 origin-center scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100 xl:inset-x-5" />
                </NavLink>

                {item.children && (
                  <div className="pointer-events-none absolute left-1/2 top-[calc(100%-8px)] w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-border bg-surface p-2 opacity-0 shadow-2xl shadow-foreground/10 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-brand-soft hover:text-brand"
                      >
                        {child.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden xl:inline-flex">
              Request a Quote
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-foreground transition hover:border-brand hover:text-brand lg:hidden"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
