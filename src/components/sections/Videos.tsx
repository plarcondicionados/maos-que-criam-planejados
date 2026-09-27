import { useEffect, useRef, useState } from 'react'

import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { videos } from '@/data/projetos'
import { company } from '@/data/site'

type Video = (typeof videos)[number]

/**
 * Reel vertical. Só baixa o vídeo quando entra na tela e toca sem som em loop;
 * sai da tela, pausa. Economiza dados no celular.
 */
const Reel = ({ video }: { video: Video }) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
        } else {
          el.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.45 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const el = ref.current
    if (!el) return
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => undefined)
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  return (
    <figure className="group relative w-[68vw] max-w-[270px] shrink-0 snap-start sm:w-auto sm:max-w-none">
      <div className="relative overflow-hidden rounded-[1.4rem] bg-carvao-800">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={video.title}
          className="aspect-[9/16] w-full object-cover"
        />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pausar vídeo: ${video.title}` : `Reproduzir vídeo: ${video.title}`}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className={`flex h-14 w-14 items-center justify-center rounded-full bg-linho/90 text-carvao transition-all duration-500 ${playing ? 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100' : 'opacity-100'}`}>
            <Icon name={playing ? 'pause' : 'play'} className="h-5 w-5" />
          </span>
        </button>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-carvao/60 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-linho backdrop-blur">
          {video.tag}
        </span>
      </div>
      <figcaption className="mt-3 font-display text-lg text-linho">{video.title}</figcaption>
    </figure>
  )
}

export const Videos = () => (
  <section id="videos" className="relative overflow-hidden bg-carvao py-24 sm:py-32">
    <div className="container-site">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          dark
          eyebrow="Em movimento"
          title="Tours, bastidores e <em>entregas</em>."
          text="Vídeos gravados nas entregas dos nossos clientes e na montagem com a nossa equipe."
        />
        <Reveal delay={0.1}>
          <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-claro">
            <Icon name="instagram" className="h-4 w-4" />
            Ver no Instagram
          </a>
        </Reveal>
      </div>

      <div
        data-lenis-prevent-wheel
        className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-6"
      >
        {videos.map((v) => (
          <Reel key={v.src} video={v} />
        ))}
      </div>
    </div>
  </section>
)
