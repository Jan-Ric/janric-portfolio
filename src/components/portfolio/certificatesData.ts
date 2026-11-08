export interface CertificateFile {
  /** Display title — must match the entry shown on the page. */
  title: string;
  issuer: string;
  date: string;
  /** Public path under /public/certificates/. */
  filePath: string;
  fileType: "pdf" | "image";
  /** Optional external verification link shown inside the modal. */
  credentialUrl?: string;
}

export interface LicenseCertificate {
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Uploaded PRC and workplace-safety credentials. */
export const licenseCertificates: LicenseCertificate[] = [
  {
    label: "Licensed Electronics Engineer (ECE)",
    src: encodeURI("/certificates/Elex Engineer - PRC.png"),
    alt: "Elex Engineer PRC license verification details",
    width: 597,
    height: 602,
  },
  {
    label: "Licensed Electronics Technician (ECT)",
    src: encodeURI("/certificates/Elex Technician - PRC.png"),
    alt: "Elex Technician PRC license verification details",
    width: 595,
    height: 480,
  },
  {
    label: "Basic Occupational Safety and Health for Safety Officer 2",
    src: "/certificates/Hogat_BOSH-SO2.png",
    alt: "Basic Occupational Safety and Health for Safety Officer 2 certificate",
    width: 1920,
    height: 1385,
  },
];

/**
 * DataCamp certificate entries backed by files in /public/certificates/.
 * Adding a certificate = adding one entry here (and dropping the file in
 * public/certificates/). Entries without a file render as plain chips.
 */
export const datacampCertificates: Array<
  CertificateFile | { title: string; filePath: null }
> = [
  { title: "Data Engineer Associate", filePath: null },
  {
    title: "Data Literacy",
    issuer: "DataCamp",
    date: "Jun 1, 2026",
    filePath: "/certificates/DL0037829724114_page-0001.jpg",
    fileType: "image",
  },
  {
    title: "SQL Associate",
    issuer: "DataCamp",
    date: "Jul 6, 2026",
    filePath: "/certificates/SQA0015190533375_page-0001.jpg",
    fileType: "image",
  },
  {
    title: "GitHub Foundations",
    issuer: "DataCamp",
    date: "Jun 2, 2026",
    filePath: "/certificates/github_certificate_page-0001.jpg",
    fileType: "image",
  },
  {
    title: "Python Data Associate",
    issuer: "DataCamp",
    date: "Jun 9, 2026",
    filePath: "/certificates/PDA0015364112405_page-0001.jpg",
    fileType: "image",
  },
  {
    title: "AI Engineer for Developer Associate",
    issuer: "DataCamp",
    date: "Oct 9, 2025",
    filePath: "/certificates/AI-Engineer_Jan-Ric-Maranan-Hogat_page-0001.jpg",
    fileType: "image",
  },
  {
    title: "AI Fundamentals",
    issuer: "DataCamp",
    date: "Oct 13, 2025",
    filePath: "/certificates/AI-Fundamental_Jan-Ric-Maranan-Hogat_page-0001.jpg",
    fileType: "image",
  },
  {
    title: "AWS Cloud Practitioner (CLF-C02)",
    issuer: "DataCamp",
    date: "Jul 20, 2026",
    filePath: "/certificates/AWS_basic_certificate_page-0001.jpg",
    fileType: "image",
  },
];
