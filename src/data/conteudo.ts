import heroImg from '@/assets/images/hero-cozinha-integrada.webp'
import sobreAcabamento from '@/assets/images/sobre-acabamento.webp'
import equipeMontagem from '@/assets/images/equipe-montagem.webp'
import processoMedicao from '@/assets/images/processo-medicao.webp'
import processoOrcamento from '@/assets/images/processo-orcamento.webp'
import processoMateriais from '@/assets/images/processo-materiais.webp'
import processoFabrica from '@/assets/images/processo-fabrica.webp'
import equipeInstalacao from '@/assets/images/equipe-instalacao.webp'
import barracaJunina from '@/assets/images/servico-barraca-junina.webp'

/** Campanha de fim de ano: faixa no topo e botão principal do hero. */
export const campanha = {
  faixa: '⚠️ Para entrega em Janeiro, fechamento até 30 de Novembro',
  mensagem:
    'Olá! Vi que para garantir a entrega em Janeiro preciso fechar em Novembro. Quero ver a disponibilidade para medição e orçamento, quais horários vocês têm?',
}

export const hero = {
  image: heroImg,
  imageAlt: 'Cozinha planejada integrada com armários em madeira freijó e laca fosca',
  eyebrow: 'Marcenaria sob medida · Ribeirão Preto/SP',
  title: ['Cozinha planejada', 'em Ribeirão Preto', 'sob medida'],
  subtitle: [
    'Mais de 25 anos de marcenaria em Ribeirão Preto. Fazemos móveis planejados sob medida, para residência e comércio.',
    'Fazemos medição conforme disponibilidade da agenda. Após a medição, seu orçamento fica pronto em 2 a 4 dias.',
    'Projeto 3D com arquiteto parceiro, conforme disponibilidade.',
    'Para garantir sua entrega e instalação em Janeiro, com prazo de até 60 dias garantido em contrato, o fechamento precisa ser em Novembro.',
  ],
  ctaPrimary: 'Quero garantir minha entrega em Janeiro',
  ctaSecondary: 'Ver projetos',
  // Destaques curtos que aparecem no rodapé do hero
  highlights: [
    { value: '25+', unit: 'anos', label: 'de experiência em marcenaria' },
    { value: '60', unit: 'dias', label: 'prazo máximo garantido em contrato' },
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
    title: 'Prazo em contrato',
    text: 'Entrega e instalação em até 60 dias, com o prazo garantido em contrato.',
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
  text: 'Cinco etapas claras, com você acompanhando cada uma. Entrega e instalação em até 60 dias, garantido em contrato.',
  steps: [
    {
      number: '01',
      title: 'Medição',
      text: 'Conforme disponibilidade da agenda.',
      image: processoMedicao,
      imageAlt: 'Marceneiro da Mãos que Criam medindo a espessura de um painel de madeira',
    },
    {
      number: '02',
      title: 'Orçamento em 2 a 4 dias',
      text: 'Calculado com detalhe para não ter surpresa no preço.',
      image: processoOrcamento,
      imageAlt: 'Calculadora, trena e anotações de medidas sobre a bancada da marcenaria',
    },
    {
      number: '03',
      title: 'Projeto 3D',
      text: 'Com arquiteto parceiro, conforme disponibilidade.',
      image: processoMateriais,
      imageAlt: 'Mostruário de cores e padrões de MDF com o cartão da Mãos que Criam',
    },
    {
      number: '04',
      title: 'Fechamento em Novembro',
      text: 'Você aprova o projeto e trava preço e data.',
      image: processoFabrica,
      imageAlt: 'Vista do alto da fábrica da Mãos que Criam em Ribeirão Preto, com móveis em produção',
    },
    {
      number: '05',
      title: 'Entrega e Instalação - Janeiro',
      text: 'Prazo de até 60 dias garantido em contrato.',
      image: equipeInstalacao,
      imageAlt: 'Montadores da Mãos que Criam instalando armários aéreos',
      credit: 'Vídeo: @mayron.f3rr3ira',
    },
  ],
}

export const oQueFazemos = {
  eyebrow: 'O que fazemos',
  title: 'Todo tipo de móvel planejado <em>sob medida</em>, do residencial ao comercial.',
  categorias: [
    {
      title: 'Residencial',
      itens: ['Cozinhas', 'Dormitórios', 'Closets', 'Banheiros', 'Área gourmet', 'Sala', 'Home', 'Painel', 'Lavanderia'],
    },
    {
      title: 'Comercial',
      itens: ['Balcão para supermercado', 'Balcão comercial', 'Mesa comercial para reunião', 'Móveis para lojas e escritórios'],
    },
    {
      title: 'Projetos Especiais',
      itens: ['Barraca de festa junina', 'Outros móveis personalizados sob medida'],
    },
  ],
  imagem: {
    src: barracaJunina,
    alt: 'Barraca de festa junina em MDF feita sob medida na fábrica da Mãos que Criam',
    legenda: 'Projeto especial: barraca de festa junina feita na nossa fábrica',
  },
}

export const garantia = [
  'Prazo de entrega garantido em contrato.',
  'Garantia contra defeitos de fabricação, conforme o Código de Defesa do Consumidor',
]

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
    a: 'Entrega e instalação em até 60 dias, com o prazo garantido em contrato. Para receber em Janeiro, o fechamento precisa ser até 30 de Novembro.',
  },
  {
    q: 'Vocês fazem o projeto em 3D?',
    a: 'Sim, com arquiteto parceiro, conforme disponibilidade. Antes de produzir, você vê o ambiente em 3D com as cores, os acabamentos e as medidas, e pode pedir ajustes.',
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
