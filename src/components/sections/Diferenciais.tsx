import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { diferenciais } from '@/data/conteudo'

export const Diferenciais = () => (
  <section aria-label="Diferenciais" className="veio relative border-b border-carvao/8 bg-linho-50 py-14 sm:py-16">
    <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {diferenciais.map((d, i) => (
        <Reveal key={d.title} delay={i * 0.08} className="group">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-freijo-300 text-freijo-600 transition-colors duration-500 group-hover:bg-freijo-500 group-hover:text-white">
            <Icon name={d.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-5 font-display text-xl text-carvao">{d.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-carvao/65">{d.text}</p>
        </Reveal>
      ))}
    </div>
  </section>
)
