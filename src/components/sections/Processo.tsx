import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { processo } from '@/data/conteudo'
import { cn } from '@/lib/utils'

export const Processo = () => (
  <section id="processo" className="relative overflow-x-hidden py-24 sm:py-32">
    <div className="container-site">
      <SectionHeading
        align="center"
        eyebrow={processo.eyebrow}
        title={processo.title}
        text="Quatro etapas claras, com você acompanhando cada uma. Fabricação, entrega e montagem em até 30 dias úteis."
      />

      <ol className="relative mt-16 space-y-16 sm:mt-20 lg:space-y-24">
        {/* Linha de cota vertical ligando as etapas */}
        <span aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-freijo-300 to-transparent lg:left-1/2" />

        {processo.steps.map((s, i) => {
          const reverse = i % 2 === 1
          return (
            <li key={s.number} className="relative grid items-center gap-8 pl-14 lg:grid-cols-2 lg:gap-20 lg:pl-0">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-freijo-300 bg-linho font-display text-sm text-freijo-600 lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                {s.number}
              </span>

              <Reveal direction={reverse ? 'left' : 'right'} className={cn(reverse && 'lg:order-2')}>
                <div className="relative">
                  <LazyImage
                    src={s.image}
                    alt={s.imageAlt}
                    wrapperClassName="aspect-[4/3] rounded-[1.6rem]"
                    className={cn(s.real && 'object-[center_40%]')}
                  />
                  {'credit' in s && s.credit && (
                    <span className="absolute bottom-3 right-4 text-[0.6rem] text-white/75">{s.credit}</span>
                  )}
                  {!s.real && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-carvao/55 px-2.5 py-1 text-[0.58rem] uppercase tracking-widest text-linho/80 backdrop-blur">
                      Imagem ilustrativa
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal direction={reverse ? 'right' : 'left'} delay={0.1} className={cn(reverse && 'lg:order-1 lg:text-right')}>
                <span className="font-display text-6xl font-light text-freijo-200 sm:text-7xl">{s.number}</span>
                <h3 className="mt-2 font-display text-3xl font-light text-carvao sm:text-4xl">{s.title}</h3>
                <p className={cn('mt-4 max-w-md text-base leading-relaxed text-carvao/70 sm:text-lg', reverse && 'lg:ml-auto')}>{s.text}</p>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  </section>
)
