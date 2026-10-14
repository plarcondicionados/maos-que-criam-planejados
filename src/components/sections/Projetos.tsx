import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { categorias, projetos, type Categoria } from '@/data/projetos'
import { company } from '@/data/site'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { cn } from '@/lib/utils'

const VISIVEIS = 8

export const Projetos = () => {
  const [filtro, setFiltro] = useState<Categoria | 'todos'>('todos')
  const [aberto, setAberto] = useState<number | null>(null)
  const [todos, setTodos] = useState(false)
  const { setScrollLocked } = useSmoothScroll()

  const lista = useMemo(
    () => (filtro === 'todos' ? projetos : projetos.filter((p) => p.categoria === filtro)),
    [filtro],
  )

  const fechar = useCallback(() => setAberto(null), [])
  const mover = useCallback(
    (delta: number) => setAberto((i) => (i === null ? i : (i + delta + lista.length) % lista.length)),
    [lista.length],
  )

  useEffect(() => {
    setScrollLocked(aberto !== null)
    if (aberto === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aberto, fechar, mover, setScrollLocked])

  const atual = aberto !== null ? lista[aberto] : null

  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Projetos entregues"
            title="Ambientes reais, <em>feitos por nós</em>."
            text="Todas as fotos são de projetos que produzimos e montamos para clientes em Ribeirão Preto e região — dos primeiros trabalhos aos mais recentes."
          />
          <Reveal delay={0.1}>
            <div role="tablist" aria-label="Filtrar projetos por ambiente" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:max-w-md lg:justify-end">
              {categorias.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={filtro === c.id}
                  onClick={() => setFiltro(c.id)}
                  className={cn(
                    'shrink-0 rounded-full border px-4 py-2 text-[0.8rem] font-medium transition-all duration-300',
                    filtro === c.id
                      ? 'border-carvao bg-carvao text-linho'
                      : 'border-carvao/15 text-carvao/70 hover:border-carvao/40 hover:text-carvao',
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence initial={false}>
            {(todos ? lista : lista.slice(0, VISIVEIS)).map((p, i) => (
              <motion.button
                key={p.src}
                type="button"
                onClick={() => setAberto(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block w-full overflow-hidden rounded-2xl text-left"
                aria-label={`Ampliar foto: ${p.title}`}
              >
                <span className="block aspect-[3/4] w-full">
                  <LazyImage
                    src={p.src}
                    alt={p.alt}
                    wrapperClassName="h-full w-full"
                    className="transition-transform duration-[1200ms] ease-luxe group-hover:scale-105"
                  />
                </span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carvao/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span>
                    <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-freijo-200">
                      {categorias.find((c) => c.id === p.categoria)?.label}
                    </span>
                    <span className="mt-1 block font-display text-lg leading-tight text-linho">{p.title}</span>
                  </span>
                  <Icon name="expand" className="h-5 w-5 shrink-0 text-linho" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {!todos && lista.length > VISIVEIS && (
          <div className="mt-8 flex justify-center">
            <button type="button" onClick={() => setTodos(true)} className="btn-escuro">
              Ver todos os {lista.length} projetos
              <Icon name="plus" className="h-4 w-4" />
            </button>
          </div>
        )}

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-carvao/65">Tem muito mais no nosso Instagram, com vídeos de cada entrega.</p>
          <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-escuro">
            <Icon name="instagram" className="h-4 w-4" />
            Seguir {company.social.instagramHandle}
          </a>
        </Reveal>
      </div>

      <AnimatePresence>
        {atual && (
          <motion.div
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label={atual.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-carvao/95 p-4 backdrop-blur-sm"
            onClick={fechar}
          >
            <motion.figure
              key={atual.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={atual.src} alt={atual.alt} className="max-h-[80svh] w-auto max-w-full rounded-xl object-contain" />
              <figcaption className="mt-4 text-center text-sm text-linho/80">
                <span className="font-display text-lg text-linho">{atual.title}</span>
                <span className="mx-2 text-linho/40">·</span>
                {(aberto ?? 0) + 1} / {lista.length}
              </figcaption>
            </motion.figure>

            <button type="button" onClick={fechar} aria-label="Fechar" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-linho hover:bg-white/20">
              <Icon name="close" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); mover(-1) }} aria-label="Foto anterior" className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-linho hover:bg-white/20 sm:left-6">
              <Icon name="arrowLeft" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); mover(1) }} aria-label="Próxima foto" className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-linho hover:bg-white/20 sm:right-6">
              <Icon name="arrow" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
