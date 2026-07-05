import { SectionHeading } from "./SectionHeading";
import { Code2, Database, Wrench, Cpu, Binary, Gauge, Layers, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const generalGroups = [
  {
    label: "LANGUAGES & DATABASES",
    icon: Database,
    items: ["Python", "SQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    label: "DATA ENGINEERING & ANALYTICS",
    icon: Code2,
    items: ["Apache Spark", "Pandas", "NumPy", "Matplotlib", "Excel"],
  },
  {
    label: "TOOLS & DEVOPS",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

const electronicsGroups = [
  {
    label: "ELECTRONICS FIELD",
    icon: Cpu,
    items: [
      "Circuit design & analysis",
      "THT/SMD soldering & rework",
      "PCB troubleshooting",
      "BMS",
      "RF & Antenna systems",
      "Power electronics",
      "Embedded systems (MCU/MPU)",
    ],
  },
  {
    label: "PROGRAMMING (EE)",
    icon: Binary,
    items: [
      "C/C++ (embedded firmware)",
      "Python (data processing & automation)",
      "SQL",
    ],
  },
  {
    label: "TEST & MEASUREMENT",
    icon: Gauge,
    items: [
      "System validation",
      "Signal characterization",
      "Calibration",
      "Network cabling",
      "Oscilloscopes",
    ],
  },
  {
    label: "SOFTWARE & TOOLS (EE)",
    icon: Layers,
    items: ["MATLAB", "Multisim", "Microsoft Excel", "GitHub", "VS Code"],
  },
  {
    label: "STANDARDS & SAFETY",
    icon: ShieldCheck,
    items: [
      "Occupational Safety & Health",
      "Warranty & Service documentation",
      "ESD-awareness",
    ],
  },
];

function GroupCard({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: typeof Cpu;
  items: string[];
}) {
  return (
    <div className="card-hover rounded-lg border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-[color:var(--primary)]" />
        <p className="font-mono text-xs text-[color:var(--primary)]">{label}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span
            key={it}
            className="rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-[11px]"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="stack" title="Tech Stacks & Languages">
          Tools, Skills and languages I use across data engineering, analytics, and hardware-adjacent work.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          {generalGroups.map((g) => (
            <GroupCard key={g.label} {...g} />
          ))}
        </div>

        <Accordion type="single" collapsible className="mt-10">
          <AccordionItem value="pure-electronics" className="border-none">
            <AccordionTrigger className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:no-underline">
              Pure Electronics Skills
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 md:grid-cols-3">
                {electronicsGroups.map((g) => (
                  <GroupCard key={g.label} {...g} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}