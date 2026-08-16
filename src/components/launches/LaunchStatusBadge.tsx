import type { LaunchStatus } from "@/types/launches";

const statusStyles: Record<LaunchStatus, string> = {
  "En diseño": "border-violet-300/25 bg-violet-300/10 text-violet-200",
  "En prueba": "border-amber-300/25 bg-amber-300/10 text-amber-200",
  "Próximamente": "border-cyan-300/25 bg-cyan-300/10 text-cyan-200",
  "Disponible bajo consulta": "border-emerald-300/25 bg-emerald-300/10 text-emerald-200",
};

export function LaunchStatusBadge({ status }: { status: LaunchStatus }) {
  return <span className={`rounded-full border px-3 py-1.5 text-[0.65rem] font-bold tracking-wider uppercase ${statusStyles[status]}`}>{status}</span>;
}
