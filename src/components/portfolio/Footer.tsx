export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jan Ric Maranan Hogat · Built with care in the PH
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-[color:var(--primary)]">$</span> designed_for_data_engineering.exe
        </p>
      </div>
    </footer>
  );
}