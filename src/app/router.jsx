import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import HomePage from "../pages/Home/HomePage";
import ProductsPage from "../pages/Products/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import EventsPage from "../pages/Events/EventsPage";
import ClientsPage from "../pages/Clients/ClientsPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:slug", element: <ProductDetailsPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/clients", element: <ClientsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
