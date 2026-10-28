import { useState, type KeyboardEvent } from "react";
import { SectionHeading } from "./SectionHeading";
import { experience, type ExperienceItem } from "./data";
import { Briefcase, ChevronLeft, ChevronRight, Images } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]";

/**
 * Cover image rendered at the top of the card. Clicking it opens the same
 * Radix Dialog primitive used by the certificate modal (focus trap, Esc and
 * backdrop close, focus return are handled by the primitive).
 */
function ExperienceCoverDialog({ item }: { item: ExperienceItem }) {
  const cover = item.cover;
  if (!cover) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`block w-full cursor-zoom-in ${focusRing}`}
          aria-label={`Enlarge: ${cover.caption}`}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            width={800}
            height={600}
            decoding="async"
            className="aspect-[4/3] w-full rounded-t-lg border-b border-border bg-card object-contain"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="flex h-[85dvh] w-[min(900px,95vw)] max-w-[95vw] flex-col gap-0 p-0">
        <DialogHeader className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-mono text-sm">
            Certificate of Completion
          </DialogTitle>
          <DialogDescription className="font-mono text-xs">
            {cover.caption}
          </DialogDescription>
        </DialogHeader>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
          <img
            src={cover.src}
            alt={cover.alt}
            width={1200}
            height={900}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Photo gallery dialog: responsive thumbnail grid (2 cols mobile / 4 cols
 * desktop); clicking a thumbnail opens a lightbox with previous/next buttons
 * and ArrowLeft/ArrowRight keyboard support.
 */
function ExperienceGalleryDialog({ item }: { item: ExperienceItem }) {
  const gallery = item.gallery;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  if (!gallery || gallery.length === 0) return null;

  const showPrev = () =>
    setIndex((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length));
  const showNext = () =>
    setIndex((i) => (i === null ? 0 : (i + 1) % gallery.length));

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (index === null) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      showPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      showNext();
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setIndex(null);
  };

  const current = index !== null ? gallery[index] : null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] ${focusRing}`}
        >
          <Images className="size-3.5 shrink-0" />
          View internship photos ({gallery.length})
        </button>
      </DialogTrigger>
      <DialogContent
        onKeyDown={handleKeyDown}
        className="flex h-[85dvh] w-[min(900px,95vw)] max-w-[95vw] flex-col gap-0 p-0"
      >
        <DialogHeader className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-mono text-sm">
            {item.org} — internship photos
          </DialogTitle>
          <DialogDescription className="font-mono text-xs">
            {current
              ? `Photo ${index! + 1} of ${gallery.length}`
              : `${gallery.length} photos · click a photo to enlarge`}
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-auto p-4">
          {current ? (
            <div className="flex h-full min-h-0 flex-col">
              <div className="flex min-h-0 flex-1 items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous photo"
                  className={`rounded-md border border-border bg-secondary/40 p-2 text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] ${focusRing}`}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={1200}
                  height={900}
                  className="max-h-full min-w-0 max-w-full object-contain"
                />
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next photo"
                  className={`rounded-md border border-border bg-secondary/40 p-2 text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] ${focusRing}`}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 border-t border-border pt-3">
                <button
                  type="button"
                  onClick={() => setIndex(null)}
                  className={`font-mono text-xs text-[color:var(--link)] hover:underline ${focusRing}`}
                >
                  &larr; Back to grid
                </button>
                <span className="font-mono text-xs text-muted-foreground">
                  {index! + 1} / {gallery.length}
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {gallery.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`group overflow-hidden rounded-md border border-border bg-card ${focusRing}`}
                  aria-label={`Enlarge: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
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
        {item.gallery && item.gallery.length > 0 ? (
          <div className="mt-4 border-t border-border pt-4">
            <ExperienceGalleryDialog item={item} />
          </div>
        ) : null}
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
