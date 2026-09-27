import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { sobre } from '@/data/conteudo'

export const Sobre = () => (
  <section id="sobre" className="relative overflow-x-hidden py-24 sm:py-32">
    <div className="container-site grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
      <Reveal direction="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="relative ml-auto w-[82%]">
          <LazyImage
            src={sobre.images.main.src}
            alt={sobre.images.main.alt}
            width={720}
            height={1271}
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
        {/* Carimbo circular "feito à mão" */}
        <svg viewBox="0 0 120 120" className="absolute -top-6 left-4 h-28 w-28 animate-[spin_28s_linear_infinite] text-freijo-500 sm:left-10" aria-hidden="true">
          <defs>
            <path id="circulo" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
          </defs>
          <text className="fill-current text-[10.5px] font-semibold uppercase tracking-[0.32em]">
            <textPath href="#circulo">feito sob medida · feito à mão ·</textPath>
          </text>
          <circle cx="60" cy="60" r="4" className="fill-current" />
        </svg>
      </Reveal>

      <div className="pt-8 lg:pt-0">
        <Reveal>
          <span className="eyebrow">{sobre.eyebrow}</span>
          <h2 className="titulo mt-5" dangerouslySetInnerHTML={{ __html: sobre.title }} />
        </Reveal>
        {sobre.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08}>
            <p className="mt-6 text-base leading-relaxed text-carvao/70 sm:text-lg">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={0.25}>
          <blockquote className="mt-10 border-l-2 border-freijo-400 pl-6">
            <p className="font-display text-2xl font-light italic leading-snug text-carvao">“{sobre.quote}”</p>
            <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-freijo-600">{sobre.quoteSource}</footer>
          </blockquote>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {sobre.pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.3 + i * 0.08}>
              <div className="regua text-freijo-600" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-carvao">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-carvao/65">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
)
