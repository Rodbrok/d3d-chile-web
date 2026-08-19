import type { GalleryStat } from "@/types/gallery";

export function GalleryStatCard({ stat }: { stat: GalleryStat }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <p className="text-3xl font-semibold tracking-tight text-cyan-200">{stat.value}</p>
      <h3 className="mt-2 font-semibold text-slate-100">{stat.label}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{stat.description}</p>
    </article>
  );
}
