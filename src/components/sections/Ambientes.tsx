import { Icon } from '@/components/ui/Icon'
import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ambientes } from '@/data/projetos'
import { company } from '@/data/site'
import { buildWhatsAppLink, cn } from '@/lib/utils'

export const Ambientes = () => (
  <section id="ambientes" className="relative bg-carvao py-24 text-linho sm:py-32">
    <div className="container-site">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          dark
          eyebrow="Ambientes"
          title="Da cozinha ao escritório, <em>tudo sob medida</em>."
          text="Para quem está construindo, reformando ou montando a sede da empresa. Cada ambiente é projetado a partir das suas medidas e do seu jeito de usar."
        />
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ambientes.map((a, i) => (
          <Reveal key={a.id} delay={(i % 4) * 0.07} className={cn(i === 0 && 'sm:col-span-2 sm:row-span-2', i === ambientes.length - 1 && 'sm:col-span-2')}>
            <a
              href={buildWhatsAppLink(company.contact.whatsapp, `Olá! Tenho interesse em ${a.title.toLowerCase()}. Podem me passar um orçamento?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full overflow-hidden rounded-[1.4rem]"
              aria-label={`${a.title}: pedir orçamento no WhatsApp`}
            >
              <LazyImage
                src={a.image}
                alt={a.alt}
                wrapperClassName={cn('h-full bg-carvao-800', i === 0 ? 'aspect-[4/5] sm:aspect-auto sm:min-h-[560px]' : i === ambientes.length - 1 ? 'aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto' : 'aspect-[4/5]')}
                className="transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carvao via-carvao/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className={cn('font-display font-light text-linho', i === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl')}>{a.title}</h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-linho/75 opacity-0 transition-all duration-700 ease-luxe group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100 max-lg:max-h-32 max-lg:opacity-100">
                  {a.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-freijo-200">
                  Pedir orçamento
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
              {a.ilustrativa && (
                <span className="absolute right-4 top-4 rounded-full bg-carvao/60 px-2.5 py-1 text-[0.6rem] uppercase tracking-widest text-linho/70 backdrop-blur">
                  Imagem ilustrativa
                </span>
              )}
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)
