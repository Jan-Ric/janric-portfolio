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

export type LicenseCertificate = {
  label: string;
  src: string;
  alt: string;
};

export const licenseCertificates: LicenseCertificate[] = [
  {
    label: "Licensed Electronics Engineer (ECE)",
    src: encodeURI("/certificates/Elex Engineer - PRC.png"),
    alt: "Licensed Electronics Engineer certificate issued by the PRC",
  },
  {
    label: "Licensed Electronics Technician (ECT)",
    src: encodeURI("/certificates/Elex Technician - PRC.png"),
    alt: "Licensed Electronics Technician certificate issued by the PRC",
  },
  {
    label: "Basic Occupational Safety and Health for Safety Officer 2",
    src: encodeURI("/certificates/Hogat_BOSH-SO2.png"),
    alt: "Basic Occupational Safety and Health for Safety Officer 2 certificate",
  },
];
