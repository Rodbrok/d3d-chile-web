import type { Metadata } from "next";

import { ProcessStep } from "@/components/home/ProcessStep";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { QuoteFactorCard } from "@/components/quote/QuoteFactorCard";
import { QuotePreviewForm } from "@/components/quote/QuotePreviewForm";
import { QuoteRequirementCard } from "@/components/quote/QuoteRequirementCard";
import { QuoteServiceCard } from "@/components/quote/QuoteServiceCard";
import { FaqItem } from "@/components/services/FaqItem";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { quoteContent } from "@/data/quote";

export const metadata: Metadata = {
  title: "Cotiza tu proyecto personalizado | D3D Chile",
  description: "Conoce qué información necesitas para cotizar impresión 3D, corte láser, grabado y productos personalizados en D3D Chile.",
};

export default function QuotePage() {
  const content = quoteContent;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute top-0 right-[-10rem] size-[34rem] rounded-full bg-violet-500/15 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button><Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button></div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">{content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>)}</ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
            <div className="absolute inset-4 rotate-6 rounded-[3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 via-slate-950 to-violet-500/20 shadow-[0_0_80px_rgba(34,211,238,0.1)]" />
            <div className="absolute inset-16 -rotate-3 rounded-[2.5rem] border border-slate-700 bg-slate-950/90 p-8">
              <div className="h-3 w-1/2 rounded-full bg-cyan-300/50" /><div className="mt-7 h-2 w-full rounded-full bg-slate-700" /><div className="mt-4 h-2 w-4/5 rounded-full bg-slate-700" />
              <div className="mt-9 grid grid-cols-2 gap-4"><div className="h-16 rounded-xl border border-violet-400/40 bg-violet-400/5" /><div className="h-16 rounded-xl border border-cyan-400/40 bg-cyan-400/5" /></div>
              <div className="mt-6 h-10 rounded-full bg-gradient-to-r from-cyan-400/70 to-violet-500/70" />
            </div>
            <span className="absolute top-4 right-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Solicitud guiada</span>
            <span className="absolute bottom-8 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Evaluación personalizada</span>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.services.eyebrow} title={content.services.title} description={content.services.description} /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{content.services.items.map((service, index) => <QuoteServiceCard key={service.title} service={service} number={index + 1} />)}</div></Container></section>

      <section id="informacion" className="scroll-mt-20 border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.requirements.eyebrow} title={content.requirements.title} description={content.requirements.description} /><ul className="mt-12 grid gap-4 md:grid-cols-2">{content.requirements.items.map((item, index) => <QuoteRequirementCard key={item.title} item={item} number={index + 1} />)}</ul></Container></section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div className="lg:sticky lg:top-28"><SectionHeader eyebrow={content.previewForm.eyebrow} title={content.previewForm.title} description={content.previewForm.description} /></div><QuotePreviewForm fields={content.previewForm.fields} notice={content.previewForm.notice} action={content.previewForm.action} /></Container></section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.factors.eyebrow} title={content.factors.title} description={content.factors.description} /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{content.factors.items.map((item) => <QuoteFactorCard key={item.title} item={item} />)}</div></Container></section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.process.eyebrow} title={content.process.title} description={content.process.description} /><ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{content.process.steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}</ol></Container></section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24"><Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} /><div>{content.faq.items.map((item) => <FaqItem key={item.question} item={item} />)}</div></Container></section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container><div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-violet-500/15 px-6 py-14 text-center sm:px-12 sm:py-16"><div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" /><SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} /><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button><Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button></div></div></Container></section>
    </PublicLayout>
  );
}
