import type { LaserExample } from "@/types/services";

const shapes: Record<LaserExample["visual"], string> = {
  sign: "h-24 w-40 rounded-lg before:absolute before:-top-8 before:left-6 before:h-8 before:border-l before:border-violet-300/60 after:absolute after:-top-8 after:right-6 after:h-8 after:border-l after:border-violet-300/60",
  keyring: "h-24 w-16 rounded-2xl before:absolute before:-top-8 before:left-1/2 before:size-9 before:-translate-x-1/2 before:rounded-full before:border-[5px] before:border-cyan-200/70",
  logo: "size-28 rotate-45 rounded-2xl before:absolute before:inset-6 before:rounded-full before:border before:border-violet-200/70",
  box: "h-24 w-32 -skew-y-6 rounded-md before:absolute before:-top-8 before:left-3 before:h-8 before:w-32 before:skew-y-12 before:border before:border-cyan-200/50",
  tag: "h-28 w-20 rounded-t-full rounded-b-lg before:absolute before:top-4 before:left-1/2 before:size-3 before:-translate-x-1/2 before:rounded-full before:bg-slate-950",
  assembly: "h-20 w-36 rounded-lg before:absolute before:-top-9 before:left-7 before:h-9 before:w-20 before:border before:border-violet-200/60 after:absolute after:-bottom-7 after:right-5 after:h-7 after:w-24 after:border after:border-cyan-200/60",
};

export function LaserExampleCard({ work, index }: { work: LaserExample; index: number }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70">
      <div className="hero-grid relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-violet-500/15 via-slate-950 to-cyan-400/10" aria-hidden="true">
        <div className={`relative border border-cyan-200/60 bg-gradient-to-br from-violet-400/25 to-cyan-300/20 shadow-[0_0_45px_rgba(167,139,250,0.18)] transition-transform duration-300 group-hover:scale-105 before:bg-violet-400/10 after:bg-cyan-300/10 ${shapes[work.visual]}`} />
        <span className="absolute top-5 left-5 text-xs font-bold tracking-[0.2em] text-slate-500">0{index + 1}</span>
        <span className="absolute right-5 bottom-5 h-px w-16 bg-gradient-to-r from-transparent to-violet-300/70" />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold tracking-wider text-violet-300 uppercase">{work.type}</p>
        <h3 className="mt-2 text-lg font-semibold text-slate-50">{work.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{work.description}</p>
      </div>
    </article>
  );
}
