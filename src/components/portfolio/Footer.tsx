import { useVisitorCount } from "./useSiteMetrics";

export function Footer() {
  const visitors = useVisitorCount();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jan Ric Maranan Hogat · Dream of more than what you can achieve.
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-[color:var(--success)]">●</span> Visitors:{" "}
          <span className="text-foreground">
            {visitors == null ? "—" : visitors.toLocaleString()}
          </span>
        </p>
      </div>
    </footer>
  );
}