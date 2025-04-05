import { LoaderIcon } from "lucide-react";

interface FullScreenLoaderProps {
  label?: string;
  className?: string;
}

export function FullScreenLoader({
  label = "Loading...",
}: FullScreenLoaderProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <LoaderIcon className="size text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
}
