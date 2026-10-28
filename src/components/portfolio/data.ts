type ProjectImage = {
  src: string;
  alt: string;
};

type FeaturedProject = {
  title: string;
  tag: string;
  duration: string;
  description: string;
  stack: string[];
  impact: string;
  link: string;
  image?: ProjectImage;
};

type OtherProject = {
  title: string;
  description: string;
  stack: string[];
  link: string;
  metric?: string;
};

type NotSoCalledProject = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Autonomous AI-Powered UAV Pest Monitoring System",
    tag: "Capstone · AI",
    duration: "Nighttime Monitoring | Multimodal Model",
    description:
      "A self-flying drone system that streams live video of crop fields to the cloud. It uses AI to automatically spot pests, count their population, and display the results on a live web dashboard.",
    stack: ["API-based LLM", "UAV", "Edge AI"],
    impact: "Proactive Targeted Intervention, Efficient usage of pesticide",
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/UAV-Pest-Monitoring",
    image: {
      src: "/Pest-Patrol-Page.JPG",
      alt: "Autonomous AI-Powered UAV Pest Monitoring System project page screenshot",
    },
  },
  {
    title: "ISO-Based Energy Audit & 10-Year Demand Forecasting for Barangay Lower Bicutan",
    tag: "Data Analytics",
    duration: "Energy Audit & Forecasting",
    description:
      "ISO-based audit with a decade-long demand forecast. Modeled LED retrofits and phantom-load elimination to cut projected costs.",
    stack: ["Energy Audit", "Forecasting", "Excel", "Python"],
    impact: "Projected energy cost reduction\u00a0",
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/Energy-Audit",
    image: {
      src: "/Energy-Audit-Page.jpg",
      alt: "ISO-Based Energy Audit & 10-Year Demand Forecasting for Barangay Lower Bicutan project page screenshot",
    },
  },
  {
    title: "Automated Robotic Banana Sorting System",
    tag: "Robotics · AI",
    duration: "6-DOF Arm | YOLO Fine-tuning",
    description: "An automated robotic sorting system that uses a live camera feed and AI to inspect fruit quality for food manufacturing. It instantly grades ripeness and triggers a 6-axis robotic arm to physically sort the items using predefined motion paths in real time.",
    stack: ["YOLOv11", "Robotics", "Computer Vision"],
    impact: "Automated Quality Control, Reduced labor cost",
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/Robotic-Arm-Sorting",
    image: {
      src: "/Robotics-Page.jpg",
      alt: "Automated Robotic Banana Sorting System project page screenshot",
    },
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Solar Power Plant Inverter Analysis",
    description:
      "End-to-end pipeline analyzing AC output from a utility-scale inverter fleet and predicting daily yield.",
    stack: ["Python", "Pandas", "SQL", "Airflow", "Forecasting"],
    link: "https://github.com/Jan-Ric/dep-data-engineering-jan-ric",
  },
  {
    title: "IoT-Based Automated Medicine Dispenser",
    description: "Adherence-focused IoT dispenser with cloud API backend.",
    stack: ["IoT", "REST API", "Embedded"],
    metric: "\n",
    link: "https://github.com/Jan-Ric/IoT-pill-dispenser",
  },
  {
    title: "Techno-Economic Analysis of Floating Offshore Wind vs. Solar PV Farm",
    description: "Techno-economic analysis comparing FOWT and utility solar.",
    stack: ["Techno-Economic", "Energy"],
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/Wind-Solar-Analysis",
  },
  {
    title: "VHF/UHF Low-Cost Discone Strip Antenna System",
    description: "Low-cost wideband discone antenna system design.",
    stack: ["RF", "Antenna Design"],
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/Discone-Antenna",
  },
  {
    title: "Arduino-Based Water Distillation System",
    description: "Sensor-driven distillation control on Arduino.",
    stack: ["Arduino", "Embedded"],
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/Water-Distillation",
  },
  {
    title: "Energy Audit — Sun Valley",
    description: "Community-level energy audit for the Sun Valley area.",
    stack: ["Energy Audit", "Analysis"],
    link: "https://github.com/Jan-Ric/Research-and-Projects/blob/main/Energy-Audit_Sun-Valley",
  },
  {
    title: "Critical Review of QR Code Utilization Study",
    description:
      "Provides useful descriptive insights into QR code usage, its major statistical conclusions are not supported by sound methodology.",
    stack: ["Research Review"],
    link: "https://github.com/Jan-Ric/Research-and-Projects/tree/main/QR-Code-Research-Review",
  },
];

export const notSoCalledProjects = [
  {
    title: "Can Filling Machine",
    description: "Programmable Logic Controller ladder diagram simulation",
    stack: ["PLC", "Automation"],
    link: "https://drive.google.com/file/d/1L5rk3eRU42QofLRlXTSaG073MI29PVV8/view?usp=drive_link",
  },
  {
    title: "ECE Overview of House of Representatives",
    description: "Electronics engineering overview of the House of Representatives.",
    stack: ["Research", "Overview"],
    link: "https://drive.google.com/file/d/1cEjHEyXFjJcxuVZXzDlT8Dt2d7agBFjU/view?usp=sharing",
  },
  {
    title: "LM555 IC Designing",
    description: "Timer circuit designs built around the LM555 IC.",
    stack: ["Analog", "Circuit Design"],
    link: "https://drive.google.com/file/d/1om4z1mwbrGpYcatUWMPL6KXcgtzawyrh/view?usp=sharing",
  },
];

