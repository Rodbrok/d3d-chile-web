import type { ContactTip } from "@/types/contact";

export function ContactTipCard({ item, number }: { item: ContactTip; number: number }) {
  return (
    <li className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-200">{number}</span>
      <div><h3 className="font-semibold text-slate-50">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p></div>
    </li>
  );
}
