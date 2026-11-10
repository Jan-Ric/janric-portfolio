import { SectionHeading } from "./SectionHeading";
import { Code2, Cpu, Database } from "lucide-react";

const skillGroups: Array<{
  label: string;
  icon: typeof Cpu;
  items: string[];
}> = [
  {
    label: "Hardware & Technical Support",
    icon: Cpu,
    items: [
      "Basic PSU Blocks",
      "Switch-Mode Power Supply",
      "IC/Component Testing",
      "PCB Troubleshooting",
      "THT/SMD Rework",
      "Circuit and Schematic Analysis",
      "Root-Cause Analysis",
      "Service Manual Interpretation",
      "Technical Documentation",
      "Dealer Training",
    ],
  },
  {
    label: "Embedded Systems & IoT",
    icon: Code2,
    items: [
      "Microcontrollers/Microprocessors (Arduino, Raspberry Pi)",
      "Sensor and System Integration",
      "IoT System Concepts",
      "Hardware-Software Troubleshooting",
    ],
  },
  {
    label: "Software, Data and Cloud",
    icon: Database,
    items: [
      "Python (Pandas/NumPy)",
      "C++",
      "SQL",
      "PostgreSQL",
      "Firebase",
      "AWS",
      "Docker",
      "Git",
      "End-to-End Data Lifecycle",
      "Excel",
      "Dashboards and Reporting",
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
          {skillGroups.map((g) => (
            <GroupCard key={g.label} {...g} />
          ))}
        </div>
      </div>
    </section>
  );
}