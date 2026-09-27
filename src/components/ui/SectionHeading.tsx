import { cn } from '@/lib/utils'

import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  /** Aceita <em> para destacar a palavra em itálico freijó. */
  title: string
  text?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export const SectionHeading = ({ eyebrow, title, text, align = 'left', dark, className }: SectionHeadingProps) => (
  <Reveal className={cn(align === 'center' && 'mx-auto text-center', 'max-w-3xl', className)}>
    <span className={cn('eyebrow', dark && 'text-freijo-300', align === 'center' && 'justify-center')}>{eyebrow}</span>
    <h2
      className={cn('titulo mt-5', dark && 'text-linho [&_em]:text-freijo-300')}
      dangerouslySetInnerHTML={{ __html: title }}
    />
    {text && (
      <p className={cn('mt-5 max-w-2xl text-base leading-relaxed sm:text-lg', dark ? 'text-linho/70' : 'text-carvao/70', align === 'center' && 'mx-auto')}>
        {text}
      </p>
    )}
  </Reveal>
)
