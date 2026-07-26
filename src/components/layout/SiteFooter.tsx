import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/data/navigation";
import { siteContent } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-slate-800 bg-slate-950">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-xl font-bold text-slate-50">{siteContent.name}</p>
            <p className="mt-4 text-sm leading-6 text-slate-400">{siteContent.description}</p>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-50">Explora</h2>
            <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3" aria-label="Navegación del pie">
              {footerNavigation.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-slate-400 hover:text-cyan-300">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-50">Contacto</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
              <p>{siteContent.contact.email}</p>
              <p>{siteContent.contact.phone}</p>
              <p>{siteContent.contact.location}</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteContent.name}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
