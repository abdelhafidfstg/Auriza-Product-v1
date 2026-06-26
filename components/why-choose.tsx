import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reasons = [
  "100% d'origine naturelle",
  'Première pression à froid',
  'Sans parabènes',
  'Sans silicones',
  'Sans huiles minérales',
  'Convient aux femmes et aux hommes',
  'Convient à tous les types de cheveux',
]

export function WhyChoose() {
  return (
    <section id="pourquoi" className="py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl shadow-[0_28px_70px_-32px_rgba(60,42,18,0.6)]">
            <Image
              src="/auriza-splash.jpeg"
              alt="Logo AURIZA dans une goutte d'huile dorée"
              width={1000}
              height={1000}
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="La promesse AURIZA"
            title="Pourquoi choisir AURIZA ?"
            description="Un soin honnête, pur et efficace — pensé pour respecter vos cheveux et votre peau."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r} delay={(i % 2) * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                    <Check className="size-4" />
                  </span>
                  <span className="text-[15px] font-medium text-ink">{r}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
