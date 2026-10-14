/**
 * Ambientes (serviços) e portfólio.
 *
 * Fotos do portfólio:
 * - `src/assets/images/projetos/`: obras enviadas pelo cliente (pasta Planejados,
 *   2018–2021), importadas com `scripts/importar-fotos-planejados.mjs`;
 * - `src/assets/images/*.webp`: quadros dos reels do Instagram @mqc.planejados.
 * Imagens com `ilustrativa: true` foram geradas por IA, só para ilustrar.
 */
import closetGavetas from '@/assets/images/closet-gavetas.webp'
import cozinhaFreijoAereos from '@/assets/images/cozinha-freijo-aereos.webp'
import cozinhaVerdeBancada from '@/assets/images/cozinha-verde-bancada.webp'
import banheiroArmario from '@/assets/images/banheiro-armario-alto.webp'
import banheiroBancada from '@/assets/images/banheiro-bancada.webp'
import gourmetFrigobar from '@/assets/images/gourmet-frigobar.webp'
import quartoEspelhos from '@/assets/images/quarto-espelhos.webp'
import salaAntes from '@/assets/images/sala-antes.webp'
import salaPainelFreijo from '@/assets/images/sala-painel-freijo.webp'
import salaPainelTv from '@/assets/images/sala-painel-tv.webp'
import servicoReforma from '@/assets/images/servico-reforma.webp'

const arquivos = import.meta.glob<string>('@/assets/images/projetos/*.webp', {
  eager: true,
  import: 'default',
})

/** Caminho final (com hash) de uma foto da pasta projetos/, pelo nome do arquivo. */
const foto = (nome: string): string => {
  const chave = Object.keys(arquivos).find((k) => k.endsWith(`/${nome}.webp`))
  if (!chave) throw new Error(`Foto não encontrada: projetos/${nome}.webp`)
  return arquivos[chave]
}

export type Categoria = 'cozinhas' | 'dormitorios' | 'banheiros' | 'salas' | 'escritorios' | 'gourmet'

export const ambientes = [
  {
    id: 'cozinhas',
    title: 'Cozinhas planejadas',
    text: 'Aéreos até o teto, torres para forno e geladeira, gaveteiros e nichos. Cada centímetro vira armazenamento.',
    image: foto('cozinha-azul-ladrilho'),
    alt: 'Cozinha planejada azul com aéreos de vidro e parede de ladrilho hidráulico',
    ilustrativa: false,
  },
  {
    id: 'dormitorios',
    title: 'Dormitórios e roupeiros',
    text: 'Guarda-roupas de abrir ou de correr, com espelho, escrivaninhas, cabeceiras e painéis.',
    image: foto('roupeiro-escuro'),
    alt: 'Roupeiro planejado de portas altas em madeira escura',
    ilustrativa: false,
  },
  {
    id: 'closets',
    title: 'Closets',
    text: 'Cabideiros em alturas diferentes, gavetas e nichos pensados para o que você tem.',
    image: closetGavetas,
    alt: 'Closet planejado em laca fosca com gavetas, nichos e cabideiros',
    ilustrativa: false,
  },
  {
    id: 'banheiros',
    title: 'Banheiros',
    text: 'Gabinetes suspensos ou apoiados, com gavetas e portas sob medida para a bancada.',
    image: foto('banheiro-gabinete-suspenso'),
    alt: 'Gabinete de banheiro suspenso planejado com gavetas e bancada de granito',
    ilustrativa: false,
  },
  {
    id: 'salas',
    title: 'Salas e painéis',
    text: 'Painéis para TV, racks suspensos, estantes e até painel giratório entre ambientes.',
    image: foto('sala-painel-rack'),
    alt: 'Painel de TV planejado em madeira com rack suspenso',
    ilustrativa: false,
  },
  {
    id: 'home-office',
    title: 'Home office',
    text: 'Bancadas, armários e gaveteiros que deixam o trabalho em casa organizado.',
    image: foto('home-office-armario'),
    alt: 'Home office planejado com armário alto, aéreos e bancada com gaveteiro',
    ilustrativa: false,
  },
  {
    id: 'escritorios',
    title: 'Escritórios e comércio',
    text: 'Salas de diretoria, estações de trabalho, salas de reunião e balcões para lojas.',
    image: foto('escritorio-diretoria'),
    alt: 'Sala de diretoria com mesa e painel planejados em madeira escura',
    ilustrativa: false,
  },
  {
    id: 'gourmet',
    title: 'Gourmet e lavanderia',
    text: 'Armários para área de serviço, bares e bancadas de área gourmet.',
    image: foto('lavanderia-aereos'),
    alt: 'Lavanderia com armários aéreos planejados sobre o tanque e as máquinas',
    ilustrativa: false,
  },
  {
    id: 'reformas',
    title: 'Reformas e manutenção',
    text: 'Troca de dobradiças e corrediças, ajuste de portas, conserto e reforma de móveis planejados.',
    image: servicoReforma,
    alt: 'Marceneiro ajustando a dobradiça de um armário planejado',
    ilustrativa: true,
  },
]

