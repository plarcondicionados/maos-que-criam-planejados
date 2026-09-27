/**
 * Ambientes (serviços) e portfólio.
 *
 * Fotos do portfólio: quadros dos vídeos publicados no Instagram @mqc.planejados
 * (projetos reais entregues). Imagens marcadas com `ilustrativa: true` foram
 * geradas por IA apenas para ilustrar categorias sem foto real ainda.
 */
import cozinhaFreijoAereos from '@/assets/images/cozinha-freijo-aereos.webp'
import cozinhaFreijoForno from '@/assets/images/cozinha-freijo-forno.webp'
import cozinhaFreijoGeladeira from '@/assets/images/cozinha-freijo-geladeira.webp'
import cozinhaVerdeGavetas from '@/assets/images/cozinha-verde-gavetas.webp'
import cozinhaVerdeBancada from '@/assets/images/cozinha-verde-bancada.webp'
import cozinhaVerdeArmarios from '@/assets/images/cozinha-verde-armarios.webp'
import cozinhaCinza from '@/assets/images/cozinha-cinza-corredor.webp'
import salaPainelTv from '@/assets/images/sala-painel-tv.webp'
import salaPainelFreijo from '@/assets/images/sala-painel-freijo.webp'
import salaAntes from '@/assets/images/sala-antes.webp'
import banheiroArmario from '@/assets/images/banheiro-armario-alto.webp'
import banheiroGabinete from '@/assets/images/banheiro-gabinete.webp'
import banheiroBancada from '@/assets/images/banheiro-bancada.webp'
import quartoEspelhos from '@/assets/images/quarto-espelhos.webp'
import quartoRoupeiro from '@/assets/images/quarto-roupeiro.webp'
import gourmetPreto from '@/assets/images/gourmet-balcao-preto.webp'
import gourmetFrigobar from '@/assets/images/gourmet-frigobar.webp'
import closetGavetas from '@/assets/images/closet-gavetas.webp'
import homeOffice from '@/assets/images/servico-home-office.webp'
import corporativo from '@/assets/images/servico-corporativo.webp'

export type Categoria = 'cozinhas' | 'quartos' | 'closets' | 'banheiros' | 'salas' | 'gourmet'

export const ambientes = [
  {
    id: 'cozinhas',
    title: 'Cozinhas planejadas',
    text: 'Aéreos até o teto, torre quente, gaveteiros e nichos para eletros. Cada centímetro vira armazenamento.',
    image: cozinhaFreijoAereos,
    alt: 'Cozinha planejada em madeira freijó com armários aéreos até o teto',
    ilustrativa: false,
  },
  {
    id: 'quartos',
    title: 'Quartos e roupeiros',
    text: 'Guarda-roupas com portas de correr, espelhos, cabeceiras e painéis que organizam e aquecem o ambiente.',
    image: quartoEspelhos,
    alt: 'Quarto de casal com guarda-roupa planejado de portas espelhadas e módulos em madeira',
    ilustrativa: false,
  },
  {
    id: 'closets',
    title: 'Closets',
    text: 'Cabideiros em alturas diferentes, gavetas com divisórias e sapateiras pensadas para o que você tem.',
    image: closetGavetas,
    alt: 'Closet planejado em laca fosca com gavetas, nichos e cabideiros',
    ilustrativa: false,
  },
  {
    id: 'banheiros',
    title: 'Banheiros',
    text: 'Gabinetes suspensos, armários altos e bancadas que resistem à umidade sem perder a elegância.',
    image: banheiroGabinete,
    alt: 'Gabinete de banheiro suspenso planejado em laca fosca',
    ilustrativa: false,
  },
  {
    id: 'salas',
    title: 'Salas e painéis',
    text: 'Painéis ripados, racks suspensos e revestimentos em madeira com iluminação embutida.',
    image: salaPainelTv,
    alt: 'Sala com painel de TV planejado em laca cinza e revestimento em madeira',
    ilustrativa: false,
  },
  {
    id: 'gourmet',
    title: 'Áreas gourmet',
    text: 'Balcões, bancadas e armários para churrasqueira e espaço externo, com materiais adequados.',
    image: gourmetPreto,
    alt: 'Balcão planejado em preto brilhante para área gourmet externa',
    ilustrativa: false,
  },
  {
    id: 'home-office',
    title: 'Home office',
    text: 'Bancadas, prateleiras e gaveteiros que deixam o trabalho em casa organizado e confortável.',
    image: homeOffice,
    alt: 'Home office planejado com bancada em madeira e prateleiras iluminadas',
    ilustrativa: true,
  },
  {
    id: 'corporativo',
    title: 'Escritórios e empresas',
    text: 'Recepções, estações de trabalho, armários e salas de reunião sob medida para a sua marca.',
    image: corporativo,
    alt: 'Escritório corporativo com móveis planejados em madeira e armários cinza',
    ilustrativa: true,
  },
]

