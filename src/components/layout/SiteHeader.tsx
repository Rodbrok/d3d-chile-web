import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNavigation } from "@/data/navigation";
import { siteContent } from "@/data/site";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="D3D Chile, inicio">
      <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-300 to-violet-600 font-black tracking-tight text-slate-950">
        D3
      </span>
      <span>
        <strong className="block text-base leading-none text-slate-50">{siteContent.name}</strong>
        <span className="mt-1.5 block text-[11px] leading-none text-slate-400">
          {siteContent.descriptor}
        </span>
      </span>
    </Link>
  );
}

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return mainNavigation.map((item) => (
    <Link
      key={item.label}
      href={item.href}
      className={`${mobile ? "block border-b border-slate-800 py-3" : "py-2"} text-sm font-medium transition-colors hover:text-cyan-300 ${item.featured ? "text-rose-300" : "text-slate-300"}`}
    >
      {item.label}
    </Link>
  ));
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b1220]/90 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegación principal">
          <NavigationLinks />
        </nav>
        <div className="hidden lg:block xl:hidden">
          <Button href="/#cotizar">Cotizar proyecto</Button>
        </div>
        <div className="hidden xl:block">
          <Button href="/#cotizar">Cotizar proyecto</Button>
        </div>
        <details className="group relative lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-700 text-slate-50 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Abrir menú</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </summary>
          <nav className="absolute top-14 right-0 w-72 rounded-2xl border border-slate-700 bg-slate-950 p-5 shadow-2xl" aria-label="Navegación móvil">
            <NavigationLinks mobile />
            <Button href="/#cotizar" className="mt-5 w-full">Cotizar proyecto</Button>
          </nav>
        </details>
      </Container>
    </header>
  );
}
