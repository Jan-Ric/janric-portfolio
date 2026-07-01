import { SectionHeading } from "./SectionHeading";
import { experience } from "./data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="experience" title="Work Experience" />
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((x) => (
            <div
              key={x.role}
              className="card-hover relative rounded-lg border border-border bg-card p-6"
            >
              <span
                className="absolute left-0 top-6 bottom-6 w-0.5 bg-[color:var(--primary)]"
                aria-hidden
              />
              <div className="flex items-start gap-3">
                <Briefcase className="mt-1 size-4 text-[color:var(--primary)]" />
                <div>
                  <h3 className="font-semibold">{x.role}</h3>
                  <p className="text-sm text-[color:var(--link)]">{x.org}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{x.period}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-[color:var(--primary)] font-mono">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}