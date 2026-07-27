import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/data/home";

type Service = (typeof homeContent.services.items)[number];

export function ServiceCard({ service }: { service: Service }) {
  const isCyan = service.accent === "cyan";

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden sm:p-9">
      <div className={`absolute inset-x-0 top-0 h-1 ${isCyan ? "bg-cyan-300" : "bg-violet-500"}`} />
      <div className="flex items-center justify-between gap-6">
        <span className={`text-xs font-bold tracking-[0.2em] ${isCyan ? "text-cyan-300" : "text-violet-400"}`}>
          SERVICIO {service.number}
        </span>
        <span className={`h-px w-16 transition-all group-hover:w-24 ${isCyan ? "bg-cyan-300/60" : "bg-violet-400/60"}`} aria-hidden="true" />
      </div>
      <h3 className="mt-10 text-2xl font-semibold text-slate-50">{service.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
      <p className="mt-5 border-l border-slate-700 pl-4 text-sm text-slate-400">{service.examples}</p>
      <Button href={service.href} variant="secondary" className="mt-8 self-start">
        {service.actionLabel}
      </Button>
    </Card>
  );
}