export const categorias: Array<{ id: Categoria | 'todos'; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'cozinhas', label: 'Cozinhas' },
  { id: 'dormitorios', label: 'Dormitórios' },
  { id: 'banheiros', label: 'Banheiros' },
  { id: 'salas', label: 'Salas' },
  { id: 'escritorios', label: 'Escritórios e comércio' },
  { id: 'gourmet', label: 'Gourmet e serviço' },
]

export type Projeto = {
  src: string
  alt: string
  title: string
  categoria: Categoria
}

export const projetos: Projeto[] = [
  { src: foto('cozinha-azul-ladrilho'), alt: 'Cozinha planejada azul com aéreos de vidro e ladrilho hidráulico', title: 'Cozinha azul', categoria: 'cozinhas' },
  { src: foto('roupeiro-escuro'), alt: 'Roupeiro planejado de portas altas em madeira escura', title: 'Roupeiro em madeira escura', categoria: 'dormitorios' },
  { src: foto('sala-painel-rack'), alt: 'Painel de TV em madeira com rack suspenso de gavetas', title: 'Painel com rack suspenso', categoria: 'salas' },
  { src: foto('escritorio-diretoria'), alt: 'Sala de diretoria com mesa e painéis planejados em madeira escura', title: 'Sala de diretoria', categoria: 'escritorios' },
  { src: foto('cozinha-aereos-vidro'), alt: 'Cozinha planejada areia com aéreos de vidro e forno embutido', title: 'Aéreos com vidro', categoria: 'cozinhas' },
  { src: foto('banheiro-gabinete-suspenso'), alt: 'Gabinete de banheiro suspenso com gavetas', title: 'Gabinete suspenso', categoria: 'banheiros' },
  { src: foto('quarto-infantil-escrivaninha'), alt: 'Quarto infantil com escrivaninha, nichos e cabeceira planejados', title: 'Quarto infantil', categoria: 'dormitorios' },
  { src: foto('comercial-balcao'), alt: 'Balcão comercial planejado em madeira para lanchonete', title: 'Balcão comercial', categoria: 'escritorios' },
  { src: foto('cozinha-preto-areia'), alt: 'Cozinha planejada em preto e areia com bancada de granito preto', title: 'Preto e areia', categoria: 'cozinhas' },
  { src: closetGavetas, alt: 'Closet planejado com gavetas, nichos e cabideiros em laca greige', title: 'Closet em laca', categoria: 'dormitorios' },
  { src: foto('lavanderia-aereos'), alt: 'Armários aéreos planejados na lavanderia', title: 'Lavanderia', categoria: 'gourmet' },
  { src: foto('sala-painel-carvalho'), alt: 'Painel de TV planejado em madeira clara com prateleiras', title: 'Painel em carvalho', categoria: 'salas' },
  { src: foto('cozinha-nichos-madeira'), alt: 'Cozinha planejada com aéreos claros e nichos em madeira', title: 'Nichos em madeira', categoria: 'cozinhas' },
  { src: foto('home-office-armario'), alt: 'Home office com armário alto, aéreos e bancada', title: 'Home office completo', categoria: 'escritorios' },
  { src: foto('roupeiro-interno'), alt: 'Interior de roupeiro planejado com cabideiros e gaveteiro', title: 'Interno do roupeiro', categoria: 'dormitorios' },
  { src: foto('banheiro-gabinete-madeira'), alt: 'Gabinete de banheiro planejado em madeira com gavetas', title: 'Gabinete em madeira', categoria: 'banheiros' },
  { src: foto('cozinha-torre-forno'), alt: 'Cozinha planejada com torre de forno em madeira e aéreos de vidro', title: 'Torre de forno', categoria: 'cozinhas' },
  { src: foto('escritorio-sala-reuniao'), alt: 'Sala de reunião com painel planejado para tela de projeção', title: 'Sala de reunião', categoria: 'escritorios' },
  { src: foto('sala-painel-giratorio'), alt: 'Painel de TV giratório planejado entre sala e jantar', title: 'Painel giratório', categoria: 'salas' },
  { src: foto('gourmet-tijolinho'), alt: 'Bancada de área gourmet com armários cinza e parede de tijolinho', title: 'Área gourmet', categoria: 'gourmet' },
  { src: foto('roupeiro-correr'), alt: 'Guarda-roupa planejado de portas de correr com espelho central', title: 'Guarda-roupa de correr', categoria: 'dormitorios' },
  { src: foto('cozinha-l-areia'), alt: 'Cozinha planejada em L na cor areia', title: 'Cozinha em L', categoria: 'cozinhas' },
  { src: foto('escritorio-estacoes'), alt: 'Estações de trabalho planejadas em madeira com divisória', title: 'Estações de trabalho', categoria: 'escritorios' },
  { src: foto('banheiro-gavetas'), alt: 'Gabinete de banheiro planejado com gavetas e portas em madeira', title: 'Gabinete com gavetas', categoria: 'banheiros' },
  { src: foto('cozinha-branca-teto'), alt: 'Armários brancos planejados até o teto com nicho para micro-ondas', title: 'Branca até o teto', categoria: 'cozinhas' },
  { src: foto('quarto-escrivaninha-nichos'), alt: 'Escrivaninha suspensa e nichos planejados em quarto', title: 'Escrivaninha suspensa', categoria: 'dormitorios' },
  { src: foto('comercial-balcao-gavetas'), alt: 'Balcão comercial planejado com gavetões', title: 'Balcão com gavetões', categoria: 'escritorios' },
  { src: foto('gourmet-bar'), alt: 'Balcão de bar planejado com adega de nichos em parede de pedra', title: 'Bar com adega', categoria: 'gourmet' },
  { src: foto('cozinha-corredor'), alt: 'Cozinha corredor planejada em areia e preto', title: 'Cozinha corredor', categoria: 'cozinhas' },
  { src: foto('roupeiro-espelho'), alt: 'Guarda-roupa planejado com porta espelhada', title: 'Roupeiro com espelho', categoria: 'dormitorios' },
  { src: foto('home-office-bancada'), alt: 'Bancada de home office com prateleiras e gaveteiro', title: 'Bancada de estudos', categoria: 'escritorios' },
  { src: foto('cozinha-forno-embutido'), alt: 'Cozinha planejada com forno embutido e gavetas', title: 'Forno embutido', categoria: 'cozinhas' },
  { src: foto('comercial-balcao-loja'), alt: 'Balcão de loja planejado em madeira', title: 'Balcão de loja', categoria: 'escritorios' },
  { src: foto('home-office-tijolinho'), alt: 'Bancada de home office em madeira com gaveteiro', title: 'Home office em L', categoria: 'escritorios' },
  { src: foto('cozinha-amadeirada'), alt: 'Cozinha planejada amadeirada com gavetas', title: 'Cozinha amadeirada', categoria: 'cozinhas' },
  // Projetos recentes (reels do Instagram)
  { src: cozinhaVerdeBancada, alt: 'Cozinha planejada verde musgo com gavetas e puxadores pretos', title: 'Cozinha verde musgo', categoria: 'cozinhas' },
  { src: quartoEspelhos, alt: 'Guarda-roupa com três portas espelhadas em quarto de casal', title: 'Roupeiro com espelhos', categoria: 'dormitorios' },
  { src: cozinhaFreijoAereos, alt: 'Cozinha planejada em freijó com aéreos até o teto', title: 'Cozinha em freijó', categoria: 'cozinhas' },
  { src: banheiroArmario, alt: 'Armário alto planejado para banheiro em laca fosca', title: 'Armário para banheiro', categoria: 'banheiros' },
  { src: salaPainelFreijo, alt: 'Revestimento de parede em madeira freijó com iluminação embutida', title: 'Painel em freijó', categoria: 'salas' },
  { src: gourmetFrigobar, alt: 'Armário planejado escuro com nicho para frigobar', title: 'Gourmet com frigobar', categoria: 'gourmet' },
  { src: banheiroBancada, alt: 'Gabinete de banheiro suspenso em laca fosca', title: 'Gabinete em laca', categoria: 'banheiros' },
]

