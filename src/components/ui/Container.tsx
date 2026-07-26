import type { ComponentWithChildren } from "@/types/site";

export function Container({ children, className = "" }: ComponentWithChildren) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
