import { LaunchStatusBadge } from "@/components/launches/LaunchStatusBadge";
import { Button } from "@/components/ui/Button";
import type { Launch, LaunchVisual } from "@/types/launches";

const visualStyles: Record<LaunchVisual, { frame: string; detail: string }> = {
  keyrings: { frame: "h-24 w-24 rounded-full border-dashed", detail: "inset-5 rounded-full" },
  organizer: { frame: "h-24 w-40 rounded-xl", detail: "inset-x-5 top-5 h-12 rounded-md shadow-[28px_20px_0_rgba(167,139,250,0.14)]" },
  "pet-tag": { frame: "h-28 w-24 rotate-45 rounded-[2rem]", detail: "inset-7 -rotate-45 rounded-full" },
  "wood-sign": { frame: "h-24 w-44 -rotate-2 rounded-md", detail: "inset-x-7 top-1/2 h-px" },
  "gamer-stand": { frame: "h-28 w-36 rounded-t-[3rem] rounded-b-xl", detail: "inset-x-9 top-6 h-16 rounded-t-full" },
  "corporate-pack": { frame: "h-28 w-36 rounded-2xl", detail: "inset-6 translate-x-5 -translate-y-3 rotate-6 rounded-lg" },
};

export function LaunchCard({ launch, index }: { launch: Launch; index: number }) {
  const visual = visualStyles[launch.visual];
  const accent = index % 3 === 1 ? "from-violet-500/20 via-slate-950 to-rose-400/10" : index % 3 === 2 ? "from-rose-400/15 via-slate-950 to-cyan-400/15" : "from-cyan-400/20 via-slate-950 to-violet-500/15";

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
      <div className={`relative h-52 overflow-hidden border-b border-slate-800 bg-gradient-to-br ${accent}`}>
        <div className="hero-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-200/60 bg-slate-950/75 shadow-[0_0_45px_rgba(34,211,238,0.14)] ${visual.frame}`} aria-hidden="true">
          <div className={`absolute border border-violet-300/60 bg-violet-300/10 ${visual.detail}`} />
        </div>
        <span className="absolute top-4 left-4 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[0.65rem] font-bold tracking-wider text-slate-200 uppercase">{launch.service}</span>
        <span className="absolute right-4 bottom-4 font-mono text-xs text-cyan-200/70" aria-hidden="true">D3D/{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs font-bold tracking-[0.14em] text-cyan-300 uppercase">{launch.category}</p><LaunchStatusBadge status={launch.status} /></div>
        <h3 className="mt-4 text-xl font-semibold text-slate-50">{launch.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{launch.description}</p>
        <p className="mt-5 border-l-2 border-violet-300/50 pl-4 text-sm leading-6 text-slate-200">{launch.benefit}</p>
        <div className="mt-5 flex flex-wrap gap-2">{launch.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{tag}</span>)}</div>
        <div className="mt-auto pt-6">
          <div className="mb-5 grid grid-cols-2 gap-4 border-t border-slate-800 pt-5 text-xs"><div><p className="text-slate-500">Periodo</p><p className="mt-1 font-semibold text-slate-200">{launch.period}</p></div><div className="text-right"><p className="text-slate-500">Valor</p><p className="mt-1 font-semibold text-slate-200">{launch.priceNote}</p></div></div>
          <Button href={launch.action.href} variant="secondary" className="w-full">{launch.action.label}</Button>
        </div>
      </div>
    </article>
  );
}
