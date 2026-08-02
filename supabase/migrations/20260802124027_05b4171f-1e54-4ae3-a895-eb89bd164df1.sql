REVOKE EXECUTE ON FUNCTION public.increment_site_metric(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.increment_site_metric(text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.increment_site_metric(text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.increment_site_metric(text) TO service_role;