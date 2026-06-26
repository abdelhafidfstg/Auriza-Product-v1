// ⚙️ Configuration AURIZA — remplacez ces valeurs par vos coordonnées réelles.

export const site = {
  name: 'AURIZA',
  slogan: 'Healthy Hair By Touch Natural',
  // Numéro WhatsApp au format international, sans "+" ni espaces.
  whatsapp: '212600000000',
  whatsappLabel: '+212 6 00 00 00 00',
  email: 'contact@auriza.ma',
  instagram: 'https://instagram.com/auriza',
  tiktok: 'https://tiktok.com/@auriza',
  // 📩 FormSubmit : remplacez par votre adresse e-mail réelle.
  // Le formulaire enverra les demandes directement vers cet e-mail, sans backend.
  formSubmitEmail: 'abdelhafidfstg@gmail.com',
  // formSubmitEmail: 'YOUR_EMAIL@example.com',
} as const

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
