import { SectionHeading } from "./SectionHeading";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="contact" title="Let's build something">
          I'm passionate about big data and eager to connect with others who want to bring a
          hardware background into cloud infrastructure and data analytics.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href="mailto:janrichogat@gmail.com"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Mail className="size-5 text-[color:var(--primary)]" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">EMAIL</p>
                <p className="text-sm">janrichogat@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/Jan-Ric"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Github className="size-5" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">GITHUB</p>
                <p className="text-sm">github.com/Jan-Ric</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/janrichogat/"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Linkedin className="size-5 text-[color:var(--link)]" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">LINKEDIN</p>
                <p className="text-sm">linkedin.com/in/janrichogat</p>
              </div>
            </a>
            <a
              href="https://discordapp.com/users/577119678082580490"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <MessageCircle className="size-5 text-[#5865F2]" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">DISCORD</p>
                <p className="text-sm">discordapp.com/users/577119678082580490</p>
              </div>
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 flex flex-col items-center justify-center">
            <p className="font-mono text-xs text-muted-foreground mb-4 self-start">
              GITHUB_ACTIVITY
            </p>
            <div className="flex w-full items-center justify-center overflow-x-auto">
              <GitHubCalendar
                username="Jan-Ric"
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                fontSize={12}
              />
            </div>
            <p className="mt-4 text-xs text-muted-foreground self-start font-mono">
              contributions on{" "}
              <a
                href="https://github.com/Jan-Ric"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--link)] hover:underline"
              >
                @Jan-Ric
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}