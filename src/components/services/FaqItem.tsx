import type { Faq } from "@/types/services";

export function FaqItem({ item }: { item: Faq }) {
  return (
    <details className="group border-b border-slate-800 py-1">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-slate-100 [&::-webkit-details-marker]:hidden">
        {item.question}
        <span className="text-xl font-normal text-cyan-300 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <p className="max-w-3xl pb-6 text-sm leading-7 text-slate-300">{item.answer}</p>
    </details>
  );
}
