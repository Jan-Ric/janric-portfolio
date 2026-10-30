import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type GallerySlide = {
  src: string;
  alt: string;
  kind: "certificate" | "photo";
  downloadHref?: string;
  downloadLabel?: string;
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--primary)]";

type ImageGalleryDialogProps = {
  /** Slides shown in the lightbox: slide 1 may carry a downloadHref (e.g. the certificate PDF). */
  slides: GallerySlide[];
  /** Title rendered in the dialog header. */
  title: string;
  /** Optional static description; defaults to a live "n / total" slide counter. */
  description?: string;
  /** The clickable element that opens the gallery (wrapped in a Radix DialogTrigger). */
  trigger: ReactNode;
};

/**
 * Reusable full-screen lightbox built on the project's Radix Dialog + embla
 * Carousel. Supports swipe/touch drag, ArrowLeft/ArrowRight, Esc and backdrop
 * close, a synced thumbnail strip, a slide counter, and an optional download
 * link on the first slide. Radix handles focus trap, focus restore and body
 * scroll lock while open.
 */
export function ImageGalleryDialog({
  slides,
  title,
  description,
  trigger,
}: ImageGalleryDialogProps) {
  const isSingle = slides.length <= 1;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Keep the slide counter and thumbnail strip in sync with embla.
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Scroll the active thumbnail into view (no page-level scrolling).
  useEffect(() => {
    if (!open) return;
    thumbRefs.current[index]?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [index, open]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setIndex(0);
  };

  // Arrow keys when focus sits outside the carousel region (e.g. thumbnails).
  // Inside the region the Carousel's own capture handler already ran.
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.defaultPrevented) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      api?.scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      api?.scrollNext();
    }
  };

  const near = (i: number) => {
    const d = Math.abs(i - index);
    return Math.min(d, slides.length - d) <= 1;
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        onKeyDown={handleKeyDown}
        className="flex h-[90dvh] w-[min(1000px,95vw)] max-w-[95vw] flex-col gap-0 p-0"
      >
        <DialogHeader className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-mono text-sm">{title}</DialogTitle>
          <DialogDescription className="font-mono text-xs">
            {description ??
              (isSingle
                ? (slides[0]?.alt ?? "")
                : slides[index]
                  ? `Slide ${index + 1} of ${slides.length} · ${slides[index].alt}`
                  : `${slides.length} slides`)}
          </DialogDescription>
        </DialogHeader>

        <Carousel
          setApi={setApi}
          opts={{ loop: !isSingle }}
          className="min-h-0 flex-1"
          aria-label={title}
        >
          <CarouselContent className="ml-0 h-full">
            {slides.map((slide, i) => (
              <CarouselItem
                key={slide.src}
                aria-label={`Slide ${i + 1} of ${slides.length}: ${slide.alt}`}
                className="h-full pl-0"
              >
                <div className="flex h-full min-h-0 flex-col px-12 pt-4">
                  <div className="flex min-h-0 flex-1 items-center justify-center">
                    {near(i) ? (
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        width={1200}
                        height={1600}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <div aria-hidden className="h-full w-full" />
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {i + 1} / {slides.length}
                    </span>
                    {slide.downloadHref ? (
                      <a
                        href={slide.downloadHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 font-mono text-xs text-[color:var(--link)] hover:underline ${focusRing}`}
                      >
                        <Download className="size-3.5 shrink-0" />
                        {slide.downloadLabel ?? "Download"}
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous slide"
            className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-md border border-border bg-background/80 p-2 text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] ${focusRing}`}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next slide"
            className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-md border border-border bg-background/80 p-2 text-foreground transition-colors hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] ${focusRing}`}
          >
            <ChevronRight className="size-4" />
          </button>
        </Carousel>

        <div className="border-t border-border p-2">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                ref={(el) => {
                  thumbRefs.current[i] = el;
                }}
                type="button"
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.alt}`}
                aria-current={i === index}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded border transition-opacity ${
                  i === index
                    ? "border-[color:var(--primary)] opacity-100"
                    : "border-border opacity-60 hover:opacity-100"
                } ${focusRing}`}
              >
                <img
                  src={slide.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={160}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
