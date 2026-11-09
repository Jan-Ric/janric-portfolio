import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { LicenseCertificate } from "./certificatesData";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]";

export function LicenseCertificateLink({
  certificate,
}: {
  certificate: LicenseCertificate;
}) {
  const [previewEnabled, setPreviewEnabled] = useState(false);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setPreviewEnabled(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={`h-auto justify-start rounded-none p-0 text-left text-sm font-medium text-foreground hover:bg-transparent hover:text-foreground hover:underline ${focusRing}`}
          onMouseEnter={() => previewEnabled && setPreviewEnabled(true)}
          onMouseLeave={() => setPreviewEnabled(false)}
          onMouseMove={(event) => {
            if (previewEnabled) {
              setPreviewPosition({ x: event.clientX + 18, y: event.clientY + 18 });
            }
          }}
        >
          {certificate.label}
        </Button>
      </DialogTrigger>

      {previewEnabled && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-40 hidden w-48 overflow-hidden rounded border border-border bg-card p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none [@media(hover:hover)_and_(pointer:fine)]:block"
          style={{ left: previewPosition.x, top: previewPosition.y }}
        >
          <img src={certificate.src} alt="" className="block h-auto w-full" />
        </div>
      )}

      <DialogContent className="flex max-h-[90dvh] w-[min(900px,95vw)] max-w-[95vw] flex-col gap-0 p-0 duration-200 data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100 motion-reduce:duration-0">
        <div className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-mono text-sm">{certificate.label}</DialogTitle>
          <DialogDescription className="sr-only">
            Certificate image preview
          </DialogDescription>
        </div>
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
          {!imageLoaded && !imageFailed && (
            <div className="absolute inset-4 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          )}
          {imageFailed ? (
            <p role="status" className="font-mono text-sm text-muted-foreground">
              Certificate image could not be loaded.
            </p>
          ) : (
            <img
              src={certificate.src}
              alt={certificate.alt}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
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