import type { GallerySlide } from "./ImageGalleryDialog";
import { SectionHeading } from "./SectionHeading";
import { experience, type ExperienceItem } from "./data";
import { Briefcase, ZoomIn } from "lucide-react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]";

/**
 * Certificate media area at the top of the card. The image fills the area
 * edge to edge (object-cover, zoomed onto the certificate text block) and the
 * whole area is one real <button> that opens the certificate + photo gallery
 * lightbox (Radix Dialog focus trap, Esc/backdrop close, focus return).
 */
function ExperienceCoverDialog({ item }: { item: ExperienceItem }) {
  const cover = item.cover;
  if (!cover) return null;

  return (
    <ImageGalleryDialog
      slides={item.gallerySlides ?? []}
      title={`${item.org} — OJT certificate & photos`}
      trigger={
        <button
          type="button"
          className={`group block w-full cursor-pointer overflow-hidden rounded-t-lg border-b border-border bg-card ${focusRing}`}
          aria-label="Open OJT certificate and photo gallery"
        >
          <span className="relative block aspect-[4/3] w-full overflow-hidden">
            <img
              src={cover.src}
              alt={cover.alt}
              width={800}
              height={600}
              decoding="async"
              className="h-full w-full scale-[1.4] object-cover object-[center_40%] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.45]"
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

// Imported below the local components only for readability of the file top.
import { ImageGalleryDialog } from "./ImageGalleryDialog";

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
