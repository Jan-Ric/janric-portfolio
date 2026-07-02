import { Github, Users, Database, Radio, GraduationCap, Award } from "lucide-react";

function Tile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card-hover rounded-lg border border-border bg-card p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function BentoOverview() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:auto-rows-[9rem]">
          {/* Featured: currently building */}
          <Tile className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-[color:var(--primary)]">CURRENTLY BUILDING</p>
              <a
                href="https://github.com/Jan-Ric/dep-data-engineering-jan-ric"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xl font-semibold hover:text-[color:var(--link)] hover:underline"
              >
                Solar Inverter Analysis — end-to-end pipeline
              </a>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Ingesting inverter telemetry, modeling AC output, and forecasting daily yield. A 6-month
                data engineering project connecting hardware sensor data to a modern DE stack.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[11px]">
              {["python", "sql", "airflow", "pandas", "forecasting"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Tile>

          <Tile className="md:col-span-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs text-muted-foreground">COMMUNITY</p>
                <p className="mt-1 font-semibold">Data Engineering Pilipinas</p>
              </div>
              <Users className="size-5 text-[color:var(--link)]" />
            </div>
            <p className="mt-3 font-mono text-sm">
              <span className="text-[color:var(--primary)]">Top 50</span> of 850 applicants for Open Track Project
            </p>
            <p className="text-xs text-muted-foreground">Scholar & Builder · 2025 – present</p>
          </Tile>

          <Tile>
            <Award className="size-5 text-[color:var(--primary)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">LICENSE</p>
            <p className="mt-1 text-sm font-semibold">ECE + ECT</p>
            <div className="text-xs text-muted-foreground">
              <p>BOSH SO₂</p>
              <p className="mt-1 text-[10px] italic">GPA · ECE: 85 | ECT: 80</p>
            </div>
          </Tile>

          <Tile>
            <GraduationCap className="size-5 text-[color:var(--link)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">EDUCATION</p>
            <p className="mt-1 text-sm font-semibold">PUP BSECE</p>
            <p className="text-xs text-muted-foreground whitespace-pre-line">
              Graduated Sep 2025{"\n"}(GPA: 1.46)
            </p>
          </Tile>

          <Tile>
            <Database className="size-5 text-[color:var(--success)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">FOCUS</p>
            <p className="mt-1 text-sm font-semibold">Data Engineering</p>
            <p className="text-xs text-muted-foreground">SQL · Python · Cloud</p>
          </Tile>

          <Tile>
            <Radio className="size-5 text-[color:var(--primary)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">HARDWARE ROOTS</p>
            <p className="mt-1 text-sm font-semibold">RF · IoT · Robotics</p>
            <p className="text-xs text-muted-foreground">Antenna, UAV, 6-DOF arm</p>
          </Tile>

          <Tile className="md:col-span-2 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-muted-foreground">FIND ME ON</p>
              <p className="mt-1 font-semibold">github.com/Jan-Ric</p>
              <p className="text-xs text-muted-foreground">Open to collaboration</p>
            </div>
            <a
              href="https://github.com/Jan-Ric"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border p-3 hover:border-[color:var(--primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
          </Tile>
        </div>
      </div>
    </section>
  );
}