export const experience = [
  {
    role: "Technical Support Engineer Intern",
    org: "Panasonic Manufacturing Philippines Corp.",
    period: "Aug – Oct 2024",
    points: [
      "Transformed a consolidating service records, warranty claims, spare parts counts, and unit status into structured Excel reports (Pivot Table & Charts), reducing operational decision turnaround on after-sales.",
      "Analyzed and reclassified available electronics training units by analyzing service manuals, THT/SMD rework, interpreting circuit schematics, conducting physical inspections, and validating electrical parameters through multimeter and clamp meter testing.",
      "Supported dealership onboarding across three product lines by facilitating and coordinating structured training sessions, capturing technical knowledge through technical documentation and service manuals.",
      "Reduced misdiagnosis rates on evaluated units by applying structured root-cause analysis.",
    ],
  },
  {
    role: "SPES Scholar — Tourism Department",
    org: "Special Program for Employment of Students - Pililla, Rizal",
    period: "Aug 2022 (1 month)",
    points: [
      "Participated in mapping the potential tourist spots across the locality.",
      "Classified locations by accessibility, ownership, facilities, and visitor stats in Excel.",
    ],
  },
];

export const certifications = {
  prc: [
    { label: "Licensed Electronics Engineer (ECE)", meta: "GWA 85" },
    { label: "Licensed Electronics Technician (ECT)", meta: "GWA 80" },
  ],
  safety: [{ label: "Basic Occupational Safety and Health for Safety Officer 2", meta: "DOLE-accredited · Ref B20426-026" }],
  datacamp: [
    "Data Engineer Associate",
    "Data Literacy",
    "SQL Associate",
    "GitHub Foundations",
    "Python Data Associate",
    "AI Engineer for Developer Associate",
    "AI Fundamentals",
    "AWS Cloud Practitioner (CLF-C02)",
  ],
};

export const affiliations = [
  {
    name: "BetterGov.PH",
    role: "Volunteer member/learner",
    period: "2026 – present",
    note: "• Participating in a forum for building a better Philippine national government website.",
    link: "https://bettergov.ph/",
  },
  {
    name: "Data Engineering Pilipinas",
    role: "Builder & Scholar",
    period: "2025 – present",
    note: '•\u00a0Top 50 of 850 applicants on their program: "DEP Data Engineering Open Track: A 6-Month Project-Driven Build Journey"\u00a0\u00a0\u00a0\u00a0\n•\u00a0Over 50+ courses completed on DataCamp as a scholar by DEP',
    link: "https://dataengineering.ph/",
  },
  {
    name: "PUP ECESS",
    role: "Sectorial Chairperson",
    period: "2024 – 2025",
    note: "• Led the sector from 1st to 4th year in representing all ECE department activities.",
    link: "https://www.facebook.com/pup.ecess1979",
  },
  {
    name: "Radio Engineering Circle",
    role: "Neophyte Member",
    period: "2022 – 2026",
    note: "• Major Participation: Call sign 4G1GSW aired (QRV) for the 2024 DU3MY Contest on 2-meter FM from the grid location in Sampaloc, Manila.",
    link: "https://beta.rec.org.ph/",
  },
  {
    name: "IECEP",
    role: "Official member",
    period: "2021 – present",
    note: "• Institute of Electronics Engineers of the Philippines.",
    link: "https://myiecep.net/",
  },
];

export const nonEngineeringAffiliations = [
  {
    name: "PUP ECE BDDC",
    role: "Co-Head Officer & Choreographer (2024–2025), Member (2022–2024)",
    period: "2022 – 2025",
    note: "• Co-led the ECE department dance group to prepare for and perform at events inside and outside PUP.",
    link: "https://www.facebook.com/BDDCompany",
  },
  {
    name: "4-H Youth Club Pililla",
    role: "Treasurer",
    period: "2025 – present",
    note: "• Facilitated financial literacy activities, started a small business for household products, educated youth on financial management, and participated in farm business conferences.",
    link: "https://www.facebook.com/profile.php?id=61574500951747",
  },
];

export const education = [
  {
    school: "Polytechnic University of the Philippines (Main Campus)",
    degree: "B.S. Electronics Engineering (GWA: 1.46)",
    period: "Graduated Sep 2025",
  },
  {
    school: "Morong National High School",
    degree: "Senior High · STEM · With Honors",
    period: "2019 – 2021",
  },
  {
    school: "Pililla Integrated National High School",
    degree: "Junior High · STEM · With High Honors",
    period: "2015 – 2019",
    highlights: [
      "Best in Research Presenter (Grade 10)",
      "Conducted Life Science Research (Grades 9–10)",
    ],
  },
  {
    school: "Pililla Elementary School Central",
    degree: "Pilot Section · Batch Salutatorian",
    period: "2009 – 2015",
    highlights: [
      "Boys Scout Troop Leader (Grades 4–6)",
      "MTAP Math Challenge (Grades 5–6)",
      "Class President (Grade 6)",
    ],
  },
];
