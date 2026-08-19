import type { Metadata } from "next";

import { FaqGroup } from "@/components/faq/FaqGroup";
import { FaqNoticeCard } from "@/components/faq/FaqNoticeCard";
import { FaqQuickLink } from "@/components/faq/FaqQuickLink";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqContent } from "@/data/faq";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | D3D Chile",
  description: "Respuestas sobre impresión 3D, corte y grabado láser, archivos, cotizaciones y funcionamiento del sitio de D3D Chile.",
};

export default function FrequentlyAskedQuestionsPage() {
  const content = faqContent;
  const categoryCountLabel = `${content.categories.length} ${content.categories.length === 1 ? "categoría" : "categorías"}`;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="absolute -top-40 right-0 size-[34rem] rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[620px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-3xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button><Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button></div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">{content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>)}</ul>
          </div>
          <div className="relative mx-auto h-[390px] w-full max-w-md" aria-hidden="true">
            <div className="absolute inset-4 rotate-3 rounded-[3rem] border border-violet-300/20 bg-gradient-to-br from-violet-400/15 via-slate-950 to-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.1)]" />
            <div className="absolute inset-12 rounded-[2.5rem] border border-slate-700 bg-slate-950/90">
              <div className="absolute top-12 left-1/2 size-24 -translate-x-1/2 rounded-full border border-cyan-300/50 bg-cyan-300/5" />
              <span className="absolute top-[3.1rem] left-1/2 -translate-x-1/2 text-6xl font-light text-cyan-200">?</span>
              <div className="absolute right-10 bottom-16 left-10 space-y-4"><div className="h-2 rounded-full bg-slate-700" /><div className="h-2 w-4/5 rounded-full bg-slate-800" /><div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-400/70 to-violet-400/70" /></div>
            </div>
            <span className="absolute top-1 right-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">{categoryCountLabel}</span>
            <span className="absolute bottom-2 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Respuestas directas</span>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container><SectionHeader eyebrow={content.quickLinks.eyebrow} title={content.quickLinks.title} description={content.quickLinks.description} /><nav aria-label="Categorías de preguntas frecuentes" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.categories.map((category, index) => <FaqQuickLink key={category.id} category={category} number={index + 1} />)}</nav></Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container><SectionHeader eyebrow="Todas las respuestas" title="Información para preparar tu proyecto" description="Abre cada pregunta para conocer el alcance actual de nuestros servicios y de esta vitrina digital." /><div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">{content.categories.map((category, index) => <FaqGroup key={category.id} category={category} number={index + 1} />)}</div></Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container><FaqNoticeCard notice={content.notice} /></Container></section>

      <section className="border-t border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container><div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-violet-400/10 px-6 py-14 text-center sm:px-12 sm:py-16"><div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" /><SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} /><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button><Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button></div></div></Container>
      </section>
    </PublicLayout>
  );
}
