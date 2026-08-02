import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const metricSchema = z.object({
  key: z.enum(["visitors", "resume_downloads"]),
});

export const incrementSiteMetric = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => metricSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: count, error } = await supabaseAdmin.rpc("increment_site_metric", {
      _key: data.key,
    });
    if (error) {
      console.error("[metrics] increment failed", error.message);
      return { count: null as number | null };
    }
    return { count: count == null ? null : Number(count) };
  });
