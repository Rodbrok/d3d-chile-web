import type { ComponentWithChildren } from "@/types/site";

export function Badge({ children, className = "" }: ComponentWithChildren) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-cyan-300 uppercase ${className}`}
    >
      <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
      {children}
    </span>
  );
}
