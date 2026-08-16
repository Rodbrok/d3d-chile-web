import { Button } from "@/components/ui/Button";
import type { OfferAudience } from "@/types/offers";

export function OfferHighlight({ audience }: { audience: OfferAudience }) {
  return (
    <article className="flex min-h-full flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-[#0b1220] p-7">
      <h3 className="text-2xl font-semibold text-slate-50">{audience.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{audience.description}</p>
      <ul className="mt-6 space-y-3">{audience.examples.map((example) => <li key={example} className="flex items-center gap-3 text-sm text-slate-200"><span className="size-1.5 rounded-full bg-rose-300" aria-hidden="true" />{example}</li>)}</ul>
      <Button href={audience.action.href} variant="secondary" className="mt-8 w-full">{audience.action.label}</Button>
    </article>
  );
}
