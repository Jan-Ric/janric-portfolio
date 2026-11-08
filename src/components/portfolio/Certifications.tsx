import { SectionHeading } from "./SectionHeading";
import { certifications } from "./data";
import { datacampCertificates, licenseCertificates } from "./certificatesData";
import { CertificateDialog, LicenseCertificateDialog } from "./CertificateModal";

export function Certifications() {
  return (
    <section id="certs" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="credentials" title="Licenses & Certifications">
          Click a certificate name to view the original document.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-3">
          <ul className="space-y-5 md:col-span-2">
            {licenseCertificates.map((cert) => {
              const meta = [...certifications.prc, ...certifications.safety].find(
                (entry) => entry.label === cert.label,
              )?.meta;

              return (
                <li key={cert.label} className="space-y-1">
                  <LicenseCertificateDialog cert={cert} />
                  {meta ? (
                    <p className="font-mono text-xs text-muted-foreground">{meta}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="card-hover rounded-lg border border-border bg-card p-5">
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
