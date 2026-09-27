import heroImg from '@/assets/images/hero-cozinha-integrada.webp'
import sobreAcabamento from '@/assets/images/sobre-acabamento.webp'
import equipeMontagem from '@/assets/images/equipe-montagem.webp'
import processo3d from '@/assets/images/processo-projeto-3d.webp'
import processoProducao from '@/assets/images/processo-producao.webp'
import equipeInstalacao from '@/assets/images/equipe-instalacao.webp'
import cozinhaVerdeBancada from '@/assets/images/cozinha-verde-bancada.webp'

export const hero = {
  image: heroImg,
  imageAlt: 'Cozinha planejada integrada com armários em madeira freijó e laca fosca',
  eyebrow: 'Marcenaria sob medida · Ribeirão Preto/SP',
  title: ['Móveis planejados', 'feitos por mãos', 'que entendem de casa.'],
  subtitle:
    'Cozinhas, quartos, closets, banheiros e escritórios projetados para o seu espaço e a sua rotina — com acabamento premium e montagem pela nossa própria equipe.',
  ctaPrimary: 'Solicitar orçamento',
  ctaSecondary: 'Ver projetos',
  // Destaques curtos que aparecem no rodapé do hero
  highlights: [
    { value: '30', unit: 'dias úteis', label: 'fabricação, entrega e montagem' },
    { value: '3D', unit: 'projeto', label: 'você vê o ambiente antes de produzir' },
    { value: '100%', unit: 'sob medida', label: 'cada centímetro aproveitado' },
  ],
  reelLabel: 'Projeto entregue',
}

export const sobre = {
  eyebrow: 'Quem somos',
  title: 'Cada móvel começa com uma <em>ideia sua</em> e termina nas nossas mãos.',
  // PENDÊNCIA: confirmar a história real (ano de fundação, fundadores, trajetória).
  // O Instagram tem o destaque "Nossa História", mas ele não é público sem login.
  paragraphs: [
    'A Mãos que Criam nasceu em Ribeirão Preto com um jeito simples de trabalhar: ouvir com atenção, medir com precisão e entregar exatamente o ambiente que o cliente imaginou.',
    'Somos uma marcenaria de móveis planejados que cuida do projeto completo — do desenho em 3D à montagem final. Muitos clientes chegam com uma referência, uma foto ou só uma vontade. A gente transforma isso em um móvel funcional, bonito e feito para durar.',
  ],
  quote: 'A ideia já existia. Nós apenas a transformamos em realidade.',
  quoteSource: 'Do nosso Instagram',
  images: {
    main: { src: equipeMontagem, alt: 'Equipe da Mãos que Criam montando armários de cozinha planejada', credit: 'Vídeo: @mayron.f3rr3ira' },
    detail: { src: sobreAcabamento, alt: 'Marceneiro conferindo a medida de uma porta em madeira freijó' },
  },
  pillars: [
    {
      title: 'Missão',
      text: 'Criar ambientes sob medida que unem beleza, organização e praticidade no dia a dia de quem vive neles.',
    },
    {
      title: 'Como trabalhamos',
      text: 'Projeto pensado nos detalhes, execução com precisão e acompanhamento de perto até a entrega.',
    },
    {
      title: 'Nosso padrão',
      text: 'Materiais de alta qualidade, acabamento refinado e pontualidade em cada etapa.',
    },
  ],
}

export const diferenciais = [
  {
    icon: 'prazo',
    title: 'Até 30 dias úteis',
    text: 'Fabricação, entrega e montagem em até 30 dias úteis após a aprovação do projeto.',
  },
  {
    icon: 'projeto',
    title: 'Projeto 3D',
    text: 'Você visualiza o ambiente, as cores e os acabamentos antes de qualquer peça ser produzida.',
  },
  {
    icon: 'acabamento',
    title: 'Acabamento premium',
    text: 'Materiais de alta qualidade, acabamento refinado e execução impecável em cada detalhe.',
  },
  {
    icon: 'equipe',
    title: 'Equipe própria',
    text: 'Cada montagem e cada entrega levam o comprometimento do nosso próprio time.',
  },
]

