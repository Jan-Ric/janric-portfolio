import { useEffect, useState } from "react";
import { GitHubCalendar, type Activity } from "react-github-calendar";

export function GitHubActivity() {
  const [mounted, setMounted] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="card-hover rounded-lg border border-border bg-card p-6 flex flex-col items-center justify-center h-full">
      <p className="font-mono text-xs text-muted-foreground mb-4 self-start">
        GITHUB_ACTIVITY
      </p>
      {!mounted ? (
        <div className="flex w-full items-center justify-center py-6">
          <div className="h-[112px] w-full max-w-[700px] animate-pulse rounded bg-muted/40" />
        </div>
      ) : errored ? (
        <div className="w-full overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/39d353/Jan-Ric"
            alt="Jan-Ric GitHub contributions"
            className="w-full"
          />
        </div>
      ) : (
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
      )}
      <p className="mt-4 text-xs text-muted-foreground self-start font-mono">
        contributions on{" "}
        <a
          href="https://github.com/Jan-Ric"
          target="_blank"
          rel="noreferrer"
          className="text-[color:var(--link)] hover:underline"
        >
          @Jan-Ric
        </a>
      </p>
    </div>
  );
}
