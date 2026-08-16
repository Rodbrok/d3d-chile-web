import Link from "next/link";

import type { LaunchCategory } from "@/types/launches";

export function LaunchCategoryCard({ category, index }: { category: LaunchCategory; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-violet-300/35">
      <span className="absolute top-5 right-5 font-mono text-xs text-slate-600" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div className="mb-5 grid size-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-200" aria-hidden="true">D3</div>
      <h3 className="pr-8 text-lg font-semibold text-slate-50">{category.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{category.services.map((service) => <span key={service} className="text-xs text-violet-200">{service}</span>)}</div>
      <Link href={category.action.href} className="mt-6 inline-flex text-sm font-bold text-cyan-300 transition-colors hover:text-cyan-200">{category.action.label}<span className="ml-2" aria-hidden="true">→</span></Link>
    </article>
  );
}
