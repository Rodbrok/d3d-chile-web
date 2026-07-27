import { Card } from "@/components/ui/Card";
import type { QuoteCard } from "@/types/quote";

export function QuoteFactorCard({ item }: { item: QuoteCard }) {
  return (
    <Card className="relative overflow-hidden">
      <span className="absolute top-0 left-7 h-px w-16 bg-gradient-to-r from-violet-300 to-transparent" aria-hidden="true" />
      <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
    </Card>
  );
}
