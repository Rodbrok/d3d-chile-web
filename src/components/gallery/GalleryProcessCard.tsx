import type { GalleryProcessStep } from "@/types/gallery";

export function GalleryProcessCard({ step, number }: { step: GalleryProcessStep; number: number }) {
  return (
    <li className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
      <span className="font-mono text-sm text-violet-300">{String(number).padStart(2, "0")}</span>
      <h3 className="mt-5 text-lg font-semibold text-slate-50">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
    </li>
  );
}
