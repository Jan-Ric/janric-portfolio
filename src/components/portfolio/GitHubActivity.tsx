import { useEffect, useState } from "react";
import { GitHubCalendar, type Activity } from "react-github-calendar";

export function GitHubActivity() {
  const [mounted, setMounted] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex w-full items-center justify-center py-6">
        <div className="h-[112px] w-full max-w-[700px] animate-pulse rounded bg-muted/40" />
      </div>
    );
  }

  if (errored) {
    return (
      <div className="w-full overflow-x-auto">
        <img
          src="https://ghchart.rshah.org/39d353/Jan-Ric"
          alt="Jan-Ric GitHub contributions"
          className="w-full"
        />
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-full [&_svg]:!h-auto [&_svg]:!w-full">
        <GitHubCalendar
          username="Jan-Ric"
          colorScheme="dark"
          theme={{
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          fontSize={12}
          blockSize={11}
          blockMargin={3}
          errorMessage="Could not load GitHub contributions."
          transformData={(data: Activity[]) => {
            if (!data || data.length === 0) setErrored(true);
            return data;
          }}
        />
      </div>
    </div>
  );
}