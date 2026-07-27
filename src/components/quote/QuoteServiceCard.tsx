import Link from "next/link";

import { Card } from "@/components/ui/Card";
import type { QuoteService } from "@/types/quote";

export function QuoteServiceCard({ service, number }: { service: QuoteService; number: number }) {
  return (
    <Card className="group flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-cyan-300">{String(number).padStart(2, "0")}</span>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-300/70 to-transparent" aria-hidden="true" />
      </div>
      <h3 className="mt-7 text-xl font-semibold text-slate-50">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
      <p className="mt-5 border-l border-violet-400/50 pl-4 text-sm leading-6 text-slate-400">{service.examples}</p>
      <Link href={service.action.href} className="mt-auto pt-7 text-sm font-bold text-cyan-300 transition-colors hover:text-cyan-200">
        {service.action.label} <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}
