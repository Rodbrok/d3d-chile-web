import { Button } from "@/components/ui/Button";
import type { GalleryProject, GalleryVisual } from "@/types/gallery";

const visualStyles: Record<GalleryVisual, { frame: string; detail: string; extra: string }> = {
  keyrings: { frame: "h-20 w-20 rounded-full border-dashed", detail: "inset-4 rounded-full", extra: "translate-x-14 translate-y-6" },
  "headphone-stand": { frame: "h-28 w-32 rounded-t-[4rem] rounded-b-lg", detail: "inset-x-8 top-6 h-20 rounded-t-full border-b-0", extra: "translate-y-20 h-3 w-40 rounded-full" },
  "pet-tag": { frame: "h-24 w-20 rotate-45 rounded-[1.75rem]", detail: "inset-6 -rotate-45 rounded-full", extra: "-translate-y-16 h-4 w-4 rounded-full" },
  "wood-sign": { frame: "h-24 w-44 -rotate-2 rounded", detail: "inset-x-7 top-1/2 h-px", extra: "translate-y-8 h-px w-28" },
  organizer: { frame: "h-24 w-40 rounded-xl", detail: "inset-x-4 top-5 h-14 rounded-md", extra: "translate-x-12 translate-y-9 h-20 w-14 rounded-lg" },
  topper: { frame: "h-24 w-40 rounded-t-full", detail: "inset-x-6 top-8 h-px rotate-6", extra: "translate-y-20 h-16 w-px" },
  "phone-stand": { frame: "h-28 w-20 -skew-x-6 rounded-xl", detail: "inset-2 rounded-lg", extra: "translate-y-16 h-5 w-32 -skew-x-6 rounded" },
  "corporate-plate": { frame: "h-24 w-44 rounded-md", detail: "inset-x-8 top-8 h-8 rounded-sm", extra: "translate-y-11 h-px w-32" },
  "laser-box": { frame: "h-24 w-36 rotate-3 rounded-md", detail: "inset-4 -rotate-6 rounded-sm", extra: "-translate-y-10 h-16 w-36 -rotate-3 rounded-md" },
};

export function GalleryProjectCard({ project, index }: { project: GalleryProject; index: number }) {
  const visual = visualStyles[project.visual];
  const accent = index % 3 === 1 ? "from-violet-500/20 via-slate-950 to-rose-400/10" : index % 3 === 2 ? "from-rose-400/15 via-slate-950 to-cyan-400/15" : "from-cyan-400/20 via-slate-950 to-violet-500/15";

  return (
    <article className="group flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
      <div className={`relative h-56 overflow-hidden border-b border-slate-800 bg-gradient-to-br ${accent}`}>
        <div className="hero-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-cyan-200/60 bg-slate-950/75 shadow-[0_0_45px_rgba(34,211,238,0.14)] ${visual.frame}`} aria-hidden="true">
          <div className={`absolute border border-violet-300/60 bg-violet-300/10 ${visual.detail}`} />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-rose-300/40 bg-rose-300/5 ${visual.extra}`} aria-hidden="true" />
        <span className="absolute top-4 left-4 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-[0.65rem] font-bold tracking-wider text-slate-200 uppercase">{project.service}</span>
        <span className="absolute right-4 bottom-4 font-mono text-xs text-cyan-200/70" aria-hidden="true">REF/{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold tracking-[0.14em] text-cyan-300 uppercase">{project.category}</p>
          <span className="rounded-full border border-violet-300/20 bg-violet-300/5 px-3 py-1 text-xs text-violet-200">{project.status}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-50">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 border-l-2 border-cyan-300/40 pl-4"><p className="text-xs text-slate-500">Uso o aplicación</p><p className="mt-1 text-sm text-slate-200">{project.application}</p></div>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{tag}</span>)}</div>
        <div className="mt-auto pt-6"><Button href={project.action.href} variant="secondary" className="w-full">{project.action.label}</Button></div>
      </div>
    </article>
  );
}
