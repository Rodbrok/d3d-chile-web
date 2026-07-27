import { Card } from "@/components/ui/Card";
import type { UseCase } from "@/types/services";

export function UseCaseCard({ item }: { item: UseCase }) {
  return (
    <Card className="flex h-full flex-col">
      <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold tracking-wide text-cyan-300 uppercase">{item.category}</span>
      <h3 className="mt-5 text-xl font-semibold text-slate-50">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
      <p className="mt-auto border-t border-slate-800 pt-5 text-sm text-slate-400"><span className="font-semibold text-slate-200">Ejemplo:</span> {item.example}</p>
    </Card>
  );
}
