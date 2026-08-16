import type { Metadata } from "next";

import { LaunchCard } from "@/components/launches/LaunchCard";
import { LaunchCategoryCard } from "@/components/launches/LaunchCategoryCard";
import { LaunchTimelineItem } from "@/components/launches/LaunchTimelineItem";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { FaqItem } from "@/components/services/FaqItem";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { launchesContent } from "@/data/launches";

export const metadata: Metadata = {
  title: "Próximos lanzamientos | D3D Chile",
  description: "Productos, diseños y colecciones en preparación con impresión 3D, corte láser y grabado láser de D3D Chile.",
};

export default function LaunchesPage() {
  const content = launchesContent;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute -top-32 right-0 size-[34rem] rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[660px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button><Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button></div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">{content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>)}</ul>
          </div>
          <div className="relative mx-auto h-[25rem] w-full max-w-md" aria-hidden="true">
            <div className="absolute inset-x-8 top-3 bottom-10 rotate-3 rounded-[2.75rem] border border-violet-300/20 bg-gradient-to-br from-cyan-400/15 via-slate-950 to-violet-500/20 shadow-[0_0_90px_rgba(34,211,238,0.1)]" />
            <div className="absolute top-16 right-12 left-4 h-52 -rotate-3 rounded-[2rem] border border-slate-700 bg-slate-950/90">
              <div className="absolute top-10 left-10 size-20 rotate-45 rounded-2xl border border-cyan-300/50 bg-cyan-300/5" />
              <div className="absolute top-9 right-9 h-24 w-16 rounded-t-full border border-violet-300/50 bg-violet-300/5" />
              <div className="absolute right-10 bottom-7 left-10 h-px bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300" />
            </div>
            <div className="absolute right-0 bottom-4 w-52 rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl">
              <div className="flex items-center justify-between text-[0.65rem] font-bold tracking-wider text-slate-400 uppercase"><span>Estado</span><span className="text-cyan-300">En desarrollo</span></div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" /></div>
            </div>
            <span className="absolute top-3 right-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Colección 01</span>
          </div>
        </Container>
      </section>

      <section id="lanzamientos" className="scroll-mt-20 bg-[#0f172a] py-20 sm:py-24">
        <Container><SectionHeader eyebrow={content.featured.eyebrow} title={content.featured.title} description={content.featured.description} /><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{content.featured.items.map((launch, index) => <LaunchCard key={launch.name} launch={launch} index={index} />)}</div></Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container><SectionHeader eyebrow={content.categories.eyebrow} title={content.categories.title} description={content.categories.description} /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{content.categories.items.map((category, index) => <LaunchCategoryCard key={category.title} category={category} index={index} />)}</div></Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24">
        <Container><SectionHeader eyebrow={content.timeline.eyebrow} title={content.timeline.title} description={content.timeline.description} /><ol className="mt-14 grid gap-8 lg:grid-cols-4 lg:gap-12">{content.timeline.steps.map((step, index) => <LaunchTimelineItem key={step.title} step={step} number={index + 1} isLast={index === content.timeline.steps.length - 1} />)}</ol></Container>
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
