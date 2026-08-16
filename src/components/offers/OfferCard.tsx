import { Button } from "@/components/ui/Button";
import type { Offer, OfferVisual } from "@/types/offers";

const visualStyles: Record<OfferVisual, { outer: string; inner: string }> = {
  keyrings: { outer: "rounded-full border-dashed", inner: "rounded-full" },
  prototype: { outer: "rotate-45 rounded-2xl", inner: "-rotate-45 rounded-lg" },
  engraving: { outer: "rounded-lg", inner: "rounded-sm border-dashed" },
  sign: { outer: "-rotate-2 rounded-md", inner: "h-px rounded-none" },
  combo: { outer: "rounded-[2rem]", inner: "translate-x-5 -translate-y-3 rotate-12 rounded-xl" },
  "small-products": { outer: "rounded-3xl", inner: "rounded-full shadow-[35px_15px_0_rgba(167,139,250,0.15),-30px_10px_0_rgba(34,211,238,0.12)]" },
};

export function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const visual = visualStyles[offer.visual];
  const accent = index % 2 ? "from-violet-400/20 via-slate-950 to-rose-400/10" : "from-cyan-400/20 via-slate-950 to-violet-400/10";

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 transition-transform hover:-translate-y-1 hover:border-cyan-300/30">
      <div className={`relative h-48 overflow-hidden border-b border-slate-800 bg-gradient-to-br ${accent}`}>
        <div className="hero-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className={`absolute top-1/2 left-1/2 h-24 w-36 -translate-x-1/2 -translate-y-1/2 border border-cyan-200/60 bg-slate-950/70 shadow-[0_0_40px_rgba(34,211,238,0.12)] ${visual.outer}`} aria-hidden="true">
          <div className={`absolute inset-6 border border-violet-300/60 bg-violet-300/10 ${visual.inner}`} />
        </div>
        <span className="absolute top-4 left-4 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[0.65rem] font-bold tracking-wider text-slate-200 uppercase">{offer.service}</span>
        <span className="absolute right-4 bottom-4 text-xs font-bold text-cyan-200/80" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold tracking-[0.14em] text-rose-300 uppercase">{offer.benefit}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-50">{offer.name}</h3>
        <p className="mt-4 text-sm leading-6 text-slate-400">{offer.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{offer.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{tag}</span>)}</div>
        <div className="mt-auto pt-6">
          <div className="mb-5 flex items-end justify-between gap-4 border-t border-slate-800 pt-5"><div><p className="text-xs text-slate-500">Condición</p><p className="mt-1 font-semibold text-slate-100">{offer.condition}</p></div><p className="max-w-32 text-right text-xs leading-5 text-cyan-300">{offer.validity}</p></div>
          <Button href={offer.quoteHref} variant="secondary" className="w-full">Cotizar esta oferta</Button>
        </div>
      </div>
    </article>
  );
}
