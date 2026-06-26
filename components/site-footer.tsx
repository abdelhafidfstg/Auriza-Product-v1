import { Mail, MessageCircle, Music2 } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { site, whatsappLink } from '@/lib/site'

const nav = [
  { href: '#bienfaits', label: 'Bienfaits' },
  { href: '#ingredients', label: 'Ingrédients' },
  { href: '#resultats', label: 'Résultats' },
  { href: '#utilisation', label: 'Utilisation' },
]

const socials = [
  { icon: MessageCircle, href: whatsappLink('Bonjour AURIZA'), label: 'WhatsApp' },
  { icon: InstagramIcon, href: site.instagram, label: 'Instagram' },
  { icon: Music2, href: site.tiktok, label: 'TikTok' },
  { icon: Mail, href: `mailto:${site.email}`, label: 'E-mail' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.24_0.03_65)] py-16 text-cream/70">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl tracking-[0.16em] text-cream">
              AUR<span className="lowercase">i</span>ZA
            </p>
            <p className="mt-2 font-serif italic text-gold-soft">{site.slogan}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Huile capillaire premium 100% naturelle, fabriquée au Maroc pour des cheveux
              plus forts et plus sains.
            </p>
          </div>

          <nav aria-label="Pied de page">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-cream">
              Naviguer
            </h2>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm transition-colors hover:text-gold-soft">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-cream">
              Nous suivre
            </h2>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-soft hover:text-gold-soft"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AURIZA. Tous droits réservés.</p>
          <p>Healthy Hair By Touch Natural</p>
        </div>
      </div>
    </footer>
  )
}
