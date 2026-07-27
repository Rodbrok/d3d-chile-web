import { Card } from "@/components/ui/Card";
import type { ReferencePrice } from "@/types/services";

export function ReferencePriceCard({ price }: { price: ReferencePrice }) {
  return (
    <Card className="h-full">
      <h3 className="text-lg font-semibold text-slate-50">{price.title}</h3>
      <p className="mt-4 text-lg font-bold text-cyan-300">{price.reference}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{price.detail}</p>
    </Card>
  );
}
