import type { CatalogCategory } from "@/types/catalog";

export function CategoryPill({ category }: { category: CatalogCategory }) {
  return (
    <li className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 transition-colors hover:border-cyan-400/30">
      <p className="font-semibold text-slate-100">{category.name}</p>
      <p className="mt-1 text-sm leading-5 text-slate-400">{category.description}</p>
    </li>
  );
}
