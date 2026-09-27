/**
 * Gera as fotos do portfólio a partir dos quadros extraídos dos reels do
 * Instagram (@mqc.planejados). Remove tarjas pretas (vídeos horizontais
 * gravados em pé) e textos sobrepostos no rodapé, salvando em WebP.
 *
 * Uso: node scripts/extrair-fotos-instagram.mjs
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const FRAMES = path.resolve(__dirname, '../instagram/frames')
const RAW = path.resolve(__dirname, '../instagram')
const OUT = path.resolve(__dirname, '../src/assets/images')

// [arquivo de origem, nome final, corte inferior em % (texto sobreposto)]
const fotos = [
  ['DbX8LvYhZEy_08.jpg', 'cozinha-freijo-aereos', 0],
  ['DbX8LvYhZEy_14.jpg', 'cozinha-freijo-forno', 0],
  ['DbX8LvYhZEy_12.jpg', 'cozinha-freijo-geladeira', 0],
  ['DdR_6-ZPQx5_04.jpg', 'cozinha-verde-gavetas', 0],
  ['DdR_6-ZPQx5_05.jpg', 'cozinha-verde-bancada', 0],
  ['DdR_6-ZPQx5_08.jpg', 'cozinha-verde-armarios', 0],
  ['DbYkJvXhszv_04.jpg', 'cozinha-cinza-corredor', 0],
  ['DbyxZHMvxUZ_14.jpg', 'sala-painel-tv', 9],
  ['DbyxZHMvxUZ_16.jpg', 'sala-painel-freijo', 9],
  ['DbyxZHMvxUZ_05.jpg', 'sala-antes', 0],
  ['DbqC60yhDNn_06.jpg', 'banheiro-armario-alto', 0],
  ['DbqC60yhDNn_12.jpg', 'banheiro-gabinete', 0],
  ['DbqC60yhDNn_01.jpg', 'banheiro-bancada', 0],
  ['Dbair_uhqhA_14.jpg', 'banheiro-gabinete-madeira', 0],
  ['DbnbwHYBYYX_12.jpg', 'quarto-espelhos', 0],
  ['DbnbwHYBYYX_01.jpg', 'quarto-roupeiro', 0],
  ['DboM_MYhJMO_03.jpg', 'gourmet-balcao-preto', 0],
  ['DdSAbHdPbFt_01.jpg', 'gourmet-frigobar', 0],
  ['DbyrSz5PY_K_09.jpg', 'equipe-montagem', 0],
  ['DbyrSz5PY_K_05.jpg', 'equipe-instalacao', 0],
]

/** Recorta linhas quase pretas no topo e na base (letterbox). */
const semTarjas = async (input) => {
  const { data, info } = await sharp(input).greyscale().raw().toBuffer({ resolveWithObject: true })
  const rowDark = (y) => {
    let sum = 0
    for (let x = 0; x < info.width; x++) sum += data[y * info.width + x]
    return sum / info.width < 14
  }
  let top = 0
  while (top < info.height - 1 && rowDark(top)) top++
  let bottom = info.height - 1
  while (bottom > top && rowDark(bottom)) bottom--
  return { top, height: bottom - top + 1, width: info.width }
}

for (const [file, name, cutBottom] of fotos) {
  const input = path.join(FRAMES, file)
  const box = await semTarjas(input)
  const height = Math.round(box.height * (1 - cutBottom / 100))
  await sharp(input)
    .extract({ left: 0, top: box.top, width: box.width, height })
    .modulate({ saturation: 1.04 })
    .sharpen({ sigma: 0.6 })
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(OUT, `${name}.webp`))
  console.log(`${name.padEnd(28)} ${box.width}x${height}`)
}

// Única foto (não vídeo) disponível publicamente no perfil: closet.
await sharp(path.join(RAW, 'DUYRgvoDpQL.jpg'))
  .webp({ quality: 84, effort: 6 })
  .toFile(path.join(OUT, 'closet-gavetas.webp'))
console.log('closet-gavetas')
