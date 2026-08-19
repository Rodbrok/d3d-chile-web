export function GalleryFilterPill({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-medium ${active ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200" : "border-slate-700 bg-slate-900/60 text-slate-300"}`}
    >
      {label}
    </span>
  );
}
