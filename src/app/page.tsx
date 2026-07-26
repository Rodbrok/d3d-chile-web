import { PublicLayout } from "@/components/layout/PublicLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/data/site";

export default function Home() {
  return (
    <PublicLayout>
      <section id="inicio" className="relative overflow-hidden border-b border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="absolute top-10 right-[-12rem] size-[34rem] rounded-full bg-violet-600/15 blur-3xl" aria-hidden="true" />
        <Container className="relative grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <Badge>{homeContent.eyebrow}</Badge>
            <h1 className="mt-7 max-w-3xl text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-50 sm:text-6xl lg:text-7xl">
              Transformamos tus ideas en <span className="text-gradient">objetos reales.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{homeContent.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#cotizar">Cotizar proyecto</Button>
              <Button href="#servicios" variant="secondary">Ver servicios</Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-cyan-300" />Fabricación local</span>
              <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-violet-400" />Proyectos personalizados</span>
            </div>
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
          <SectionHeader eyebrow="Qué hacemos" title="Dos tecnologías, infinitas posibilidades." description="Elegimos el proceso adecuado para convertir cada diseño en una solución bien terminada y funcional." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {homeContent.services.map((service) => (
              <Card key={service.title} className="group relative overflow-hidden sm:p-9">
                <div className={`absolute inset-x-0 top-0 h-1 ${service.accent === "cyan" ? "bg-cyan-300" : "bg-violet-500"}`} />
                <div className="flex items-start justify-between gap-6">
                  <span className={`text-xs font-bold tracking-[0.2em] ${service.accent === "cyan" ? "text-cyan-300" : "text-violet-400"}`}>SERVICIO {service.number}</span>
                  <span className="text-4xl font-light text-slate-700 transition-colors group-hover:text-slate-500">↗</span>
                </div>
                <h3 className="mt-14 text-2xl font-semibold text-slate-50">{service.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-slate-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-800 bg-[#0b1220] py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeader eyebrow="Por qué D3D" title="Un proceso simple, enfocado en tu proyecto." />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
            {homeContent.benefits.map((benefit, index) => (
              <div key={benefit} className="flex min-h-28 items-center gap-4 bg-slate-900 p-6">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-cyan-400/30 text-xs font-bold text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-medium text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="cotizar" className="bg-[#0f172a] py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-violet-600/15 px-6 py-14 text-center sm:px-12">
            <div id="proximamente" className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            <SectionHeader align="center" eyebrow="Hagámoslo realidad" title="¿Tienes una idea en mente?" description="Cuéntanos sobre tu proyecto y conversemos sobre la mejor forma de fabricarlo." />
            <Button href="mailto:contacto@d3dchile.cl" className="mt-8">Iniciar una cotización</Button>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
