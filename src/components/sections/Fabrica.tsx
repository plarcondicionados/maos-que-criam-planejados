import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fabrica } from '@/data/conteudo'

/** Foto real da fábrica: mostra que a produção é própria, em Ribeirão Preto. */
export const Fabrica = () => (
  <section id="fabrica" className="relative overflow-x-hidden bg-carvao py-24 text-linho sm:py-32">
    <div className="container-site grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
      <Reveal direction="right" className="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
        <LazyImage
          src={fabrica.imagem.src}
          alt={fabrica.imagem.alt}
          width={900}
          height={1600}
          wrapperClassName="aspect-[4/5] rounded-[2rem] bg-carvao-800 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] lg:aspect-[5/6]"
          className="object-[center_45%]"
        />
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-linho px-4 py-2 text-xs font-semibold text-carvao shadow-xl">
          <span className="h-2 w-2 rounded-full bg-musgo" />
          Nossa fábrica
        </span>
      </Reveal>

      <div>
        <SectionHeading dark eyebrow={fabrica.eyebrow} title={fabrica.title} text={fabrica.text} />

        <ul className="mt-10 space-y-6">
          {fabrica.pontos.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.08 + i * 0.06} className="flex gap-5 border-t border-white/10 pt-6">
              <span className="font-display text-sm text-freijo-300">0{i + 1}</span>
              <div>
                <h3 className="font-display text-xl text-linho sm:text-2xl">{p.title}</h3>
                <p className="mt-1.5 text-[0.97rem] leading-relaxed text-linho/65">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
)
