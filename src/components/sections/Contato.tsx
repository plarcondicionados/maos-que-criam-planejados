import { useState, type FormEvent } from 'react'

import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { formulario } from '@/data/formulario'
import { company } from '@/data/site'
import { buildWhatsAppLink, cn } from '@/lib/utils'

/** Máscara de telefone brasileiro: (16) 99999-9999 / (16) 3333-3333 */
const maskPhone = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

type Dados = {
  nome: string
  telefone: string
  tipo: string
  ambientes: string[]
  fase: string
  bairro: string
  detalhes: string
}

const inicial: Dados = { nome: '', telefone: '', tipo: 'Residência', ambientes: [], fase: '', bairro: '', detalhes: '' }

/** Monta o texto que chega no WhatsApp da empresa. Campos vazios são omitidos. */
export const montarMensagem = (d: Dados) => {
  const linhas = [
    `*Pedido de orçamento — site ${company.name}*`,
    '',
    `*Nome:* ${d.nome.trim()}`,
    `*Telefone:* ${d.telefone}`,
    `*Tipo:* ${d.tipo}`,
    `*Ambientes:* ${d.ambientes.join(', ')}`,
  ]
  if (d.fase) linhas.push(`*Fase da obra:* ${d.fase}`)
  if (d.bairro.trim()) linhas.push(`*Bairro/cidade:* ${d.bairro.trim()}`)
  if (d.detalhes.trim()) linhas.push('', '*Detalhes:*', d.detalhes.trim())
  return linhas.join('\n')
}

