import Link from "next/link";

import type { ContactChannel } from "@/types/contact";

export function ContactChannelCard({ channel, number }: { channel: ContactChannel; number: number }) {
  return (
    <article className="group flex min-h-64 flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition-colors hover:border-cyan-400/40">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-bold tracking-[0.18em] text-cyan-300 uppercase">Canal {String(number).padStart(2, "0")}</span>
        <span className="size-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.8)]" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-50">{channel.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{channel.description}</p>
      {channel.note ? <p className="mt-4 text-xs text-slate-500">{channel.note}</p> : null}
      <Link href={channel.action.href} className="mt-6 text-sm font-bold text-cyan-300 hover:text-cyan-200">{channel.action.label} <span aria-hidden="true">→</span></Link>
    </article>
  );
}
