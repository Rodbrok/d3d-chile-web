import type { ComponentWithChildren } from "@/types/site";

export function Card({ children, className = "" }: ComponentWithChildren) {
  return (
    <article
      className={`rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl shadow-slate-950/20 ${className}`}
    >
      {children}
    </article>
  );
}
