import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CertificateFile } from "./certificatesData";

/**
 * Certificate name rendered as a clickable, link-styled <button> that opens
 * an accessible modal (focus trap, Esc/backdrop close, focus return and
 * aria attributes are handled by the Radix Dialog primitive).
 */
export function CertificateDialog({ cert }: { cert: CertificateFile }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="cursor-pointer rounded-md border border-border bg-secondary/40 px-2 py-1 text-left font-mono text-[11px] text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]"
        >
          {cert.title}
        </button>
      </DialogTrigger>
      <DialogContent className="flex h-[85dvh] w-[min(900px,95vw)] max-w-[95vw] flex-col gap-0 p-0">
        <DialogHeader className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-mono text-sm">{cert.title}</DialogTitle>
          <DialogDescription className="font-mono text-xs">
            {cert.issuer} · {cert.date}
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1">
          {cert.fileType === "pdf" ? (
            <iframe
              src={cert.filePath}
              tabIndex={-1}
              title={`${cert.title} certificate issued by ${cert.issuer}`}
              className="size-full rounded-b-lg bg-white"
            />
          ) : (
            <div className="flex size-full items-center justify-center overflow-auto p-4">
              <img
                src={cert.filePath}
                alt={`Certificate: ${cert.title}, issued by ${cert.issuer} on ${cert.date}`}
                loading="lazy"
                decoding="async"
                width={1200}
                height={850}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-3">
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[color:var(--link)] hover:underline"
            >
              <ExternalLink className="size-3 shrink-0" />
              Verify credential
            </a>
          ) : (
            <span />
          )}
          <a
            href={cert.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground"
          >
            <ExternalLink className="size-3 shrink-0" />
            Open in new tab
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
