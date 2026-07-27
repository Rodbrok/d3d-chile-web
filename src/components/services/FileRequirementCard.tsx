import { Card } from "@/components/ui/Card";
import type { FileRequirement } from "@/types/services";

export function FileRequirementCard({ item, number }: { item: FileRequirement; number: number }) {
  return (
    <Card className="flex h-full gap-5">
      <span className="grid size-9 shrink-0 place-items-center rounded-full border border-violet-400/30 bg-violet-400/10 text-xs font-bold text-violet-200">
        {String(number).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-semibold text-slate-50">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
      </div>
    </Card>
  );
}
