import type { QuoteCard } from "@/types/quote";

export function QuoteRequirementCard({ item, number }: { item: QuoteCard; number: number }) {
  return (
    <li className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-300">{number}</span>
      <div>
        <h3 className="font-semibold text-slate-100">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
      </div>
    </li>
  );
}
