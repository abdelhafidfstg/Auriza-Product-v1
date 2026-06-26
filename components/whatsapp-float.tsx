import { whatsappLink } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink('Bonjour AURIZA, je souhaite commander.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_14px_34px_-12px_oklch(0.65_0.16_150)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
      <svg viewBox="0 0 24 24" className="relative size-7 fill-white" aria-hidden="true">
        <path d="M.06 24l1.68-6.16A11.9 11.9 0 1 1 12 24a11.9 11.9 0 0 1-5.7-1.45L.06 24zM6.6 20.1l.36.22a9.9 9.9 0 1 0-3.3-3.32l.23.37-1 3.66 3.71-.93zM18 14.3c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.13-.17.25-.65.8-.8.97-.14.16-.3.18-.55.06a8.1 8.1 0 0 1-2.4-1.48 9 9 0 0 1-1.65-2.06c-.17-.3 0-.46.12-.6.12-.13.25-.32.38-.48.13-.16.17-.27.25-.45.09-.18.04-.33-.02-.46-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.88 2.4 1 2.56c.13.17 1.74 2.66 4.22 3.73 1.93.83 2.32.79 2.74.74.42-.04 1.36-.55 1.55-1.09.19-.53.19-.99.13-1.08-.05-.1-.21-.16-.46-.28z" />
      </svg>
    </a>
  )
}
