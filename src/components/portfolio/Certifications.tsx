import { SectionHeading } from "./SectionHeading";
import { certifications } from "./data";
import { datacampCertificates } from "./certificatesData";
import { CertificateDialog } from "./CertificateModal";
import { BadgeCheck, ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certs" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="credentials" title="Licenses & Certifications">
          Click a certificate name to view the original document.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-hover rounded-lg border border-border bg-card p-5">
            <p className="font-mono text-xs text-[color:var(--primary)]">PRC BOARD{"\u00a0"}</p>
            <ul className="mt-3 space-y-3">
              {certifications.prc.map((c) => (
                <li key={c.label} className="flex items-start gap-2 text-sm">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-[color:var(--primary)]" />
                  <div>
                    <p className="font-medium">{c.label}</p>
                    <p className="font-mono text-xs text-muted-foreground">{c.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-hover rounded-lg border border-border bg-card p-5">
            <p className="font-mono text-xs text-[color:var(--primary)]">SAFETY</p>
            <ul className="mt-3 space-y-3">
              {certifications.safety.map((c) => (
                <li key={c.label} className="flex items-start gap-2 text-sm">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[color:var(--success)]" />
                  <div>
                    <p className="font-medium">{c.label}</p>
                    <p className="font-mono text-xs text-muted-foreground">{c.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-hover rounded-lg border border-border bg-card p-5 md:col-span-1">
            <p className="font-mono text-xs text-[color:var(--primary)]">DATACAMP CERTIFICATIONS</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {datacampCertificates.map((cert) =>
                cert.filePath ? (
                  <CertificateDialog key={cert.title} cert={cert} />
                ) : (
                  <span
                    key={cert.title}
                    className="rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {cert.title}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
