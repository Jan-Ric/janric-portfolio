import { SectionHeading } from "./SectionHeading";
import { featuredProjects, otherProjects, notSoCalledProjects } from "./data";
import { Star, FolderGit2 } from "lucide-react";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="projects" title="Academic Research & Projects">
          A mix of production data pipelines, embedded systems, and applied AI during my personal and college years at PUP - spanning hardware roots and a Data and AI engineering future.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <article
              key={p.title}
              className="card-hover flex flex-col rounded-lg border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <Star className="size-4 text-[color:var(--primary)]" fill="currentColor" />
                <span className="font-mono text-[11px] text-muted-foreground">{p.duration}</span>
              </div>
              <p className="mt-3 font-mono text-xs text-[color:var(--primary)]">{p.tag}</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">
                {"link" in p && p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[color:var(--link)] hover:underline"
                  >
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
              <p className="mt-4 border-t border-border pt-3 font-mono text-xs">
                <span className="text-muted-foreground">impact:</span>{" "}
                <span className="text-[color:var(--success)]">{p.impact}</span>
              </p>
            </article>
          ))}
        </div>

        <h3 className="mt-14 mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          More projects
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          {otherProjects.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-lg border border-border bg-card p-4 flex items-start gap-3"
            >
              <FolderGit2 className="mt-0.5 size-4 shrink-0 text-[color:var(--link)]" />
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="text-sm font-semibold">
                    {"link" in p && p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[color:var(--link)] hover:underline"
                      >
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h4>
                  {p.metric ? (
                    <span className="font-mono text-[11px] text-[color:var(--success)] shrink-0">
                      {p.metric}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-14 mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Not-so-called Projects
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          {notSoCalledProjects.map((p) => (
            <div
              key={p.title}
              className="card-hover rounded-lg border border-border bg-card p-4 flex items-start gap-3"
            >
              <FolderGit2 className="mt-0.5 size-4 shrink-0 text-[color:var(--link)]" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold">
                  {"link" in p && p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[color:var(--link)] hover:underline"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h4>
                <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}