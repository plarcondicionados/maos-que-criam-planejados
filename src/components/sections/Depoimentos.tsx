import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { depoimentos } from '@/data/conteudo'
import { cn } from '@/lib/utils'

const INTERVALO = 6500

export const Depoimentos = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = depoimentos.items.length

  const go = useCallback((delta: number) => setIndex((i) => (i + delta + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => go(1), INTERVALO)
    return () => window.clearInterval(id)
  }, [paused, go])

  const item = depoimentos.items[index]

  return (
    <section id="depoimentos" className="relative bg-freijo-50 py-24 sm:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow={depoimentos.eyebrow} title={depoimentos.title} />

        <Reveal delay={0.1}>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            aria-roledescription="carrossel"
            aria-label="Depoimentos de clientes"
            className="relative rounded-[2rem] bg-white p-8 shadow-[0_30px_60px_-40px_rgba(58,38,24,0.5)] sm:p-12"
          >
            <span aria-hidden="true" className="absolute -top-7 left-8 font-display text-[7rem] leading-none text-freijo-300 sm:left-12">
              “
            </span>
            {/* Todos os depoimentos ocupam a mesma célula: a altura é a do maior, sem "pulos" */}
            <div className="grid" aria-live="polite">
              {depoimentos.items.map((d) => (
                <p key={d.text} aria-hidden="true" className="invisible col-start-1 row-start-1 pb-[4.75rem] font-display text-2xl font-light leading-snug sm:text-[1.85rem]">
                  {d.text}
                </p>
              ))}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  className="col-start-1 row-start-1"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-2xl font-light leading-snug text-carvao sm:text-[1.85rem]">{item.text}</p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-freijo-100 font-display text-lg text-freijo-700">
                      {item.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-carvao">{item.name}</span>
                      <span className="block text-xs text-carvao/55">{item.place}</span>
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {depoimentos.items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ver depoimento ${i + 1}`}
                    aria-current={i === index}
                    className="flex h-6 items-center"
                  >
                    <span className={cn('block h-1 rounded-full transition-all duration-500', i === index ? 'w-8 bg-freijo-500' : 'w-3 bg-carvao/15')} />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Depoimento anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-carvao/15 text-carvao hover:border-carvao/40">
                  <Icon name="arrowLeft" className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Próximo depoimento" className="flex h-11 w-11 items-center justify-center rounded-full bg-carvao text-linho hover:bg-carvao-700">
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
