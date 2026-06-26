import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const info = [
  { label: 'Nom', value: 'AURIZA Hair Oil' },
  { label: 'Contenance', value: '100 ml' },
  { label: 'Type', value: 'Huile capillaire naturelle' },
  { label: 'Origine', value: 'Maroc' },
  { label: 'Conservation', value: "À l'abri de la chaleur et de la lumière." },
]

export function ProductInfo() {
  return (
    <section id="produit" className="bg-cream-2 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          center
          eyebrow="Informations Produit"
          title="Tout savoir sur AURIZA"
        />
        <ul className="mx-auto grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {info.map((row, i) => (
            <Reveal
              as="li"
              key={row.label}
              delay={(i % 2) * 0.06}
              className={i === info.length - 1 && info.length % 2 === 1 ? 'sm:col-span-2' : ''}
            >
              <div className="h-full bg-card p-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-deep">
                  {row.label}
                </p>
                <p className="mt-2 font-serif text-xl text-ink">{row.value}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
