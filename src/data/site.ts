/**
 * Dados gerais da empresa. Edite aqui — os componentes leem tudo deste arquivo.
 *
 * Campos vazios ('') não aparecem no site. Preencha quando o cliente informar.
 */
export const company = {
  name: 'Mãos que Criam',
  fullName: 'Mãos que Criam Móveis Planejados',
  shortName: 'MQC Planejados',
  tagline: 'Móveis planejados',
  city: 'Ribeirão Preto',
  state: 'SP',

  contact: {
    // Número informado na bio do Instagram (wa.me/5516991594713)
    whatsapp: '5516991594713',
    whatsappLabel: '(16) 99159-4713',
    phone: '(16) 99159-4713',
    phoneHref: 'tel:+5516991594713',
    // PENDÊNCIA: e-mail não informado
    email: '',
    // PENDÊNCIA: endereço da marcenaria/showroom não informado
    address: '',
    // PENDÊNCIA: horário de atendimento não informado
    hours: '',
    // Busca usada no mapa enquanto não há endereço exato
    mapsQuery: 'Ribeirão Preto, SP',
  },

  social: {
    instagram: 'https://www.instagram.com/mqc.planejados/',
    instagramHandle: '@mqc.planejados',
  },

  whatsappMessage:
    'Olá! Vi o site da Mãos que Criam e gostaria de um orçamento de móveis planejados.',

  // PENDÊNCIA: CNPJ / razão social para o rodapé
  legal: {
    cnpj: '',
    razaoSocial: '',
  },
}

export const navigation = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'ambientes', label: 'Ambientes' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'processo', label: 'Como funciona' },
  { id: 'depoimentos', label: 'Clientes' },
  { id: 'contato', label: 'Contato' },
]

/** Todas as seções (inclusive as fora do menu), na ordem da página. */
export const allSections = [
  'inicio',
  'sobre',
  'ambientes',
  'projetos',
  'videos',
  'processo',
  'depoimentos',
  'faq',
  'contato',
]
