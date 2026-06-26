'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, Droplet, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const proof = [
  { value: '100%', label: 'naturel & végan' },
  { value: '4–6 sem.', label: 'premiers résultats' },
  { value: '100 ml', label: '~2 mois de soin' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* soft background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 90% at 78% 24%, color-mix(in oklab, var(--gold-soft) 55%, transparent), transparent 55%), radial-gradient(90% 80% at 10% 88%, color-mix(in oklab, var(--sage) 16%, transparent), transparent 60%), var(--cream)',
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-deep">
              Huile capillaire · 100% naturelle · Maroc
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-balance text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              AURIZA <span className="italic text-gold-deep">Hair Oil</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 font-serif text-xl italic text-gold-deep">
              Révélez la beauté naturelle de vos cheveux
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-2">
              AURIZA est une huile capillaire premium formulée à partir d&apos;huiles
              naturelles soigneusement sélectionnées pour nourrir, renforcer et sublimer
              les cheveux dès la racine jusqu&apos;aux pointes.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Commander Maintenant
              </a>
              <a
                href="#bienfaits"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-ink transition-all hover:border-gold hover:text-gold-deep"
              >
                Découvrir les Bienfaits
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {proof.map((p) => (
                <li key={p.label}>
                  <span className="block font-serif text-2xl font-semibold text-ink">
                    {p.value}
                  </span>
                  <span className="text-sm text-ink-2">{p.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto w-full max-w-[420px]"
          >
            <Image
              src="/auriza-bottle.jpeg"
              alt="Flacon d'huile capillaire AURIZA 100 ml avec compte-gouttes"
              width={840}
              height={1200}
              priority
              className="w-full rounded-2xl shadow-[0_28px_70px_-32px_rgba(60,42,18,0.6)]"
            />
          </motion.div>

          {/* floating mini badges */}
          <div className="pointer-events-none absolute -left-2 top-10 hidden rounded-2xl border border-border bg-paper/90 px-4 py-3 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-2">
            <Leaf className="size-5 text-sage" />
            <span className="text-sm font-medium text-ink">100% Naturel</span>
          </div>
          <div className="pointer-events-none absolute -right-2 top-1/2 hidden rounded-2xl border border-border bg-paper/90 px-4 py-3 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-2">
            <Droplet className="size-5 text-gold-deep" />
            <span className="text-sm font-medium text-ink">Pression à froid</span>
          </div>
          <div className="pointer-events-none absolute bottom-8 left-6 hidden rounded-2xl border border-border bg-paper/90 px-4 py-3 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-2">
            <Sparkles className="size-5 text-gold-deep" />
            <span className="text-sm font-medium text-ink">Nourrit &amp; renforce</span>
          </div>
        </div>
      </div>
    </section>
  )
}
