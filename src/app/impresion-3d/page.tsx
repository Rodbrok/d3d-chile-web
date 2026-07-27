import type { Metadata } from "next";

import { ProcessStep } from "@/components/home/ProcessStep";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { FaqItem } from "@/components/services/FaqItem";
import { GalleryWorkCard } from "@/components/services/GalleryWorkCard";
import { MaterialCard } from "@/components/services/MaterialCard";
import { ReferencePriceCard } from "@/components/services/ReferencePriceCard";
import { UseCaseCard } from "@/components/services/UseCaseCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { printing3dContent } from "@/data/printing3d";

export const metadata: Metadata = {
  title: "Impresión 3D personalizada | D3D Chile",
  description: "Impresión 3D a pedido para piezas funcionales, prototipos, repuestos, figuras y regalos personalizados en Chile.",
};

export default function Printing3dPage() {
  const content = printing3dContent;

  return (
    <PublicLayout>
      <section id="inicio" className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-3xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
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
            <div className="absolute inset-4 rotate-6 rounded-[3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-slate-950 to-violet-500/20 shadow-[0_0_80px_rgba(34,211,238,0.1)]" />
            <div className="absolute inset-16 rounded-[2.5rem] border border-slate-700 bg-slate-950/80">
              {[0, 1, 2, 3, 4].map((layer) => <div key={layer} className="absolute right-12 left-12 h-16 -skew-y-6 rounded-xl border border-cyan-300/50 bg-cyan-300/5" style={{ bottom: `${3.5 + layer * 2.2}rem` }} />)}
              <div className="absolute top-12 left-1/2 h-24 w-28 -translate-x-1/2 rounded-t-full border border-violet-300/50 bg-violet-400/10" />
            </div>
            <span className="absolute top-2 right-8 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Capa por capa</span>
            <span className="absolute bottom-7 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Hecho a medida</span>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.useCases.eyebrow} title={content.useCases.title} description={content.useCases.description} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{content.useCases.items.map((item) => <UseCaseCard key={item.title} item={item} />)}</div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.materials.eyebrow} title={content.materials.title} description={content.materials.description} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{content.materials.items.map((material) => <MaterialCard key={material.name} material={material} />)}</div>
        </Container>
      </section>

      <section id="ejemplos" className="scroll-mt-20 bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.gallery.eyebrow} title={content.gallery.title} description={content.gallery.description} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{content.gallery.items.map((work, index) => <GalleryWorkCard key={work.name} work={work} index={index} />)}</div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.pricing.eyebrow} title={content.pricing.title} description={content.pricing.description} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{content.pricing.items.map((price) => <ReferencePriceCard key={price.title} price={price} />)}</div>
          <p className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-sm leading-6 text-slate-200"><span className="font-bold text-cyan-300">Importante:</span> {content.pricing.note}</p>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.process.eyebrow} title={content.process.title} description={content.process.description} />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{content.process.steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}</ol>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} />
          <div>{content.faq.items.map((item) => <FaqItem key={item.question} item={item} />)}</div>
        </Container>
      </section>

      <section id="cotizar" className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-violet-600/15 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button>
              <Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
