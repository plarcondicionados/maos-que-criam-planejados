/**
 * Importa as fotos selecionadas da pasta `Planejados/` (fotos de obras
 * enviadas pelo cliente via WhatsApp) para `src/assets/images/projetos/`,
 * corrigindo a rotação, limitando o tamanho e convertendo para WebP.
 *
 * Uso: node scripts/importar-fotos-planejados.mjs
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ORIGEM = path.resolve(__dirname, '../Planejados')
const DESTINO = path.resolve(__dirname, '../src/assets/images/projetos')

// [arquivo original, nome final]
const fotos = [
  ['IMG-20210628-WA0084.jpg', 'cozinha-azul-ladrilho'], // #129
  ['IMG-20201028-WA0036.jpg', 'cozinha-aereos-vidro'], // #32
  ['IMG-20201028-WA0065.jpg', 'cozinha-preto-areia'], // #60
  ['IMG-20201028-WA0067.jpg', 'cozinha-nichos-madeira'], // #62
  ['IMG-20201028-WA0055.jpg', 'cozinha-torre-forno'], // #51
  ['IMG-20210526-WA0063.jpg', 'cozinha-l-areia'], // #108
  ['IMG-20201022-WA0166.jpg', 'cozinha-corredor'], // #24
  ['IMG-20201028-WA0069.jpg', 'cozinha-forno-embutido'], // #64
  ['IMG-20210202-WA0021.jpg', 'cozinha-branca-teto'], // #81
  ['IMG-20210526-WA0055.jpg', 'cozinha-amadeirada'], // #100
  ['IMG-20210526-WA0066.jpg', 'gourmet-tijolinho'], // #111
  ['IMG-20180828-WA0020.jpg', 'quarto-infantil-escrivaninha'], // #13
  ['IMG-20180727-WA0028.jpg', 'quarto-escrivaninha-nichos'], // #3
  ['IMG-20201028-WA0073.jpg', 'roupeiro-escuro'], // #68
  ['IMG-20180727-WA0029.jpg', 'roupeiro-espelho'], // #4
  ['IMG-20180828-WA0013.jpg', 'roupeiro-correr'], // #6
  ['IMG-20201028-WA0076.jpg', 'roupeiro-interno'], // #71
  ['IMG-20201028-WA0038.jpg', 'banheiro-gabinete-madeira'], // #34
  ['IMG-20201028-WA0053.jpg', 'banheiro-gabinete-suspenso'], // #49
  ['IMG-20201028-WA0054.jpg', 'banheiro-gavetas'], // #50
  ['IMG-20201028-WA0031.jpg', 'sala-painel-carvalho'], // #27
  ['IMG-20201028-WA0059.jpg', 'sala-painel-rack'], // #55
  ['IMG-20180828-WA0019.jpg', 'sala-painel-giratorio'], // #12
  ['IMG-20201028-WA0060.jpg', 'home-office-armario'], // #56
  ['IMG-20210526-WA0072.jpg', 'home-office-bancada'], // #117
  ['IMG-20201124-WA0072.jpg', 'home-office-tijolinho'], // #74
  ['IMG-20180828-WA0018.jpg', 'escritorio-diretoria'], // #11
  ['IMG-20200917-WA0046.jpg', 'escritorio-estacoes'], // #22
  ['IMG-20201028-WA0058.jpg', 'escritorio-sala-reuniao'], // #54
  ['IMG-20210202-WA0026.jpg', 'comercial-balcao'], // #86
  ['IMG-20210202-WA0025.jpg', 'comercial-balcao-gavetas'], // #85
  ['IMG-20210526-WA0075.jpg', 'comercial-balcao-loja'], // #120
  ['IMG-20201028-WA0051.jpg', 'lavanderia-aereos'], // #47
  ['IMG-20201028-WA0033.jpg', 'gourmet-bar'], // #29
]

await mkdir(DESTINO, { recursive: true })

for (const [arquivo, nome] of fotos) {
  const info = await sharp(path.join(ORIGEM, arquivo))
    .rotate()
    .resize({ width: 1100, height: 1100, fit: 'inside', withoutEnlargement: true })
    .modulate({ brightness: 1.02, saturation: 1.04 })
    .sharpen({ sigma: 0.5 })
    .webp({ quality: 80, effort: 6 })
    .toFile(path.join(DESTINO, `${nome}.webp`))
  console.log(`${nome.padEnd(30)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} kB`)
}
