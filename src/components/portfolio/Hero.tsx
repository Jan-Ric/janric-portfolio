import { Button } from "@/components/ui/button";
import { Github, FileText, MapPin, Zap } from "lucide-react";
import { TypedTagline } from "./TypedTagline";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[color:var(--primary)]/60 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-[color:var(--success)]">●</span> Available for Data Engineering &
          Analytics roles
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
          Jan Ric <span className="text-[color:var(--primary)]">Maranan</span> Hogat
        </h1>
        <div className="mt-4 min-h-[2rem] text-lg md:text-xl">
          <TypedTagline />
        </div>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Electronics Engineer and Technician transitioning into Data Engineering and Analytics.
          Active builder in the{" "}
          <span className="text-[color:var(--link)]">Data Engineering Pilipinas</span> community,
          currently shipping a full end-to-end data engineering project on the way to a tech role
          in data.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="font-mono">
            <a href="https://docs.google.com/document/d/1_AKf4m8fRLYZylR4gtHdp2rnrf5BxRjc/export?format=pdf" target="_blank" rel="noreferrer">
              <FileText className="size-4" /> Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-mono">
            <a href="https://github.com/Jan-Ric" target="_blank" rel="noreferrer">
              <Github className="size-4" /> View GitHub
            </a>
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-4 font-mono text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> Philippines
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="size-3.5 text-[color:var(--primary)]" /> PUP · BSECE 2025
          </span>
          <span>ECE #85 · ECT #80 · PRC March 2026</span>
        </div>
      </div>
    </section>
  );
}