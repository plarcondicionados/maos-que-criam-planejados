import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ImgHTMLAttributes } from 'react'

import { Icon } from '@/components/ui/Icon'
import { hero } from '@/data/conteudo'
import { company } from '@/data/site'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { buildWhatsAppLink } from '@/lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

export const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollTo } = useSmoothScroll()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])
  const reelY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  const priority = { fetchpriority: 'high' } as ImgHTMLAttributes<HTMLImageElement>

  return (
    <section ref={ref} id="inicio" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-carvao">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          width={2400}
          height={1350}
          {...priority}
          decoding="async"
          className="h-full w-full object-cover object-[70%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-carvao/92 via-carvao/65 to-carvao/15" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-carvao/85 to-transparent" />

      <div className="container-site flex flex-1 items-center pb-14 pt-32 sm:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="eyebrow text-freijo-200"
            >
              {hero.eyebrow}
            </motion.span>

            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.02] tracking-tight text-linho sm:text-6xl lg:text-[4.6rem]">
              {hero.title.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={i === 1 ? 'block italic text-freijo-200' : 'block'}
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease }}
              className="mt-7 max-w-xl text-base leading-relaxed text-linho/75 sm:text-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={buildWhatsAppLink(company.contact.whatsapp, company.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primario"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                {hero.ctaPrimary}
              </a>
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('#projetos')
                }}
                className="btn-claro"
              >
                {hero.ctaSecondary}
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Reel real do Instagram flutuando sobre a ambientação */}
          <motion.figure
            style={{ y: reelY }}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="relative hidden w-[240px] lg:block xl:w-[270px]"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-carvao shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
              <video
                src="/videos/cozinha-verde-tour.mp4"
                poster="/videos/cozinha-verde-tour.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Vídeo de uma cozinha planejada verde entregue pela Mãos que Criam"
                className="aspect-[9/16] w-full object-cover"
              />
            </div>
            <figcaption className="absolute -left-10 bottom-10 flex items-center gap-2 rounded-full bg-linho px-4 py-2 text-xs font-semibold text-carvao shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-musgo opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-musgo" />
              </span>
              {hero.reelLabel}
            </figcaption>
          </motion.figure>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {hero.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 + i * 0.1 }}
              className="flex items-baseline gap-3 py-5 sm:px-6 sm:first:pl-0"
            >
              <span className="font-display text-3xl font-light text-linho">{h.value}</span>
              <span className="text-sm leading-tight text-linho/60">
                <span className="block font-semibold text-freijo-200">{h.unit}</span>
                {h.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