export const categorias: Array<{ id: Categoria | 'todos'; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'cozinhas', label: 'Cozinhas' },
  { id: 'quartos', label: 'Quartos' },
  { id: 'closets', label: 'Closets' },
  { id: 'banheiros', label: 'Banheiros' },
  { id: 'salas', label: 'Salas' },
  { id: 'gourmet', label: 'Gourmet' },
]

export type Projeto = {
  src: string
  alt: string
  title: string
  categoria: Categoria
}

export const projetos: Projeto[] = [
  { src: cozinhaVerdeBancada, alt: 'Cozinha planejada verde musgo com gavetas e puxadores pretos', title: 'Cozinha verde musgo', categoria: 'cozinhas' },
  { src: quartoEspelhos, alt: 'Guarda-roupa planejado com três portas espelhadas em quarto de casal', title: 'Roupeiro com espelhos', categoria: 'quartos' },
  { src: cozinhaFreijoAereos, alt: 'Cozinha planejada em freijó com aéreos até o teto e coifa embutida', title: 'Cozinha em freijó', categoria: 'cozinhas' },
  { src: closetGavetas, alt: 'Closet planejado com gavetas, nichos e cabideiros em laca greige', title: 'Closet em laca greige', categoria: 'closets' },
  { src: banheiroArmario, alt: 'Armário alto planejado para banheiro em laca fosca com nicho', title: 'Armário para banheiro', categoria: 'banheiros' },
  { src: salaPainelFreijo, alt: 'Revestimento de parede em madeira freijó com iluminação embutida no teto', title: 'Painel em freijó', categoria: 'salas' },
  { src: gourmetFrigobar, alt: 'Armário planejado escuro com nicho para frigobar em área gourmet', title: 'Gourmet com frigobar', categoria: 'gourmet' },
  { src: cozinhaVerdeArmarios, alt: 'Armários aéreos verdes e nicho para geladeira em cozinha planejada', title: 'Aéreos e torre', categoria: 'cozinhas' },
  { src: banheiroBancada, alt: 'Gabinete de banheiro suspenso em laca fosca com bancada em pedra', title: 'Gabinete suspenso', categoria: 'banheiros' },
  { src: quartoRoupeiro, alt: 'Módulo lateral em madeira ao lado do guarda-roupa espelhado', title: 'Módulo lateral em madeira', categoria: 'quartos' },
  { src: cozinhaFreijoForno, alt: 'Cozinha planejada em freijó com forno embutido e puxadores cava', title: 'Forno embutido', categoria: 'cozinhas' },
  { src: salaPainelTv, alt: 'Painel de TV em laca cinza com rack suspenso', title: 'Painel de TV', categoria: 'salas' },
  { src: cozinhaCinza, alt: 'Cozinha corredor planejada em laca clara com detalhes em madeira', title: 'Cozinha corredor', categoria: 'cozinhas' },
  { src: banheiroGabinete, alt: 'Detalhe de gavetas e portas do gabinete de banheiro planejado', title: 'Detalhe do gabinete', categoria: 'banheiros' },
  { src: gourmetPreto, alt: 'Balcão planejado preto brilhante em área gourmet externa', title: 'Balcão área externa', categoria: 'gourmet' },
  { src: cozinhaVerdeGavetas, alt: 'Gaveteiros de cozinha planejada em verde com cantoneira', title: 'Gaveteiros em L', categoria: 'cozinhas' },
  { src: cozinhaFreijoGeladeira, alt: 'Torre para geladeira e micro-ondas em cozinha planejada de freijó', title: 'Torre de eletros', categoria: 'cozinhas' },
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
