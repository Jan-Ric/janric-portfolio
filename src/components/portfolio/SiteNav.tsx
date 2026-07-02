import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";
import logoAsset from "@/assets/my_logo.png.asset.json";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#certs", label: "certs" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-[color:var(--background)]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <img
            src={logoAsset.url}
            alt="Jan Ric logo"
            className="size-7 rounded-full border border-border object-cover"
          />
          janric<span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-mono text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[color:var(--primary)] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="outline" className="font-mono">
            <a href="https://docs.google.com/document/d/1_AKf4m8fRLYZylR4gtHdp2rnrf5BxRjc/edit?usp=sharing&ouid=106816187210933978611&rtpof=true&sd=true" target="_blank" rel="noreferrer">
              <FileText className="size-4" /> Resume
            </a>
          </Button>
          <Button asChild size="sm" className="font-mono">
            <a href="https://github.com/Jan-Ric" target="_blank" rel="noreferrer">
              <Github className="size-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}