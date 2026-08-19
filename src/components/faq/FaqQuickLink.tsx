import Link from "next/link";

import type { FaqCategory } from "@/types/faq";

export function FaqQuickLink({ category, number }: { category: FaqCategory; number: number }) {
  return (
    <Link href={`#${category.id}`} className="group flex min-h-24 items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-xs font-bold text-cyan-300">{String(number).padStart(2, "0")}</span>
      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-200">{category.shortLabel}</span>
    </Link>
  );
}
