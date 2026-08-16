import type { LaunchTimelineStep } from "@/types/launches";

export function LaunchTimelineItem({ step, number, isLast }: { step: LaunchTimelineStep; number: number; isLast: boolean }) {
  return (
    <li className="relative pl-16 lg:pl-0 lg:pt-16">
      {!isLast ? <span className="absolute top-11 bottom-[-2rem] left-5 w-px bg-gradient-to-b from-cyan-300/70 to-slate-700 lg:top-5 lg:right-[-1.5rem] lg:bottom-auto lg:left-10 lg:h-px lg:w-auto" aria-hidden="true" /> : null}
      <span className="absolute top-0 left-0 z-10 grid size-11 place-items-center rounded-full border border-cyan-300/40 bg-[#0b1220] font-mono text-sm font-bold text-cyan-200 lg:left-0">{String(number).padStart(2, "0")}</span>
      <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
    </li>
  );
}
