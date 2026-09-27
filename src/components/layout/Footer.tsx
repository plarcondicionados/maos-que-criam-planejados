import logoCompleta from '@/assets/images/logo-completa-clara.webp'
import { Icon } from '@/components/ui/Icon'
import { company, navigation } from '@/data/site'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { buildWhatsAppLink } from '@/lib/utils'

export const Footer = () => {
  const { scrollTo } = useSmoothScroll()
  const year = new Date().getFullYear()
  const { legal } = company

  return (
    <footer className="relative bg-carvao-800 text-linho/70">
      <div className="regua text-freijo-300" aria-hidden="true" />
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src={logoCompleta} alt={company.fullName} width={690} height={540} loading="lazy" className="h-28 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Marcenaria de móveis planejados em {company.city}/{company.state}. Projetos completos e personalizados, com qualidade e acabamento premium.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-freijo-200">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(`#${item.id}`)
                  }}
                  className="transition-colors hover:text-linho"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-freijo-200">Fale com a gente</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={buildWhatsAppLink(company.contact.whatsapp, company.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-linho">
                <Icon name="whatsapp" className="h-4 w-4" /> {company.contact.whatsappLabel}
              </a>
            </li>
            {company.contact.email && (
              <li>
                <a href={`mailto:${company.contact.email}`} className="inline-flex items-center gap-2 hover:text-linho">
                  <Icon name="mail" className="h-4 w-4" /> {company.contact.email}
                </a>
              </li>
            )}
            <li className="inline-flex items-center gap-2">
              <Icon name="pin" className="h-4 w-4" /> {company.contact.address || `${company.city}/${company.state}`}
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${company.social.instagramHandle}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-freijo-300 hover:text-linho"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a
              href={buildWhatsAppLink(company.contact.whatsapp, company.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-freijo-300 hover:text-linho"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-linho/45 sm:flex-row sm:justify-between">
          <p>
            © {year} {legal.razaoSocial || company.fullName}
            {legal.cnpj && ` · CNPJ ${legal.cnpj}`}. Todos os direitos reservados.
          </p>
          <p>Móveis planejados em Ribeirão Preto/SP</p>
        </div>
      </div>
    </footer>
  )
}
