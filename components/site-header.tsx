'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '@/lib/site'

const links = [
  { href: '#bienfaits', label: 'Bienfaits' },
  { href: '#ingredients', label: 'Ingrédients' },
  { href: '#resultats', label: 'Résultats' },
  { href: '#utilisation', label: 'Utilisation' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 py-3 shadow-[0_1px_0_var(--border)] backdrop-blur-md'
          : 'py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex flex-col leading-none" aria-label="AURIZA accueil">
          <span className="font-serif text-2xl tracking-[0.16em] text-ink">
            AUR<span className="lowercase">i</span>ZA
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.24em] text-gold-deep">
            {site.slogan}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1 text-sm tracking-wide text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:bg-ink/90 sm:inline-flex"
          >
            Commander
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-border bg-cream p-4 shadow-lg lg:hidden"
          aria-label="Navigation mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-base text-ink-2 last:border-0 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
