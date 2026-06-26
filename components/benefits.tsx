import { Sprout, ShieldCheck, ScissorsLineDashed, Droplets, Sparkles, HeartPulse } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const benefits = [
  { icon: Sprout, title: 'Nourrit intensément', text: 'Nourrit en profondeur la fibre capillaire pour des cheveux revitalisés.' },
  { icon: ShieldCheck, title: 'Renforce les cheveux', text: 'Fortifie les cheveux fragiles et cassants, de la racine aux pointes.' },
  { icon: ScissorsLineDashed, title: 'Réduit la casse', text: 'Aide à réduire la chute liée à la casse et préserve la longueur.' },
  { icon: Droplets, title: 'Hydrate & protège', text: 'Hydrate et protège les longueurs contre les agressions du quotidien.' },
  { icon: Sparkles, title: 'Douceur & brillance', text: 'Apporte douceur, brillance et souplesse à chaque utilisation.' },
  { icon: HeartPulse, title: 'Cheveux plus sains', text: 'Favorise des cheveux visiblement plus sains, jour après jour.' },
]

export function Benefits() {
  return (
    <section id="bienfaits" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          center
          eyebrow="Les Bienfaits"
          title="Tout ce dont vos cheveux ont besoin"
          description="Une formule concentrée qui agit là où tout se joue : le cuir chevelu, la racine et la longueur."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-36px_rgba(60,42,18,0.6)]">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent/50 text-gold-deep transition-colors group-hover:bg-accent">
                  <b.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl text-ink">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
