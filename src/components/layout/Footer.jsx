export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-dark py-10 text-white">
      <div className="container-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Aureole Process Equipment</p>
          <p className="mt-1 text-sm text-white/65">
            Pharmaceutical & process equipment engineering.
          </p>
        </div>
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Aureole Process Equipment.
        </p>
      </div>
    </footer>
  );
}
