import type { Metadata } from "next";

import { ProcessStep } from "@/components/home/ProcessStep";
import { OfferCard } from "@/components/offers/OfferCard";
import { OfferConditionCard } from "@/components/offers/OfferConditionCard";
import { OfferHighlight } from "@/components/offers/OfferHighlight";
import { FaqItem } from "@/components/services/FaqItem";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { offersContent } from "@/data/offers";

export const metadata: Metadata = {
  title: "Ofertas y promociones referenciales | D3D Chile",
  description: "Promociones mock para proyectos de impresión 3D, corte láser y grabado láser personalizados.",
};

export default function OffersPage() {
  const content = offersContent;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute top-0 right-0 size-[34rem] rounded-full bg-rose-500/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <Badge className="border-rose-300/20 bg-rose-300/10 text-rose-200">{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button><Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button></div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">{content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-rose-300" aria-hidden="true" />{message}</li>)}</ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
            <div className="absolute inset-3 -rotate-3 rounded-[3rem] border border-rose-300/20 bg-gradient-to-br from-rose-400/15 via-slate-950 to-cyan-400/15 shadow-[0_0_80px_rgba(251,113,133,0.12)]" />
            <div className="absolute inset-14 rotate-3 rounded-[2.5rem] border border-slate-700 bg-slate-950/90">
              <div className="absolute top-10 left-10 size-24 rounded-full border border-cyan-300/60 bg-cyan-300/5" />
              <div className="absolute top-20 right-9 h-28 w-24 rotate-12 rounded-xl border border-violet-300/60 bg-violet-300/5" />
              <div className="absolute right-12 bottom-10 left-12 h-14 rounded-lg border border-rose-300/50" />
              <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            </div>
            <span className="absolute top-3 right-4 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Propuestas editables</span>
            <span className="absolute bottom-6 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Sin compra en línea</span>
          </div>
        </Container>
      </section>

      <section id="ofertas" className="scroll-mt-20 bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.featured.eyebrow} title={content.featured.title} description={content.featured.description} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{content.featured.items.map((offer, index) => <OfferCard key={offer.name} offer={offer} index={index} />)}</div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.conditions.eyebrow} title={content.conditions.title} description={content.conditions.description} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{content.conditions.items.map((condition, index) => <OfferConditionCard key={condition.title} condition={condition} index={index} />)}</div>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.audiences.eyebrow} title={content.audiences.title} description={content.audiences.description} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{content.audiences.items.map((audience) => <OfferHighlight key={audience.title} audience={audience} />)}</div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={content.process.eyebrow} title={content.process.title} description={content.process.description} />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{content.process.steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}</ol>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} description="Respuestas honestas sobre el alcance de estas promociones iniciales." />
          <div>{content.faq.items.map((item) => <FaqItem key={item.question} item={item} />)}</div>
        </Container>
      </section>

      <section className="border-t border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-rose-300/20 bg-gradient-to-r from-rose-400/15 via-slate-900 to-cyan-400/10 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
            <SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button><Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button></div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
