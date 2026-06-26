'use client'

import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

type Item = { src: string; alt: string; caption: string }

const items: Item[] = [
  {
    src: '/auriza-result-hairline.jpeg',
    alt: 'Avant et après AURIZA : densification de la ligne frontale des cheveux',
    caption: 'Ligne frontale — densité visiblement améliorée',
  },
  {
    src: '/auriza-result-crown.jpeg',
    alt: 'Avant et après AURIZA : repousse au sommet du crâne',
    caption: 'Sommet du crâne — repousse après usage régulier',
  },
]

function CompareSlider({ item }: { item: Item }) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div className="select-none">
      <div
        ref={ref}
        className="relative aspect-[4/5] w-full touch-none overflow-hidden rounded-2xl border border-border shadow-[0_24px_60px_-36px_rgba(60,42,18,0.6)]"
        onPointerDown={(e) => {
          dragging.current = true
          ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
          setFromClientX(e.clientX)
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        role="slider"
        aria-label="Comparateur avant / après"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
          if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
        }}
      >
        {/* AFTER (right half of composite) */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${item.src})`, backgroundSize: '200% 100%', backgroundPosition: 'right center' }}
        />
        <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream">
          Après
        </span>

        {/* BEFORE (left half of composite), clipped by slider */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'left center',
              width: ref.current?.clientWidth ? `${ref.current.clientWidth}px` : '100%',
              minWidth: '100%',
            }}
          />
          <span className="absolute left-3 top-3 rounded-full bg-cream/85 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink">
            Avant
          </span>
        </div>

        {/* handle */}
        <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-cream/90" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream p-2 shadow-lg">
            <MoveHorizontal className="size-5 text-ink" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-ink-2">{item.caption}</p>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section id="resultats" className="bg-cream-2 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          center
          eyebrow="Résultats Réels"
          title="Avant / Après"
          description="Glissez le curseur pour découvrir la différence. Résultats obtenus avec un usage régulier."
        />
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.src} delay={i * 0.1}>
              <CompareSlider item={it} />
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-2 opacity-70">
          Les résultats peuvent varier d&apos;une personne à l&apos;autre. Photos partagées par nos clientes.
        </p>
      </div>
    </section>
  )
}
