import servicoReforma from '@/assets/images/servico-reforma.webp'
import { Icon } from '@/components/ui/Icon'
import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { manutencao } from '@/data/conteudo'
import { company } from '@/data/site'
import { buildWhatsAppLink } from '@/lib/utils'

/** Serviço de reforma e manutenção de móveis planejados (além da fabricação). */
export const Manutencao = () => (
  <section id="manutencao" className="veio relative overflow-x-hidden bg-linho-200 py-24 sm:py-32">
    <div className="container-site grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <Reveal direction="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
        <LazyImage
          src={servicoReforma}
          alt="Marceneiro ajustando a dobradiça de um armário planejado"
          width={1200}
          height={1600}
          wrapperClassName="aspect-[4/5] rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(29,24,20,0.6)]"
        />
        <span className="absolute right-4 top-4 rounded-full bg-carvao/60 px-2.5 py-1 text-[0.6rem] uppercase tracking-widest text-linho/80 backdrop-blur">
          Imagem ilustrativa
        </span>
        <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-carvao p-5 text-linho shadow-2xl sm:-right-6 sm:left-auto sm:w-72">
          <span className="font-display text-3xl text-freijo-200">25+ anos</span>
          <p className="mt-1 text-sm leading-snug text-linho/75">
            fabricando móveis planejados — por isso sabemos exatamente como reformar e cuidar do seu.
          </p>
        </div>
      </Reveal>

      <div className="pt-6 lg:pt-0">
        <Reveal>
          <span className="eyebrow">{manutencao.eyebrow}</span>
          <h2 className="titulo mt-5" dangerouslySetInnerHTML={{ __html: manutencao.title }} />
          <p className="mt-6 text-base leading-relaxed text-carvao/70 sm:text-lg">{manutencao.text}</p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {manutencao.servicos.map((s, i) => (
            <Reveal as="li" key={s.title} delay={0.08 + i * 0.06} className="rounded-2xl border border-carvao/10 bg-white/70 p-5">
              <span className="font-display text-sm text-freijo-500">0{i + 1}</span>
              <h3 className="mt-1 font-display text-xl text-carvao">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-carvao/65">{s.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="mt-8 flex items-start gap-3 text-[0.95rem] text-carvao/70">
            <Icon name="whatsapp" className="mt-0.5 h-5 w-5 shrink-0 text-freijo-600" />
            {manutencao.dica}
          </p>
          <a
            href={buildWhatsAppLink(company.contact.whatsapp, manutencao.mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primario mt-6"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            {manutencao.cta}
          </a>
        </Reveal>
      </div>
    </div>
  </section>
)
