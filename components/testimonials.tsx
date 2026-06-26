import { Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const reviews = [
  {
    name: 'Salma B.',
    city: 'Casablanca',
    rating: 5,
    text: 'Je perdais énormément de cheveux au brossage. Après six semaines, la différence est nette — et l\u2019huile ne graisse pas comme les autres.',
  },
  {
    name: 'Imane K.',
    city: 'Rabat',
    rating: 5,
    text: 'Mes cheveux étaient secs et cassants. Le rituel du soir est devenu un moment à moi, et la texture a vraiment changé.',
  },
  {
    name: 'Nadia E.',
    city: 'Marrakech',
    rating: 4,
    text: 'J\u2019ai vu de petits cheveux repousser sur les tempes. L\u2019odeur est naturelle, pas chimique. J\u2019ai repris une commande pour ma sœur.',
  },
]

export function Testimonials() {
  return (
    <section id="avis" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          center
          eyebrow="Elles ont testé"
          title="Ce que disent nos clientes"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-[0_18px_50px_-40px_rgba(60,42,18,0.7)]">
                <div className="flex gap-0.5 text-gold" aria-label={`${r.rating} étoiles sur 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4"
                      fill={s < r.rating ? 'currentColor' : 'none'}
                      strokeWidth={s < r.rating ? 0 : 1.5}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-ink-2">{`« ${r.text} »`}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-gold text-cream">
                    <span className="font-serif font-semibold">{r.name.charAt(0)}</span>
                  </span>
                  <div>
                    <p className="font-serif text-[15px] text-ink">{r.name}</p>
                    <p className="text-xs text-ink-2">{r.city}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-2 opacity-70">
          Avis présentés à titre d&apos;exemple — à remplacer par de vrais témoignages après le lancement.
        </p>
      </div>
    </section>
  )
}
