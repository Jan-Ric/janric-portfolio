import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--primary)]">
        {"// "}
        {eyebrow}
      </p>
      <h2 className="mt-2 red-underline inline-block text-2xl md:text-3xl font-semibold text-foreground">
        {title}
      </h2>
      {children ? <p className="mt-6 max-w-2xl text-muted-foreground">{children}</p> : null}
    </div>
  );
}