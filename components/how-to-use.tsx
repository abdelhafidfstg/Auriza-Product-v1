import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    title: 'Soin Quotidien',
    text: 'Appliquer 2 à 3 gouttes sur les longueurs et les pointes pour nourrir et discipliner au quotidien.',
  },
  {
    n: '02',
    title: "Bain d'Huile",
    text: 'Appliquer généreusement sur le cuir chevelu et les cheveux. Laisser poser 1 à 3 heures, puis laver avec un shampoing doux.',
  },
  {
    n: '03',
    title: 'Soin de Nuit',
    text: 'Appliquer avant le coucher pour une nutrition profonde pendant le sommeil.',
  },
]

export function HowToUse() {
  return (
    <section id="utilisation" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          center
          eyebrow="Le Rituel"
          title="Conseils d'Utilisation"
          description="Trois façons d'intégrer AURIZA à votre routine — choisissez celle qui vous convient."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <article className="h-full rounded-2xl bg-card p-9 shadow-[0_18px_50px_-40px_rgba(60,42,18,0.7)]">
                <span className="font-serif text-4xl font-semibold text-gold-soft">{s.n}</span>
                <h3 className="mt-4 text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-serif text-lg italic text-ink-2">
            Soyez régulière — les premiers résultats apparaissent généralement après 4 à 6 semaines.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
