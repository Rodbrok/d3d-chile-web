import { BenefitItem } from "@/components/home/BenefitItem";
import { FeaturedWorkCard } from "@/components/home/FeaturedWorkCard";
import { ProcessStep } from "@/components/home/ProcessStep";
import { ServiceCard } from "@/components/home/ServiceCard";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/data/home";

export default function Home() {
  return (
    <PublicLayout>
      <section id="inicio" className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute top-10 right-[-12rem] size-[34rem] rounded-full bg-violet-600/15 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <Badge>{homeContent.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-3xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">
              {homeContent.hero.title} <span className="text-gradient">{homeContent.hero.highlightedTitle}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{homeContent.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={homeContent.hero.primaryAction.href}>{homeContent.hero.primaryAction.label}</Button>
              <Button href={homeContent.hero.secondaryAction.href} variant="secondary">{homeContent.hero.secondaryAction.label}</Button>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              {homeContent.hero.trustMessages.map((message) => (
                <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block" aria-hidden="true">
            <div className="absolute inset-8 rotate-6 rounded-[3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-slate-900 to-violet-500/20 shadow-[0_0_80px_rgba(34,211,238,0.08)]" />
            <div className="absolute inset-20 grid place-items-center rounded-[2.5rem] border border-slate-700 bg-slate-950/80">
              <div className="relative size-44 rotate-[-6deg]">
                <div className="absolute inset-x-7 top-3 h-20 skew-y-[-25deg] border border-cyan-300/60 bg-cyan-300/10" />
                <div className="absolute right-1 bottom-5 left-14 h-24 skew-y-[25deg] border border-violet-400/60 bg-violet-500/10" />
                <div className="absolute bottom-5 left-1 h-24 w-14 skew-y-[-25deg] border border-rose-300/50 bg-rose-400/10" />
              </div>
            </div>
            <span className="absolute top-2 right-10 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Diseño</span>
            <span className="absolute bottom-7 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Fabricación</span>
          </div>
        </Container>
      </section>

      <section id="servicios" className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={homeContent.services.eyebrow} title={homeContent.services.title} description={homeContent.services.description} />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {homeContent.services.items.map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </Container>
      </section>

      <section id="trabajos" className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={homeContent.featuredWorks.eyebrow} title={homeContent.featuredWorks.title} description={homeContent.featuredWorks.description} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {homeContent.featuredWorks.items.map((work) => <FeaturedWorkCard key={work.title} work={work} />)}
          </div>
        </Container>
      </section>

      <section id="proceso" className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow={homeContent.process.eyebrow} title={homeContent.process.title} description={homeContent.process.description} />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {homeContent.process.steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} />)}
          </ol>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <SectionHeader eyebrow={homeContent.benefits.eyebrow} title={homeContent.benefits.title} />
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
            {homeContent.benefits.items.map((benefit, index) => <BenefitItem key={benefit.title} number={index + 1} {...benefit} />)}
          </ul>
        </Container>
      </section>

      <section id="cotizar" className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-violet-600/15 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div id="proximamente" className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <SectionHeader align="center" eyebrow={homeContent.finalCta.eyebrow} title={homeContent.finalCta.title} description={homeContent.finalCta.description} />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={homeContent.finalCta.primaryAction.href}>{homeContent.finalCta.primaryAction.label}</Button>
              <Button href={homeContent.finalCta.secondaryAction.href} variant="secondary">{homeContent.finalCta.secondaryAction.label}</Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
