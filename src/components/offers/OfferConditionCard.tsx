import type { OfferCondition } from "@/types/offers";

export function OfferConditionCard({ condition, index }: { condition: OfferCondition; index: number }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <span className="text-xs font-bold text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-4 font-semibold text-slate-50">{condition.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{condition.description}</p>
    </article>
  );
}
