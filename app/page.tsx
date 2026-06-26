import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Benefits } from '@/components/benefits'
import { Ingredients } from '@/components/ingredients'
import { WhyChoose } from '@/components/why-choose'
import { BeforeAfter } from '@/components/before-after'
import { HowToUse } from '@/components/how-to-use'
import { ProductInfo } from '@/components/product-info'
import { BrandStory } from '@/components/brand-story'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <WhyChoose />
        <BeforeAfter />
        <HowToUse />
        <ProductInfo />
        <BrandStory />
        <Testimonials />
        <ContactForm />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
