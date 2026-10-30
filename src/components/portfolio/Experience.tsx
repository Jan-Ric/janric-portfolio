import type { CSSProperties } from "react";
import type { GallerySlide } from "./ImageGalleryDialog";
import { ImageGalleryDialog } from "./ImageGalleryDialog";
import { SectionHeading } from "./SectionHeading";
import { experience, type ExperienceItem } from "./data";
import { Briefcase, ExternalLink, ZoomIn } from "lucide-react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]";

/**
 * Media area at the top of the card. The image fills the area edge to edge
 * (object-cover, zoomed per cover.baseScale/hoverScale — the Panasonic
 * certificate zooms onto its text block, page screenshots stay at 1×) and the
 * whole area is one real <button> that opens the gallery lightbox (Radix
 * Dialog focus trap, Esc/backdrop close, focus return).
 */
function ExperienceCoverDialog({ item }: { item: ExperienceItem }) {
  const cover = item.cover;
  if (!cover) return null;

  const baseScale = cover.baseScale ?? 1.4;
  const hoverScale = cover.hoverScale ?? baseScale + 0.05;


  return (
    <ImageGalleryDialog
      slides={item.gallerySlides ?? []}
      title={cover.dialogTitle ?? `${item.org} — OJT certificate & photos`}
      trigger={
        <button
          type="button"
          className={`group block w-full cursor-pointer overflow-hidden rounded-t-lg border-b border-border bg-card ${focusRing}`}
          aria-label={cover.ariaLabel ?? "Open OJT certificate and photo gallery"}
        >
          <span
            className="relative block aspect-[4/3] w-full overflow-hidden"
            style={{ "--cover-base": baseScale, "--cover-hover": hoverScale } as CSSProperties}
          >
            <img
              src={cover.src}
              alt={cover.alt}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-full w-full scale-(--cover-base) object-cover object-[center_40%] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-(--cover-hover)"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-background/60 opacity-0 motion-safe:transition-opacity motion-safe:duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="size-5" aria-hidden />
              <span className="font-mono text-xs text-foreground">Click to view</span>
            </span>
          </span>
        </button>
      }
    />
  );
}

/**
 * Secondary photo block below the bullet points (e.g. the SPES team photo).
 * The whole area is one real <button> that opens the gallery lightbox with
 * this single image (object-fit: contain).
 */
function ExperiencePhotoDialog({ item }: { item: ExperienceItem }) {
  const photo = item.photo;
  if (!photo) return null;

  return (
    <ImageGalleryDialog
      slides={item.gallerySlides ?? []}
      title={`${item.org} — team photo`}
      trigger={
        <button
          type="button"
          className={`group block w-full cursor-pointer overflow-hidden bg-card ${focusRing}`}
          aria-label={photo.ariaLabel ?? photo.alt}
        >
          <span className="relative block aspect-[4/3] w-full overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.05]"
            />
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-background/60 opacity-0 motion-safe:transition-opacity motion-safe:duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="size-5" aria-hidden />
              <span className="font-mono text-xs text-foreground">Click to view</span>
            </span>
          </span>
        </button>
      }
    />
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="card-hover relative flex flex-col overflow-hidden rounded-lg border border-border bg-card">
      {item.cover ? (
        <div>
          <ExperienceCoverDialog item={item} />
          <p className="px-6 pt-3 font-mono text-xs text-muted-foreground">
            {item.cover.caption}
          </p>
        </div>
      ) : null}
      <div className="relative flex-1 p-6">
        <span
          className="absolute bottom-6 left-0 top-6 w-0.5 bg-[color:var(--primary)]"
          aria-hidden
        />
        <div className="flex items-start gap-3">
          <Briefcase className="mt-1 size-4 text-[color:var(--primary)]" />
          <div>
            <h3 className="font-semibold">{item.role}</h3>
            <p className="text-sm text-[color:var(--link)]">{item.org}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {item.period}
            </p>
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="font-mono text-[color:var(--primary)]">▹</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      {item.photo ? (
        <div className="mt-auto border-t border-border">
          <ExperiencePhotoDialog item={item} />
          <p className="px-6 pt-3 font-mono text-xs text-muted-foreground">
            {item.photo.caption}
          </p>
          {item.link ? (
            <div className="px-6 pb-6 pt-3">
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.link.ariaLabel}
                className={`inline-flex items-center gap-1.5 rounded border border-border px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] ${focusRing}`}
              >
                <ExternalLink className="size-3.5 shrink-0" aria-hidden />
                {item.link.label}
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="experience" title="Work Experience" />
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((x) => (
            <ExperienceCard key={x.role} item={x} />
          ))}
        </div>
      </div>
    </section>
  );
}
