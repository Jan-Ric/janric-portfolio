import { SectionHeading } from "./SectionHeading";
import { Code2, Cpu, Database } from "lucide-react";

const skillGroups: Array<{
  category: string;
  icon: typeof Cpu;
  skills: string[];
  subgroups?: Array<{ label: string; skills: string[] }>;
}> = [
  {
    category: "Hardware & Technical Support",
    icon: Cpu,
    skills: [],
    subgroups: [
      {
        label: "Power & Components",
        skills: ["Basic PSU Blocks", "Switch-Mode Power Supply", "IC/Component Testing"],
      },
      {
        label: "Repair & Diagnostics",
        skills: [
          "PCB Troubleshooting",
          "THT/SMD Rework",
          "Circuit and Schematic Analysis",
          "Root-Cause Analysis",
        ],
      },
      {
        label: "Documentation & Training",
        skills: ["Service Manual Interpretation", "Technical Documentation", "Dealer Training"],
      },
    ],
  },
  {
    category: "Embedded Systems & IoT",
    icon: Code2,
    skills: [
      "Microcontrollers/Microprocessors (Arduino, Raspberry Pi)",
      "Sensor and System Integration",
      "IoT System Concepts",
      "Hardware-Software Troubleshooting",
    ],
  },
  {
    category: "Software, Data and Cloud",
    icon: Database,
    skills: [],
    subgroups: [
      {
        label: "Languages & Databases",
        skills: ["Python (Pandas/NumPy)", "C++", "SQL", "PostgreSQL"],
      },
      {
        label: "Cloud & Tooling",
        skills: ["Firebase", "AWS", "Docker", "Git"],
      },
      {
        label: "Data & Reporting",
        skills: ["End-to-End Data Lifecycle", "Excel", "Dashboards and Reporting"],
      },
    ],
  },
];

function GroupCard({
  category,
  icon: Icon,
  skills,
  subgroups,
}: {
  category: string;
  icon: typeof Cpu;
  skills: string[];
  subgroups?: Array<{ label: string; skills: string[] }>;
}) {
  const renderSkills = (items: string[]) => (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="min-w-0 whitespace-normal break-words rounded-md border border-border bg-secondary/40 px-2 py-1 font-mono text-[11px]"
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="card-hover min-w-0 rounded-lg border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-[color:var(--primary)]" />
        <h3 className="font-mono text-xs text-[color:var(--primary)]">{category}</h3>
      </div>
      {subgroups ? (
        <div className="mt-4 space-y-4">
          {subgroups.map((subgroup) => (
            <div key={subgroup.label}>
              <p className="mb-2 font-mono text-[10px] uppercase text-muted-foreground">
                {subgroup.label}
              </p>
              {renderSkills(subgroup.skills)}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4">{renderSkills(skills)}</div>
      )}
    </div>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="stack" title="Tech Stacks & Languages">
          Hardware troubleshooting, embedded systems, and data tools I use across electronics and data engineering work.
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <GroupCard key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}