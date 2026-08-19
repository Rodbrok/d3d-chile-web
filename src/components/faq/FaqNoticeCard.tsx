import type { FaqPageContent } from "@/types/faq";

export function FaqNoticeCard({ notice }: { notice: FaqPageContent["notice"] }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-slate-950 to-violet-400/10 p-7 sm:p-10">
      <div className="absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-amber-200 to-transparent" aria-hidden="true" />
      <p className="text-xs font-bold tracking-[0.2em] text-amber-200 uppercase">{notice.eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50">{notice.title}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-slate-300">{notice.description}</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {notice.items.map((item) => <li key={item} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-200" aria-hidden="true" />{item}</li>)}
      </ul>
    </div>
  );
}