export const antesDepois = {
  eyebrow: 'Antes & depois',
  title: 'Do contrapiso ao <em>painel pronto</em>.',
  text: 'Um projeto pensado nos detalhes, executado com precisão e acompanhado de perto em cada etapa — do ambiente em obra ao painel instalado.',
  before: { src: salaAntes, alt: 'Sala em obra antes da instalação dos móveis planejados' },
  after: { src: salaPainelTv, alt: 'A mesma sala depois, com painel de TV planejado e revestimento em madeira' },
}

export const videos = [
  { src: '/videos/cozinha-verde-tour.mp4', poster: '/videos/cozinha-verde-tour.jpg', title: 'Cozinha verde musgo', tag: 'Tour' },
  { src: '/videos/quarto-tour.mp4', poster: '/videos/quarto-tour.jpg', title: 'Quarto com espelhos', tag: 'Tour' },
  { src: '/videos/bastidores-equipe.mp4', poster: '/videos/bastidores-equipe.jpg', title: 'Nossa equipe em ação', tag: 'Bastidores' },
  { src: '/videos/sala-antes-depois.mp4', poster: '/videos/sala-antes-depois.jpg', title: 'Sala: do antes ao resultado', tag: 'Antes & depois' },
  { src: '/videos/banheiro-tour.mp4', poster: '/videos/banheiro-tour.jpg', title: 'Banheiro em laca', tag: 'Tour' },
  { src: '/videos/cozinha-freijo-tour.mp4', poster: '/videos/cozinha-freijo-tour.jpg', title: 'Cozinha em freijó', tag: 'Tour' },
]