export const Contato = () => {
  const [dados, setDados] = useState<Dados>(inicial)
  const [erros, setErros] = useState<Partial<Record<keyof Dados, string>>>({})
  const [enviado, setEnviado] = useState(false)

  const set = <K extends keyof Dados>(key: K, value: Dados[K]) => {
    setDados((d) => ({ ...d, [key]: value }))
    setErros((e) => ({ ...e, [key]: undefined }))
  }

  const toggleAmbiente = (a: string) =>
    set('ambientes', dados.ambientes.includes(a) ? dados.ambientes.filter((x) => x !== a) : [...dados.ambientes, a])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const novo: typeof erros = {}
    if (dados.nome.trim().length < 2) novo.nome = 'Informe seu nome.'
    if (dados.telefone.replace(/\D/g, '').length < 10) novo.telefone = 'Informe um telefone com DDD.'
    if (dados.ambientes.length === 0) novo.ambientes = 'Escolha pelo menos um ambiente.'
    setErros(novo)
    if (Object.keys(novo).length) return

    window.open(buildWhatsAppLink(company.contact.whatsapp, montarMensagem(dados)), '_blank', 'noopener,noreferrer')
    setEnviado(true)
  }

  const c = company.contact
  const canais = [
    { icon: 'whatsapp', label: 'WhatsApp', value: c.whatsappLabel, href: buildWhatsAppLink(c.whatsapp, company.whatsappMessage), external: true },
    { icon: 'phone', label: 'Telefone', value: c.phone, href: c.phoneHref },
    { icon: 'mail', label: 'E-mail', value: c.email, href: `mailto:${c.email}` },
    { icon: 'instagram', label: 'Instagram', value: company.social.instagramHandle, href: company.social.instagram, external: true },
    { icon: 'pin', label: 'Endereço', value: c.address || `${company.city}/${company.state}`, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address || c.mapsQuery)}`, external: true },
    { icon: 'clock', label: 'Atendimento', value: c.hours },
  ].filter((x) => x.value)

  return (
    <section id="contato" className="relative overflow-hidden bg-carvao py-24 text-linho sm:py-32">
      <div className="container-site grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            dark
            eyebrow="Orçamento"
            title="Vamos planejar o <em>seu ambiente</em>?"
            text="Conte rapidinho o que você precisa. Abrimos o WhatsApp com tudo escrito — é só tocar em enviar."
          />

          <Reveal delay={0.1}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {canais.map((ch) => (
                <li key={ch.label}>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors duration-300 hover:border-freijo-300/50 hover:bg-white/5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-freijo-500/15 text-freijo-200">
                        <Icon name={ch.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-linho/50">{ch.label}</span>
                        <span className="block truncate text-[0.95rem] text-linho">{ch.value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-freijo-500/15 text-freijo-200">
                        <Icon name={ch.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-linho/50">{ch.label}</span>
                        <span className="block text-[0.95rem] text-linho">{ch.value}</span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title={`Mapa — ${company.city}/${company.state}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(c.address || c.mapsQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-60 w-full grayscale-[0.6] invert-[0.9] hue-rotate-180"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="rounded-[2rem] bg-linho p-6 text-carvao sm:p-10">
            <h3 className="font-display text-2xl font-light sm:text-3xl">Pedido de orçamento</h3>
            <p className="mt-2 text-sm text-carvao/60">Leva menos de um minuto. Nada fica salvo no site.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Nome *</span>
                <input
                  className={cn('campo mt-2', erros.nome && 'border-red-500')}
                  value={dados.nome}
                  onChange={(e) => set('nome', e.target.value)}
                  autoComplete="name"
                  placeholder="Seu nome"
                  aria-invalid={!!erros.nome}
                />
                {erros.nome && <span className="mt-1 block text-xs text-red-600">{erros.nome}</span>}
              </label>
              <label className="block">
                <span className="text-sm font-medium">WhatsApp / telefone *</span>
                <input
                  className={cn('campo mt-2', erros.telefone && 'border-red-500')}
                  value={dados.telefone}
                  onChange={(e) => set('telefone', maskPhone(e.target.value))}
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(16) 99999-9999"
                  aria-invalid={!!erros.telefone}
                />
                {erros.telefone && <span className="mt-1 block text-xs text-red-600">{erros.telefone}</span>}
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium">Para quem é o projeto?</legend>
              <div className="mt-2 inline-flex rounded-full border border-carvao/12 bg-white p-1">
                {formulario.tipos.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => set('tipo', t)}
                    aria-pressed={dados.tipo === t}
                    className={cn('rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300', dados.tipo === t ? 'bg-carvao text-linho' : 'text-carvao/65 hover:text-carvao')}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium">Quais ambientes? *</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {formulario.ambientes.map((a) => {
                  const on = dados.ambientes.includes(a)
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => toggleAmbiente(a)}
                      aria-pressed={on}
                      className={cn(
                        'rounded-full border px-3.5 py-2 text-[0.82rem] transition-all duration-300',
                        on ? 'border-freijo-500 bg-freijo-500 text-white' : 'border-carvao/12 bg-white text-carvao/75 hover:border-freijo-300',
                      )}
                    >
                      {a}
                    </button>
                  )
                })}
              </div>
              {erros.ambientes && <span className="mt-2 block text-xs text-red-600">{erros.ambientes}</span>}
            </fieldset>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Fase da obra</span>
                <select className="campo mt-2" value={dados.fase} onChange={(e) => set('fase', e.target.value)}>
                  <option value="">Selecione</option>
                  {formulario.fases.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium">Bairro / cidade</span>
                <input className="campo mt-2" value={dados.bairro} onChange={(e) => set('bairro', e.target.value)} placeholder="Ex.: Jardim Botânico, Ribeirão Preto" />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="text-sm font-medium">Conte um pouco do projeto</span>
              <textarea
                className="campo mt-2 min-h-[110px] resize-y"
                value={dados.detalhes}
                onChange={(e) => set('detalhes', e.target.value)}
                placeholder="Medidas aproximadas, cores que você gosta, prazo desejado… Se tiver fotos ou referências, envie depois na conversa."
              />
            </label>

            <button type="submit" className="btn-primario mt-8 w-full py-4 text-base">
              <Icon name="whatsapp" className="h-5 w-5" />
              Enviar pelo WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-carvao/55" role="status">
              {enviado
                ? 'Abrimos o WhatsApp em outra aba. Confira a mensagem e toque em enviar.'
                : 'Ao enviar, abrimos o WhatsApp com a mensagem pronta para você só tocar em enviar.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
