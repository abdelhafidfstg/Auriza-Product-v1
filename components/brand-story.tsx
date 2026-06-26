import { Reveal } from '@/components/reveal'

export function BrandStory() {
  return (
    <section id="promesse" className="relative overflow-hidden py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(135deg, oklch(0.24 0.03 65), oklch(0.32 0.05 60))' }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--gold) 32%, transparent), transparent 60%)',
        }}
      />
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-gold-soft">
            Notre Promesse
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-balance text-3xl font-medium leading-snug text-cream sm:text-4xl">
            La nature possède tout ce dont vos cheveux ont besoin.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-cream/80">
            Chez AURIZA, nous croyons que la nature possède tout ce dont vos cheveux ont
            besoin pour retrouver force, éclat et vitalité.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-cream/80">
            Notre mission est d&apos;offrir un soin naturel, efficace et élégant qui
            transforme votre routine capillaire en véritable rituel de beauté.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 font-serif text-xl italic text-gold-soft">
            Healthy Hair By Touch Natural
          </p>
        </Reveal>
      </div>
    </section>
  )
}
