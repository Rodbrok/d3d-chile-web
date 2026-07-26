import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "coral";
  className?: string;
};

const variants = {
  primary:
    "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)]",
  secondary:
    "border border-slate-700 bg-slate-900/60 text-slate-50 hover:border-cyan-400/60 hover:bg-slate-800",
  coral: "bg-rose-400 text-slate-950 hover:bg-rose-300",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
