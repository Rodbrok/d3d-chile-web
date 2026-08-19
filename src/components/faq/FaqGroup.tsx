import type { FaqCategory } from "@/types/faq";

export function FaqGroup({ category, number }: { category: FaqCategory; number: number }) {
  return (
    <article id={category.id} className="scroll-mt-24 rounded-[1.75rem] border border-slate-800 bg-slate-950/45 p-6 sm:p-8">
      <header className="mb-4 border-b border-slate-800 pb-6">
        <p className="text-xs font-bold tracking-[0.18em] text-violet-300 uppercase">Categoría {String(number).padStart(2, "0")}</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-50">{category.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
      </header>
      {category.items.map((item) => (
        <details key={item.question} className="group border-b border-slate-800/80 last:border-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-slate-100 [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-slate-700 text-lg font-normal text-cyan-300 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="max-w-3xl pb-6 text-sm leading-7 text-slate-300">{item.answer}</p>
        </details>
      ))}
    </article>
  );
}
