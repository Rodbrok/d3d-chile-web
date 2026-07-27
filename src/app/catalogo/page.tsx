import type { Metadata } from "next";

import { CatalogProductCard } from "@/components/catalog/CatalogProductCard";
import { CategoryPill } from "@/components/catalog/CategoryPill";
import { ProcessStep } from "@/components/home/ProcessStep";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { catalogContent } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Catálogo de productos personalizados | D3D Chile",
  description:
    "Catálogo referencial de productos y trabajos personalizados de impresión 3D, corte y grabado láser.",
};

export default function CatalogPage() {
  const content = catalogContent;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute top-0 right-0 size-[34rem] rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button>
              <Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              {content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>)}
            </ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
            <div className="absolute inset-3 rotate-3 rounded-[3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/15 via-slate-950 to-violet-400/15 shadow-[0_0_80px_rgba(34,211,238,0.12)]" />
            <div className="absolute inset-14 -rotate-3 rounded-[2.5rem] border border-slate-700 bg-slate-950/90">
              <div className="absolute top-10 left-10 h-28 w-24 rounded-2xl border border-cyan-300/60 bg-cyan-300/5" />
              <div className="absolute top-20 right-9 size-24 rotate-45 rounded-xl border border-violet-300/60 bg-violet-300/5" />
              <div className="absolute right-12 bottom-10 left-12 h-16 rounded-full border border-rose-300/40" />
              <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            </div>
            <span className="absolute top-3 right-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">10 referencias</span>
            <span className="absolute bottom-6 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Fabricación a pedido</span>
          </div>
        </Container>
      </section>

      <section id="categorias" className="scroll-mt-20 bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.categories.eyebrow} title={content.categories.title} description={content.categories.description} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{content.categories.items.map((category) => <CategoryPill key={category.name} category={category} />)}</ul>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.products.eyebrow} title={content.products.title} description={content.products.description} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{content.products.items.map((product, index) => <CatalogProductCard key={product.name} product={product} index={index} />)}</div>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-12 sm:py-16">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-amber-300/5 p-7 sm:p-9">
            <div className="absolute top-0 left-8 h-px w-32 bg-gradient-to-r from-amber-200 to-transparent" aria-hidden="true" />
            <p className="text-xs font-bold tracking-[0.16em] text-amber-200 uppercase">Información comercial</p>
            <p className="mt-4 max-w-5xl text-lg leading-8 text-slate-200">{content.notice}</p>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.process.eyebrow} title={content.process.title} description={content.process.description} />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{content.process.steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}</ol>
        </Container>
      </section>

      <section id="cotizar" className="scroll-mt-20 bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-violet-400/10 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button><Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button></div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
