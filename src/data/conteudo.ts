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
    'Mais de 25 anos de marcenaria em Ribeirão Preto. Cozinhas, dormitórios, closets, banheiros e escritórios sob medida — e também reforma e manutenção de móveis planejados.',
  ctaPrimary: 'Solicitar orçamento',
  ctaSecondary: 'Ver projetos',
  // Destaques curtos que aparecem no rodapé do hero
  highlights: [
    { value: '25+', unit: 'anos', label: 'de experiência em marcenaria' },
    { value: '30', unit: 'dias úteis', label: 'fabricação, entrega e montagem' },
    { value: '100%', unit: 'sob medida', label: 'do rascunho à instalação' },
  ],
  reelLabel: 'Projeto entregue',
}

export const sobre = {
  eyebrow: 'Nossa história',
  // Texto enviado pelo cliente — manter fiel ao original.
  title: 'Uma história construída com <em>trabalho, experiência</em> e confiança',
  intro: [
    'A MQC Planejados – Mãos que Criam nasceu de um sonho construído com muito trabalho e mais de 25 anos de atuação no ramo da marcenaria.',
    'À frente da empresa está Robim, que iniciou sua trajetória como empregado e passou por diferentes funções, desenvolvendo domínio de todas as etapas da marcenaria.',
    'Ao longo desses anos, aprimorou sua capacidade de interpretar e criar projetos, realizar medições e cálculos, dimensionar cada peça, aproveitar materiais, além de executar montagem, instalação e acabamento.',
  ],
  destaque:
    'Esse conhecimento permite transformar ideias em realidade. Muitas vezes, o cliente não possui um projeto pronto: traz apenas a ideia do que deseja, e Robim utiliza seu conhecimento técnico para desenvolver e executar o projeto. A partir de uma conversa, um rascunho e as medidas do ambiente, cada peça, medida e encaixe é cuidadosamente planejado para transformar o desejo do cliente em um móvel sob medida.',
  // Linha do tempo: os mesmos parágrafos da história, divididos por fase
  trajetoria: [
    {
      etapa: 'A garagem',
      texto:
        'O sonho de ter seu próprio negócio começou a ganhar forma quando, mesmo trabalhando durante o dia, passou a aceitar projetos particulares e transformar a garagem de casa em espaço de trabalho durante as noites. Foi ali que nasceram os primeiros móveis e os primeiros clientes.',
    },
    {
      etapa: 'O primeiro salão',
      texto:
        'A qualidade e o comprometimento com cada projeto trouxeram indicações e, com elas, o crescimento. A garagem ficou pequena, veio o primeiro salão e, poucos meses depois, a necessidade de um espaço maior.',
    },
    {
      etapa: 'A fábrica',
      texto: 'Assim, a MQC foi crescendo até chegar à sua atual fábrica, em Ribeirão Preto.',
    },
  ],
  valoresIntro: 'Hoje, mantemos os mesmos valores que nos trouxeram até aqui:',
  valores: ['Seriedade', 'Responsabilidade', 'Qualidade', 'Respeito por cada cliente'],
  fechamento: 'Do primeiro esboço à instalação, cada detalhe é pensado com cuidado e precisão para transformar uma ideia em realidade.',
  assinatura: 'MQC Planejados – Mãos que Criam.',
  assinaturaTexto:
    'Uma história que começou em uma garagem, cresceu através do trabalho e continua sendo construída pela confiança de nossos clientes.',
  images: {
    main: { src: equipeMontagem, alt: 'Equipe da Mãos que Criam montando armários de cozinha planejada', credit: 'Vídeo: @mayron.f3rr3ira' },
    detail: { src: sobreAcabamento, alt: 'Marceneiro conferindo a medida de uma porta em madeira freijó' },
  },
}

export const diferenciais = [
  {
    icon: 'equipe',
    title: '25+ anos de marcenaria',
    text: 'Domínio de todas as etapas: projeto, medição, corte, montagem, instalação e acabamento.',
  },
  {
    icon: 'projeto',
    title: 'Da ideia ao projeto',
    text: 'Não tem projeto pronto? A partir de uma conversa, um rascunho e as medidas, desenvolvemos o seu.',
  },
  {
    icon: 'prazo',
    title: 'Até 30 dias úteis',
    text: 'Fabricação, entrega e montagem em até 30 dias úteis após a aprovação do projeto.',
  },
  {
    icon: 'acabamento',
    title: 'Reforma e manutenção',
    text: 'Também reformamos e fazemos manutenção em móveis planejados: ajustes, trocas de ferragens e reparos.',
  },
]

export const processo = {
  eyebrow: 'Como funciona',
  title: 'Do primeiro contato ao ambiente <em>pronto para usar</em>.',
  steps: [
    {
      number: '01',
      title: 'Conversa e medição',
      text: 'Você conta o que precisa pelo WhatsApp — pode ser só uma ideia ou um rascunho. Medimos o ambiente e entendemos sua rotina, estilo e orçamento.',
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
    q: 'Vocês reformam ou fazem manutenção em móveis planejados?',
    a: 'Sim. Fazemos reforma e manutenção em móveis planejados: ajuste e alinhamento de portas, troca de dobradiças, corrediças e puxadores, reparos e adaptações. Mande fotos do móvel pelo WhatsApp para avaliarmos.',
  },
  {
    q: 'Não tenho projeto pronto. Vocês desenvolvem?',
    a: 'Sim. Muitos clientes chegam só com a ideia do que desejam. A partir de uma conversa, um rascunho e as medidas do ambiente, desenvolvemos e executamos o projeto.',
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

export const manutencao = {
  eyebrow: 'Reforma e manutenção',
  title: 'Além de fabricar, o Robim também <em>reforma e faz manutenção</em> em móveis planejados.',
  text: 'Móvel planejado também precisa de cuidado com o tempo. Com o conhecimento de quem fabrica há mais de 25 anos, avaliamos o seu móvel e resolvemos do ajuste simples à reforma completa.',
  servicos: [
    { title: 'Ajuste de portas e gavetas', text: 'Alinhamento de portas desniveladas, gavetas que arrastam ou não fecham direito.' },
    { title: 'Troca de ferragens', text: 'Substituição de dobradiças, corrediças, puxadores e amortecedores.' },
    { title: 'Reparos e troca de peças', text: 'Conserto ou substituição de portas, frentes, prateleiras e fundos danificados.' },
    { title: 'Reformas e adaptações', text: 'Mudanças no móvel existente para um novo uso, um novo espaço ou um novo visual.' },
  ],
  dica: 'Mande fotos do móvel pelo WhatsApp: assim já conseguimos ter uma ideia do serviço antes da visita.',
  cta: 'Pedir avaliação pelo WhatsApp',
  mensagem: 'Olá! Preciso de reforma/manutenção em um móvel planejado. Posso enviar fotos?',
}
