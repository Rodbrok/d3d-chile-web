import type { Metadata } from "next";

import { ContactChannelCard } from "@/components/contact/ContactChannelCard";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { ContactPreviewForm } from "@/components/contact/ContactPreviewForm";
import { ContactTipCard } from "@/components/contact/ContactTipCard";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { FaqItem } from "@/components/services/FaqItem";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactContent } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contacto para proyectos personalizados | D3D Chile",
  description:
    "Contacta a D3D Chile para consultar por impresión 3D, corte láser, grabado láser y productos personalizados.",
};

export default function ContactPage() {
  const content = contactContent;

  return (
    <PublicLayout>
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute -top-24 right-[-12rem] size-[38rem] rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <Badge>{content.hero.eyebrow}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href={content.hero.primaryAction.href}>{content.hero.primaryAction.label}</Button><Button href={content.hero.secondaryAction.href} variant="secondary">{content.hero.secondaryAction.label}</Button></div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">{content.hero.trustMessages.map((message) => <li key={message} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />{message}</li>)}</ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
            <div className="absolute inset-7 rotate-6 rounded-[3.5rem] border border-violet-400/25 bg-gradient-to-br from-violet-500/15 via-slate-950 to-cyan-400/15 shadow-[0_0_90px_rgba(34,211,238,0.1)]" />
            <div className="absolute inset-16 -rotate-3 rounded-[2.75rem] border border-slate-700 bg-slate-950/90 p-8">
              <div className="flex gap-2"><span className="size-2 rounded-full bg-cyan-300" /><span className="size-2 rounded-full bg-violet-400" /><span className="size-2 rounded-full bg-rose-400" /></div>
              <div className="mt-10 space-y-4"><div className="h-3 w-2/3 rounded-full bg-slate-600" /><div className="h-2 w-full rounded-full bg-slate-800" /><div className="h-2 w-4/5 rounded-full bg-slate-800" /></div>
              <div className="mt-9 rounded-2xl border border-cyan-300/25 bg-cyan-300/5 p-5"><div className="size-10 rounded-full border border-cyan-300/40" /><div className="mt-4 h-2 w-3/4 rounded-full bg-cyan-300/30" /></div>
            </div>
            <span className="absolute top-5 right-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Canal directo</span>
            <span className="absolute bottom-8 left-0 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs text-slate-300">Atención a pedido</span>
          </div>
        </Container>
      </section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.channels.eyebrow} title={content.channels.title} description={content.channels.description} /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{content.channels.items.map((channel, index) => <ContactChannelCard key={channel.title} channel={channel} number={index + 1} />)}</div></Container></section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.information.eyebrow} title={content.information.title} description={content.information.description} /><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{content.information.items.map((item) => <ContactInfoCard key={item.label} item={item} />)}</div></Container></section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div className="lg:sticky lg:top-28"><SectionHeader eyebrow={content.previewForm.eyebrow} title={content.previewForm.title} description={content.previewForm.description} /></div><ContactPreviewForm fields={content.previewForm.fields} notice={content.previewForm.notice} action={content.previewForm.action} /></Container></section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24"><Container><SectionHeader eyebrow={content.tips.eyebrow} title={content.tips.title} description={content.tips.description} /><ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{content.tips.items.map((item, index) => <ContactTipCard key={item.title} item={item} number={index + 1} />)}</ol></Container></section>

      <section className="bg-[#0f172a] py-20 sm:py-24"><Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} /><div>{content.faq.items.map((item) => <FaqItem key={item.question} item={item} />)}</div></Container></section>

      <section className="border-t border-slate-800 bg-[#0b1220] py-20 sm:py-24"><Container><div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-violet-500/15 px-6 py-14 text-center sm:px-12 sm:py-16"><div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" /><SectionHeader align="center" eyebrow={content.finalCta.eyebrow} title={content.finalCta.title} description={content.finalCta.description} /><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href={content.finalCta.primaryAction.href}>{content.finalCta.primaryAction.label}</Button><Button href={content.finalCta.secondaryAction.href} variant="secondary">{content.finalCta.secondaryAction.label}</Button></div></div></Container></section>
    </PublicLayout>
  );
}
