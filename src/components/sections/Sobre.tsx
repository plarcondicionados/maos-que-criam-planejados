import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { sobre } from '@/data/conteudo'

/** Ícones de linha para cada fase da trajetória (garagem → salão → fábrica). */
const iconesFase = [
  // Garagem
  <path key="g" d="M3 21V9l9-5 9 5v12M6 21v-8h12v8M6 16h12M6 19h12" />,
  // Salão
  <path key="s" d="M3 21V8h18v13M3 8l2-4h14l2 4M8 21v-6h4v6M15 12h3v3h-3z" />,
  // Fábrica
  <path key="f" d="M3 21V11l5 3V11l5 3V7h3l1-4h2l1 4v14zM7 18h2M12 18h2M17 18h1" />,
]

export const Sobre = () => (
  <section id="sobre" className="relative overflow-x-hidden py-24 sm:py-32">
    <div className="container-site">
      {/* Abertura */}
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal direction="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative ml-auto w-[82%]">
            <LazyImage
              src={sobre.images.main.src}
              alt={sobre.images.main.alt}
              width={720}
              height={1100}
              wrapperClassName="aspect-[4/5] rounded-[2rem]"
            />
            <span className="absolute -right-3 top-8 rounded-full bg-carvao px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-linho sm:-right-5">
              Nossa equipe
            </span>
            <span className="absolute bottom-3 right-4 text-[0.6rem] text-white/70">{sobre.images.main.credit}</span>
          </div>
          <div className="absolute -bottom-10 left-0 w-[46%] rounded-[1.5rem] border-[6px] border-linho shadow-2xl">
            <LazyImage
              src={sobre.images.detail.src}
              alt={sobre.images.detail.alt}
              width={1200}
              height={1600}
              wrapperClassName="aspect-[3/4] rounded-[1.1rem]"
            />
          </div>
          {/* Carimbo circular "mais de 25 anos" */}
          <svg viewBox="0 0 120 120" className="absolute -top-8 left-2 h-28 w-28 text-freijo-500 drop-shadow-sm sm:left-6" aria-hidden="true">
            <defs>
              <path id="circulo" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
            </defs>
            <circle cx="60" cy="60" r="58" className="fill-linho" />
            <g className="origin-[60px_60px] animate-[spin_28s_linear_infinite]">
              <text className="fill-current text-[10.5px] font-semibold uppercase tracking-[0.3em]">
                <textPath href="#circulo">mais de 25 anos · marcenaria ·</textPath>
              </text>
            </g>
            <text x="60" y="68" textAnchor="middle" className="fill-current font-display text-[26px]">
              25+
            </text>
          </svg>
        </Reveal>

        <div className="pt-8 lg:pt-0">
          <Reveal>
            <span className="eyebrow">{sobre.eyebrow}</span>
            <h2 className="titulo mt-5" dangerouslySetInnerHTML={{ __html: sobre.title }} />
          </Reveal>
          {sobre.intro.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.06}>
              <p className="mt-6 text-base leading-relaxed text-carvao/70 sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Da ideia ao móvel */}
      <Reveal className="mt-28 sm:mt-32">
        <figure className="veio relative overflow-hidden rounded-[2rem] border border-freijo-200 bg-freijo-50 px-6 py-10 sm:px-14 sm:py-14">
          <span aria-hidden="true" className="absolute -top-4 left-6 font-display text-[8rem] leading-none text-freijo-200 sm:left-12">
            “
          </span>
          <blockquote className="relative font-display text-xl font-light leading-relaxed text-carvao sm:text-2xl lg:text-[1.7rem]">
            {sobre.destaque}
          </blockquote>
          <figcaption className="relative mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-freijo-600">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Do rascunho ao móvel sob medida
          </figcaption>
        </figure>
      </Reveal>

      {/* Trajetória */}
      <div className="mt-24">
        <Reveal>
          <span className="eyebrow">Da garagem à fábrica</span>
        </Reveal>
        <ol className="relative mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          <span aria-hidden="true" className="regua absolute inset-x-0 top-6 hidden text-freijo-500 md:block" />
          {sobre.trajetoria.map((fase, i) => (
            <Reveal as="li" key={fase.etapa} delay={i * 0.1} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-freijo-300 bg-linho text-freijo-600">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" aria-hidden="true">
                  {iconesFase[i]}
                </svg>
              </span>
              <span className="mt-6 block font-display text-sm text-freijo-500">0{i + 1}</span>
              <h3 className="mt-1 font-display text-2xl text-carvao sm:text-3xl">{fase.etapa}</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-carvao/70">{fase.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Valores e assinatura */}
      <Reveal className="mx-auto mt-24 max-w-3xl text-center">
        <p className="text-base text-carvao/70 sm:text-lg">{sobre.valoresIntro}</p>
        <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {sobre.valores.map((v) => (
            <li key={v} className="rounded-full border border-carvao/15 bg-white px-5 py-2.5 text-sm font-semibold text-carvao">
              {v}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-base leading-relaxed text-carvao/70 sm:text-lg">{sobre.fechamento}</p>
        <div className="regua mx-auto mt-10 w-40 text-freijo-500" aria-hidden="true" />
        <p className="mt-8 font-display text-2xl text-carvao sm:text-3xl">{sobre.assinatura}</p>
        <p className="mt-3 font-display text-lg font-light italic leading-snug text-freijo-700 sm:text-xl">{sobre.assinaturaTexto}</p>
      </Reveal>
    </div>
  </section>
)
