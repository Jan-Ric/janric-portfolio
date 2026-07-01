import { SectionHeading } from "./SectionHeading";
import { education } from "./data";

export function Education() {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="education" title="Educational Background" />
        <ol className="relative border-l border-border pl-6 space-y-6">
          {education.map((e, i) => (
            <li key={e.school} className="relative">
              <span
                className={`absolute -left-[29px] top-1.5 size-2.5 rounded-full ${
                  i === 0 ? "bg-[color:var(--primary)]" : "bg-border"
                }`}
                aria-hidden
              />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <h3 className="mt-1 font-semibold">{e.school}</h3>
              <p className="text-sm text-[color:var(--link)]">{e.degree}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}