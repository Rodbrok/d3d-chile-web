import { Button } from "@/components/ui/Button";
import type { CatalogProduct, CatalogVisual } from "@/types/catalog";

const visualStyles: Record<CatalogVisual, { shape: string; detail: string }> = {
  figure: { shape: "rounded-full", detail: "rounded-t-full" },
  keyring: { shape: "rounded-full border-dashed", detail: "rounded-full" },
  sign: { shape: "rotate-2 rounded-lg", detail: "h-px rounded-none" },
  support: { shape: "rounded-r-3xl", detail: "rounded-lg" },
  organizer: { shape: "rounded-xl", detail: "rounded-sm" },
  plate: { shape: "rounded-md", detail: "rounded-full" },
  packaging: { shape: "rotate-6 rounded-xl", detail: "-rotate-12 rounded-md" },
  prototype: { shape: "rotate-45 rounded-xl", detail: "-rotate-45 rounded-md" },
  decoration: { shape: "rounded-[40%]", detail: "rotate-45 rounded-sm" },
  kit: { shape: "rounded-2xl", detail: "translate-x-5 -translate-y-3 rounded-lg" },
};

export function CatalogProductCard({ product, index }: { product: CatalogProduct; index: number }) {
  const visual = visualStyles[product.visual];
  const accent = index % 3 === 1 ? "from-violet-400/25 to-rose-400/10" : "from-cyan-400/20 to-violet-400/10";

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 transition-transform hover:-translate-y-1 hover:border-slate-700">
      <div className={`relative h-52 overflow-hidden border-b border-slate-800 bg-gradient-to-br ${accent}`} aria-hidden="true">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className={`absolute top-1/2 left-1/2 h-28 w-36 -translate-x-1/2 -translate-y-1/2 border border-cyan-200/60 bg-slate-950/60 shadow-[0_0_35px_rgba(34,211,238,0.14)] ${visual.shape}`}>
          <div className={`absolute inset-7 border border-violet-300/70 bg-violet-300/10 ${visual.detail}`} />
        </div>
        <span className="absolute top-4 left-4 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[0.65rem] font-bold tracking-wider text-slate-300 uppercase">{product.service}</span>
        <span className="absolute right-4 bottom-4 text-xs font-bold text-cyan-200/80">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-bold tracking-wider text-violet-300 uppercase">{product.category}</p><h3 className="mt-2 text-xl font-semibold text-slate-50">{product.name}</h3></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-400">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{tag}</span>)}</div>
        <div className="mt-auto pt-6">
          <div className="mb-5 flex items-end justify-between gap-3 border-t border-slate-800 pt-5"><div><p className="text-xs text-slate-500">Valor referencial</p><p className="mt-1 font-semibold text-slate-100">{product.price}</p></div><p className="max-w-28 text-right text-xs leading-5 text-cyan-300">{product.status}</p></div>
          <Button href={product.quoteHref} variant="secondary" className="w-full">Cotizar este producto</Button>
        </div>
      </div>
    </article>
  );
}
