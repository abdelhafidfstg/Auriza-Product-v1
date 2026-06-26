import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Jost } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AURIZA — Huile capillaire anti-chute 100% naturelle',
  description:
    'AURIZA, huile capillaire premium 100% naturelle fabriquée au Maroc. Nourrit, renforce et sublime vos cheveux dès la racine. Première pression à froid, sans parabènes ni silicones.',
  generator: 'v0.app',
  keywords: [
    'AURIZA',
    'huile capillaire',
    'huile cheveux naturelle',
    'anti-chute',
    'soin cheveux Maroc',
    'huile de ricin',
    'pousse cheveux',
  ],
  openGraph: {
    title: 'AURIZA — Huile capillaire anti-chute 100% naturelle',
    description:
      'Révélez la beauté naturelle de vos cheveux avec AURIZA, une huile capillaire premium 100% naturelle.',
    type: 'website',
    locale: 'fr_FR',
    images: ['/auriza-bottle.jpeg'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#FBF5EA',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${jost.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
