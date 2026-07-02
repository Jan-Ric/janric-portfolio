import { SectionHeading } from "./SectionHeading";
import { Code2, Database, Wrench } from "lucide-react";

const groups = [
  {
    label: "LANGUAGES & DATABASES",
    icon: Database,
    items: ["Python", "SQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    label: "DATA ENGINEERING & ANALYTICS",
    icon: Code2,
    items: ["Apache Spark", "Pandas", "NumPy", "Matplotlib", "Excel"],
  },
  {
    label: "TOOLS & DEVOPS",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="stack" title="Tech Stacks & Languages">
          Tools and languages I use across data engineering, analytics, and hardware-adjacent work.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          {groups.map(({ label, icon: Icon, items }) => (
            <div
              key={label}
              className="card-hover rounded-lg border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-[color:var(--primary)]" />
                <p className="font-mono text-xs text-[color:var(--primary)]">{label}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-[11px]"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}