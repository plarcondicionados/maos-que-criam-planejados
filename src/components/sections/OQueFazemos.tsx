import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { oQueFazemos } from '@/data/conteudo'

/** Tudo o que a marcenaria fabrica: residencial, comercial e projetos especiais. */
export const OQueFazemos = () => (
  <section id="o-que-fazemos" className="relative overflow-x-hidden py-24 sm:py-32">
    <div className="container-site grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
      <div>
        <SectionHeading eyebrow={oQueFazemos.eyebrow} title={oQueFazemos.title} />

        <div className="mt-12 space-y-10">
          {oQueFazemos.categorias.map((c, i) => (
            <Reveal key={c.title} delay={0.08 + i * 0.06}>
              <h3 className="flex items-baseline gap-3 font-display text-2xl text-carvao sm:text-3xl">
                <span className="font-display text-sm text-freijo-500">0{i + 1}</span>
                {c.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {c.itens.map((item) => (
                  <li key={item} className="rounded-full border border-carvao/15 bg-white px-4 py-2 text-sm font-medium text-carvao/80">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal direction="left" className="mx-auto w-full max-w-sm lg:max-w-none">
        <figure>
          <LazyImage
            src={oQueFazemos.imagem.src}
            alt={oQueFazemos.imagem.alt}
            width={953}
            height={1600}
            wrapperClassName="aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(29,24,20,0.6)]"
          />
          <figcaption className="mt-4 text-sm text-carvao/60">{oQueFazemos.imagem.legenda}</figcaption>
        </figure>
      </Reveal>
    </div>
  </section>
)
