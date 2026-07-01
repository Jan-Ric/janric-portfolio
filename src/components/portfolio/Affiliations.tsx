import { SectionHeading } from "./SectionHeading";
import { affiliations } from "./data";

export function Affiliations() {
  return (
    <section id="affiliations" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="community" title="Affiliations" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {affiliations.map((a) => (
            <div key={a.name} className="card-hover rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-xs text-[color:var(--primary)]">{a.period}</p>
              <h3 className="mt-2 font-semibold">{a.name}</h3>
              <p className="mt-1 text-xs text-[color:var(--link)]">{a.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}