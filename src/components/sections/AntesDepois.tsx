import { Icon } from '@/components/ui/Icon'
import { LazyImage } from '@/components/ui/LazyImage'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { antesDepois } from '@/data/projetos'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

/**
 * Antes e depois lado a lado. As duas fotos vêm do mesmo reel, mas com
 * enquadramentos diferentes — por isso não usamos um comparador sobreposto.
 */
export const AntesDepois = () => {
  const { scrollTo } = useSmoothScroll()

  return (
    <section aria-label="Antes e depois" className="veio relative overflow-x-hidden bg-linho-200 py-24 sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow={antesDepois.eyebrow} title={antesDepois.title} text={antesDepois.text} />
          <Reveal delay={0.15}>
            <a
              href="#videos"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#videos')
              }}
              className="btn-escuro mt-8"
            >
              <Icon name="play" className="h-4 w-4" />
              Ver o vídeo da transformação
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {[
            { ...antesDepois.before, label: 'Antes', tone: 'bg-carvao/75 text-linho' },
            { ...antesDepois.after, label: 'Depois', tone: 'bg-freijo-500 text-white' },
          ].map((img, i) => (
            <Reveal key={img.label} delay={i * 0.12} className={i === 1 ? 'mt-10 sm:mt-16' : ''}>
              <figure className="relative">
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  wrapperClassName="aspect-[3/4] rounded-[1.4rem] shadow-[0_30px_60px_-35px_rgba(29,24,20,0.6)]"
                  className={i === 0 ? 'object-[center_70%]' : ''}
                />
                <figcaption className={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] backdrop-blur ${img.tone}`}>
                  {img.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
