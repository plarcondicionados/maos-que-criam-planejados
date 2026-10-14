import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState, type MouseEvent } from 'react'

import logoClaro from '@/assets/images/logo-simbolo-claro.webp'
import logoEscuro from '@/assets/images/logo-simbolo-escuro.webp'
import { Icon } from '@/components/ui/Icon'
import { allSections, company, navigation } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { buildWhatsAppLink, cn } from '@/lib/utils'

export const Logo = ({ light }: { light: boolean }) => (
  <span className="flex items-center gap-3">
    <img
      src={light ? logoClaro : logoEscuro}
      alt=""
      width={426}
      height={375}
      className="h-10 w-auto sm:h-11"
    />
    <span className="flex flex-col leading-none">
      <span className={cn('font-display text-[1.15rem] font-medium tracking-tight sm:text-xl', light ? 'text-linho' : 'text-carvao')}>
        {company.name}
      </span>
      <span className={cn('mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.3em]', light ? 'text-freijo-200' : 'text-freijo-600')}>
        {company.tagline}
      </span>
    </span>
  </span>
)

export const Header = () => {
  const isScrolled = useScrollPosition(60)
  const activeId = useActiveSection(allSections)
  const { scrollTo, setScrollLocked } = useSmoothScroll()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setScrollLocked(isOpen)
  }, [isOpen, setScrollLocked])

  const go = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    setIsOpen(false)
    // Espera o menu destravar a rolagem antes de navegar
    window.setTimeout(() => scrollTo(`#${id}`), isOpen ? 60 : 0)
  }

  const light = !isScrolled && !isOpen
  const whatsapp = buildWhatsAppLink(company.contact.whatsapp, company.whatsappMessage)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe',
          isScrolled && !isOpen
            ? 'bg-linho/92 py-3 shadow-[0_1px_0_rgba(29,24,20,0.08)] backdrop-blur-md'
            : 'py-5',
        )}
      >
        <div className="container-site flex items-center justify-between gap-6">
          <a href="#inicio" onClick={(e) => go(e, 'inicio')} aria-label={`${company.fullName} — início`}>
            <Logo light={light} />
          </a>

          <nav aria-label="Principal" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => go(e, item.id)}
                      aria-current={active ? 'true' : undefined}
                      className={cn(
                        'relative whitespace-nowrap rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors duration-300',
                        light ? 'text-linho/80 hover:text-white' : 'text-carvao/70 hover:text-carvao',
                        active && (light ? 'text-white' : 'text-carvao'),
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-ativo"
                          className={cn('absolute inset-x-4 -bottom-0.5 h-px', light ? 'bg-freijo-200' : 'bg-freijo-500')}
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn('btn hidden py-2.5 text-[0.8rem] sm:inline-flex', light ? 'bg-white/12 text-white backdrop-blur hover:bg-white/20' : 'bg-carvao text-linho hover:bg-carvao-700')}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Orçamento
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls="menu-mobile"
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              className={cn('relative flex h-11 w-11 items-center justify-center rounded-full xl:hidden', light ? 'text-white' : 'text-carvao')}
            >
              <span className={cn('absolute h-px w-5 bg-current transition-transform duration-500 ease-luxe', isOpen ? 'rotate-45' : '-translate-y-1')} />
              <span className={cn('absolute h-px w-5 bg-current transition-transform duration-500 ease-luxe', isOpen ? '-rotate-45' : 'translate-y-1')} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="menu-mobile"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="veio fixed inset-0 z-40 overflow-y-auto bg-linho pb-10 pt-28 xl:hidden"
          >
            <nav aria-label="Menu mobile" className="container-site">
              <ul className="flex flex-col">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-carvao/10"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => go(e, item.id)}
                      className="flex items-baseline justify-between py-5 font-display text-3xl font-light text-carvao"
                    >
                      {item.label}
                      <span className="text-xs font-sans tracking-widest text-freijo-500">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primario mt-10 w-full">
                <Icon name="whatsapp" className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>
              <p className="mt-6 text-center text-sm text-carvao/60">
                {company.city}/{company.state} · {company.contact.whatsappLabel}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
