import type { GalleryWork } from "@/types/services";

const shapes: Record<GalleryWork["visual"], string> = {
  figure: "rounded-[45%_45%_32%_32%] before:absolute before:left-1/2 before:top-[-35%] before:size-12 before:-translate-x-1/2 before:rounded-full",
  support: "rounded-lg before:absolute before:-top-8 before:left-3 before:h-10 before:w-5 before:rounded-t-md",
  part: "rounded-full before:absolute before:inset-5 before:rounded-full before:bg-slate-950",
  keyring: "rounded-2xl before:absolute before:-top-7 before:left-1/2 before:size-8 before:-translate-x-1/2 before:rounded-full before:border-[6px] before:border-cyan-300",
  organizer: "rounded-b-xl before:absolute before:-top-7 before:left-2 before:h-9 before:w-5 before:rounded-t-md after:absolute after:-top-10 after:right-3 after:h-12 after:w-5 after:rounded-t-md",
  prototype: "skew-x-[-8deg] rounded-lg before:absolute before:-right-5 before:top-4 before:size-10 before:rounded-md",
};

export function GalleryWorkCard({ work, index }: { work: GalleryWork; index: number }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
      <div className="hero-grid relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-slate-950 to-violet-500/15" aria-hidden="true">
        <div className={`relative h-24 w-24 border border-cyan-200/70 bg-gradient-to-br from-cyan-300/30 to-violet-500/30 shadow-[0_0_45px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110 before:border before:border-violet-300/60 before:bg-violet-400/30 after:border after:border-cyan-200/60 after:bg-cyan-300/30 ${shapes[work.visual]}`} />
        <span className="absolute top-5 left-5 text-xs font-bold tracking-[0.2em] text-slate-500">0{index + 1}</span>
      </div>
      <div className="p-6">
        <p className="text-xs font-bold tracking-wider text-cyan-300 uppercase">{work.type}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-50">{work.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{work.description}</p>
      </div>
    </article>
  );
}
