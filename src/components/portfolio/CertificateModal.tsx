import { ExternalLink } from "lucide-react";
import { useState, type PointerEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CertificateFile, LicenseCertificate } from "./certificatesData";

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

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
          <img
            src={cert.filePath}
            alt={`${cert.title} certificate issued by ${cert.issuer}`}
            loading="lazy"
            decoding="async"
            width={1200}
            height={850}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="flex items-center border-t border-border px-5 py-3">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** A text-only license link with an optional desktop pointer preview and image dialog. */
export function LicenseCertificateDialog({ cert }: { cert: LicenseCertificate }) {
  const [previewPosition, setPreviewPosition] = useState<{ x: number; y: number } | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  function updatePreviewPosition(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== "mouse") return;

    const previewWidth = 232;
    const previewHeight = 208;
    setPreviewPosition({
      x: Math.max(8, Math.min(event.clientX + 16, window.innerWidth - previewWidth - 8)),
      y: Math.max(8, Math.min(event.clientY + 16, window.innerHeight - previewHeight - 8)),
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          onPointerEnter={updatePreviewPosition}
          onPointerMove={updatePreviewPosition}
          onPointerLeave={() => setPreviewPosition(null)}
          onClick={() => setPreviewPosition(null)}
          className="cursor-pointer bg-transparent p-0 text-left font-mono text-sm text-[color:var(--link)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--primary)]"
        >
          {cert.label}
        </button>
      </DialogTrigger>

      {previewPosition ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-40 hidden w-56 overflow-hidden rounded-md border border-border bg-popover p-2 shadow-lg [@media(hover:hover)_and_(pointer:fine)]:block"
          style={{ left: previewPosition.x, top: previewPosition.y }}
        >
          <img
            src={cert.src}
            alt=""
            loading="lazy"
            decoding="async"
            width={cert.width}
            height={cert.height}
            className="max-h-40 w-full object-contain"
          />
        </div>
      ) : null}

      <DialogContent className="flex h-[85dvh] w-[min(900px,95vw)] max-w-[95vw] flex-col gap-0 p-0 duration-200 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100 motion-reduce:animate-none motion-reduce:duration-0">
        <DialogHeader className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-mono text-sm">{cert.label}</DialogTitle>
          <DialogDescription className="font-mono text-xs">{cert.alt}</DialogDescription>
        </DialogHeader>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
          {!imageLoaded && !imageFailed ? (
            <div
              role="status"
              aria-label="Loading certificate image"
              className="absolute inset-4 rounded-md bg-muted"
            />
          ) : null}
          {imageFailed ? (
            <p role="alert" className="font-mono text-sm text-muted-foreground">
              Certificate image could not be loaded.
            </p>
          ) : (
            <img
              src={cert.src}
              alt={cert.alt}
              loading="lazy"
              decoding="async"
              width={cert.width}
              height={cert.height}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageFailed(true)}
              className={`max-h-full max-w-full object-contain transition-opacity duration-200 motion-reduce:transition-none ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
