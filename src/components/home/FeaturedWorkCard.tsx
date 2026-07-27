import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/data/home";

type Work = (typeof homeContent.featuredWorks.items)[number];

const visualStyles = {
  figure: "before:h-28 before:w-20 before:rounded-[45%_45%_35%_35%] before:bg-gradient-to-br before:from-cyan-300/80 before:to-violet-500/50 after:size-16 after:rounded-full after:border-[10px] after:border-slate-950/50",
  sign: "before:h-24 before:w-44 before:rotate-[-4deg] before:rounded-lg before:border before:border-amber-200/40 before:bg-gradient-to-br before:from-amber-300/50 before:to-amber-900/40 after:h-px after:w-28 after:bg-amber-100/70",
  keyrings: "before:size-24 before:rounded-full before:border-[14px] before:border-violet-400/60 after:size-14 after:translate-x-12 after:translate-y-5 after:rounded-full after:border-[10px] after:border-cyan-300/60",
  prototype: "before:size-28 before:rotate-12 before:border before:border-cyan-200/50 before:bg-gradient-to-br before:from-cyan-300/50 before:to-slate-950 after:size-20 after:-translate-x-10 after:translate-y-8 after:-rotate-6 after:border after:border-violet-300/50 after:bg-violet-500/30",
};

export function FeaturedWorkCard({ work }: { work: Work }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className={`relative grid h-52 place-items-center overflow-hidden border-b border-slate-800 bg-slate-950/70 before:absolute after:absolute ${visualStyles[work.visual]}`} aria-hidden="true">
        <div className="hero-grid absolute inset-0 opacity-30" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold tracking-[0.16em] text-cyan-300 uppercase">{work.service}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-50">{work.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{work.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {work.tags.map((tag) => <Badge key={tag} className="px-3 py-1 text-[10px]">{tag}</Badge>)}
        </div>
        <p className="mt-5 border-t border-slate-800 pt-4 text-sm font-semibold text-slate-200">{work.price}</p>
      </div>
    </Card>
  );
}
