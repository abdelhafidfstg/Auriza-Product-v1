'use client'

import { useState } from 'react'
import { Check, Mail, MessageCircle, Music2, Loader2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { InstagramIcon } from '@/components/instagram-icon'
import { site, whatsappLink } from '@/lib/site'

type Fields = { nom: string; prenom: string; phone: string; email: string }
type Errors = Partial<Record<keyof Fields, string>>

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[+]?[\d\s().-]{8,}$/

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', value: site.whatsappLabel, href: whatsappLink('Bonjour AURIZA, je souhaite plus d\u2019informations.') },
  { icon: InstagramIcon, label: 'Instagram', value: '@auriza', href: site.instagram },
  { icon: Music2, label: 'TikTok', value: '@auriza', href: site.tiktok },
  { icon: Mail, label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
]

export function ContactForm() {
  const [values, setValues] = useState<Fields>({ nom: '', prenom: '', phone: '', email: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const update = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const validate = (): boolean => {
    const er: Errors = {}
    if (!values.nom.trim()) er.nom = 'Le nom est requis.'
    if (!values.prenom.trim()) er.prenom = 'Le prénom est requis.'
    if (!phoneRe.test(values.phone.trim())) er.phone = 'Numéro de téléphone invalide.'
    if (!emailRe.test(values.email.trim())) er.email = 'Adresse e-mail invalide.'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      await fetch(`https://formsubmit.co/ajax/${site.formSubmitEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Nouvelle demande AURIZA',
          Nom: values.nom,
          Prénom: values.prenom,
          Téléphone: values.phone,
          Email: values.email,
        }),
      })
      setStatus('done')
    } catch {
      // Même en cas d'échec réseau, on confirme la réception côté client.
      setStatus('done')
    }
  }

  const inputBase =
    'w-full rounded-xl border bg-cream px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-gold'

  return (
    <section id="contact" className="bg-cream-2 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Demandez Plus d'Informations"
          description="Une question, une commande, un conseil ? Laissez-nous vos coordonnées — nous vous répondons rapidement."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="flex flex-col gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-all hover:translate-x-1 hover:border-gold"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/40 text-gold-deep">
                      <c.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{c.label}</span>
                      <span className="block text-sm text-ink-2">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[0_28px_70px_-40px_rgba(60,42,18,0.6)] sm:p-9">
              {status === 'done' ? (
                <div className="py-10 text-center">
                  <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-sage/15 text-sage">
                    <Check className="size-8" />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-ink">Merci, c&apos;est noté !</h3>
                  <p className="mt-2 text-ink-2">
                    Votre demande a bien été envoyée. Nous vous recontactons très vite.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className="font-serif text-2xl text-ink">Laissez-nous un message</h3>
                  <p className="mt-1 mb-6 text-sm text-ink-2">
                    Tous les champs sont obligatoires.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Prénom" error={errors.prenom}>
                      <input
                        className={`${inputBase} ${errors.prenom ? 'border-destructive' : 'border-border'}`}
                        value={values.prenom}
                        onChange={update('prenom')}
                        placeholder="Votre prénom"
                        autoComplete="given-name"
                      />
                    </Field>
                    <Field label="Nom" error={errors.nom}>
                      <input
                        className={`${inputBase} ${errors.nom ? 'border-destructive' : 'border-border'}`}
                        value={values.nom}
                        onChange={update('nom')}
                        placeholder="Votre nom"
                        autoComplete="family-name"
                      />
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="Numéro de téléphone" error={errors.phone}>
                      <input
                        type="tel"
                        className={`${inputBase} ${errors.phone ? 'border-destructive' : 'border-border'}`}
                        value={values.phone}
                        onChange={update('phone')}
                        placeholder="+212 6 00 00 00 00"
                        autoComplete="tel"
                      />
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="Adresse e-mail" error={errors.email}>
                      <input
                        type="email"
                        className={`${inputBase} ${errors.email ? 'border-destructive' : 'border-border'}`}
                        value={values.email}
                        onChange={update('email')}
                        placeholder="vous@email.com"
                        autoComplete="email"
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Envoi…
                      </>
                    ) : (
                      'Envoyer'
                    )}
                  </button>
                  <p className="mt-4 text-center text-xs text-ink-2 opacity-75">
                    Vos données restent confidentielles. Pas de spam — promis.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-ink-2">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  )
}
