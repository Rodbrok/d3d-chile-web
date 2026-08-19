import type { Metadata } from "next";

import { GalleryFilterPill } from "@/components/gallery/GalleryFilterPill";
import { GalleryProcessCard } from "@/components/gallery/GalleryProcessCard";
import { GalleryProjectCard } from "@/components/gallery/GalleryProjectCard";
import { GalleryStatCard } from "@/components/gallery/GalleryStatCard";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { FaqItem } from "@/components/services/FaqItem";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { galleryContent } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galería de proyectos | D3D Chile",
  description: "Referencias visuales simuladas de impresión 3D, corte láser y grabado láser para inspirar proyectos fabricados a medida.",
};

export default function GalleryPage() {
  const content = galleryContent;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute -top-32 right-0 size-[34rem] rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[660px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button><Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button></div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">{content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>)}</ul>
          </div>
          <div className="relative mx-auto h-[27rem] w-full max-w-lg" aria-hidden="true">
            <div className="absolute inset-6 rotate-3 rounded-[2.75rem] border border-violet-300/20 bg-gradient-to-br from-cyan-400/15 via-slate-950 to-violet-500/20 shadow-[0_0_90px_rgba(34,211,238,0.1)]" />
            <div className="absolute top-2 left-7 h-48 w-48 -rotate-6 rounded-3xl border border-cyan-300/40 bg-slate-950/80"><div className="absolute inset-10 rotate-45 rounded-2xl border border-violet-300/50 bg-violet-300/10" /></div>
            <div className="absolute right-4 bottom-5 h-48 w-56 rotate-3 rounded-3xl border border-rose-300/30 bg-slate-950/90"><div className="absolute top-10 left-1/2 h-24 w-28 -translate-x-1/2 rounded-t-full border border-cyan-300/50" /><div className="absolute right-8 bottom-7 left-8 h-px bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300" /></div>
            <div className="absolute top-40 right-16 rounded-2xl border border-slate-700 bg-slate-900/95 px-5 py-4 shadow-2xl"><p className="text-[0.65rem] font-bold tracking-wider text-slate-500 uppercase">Colección visual</p><p className="mt-1 font-mono text-sm text-cyan-200">09 referencias</p></div>
          </div>
        </Container>
      </section>

      <section id="trabajos" className="scroll-mt-20 bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Trabajos simulados" title="Ideas organizadas para encontrar un punto de partida" description="Los filtros son categorías visuales informativas. Por ahora no modifican el contenido de la galería." />
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Categorías informativas">{content.filters.map((filter, index) => <GalleryFilterPill key={filter} label={filter} active={index === 0} />)}</div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{content.projects.map((project, index) => <GalleryProjectCard key={project.name} project={project} index={index} />)}</div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-16 sm:py-20">
        <Container><SectionHeader eyebrow="Alcance referencial" title="Una vitrina pensada para proyectos a pedido" description="Estas métricas describen el enfoque del servicio y no corresponden a cifras históricas de ventas o clientes." /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{content.stats.map((stat) => <GalleryStatCard key={stat.label} stat={stat} />)}</div></Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container><SectionHeader eyebrow={content.process.eyebrow} title={content.process.title} description={content.process.description} /><ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{content.process.steps.map((step, index) => <GalleryProcessCard key={step.title} step={step} number={index + 1} />)}</ol></Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container><div className="relative overflow-hidden rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-slate-900 to-violet-500/10 p-7 sm:p-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div className="absolute top-0 left-10 h-px w-48 bg-gradient-to-r from-amber-300 to-transparent" /><SectionHeader eyebrow={content.notice.eyebrow} title={content.notice.title} description={content.notice.description} /><ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0">{content.notice.items.map((item, index) => <li key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/40 p-4 text-sm leading-6 text-slate-300"><span className="font-mono text-amber-200">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></div></Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} description={content.faq.description} /><div>{content.faq.items.map((item) => <FaqItem key={item.question} item={item} />)}</div></Container>
      </section>

      <section className="border-t border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container><div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-violet-500/15 px-6 py-14 text-center sm:px-12 sm:py-16"><div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" /><SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} /><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button><Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button></div></div></Container>
      </section>
    </PublicLayout>
  );
}
