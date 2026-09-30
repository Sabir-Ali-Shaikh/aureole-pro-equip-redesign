import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="container-shell py-32 text-center">
      <p className="text-brand font-semibold">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <Link to="/" className="btn-primary mt-8 inline-flex">
        Back home
      </Link>
    </section>
  );
}
