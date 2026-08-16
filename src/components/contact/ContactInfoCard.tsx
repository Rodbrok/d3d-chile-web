import type { ContactInfo } from "@/types/contact";

export function ContactInfoCard({ item }: { item: ContactInfo }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950/45 p-6">
      <p className="text-xs font-bold tracking-[0.16em] text-violet-300 uppercase">{item.label}</p>
      <h3 className="mt-3 text-lg font-semibold text-slate-50">{item.value}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
    </article>
  );
}
