import { Outlet } from "react-router-dom";
import RouteEffects from "../common/RouteEffects";
import RouteMeta from "../seo/RouteMeta";
import Header from "../navigation/Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <RouteMeta />
      <RouteEffects />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
