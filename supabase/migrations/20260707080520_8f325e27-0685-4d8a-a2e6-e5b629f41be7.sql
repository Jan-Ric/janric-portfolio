
CREATE TABLE public.site_metrics (
  key text PRIMARY KEY,
  count bigint NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.site_metrics TO anon, authenticated;
GRANT ALL ON public.site_metrics TO service_role;

ALTER TABLE public.site_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read site metrics"
  ON public.site_metrics FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO public.site_metrics (key, count) VALUES
  ('visitors', 0),
  ('resume_downloads', 0)
ON CONFLICT (key) DO NOTHING;

CREATE OR REPLACE FUNCTION public.increment_site_metric(_key text)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count bigint;
BEGIN
  IF _key NOT IN ('visitors', 'resume_downloads') THEN
    RAISE EXCEPTION 'Invalid metric key';
  END IF;

  INSERT INTO public.site_metrics (key, count, updated_at)
  VALUES (_key, 1, now())
  ON CONFLICT (key) DO UPDATE
    SET count = public.site_metrics.count + 1,
        updated_at = now()
  RETURNING count INTO new_count;

  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_site_metric(text) TO anon, authenticated;
