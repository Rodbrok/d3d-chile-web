type BenefitItemProps = {
  number: number;
  title: string;
  description: string;
};

export function BenefitItem({ number, title, description }: BenefitItemProps) {
  return (
    <li className="flex gap-4 bg-slate-900 p-6 sm:p-7">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-300">
        {String(number).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </li>
  );
}
