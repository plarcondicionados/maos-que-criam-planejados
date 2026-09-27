import { useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faq } from '@/data/conteudo'
import { cn } from '@/lib/utils'

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Antes de <em>planejar</em>, vale saber."
          text="Não achou sua dúvida? Mande no WhatsApp — respondemos pessoalmente."
        />

        <Reveal delay={0.1}>
          <ul className="divide-y divide-carvao/10 border-y border-carvao/10">
            {faq.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-display text-xl text-carvao sm:text-[1.35rem]">{item.q}</span>
                      <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500', isOpen ? 'rotate-45 border-freijo-500 bg-freijo-500 text-white' : 'border-carvao/15 text-carvao')}>
                        <Icon name="plus" className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    className={cn('grid transition-[grid-template-rows] duration-500 ease-luxe', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                  >
                    <p className="overflow-hidden pr-14 text-[0.97rem] leading-relaxed text-carvao/70">
                      <span className="block pb-6">{item.a}</span>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
