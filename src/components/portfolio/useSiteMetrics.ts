import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { incrementSiteMetric } from "@/lib/metrics.functions";

type MetricKey = "visitors" | "resume_downloads";

async function fetchCount(key: MetricKey): Promise<number | null> {
  const { data, error } = await supabase
    .from("site_metrics")
    .select("count")
    .eq("key", key)
    .maybeSingle();
  if (error || !data) return null;
  return Number(data.count);
}

async function incrementMetric(key: MetricKey): Promise<number | null> {
  try {
    const result = await incrementSiteMetric({ data: { key } });
    return result.count;
  } catch {
    return null;
  }
}

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const alreadyCounted =
        typeof window !== "undefined" && sessionStorage.getItem("visitor_counted") === "1";
      if (alreadyCounted) {
        const c = await fetchCount("visitors");
        if (!cancelled) setCount(c);
      } else {
        const c = await incrementMetric("visitors");
        if (typeof window !== "undefined") sessionStorage.setItem("visitor_counted", "1");
        if (!cancelled) setCount(c);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return count;
}

export function useResumeDownloads() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const c = await fetchCount("resume_downloads");
      if (!cancelled) setCount(c);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const record = async () => {
    const c = await incrementMetric("resume_downloads");
    if (c != null) setCount(c);
  };

  return { count, record };
}