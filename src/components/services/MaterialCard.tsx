import { Card } from "@/components/ui/Card";
import type { Material } from "@/types/services";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-slate-50">{material.name}</h3>
        <span className="mt-2 size-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]" aria-hidden="true" />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{material.recommendedUse}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-400">
        {material.advantages.map((advantage) => <li key={advantage} className="flex gap-2"><span className="text-cyan-300" aria-hidden="true">—</span>{advantage}</li>)}
      </ul>
      {material.note ? <p className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/5 p-3 text-xs leading-5 text-amber-100/80">{material.note}</p> : null}
    </Card>
  );
}
