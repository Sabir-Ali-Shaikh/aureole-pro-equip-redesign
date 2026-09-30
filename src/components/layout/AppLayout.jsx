import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
