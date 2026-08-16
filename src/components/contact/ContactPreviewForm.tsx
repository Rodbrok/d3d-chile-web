import { Button } from "@/components/ui/Button";
import type { ContactField } from "@/types/contact";

type Props = { fields: ContactField[]; notice: string; action: { label: string; href: string } };

export function ContactPreviewForm({ fields, notice, action }: Props) {
  return (
    <div className="rounded-[2rem] border border-slate-700 bg-slate-950/70 p-5 shadow-2xl shadow-slate-950/40 sm:p-8">
      <div className="mb-7 flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100">
        <span className="mt-2 size-2 shrink-0 rounded-full bg-amber-300" aria-hidden="true" /><p>{notice}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.label} className={`${field.kind === "textarea" ? "sm:col-span-2" : ""} block text-sm font-semibold text-slate-200`}>
            {field.label}
            {field.kind === "textarea" ? (
              <textarea disabled rows={4} placeholder={field.placeholder} className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 font-normal text-slate-500 disabled:cursor-not-allowed" />
            ) : field.kind === "select" ? (
              <select disabled defaultValue="" className="mt-2 min-h-12 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 font-normal text-slate-500 disabled:cursor-not-allowed"><option value="">{field.placeholder}</option></select>
            ) : (
              <input disabled type={field.kind === "email" ? "email" : "text"} placeholder={field.placeholder} className="mt-2 min-h-12 w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 font-normal text-slate-500 disabled:cursor-not-allowed" />
            )}
          </label>
        ))}
      </div>
      <Button href={action.href} className="mt-7 w-full sm:w-auto">{action.label}</Button>
      <p className="mt-4 text-xs leading-5 text-slate-500">Vista informativa: los campos están deshabilitados y no envían ni guardan datos.</p>
    </div>
  );
}
