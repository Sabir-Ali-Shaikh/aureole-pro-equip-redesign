import { ChevronDown, Menu } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import BrandLogo from '../common/BrandLogo';
import MobileNav from './MobileNav';
import TopBar from './TopBar';
import './header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuButton = useRef(null);
  const productsButton = useRef(null);
  const { pathname } = useLocation();
  const dark = pathname === '/';
  const closeMobile = () => { setMobileOpen(false); menuButton.current?.focus(); };
  return (
    <>
      <header className={`site-header sticky top-0 z-50 backdrop-blur-xl ${dark ? 'site-header-dark' : 'bg-surface/95 shadow-[0_1px_0_var(--border)]'}`}>
        <TopBar dark={dark} />
        <div className="container-shell flex h-[76px] items-center justify-between gap-5 lg:h-[88px]">
          <Link to="/" aria-label="Aureole home" className="shrink-0"><BrandLogo dark={dark} /></Link>
          <nav className="hidden h-full items-center lg:flex" aria-label="Primary navigation">
            {navigation.map(item => (
              <div key={item.label} className="relative flex h-full items-center" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false); }} onKeyDown={event => { if (event.key === 'Escape') { setProductsOpen(false); productsButton.current?.focus(); } }}>
                <NavLink to={item.href} end={item.href === '/'} onClick={() => setProductsOpen(false)} className={({ isActive }) => `header-nav-link ${isActive ? 'is-active' : ''}`}>{item.label}</NavLink>
                {item.children && <>
                  <button ref={productsButton} type="button" className="header-products-toggle" aria-label="Toggle product links" aria-expanded={productsOpen} aria-controls="desktop-product-links" onClick={() => setProductsOpen(value => !value)}><ChevronDown size={15} aria-hidden="true" /></button>
                  <div id="desktop-product-links" hidden={!productsOpen} className="header-dropdown">
                    {item.children.map(child => <Link key={child.href} to={child.href} onClick={() => setProductsOpen(false)}>{child.label}<span aria-hidden="true">↗</span></Link>)}
                  </div>
                </>}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact#quote" className="header-quote hidden xl:inline-flex">Request a Quote <span aria-hidden="true">↗</span></Link>
            <button ref={menuButton} type="button" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(true)} className="header-menu grid size-11 place-items-center lg:hidden"><Menu size={21} /></button>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={closeMobile} dark={dark} />
    </>
  );
}
