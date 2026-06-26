import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const ingredients = [
  {
    name: 'Huile de ricin',
    img: '/ingredient-ricin.png',
    desc: 'Réputée pour fortifier la fibre et favoriser une pousse dense et saine.',
  },
  {
    name: 'Huile de sésame',
    img: '/ingredient-sesame.png',
    desc: 'Riche en nutriments, elle nourrit le cuir chevelu en profondeur.',
  },
  {
    name: 'Huile de coco',
    img: '/ingredient-coco.png',
    desc: 'Hydrate, gaine la fibre et apporte une brillance naturelle.',
  },
  {
    name: 'Graines de gazon',
    img: '/ingredient-gazon.png',
    desc: 'Source de minéraux qui aide à revitaliser les cheveux affaiblis.',
  },
  {
    name: "Graines d'oignon",
    img: '/ingredient-oignon.png',
    desc: 'Traditionnellement utilisées pour stimuler les racines et la croissance.',
  },
]

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-cream-2 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          center
          eyebrow="La Formule"
          title="Les Ingrédients Naturels"
          description="Des huiles végétales pressées à froid et des extraits naturels d'origine 100% végétale, sélectionnés pour leur efficacité."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ing, i) => (
            <Reveal as="li" key={ing.name} delay={(i % 3) * 0.08}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-36px_rgba(60,42,18,0.6)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={ing.img}
                    alt={`${ing.name} — ingrédient naturel AURIZA`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl text-ink">{ing.name}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{ing.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal as="li" delay={0.16}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-gold-soft bg-accent/30 p-8 text-center">
              <p className="font-serif text-2xl italic text-gold-deep">100% d&apos;origine naturelle</p>
              <p className="mt-3 leading-relaxed text-ink-2">
                Aucune huile minérale, aucun parfum de synthèse. Seulement ce que la nature
                offre de meilleur pour vos cheveux.
              </p>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
