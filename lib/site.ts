// ⚙️ Configuration AURIZA — remplacez ces valeurs par vos coordonnées réelles.

export const site = {
  name: 'AURIZA',
  slogan: 'Healthy Hair By Touch Natural',
  // Numéro WhatsApp au format international, sans "+" ni espaces.
  whatsapp: '0664740124',
  whatsappLabel: '+212 6 64 74 01 24',
  email: 'aurizaauriza80@gmail.com',
  instagram: 'https://www.instagram.com/auriza_hair?igsh=MW1vMHp0Nndyd2Zyag%3D%3D&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@huile_auriza?_r=1&_t=ZS-977mNqQGiOo',
  // 📩 FormSubmit : remplacez par votre adresse e-mail réelle.
  // Le formulaire enverra les demandes directement vers cet e-mail, sans backend.
  formSubmitEmail: 'aurizaauriza80@gmail.com',
} as const

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
