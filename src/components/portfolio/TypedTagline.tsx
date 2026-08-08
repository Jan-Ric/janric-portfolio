import { useEffect, useState } from "react";

const phrases = [
  "Electronics Engineer",
  "Upskilling in Technical ECE & Data Science",
  "Analytics Builder",
  "PRC-Licensed ECE / ECT",
];


export function TypedTagline() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 35 : 65;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx]);

  return (
    <span className="font-mono text-[color:var(--link)]">
      {text}
      <span className="ml-0.5 inline-block w-2 h-5 bg-[color:var(--primary)] animate-pulse align-middle" />
    </span>
  );
}