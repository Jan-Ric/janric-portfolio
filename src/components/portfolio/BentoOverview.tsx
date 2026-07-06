import { Users, Database, Radio, GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { GitHubActivity } from "./GitHubActivity";

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
                DEP Data Engineering Open Track: A 6-Month Project-Driven Build Journey
              </a>
              <p className="mt-2 text-sm font-semibold text-foreground/90">
                Solar Power Plant Inverter Analysis: A 12-Month AC Output Quantification of Inverters with a Negative Gap Between Actual and Predictive Yield
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Forecasts solar energy yield from inverter telemetry using a modern data engineering stack to optimize revenue and operations.
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
                <p className="mt-1 font-semibold">
                  <a
                    href="https://dataengineering.ph/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[color:var(--link)] hover:underline"
                  >
                    Data Engineering Pilipinas
                  </a>
                </p>
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
              <p>BOSH SO2</p>
              <p className="mt-1 text-[10px] italic">GWA · ECE: 85 | ECT: 80</p>
            </div>
          </Tile>

          <Tile>
            <GraduationCap className="size-5 text-[color:var(--link)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">EDUCATION</p>
            <p className="mt-1 text-sm font-semibold">PUP BSECE</p>
            <p className="text-xs text-muted-foreground whitespace-pre-line">
              Graduated Sep 2025{"\n"}(GWA: 1.46)
            </p>
          </Tile>

          <Tile>
            <Database className="size-5 text-[color:var(--success)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">FOCUS</p>
            <p className="mt-1 text-sm font-semibold">Data Engineering & Analytics of Energy systems</p>
            <p className="text-xs text-muted-foreground">SQL · Python · Cloud · Energy · Engineering</p>
          </Tile>

          <Tile>
            <Radio className="size-5 text-[color:var(--primary)]" />
            <p className="mt-2 font-mono text-xs text-muted-foreground">HARDWARE ROOTS</p>
            <p className="mt-1 text-sm font-semibold">Instrumentation · RF · IoT · Robotics · Renewable</p>
            <p className="text-xs text-muted-foreground">Antenna, UAV, 6-DOF arm, Techno-economic</p>
          </Tile>

          <a
            href="#contact"
            className="md:col-span-2 group card-hover rounded-lg border border-[color:var(--primary)]/40 bg-gradient-to-br from-[color:var(--primary)]/10 via-card to-card p-5 flex items-center justify-between hover:border-[color:var(--primary)]"
          >
            <div>
              <p className="font-mono text-xs text-[color:var(--primary)]">GET IN TOUCH</p>
              <p className="mt-1 font-semibold tracking-wide">CONNECT WITH JAN-RIC</p>
              <p className="mt-1 text-xs text-muted-foreground max-w-sm">
                <span className="text-foreground/90 font-medium">Recruiters, collaborators, and community members:</span>{" "}
                A clear path for community projects, volunteering, and direct hire.
              </p>
            </div>
            <span
              className="rounded-md border border-[color:var(--primary)]/50 p-3 text-[color:var(--primary)] group-hover:bg-[color:var(--primary)]/10 transition-colors"
              aria-hidden="true"
            >
              <ArrowUpRight className="size-5" />
            </span>
          </a>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-card p-6">
          <p className="font-mono text-xs text-muted-foreground mb-4">
            GITHUB_ACTIVITY
          </p>
          <GitHubActivity />
          <p className="mt-4 text-xs text-muted-foreground font-mono">
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
    </section>
  );
}