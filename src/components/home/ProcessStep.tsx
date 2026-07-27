type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className="relative border-t border-slate-700 pt-7">
      <span className="absolute -top-4 left-0 grid size-8 place-items-center rounded-full border border-cyan-400/40 bg-[#0b1220] text-xs font-bold text-cyan-300">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </li>
  );
}