export const processo = {
  eyebrow: 'Como funciona',
  title: 'Do primeiro contato ao ambiente <em>pronto para usar</em>.',
  steps: [
    {
      number: '01',
      title: 'Conversa e medição',
      text: 'Você conta o que precisa pelo WhatsApp. Agendamos a visita, medimos o ambiente e entendemos sua rotina, estilo e orçamento.',
      image: cozinhaVerdeBancada,
      imageAlt: 'Cozinha planejada verde com gavetas e bancada branca',
      real: true,
    },
    {
      number: '02',
      title: 'Projeto 3D',
      text: 'Desenvolvemos o projeto em 3D com cores, materiais e medidas. Ajustamos juntos até ficar exatamente como você idealizou.',
      image: processo3d,
      imageAlt: 'Mesa de projeto com modelo 3D de cozinha e amostras de madeira',
      real: false,
    },
    {
      number: '03',
      title: 'Produção',
      text: 'Com o projeto aprovado, as peças são cortadas, bordeadas e preparadas com materiais de alta qualidade.',
      image: processoProducao,
      imageAlt: 'Marcenaria com chapas de MDF e módulos de armário em produção',
      real: false,
    },
    {
      number: '04',
      title: 'Entrega e montagem',
      text: 'Nossa equipe entrega e monta tudo no local, com cuidado e limpeza. Em até 30 dias úteis, o ambiente está pronto.',
      image: equipeInstalacao,
      imageAlt: 'Montadores da Mãos que Criam instalando armários aéreos',
      real: true,
      credit: 'Vídeo: @mayron.f3rr3ira',
    },
  ],
}

export const depoimentos = {
  eyebrow: 'Clientes',
  title: 'Quem já tem um projeto <em>Mãos que Criam</em>.',
  // PENDÊNCIA: substituir por depoimentos reais (o destaque "Feedback" do
  // Instagram não é público sem login). Textos abaixo são exemplos.
  items: [
    {
      text: 'Chegamos com uma foto do Pinterest e saímos com uma cozinha ainda mais bonita. Aproveitaram cada canto e o acabamento é impecável.',
      name: 'Cliente — cozinha planejada',
      place: 'Ribeirão Preto',
    },
    {
      text: 'As portas espelhadas já existiam e eles fizeram os módulos laterais exatamente como eu imaginei. Montagem rápida e muito limpa.',
      name: 'Cliente — quarto de casal',
      place: 'Ribeirão Preto',
    },
    {
      text: 'Cumpriram o prazo combinado e acompanharam tudo de perto. O banheiro ficou com cara de revista.',
      name: 'Cliente — banheiro',
      place: 'Ribeirão Preto',
    },
    {
      text: 'Projeto 3D ajudou muito a decidir as cores. O painel da sala ficou exatamente igual ao desenho.',
      name: 'Cliente — sala de estar',
      place: 'Ribeirão Preto',
    },
  ],
}

export const faq = [
  {
    q: 'Qual é o prazo para ficar pronto?',
    a: 'Fabricação, entrega e montagem são realizadas em até 30 dias úteis após a aprovação do projeto. A agenda de produção tem vagas limitadas, por isso vale reservar com antecedência.',
  },
  {
    q: 'Vocês fazem o projeto em 3D?',
    a: 'Sim. Antes de produzir, você vê o ambiente em 3D com as cores, os acabamentos e as medidas, e pode pedir ajustes.',
  },
  {
    q: 'Atendem apenas Ribeirão Preto?',
    a: 'Nossa base é Ribeirão Preto/SP. Para cidades da região, fale com a gente pelo WhatsApp e confirmamos a disponibilidade.',
  },
  {
    q: 'Posso levar uma referência ou foto?',
    a: 'Deve! Muitos projetos começam com uma imagem que o cliente guardou. A partir dela adaptamos medidas, materiais e funcionalidade ao seu espaço.',
  },
  {
    q: 'Fazem móveis para empresas?',
    a: 'Sim. Projetamos recepções, estações de trabalho, armários e salas de reunião sob medida para escritórios, consultórios e lojas.',
  },
  {
    q: 'Como peço um orçamento?',
    a: 'Preencha o formulário no fim desta página ou chame direto no WhatsApp (16) 99159-4713. Se tiver as medidas ou fotos do ambiente, envie junto.',
  },
]
