/**
 * Corta a tarja branca de legenda no rodapé de fotos de catálogo.
 * Uso: node scripts/recortar-legenda.mjs <pasta-origem> <pasta-destino>
 * Fotos sem tarja são apenas convertidas para WebP. Confira cada resultado.
 */
import { mkdir, readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const [src, dest] = process.argv.slice(2)
if (!src || !dest) {
  console.log('Uso: node scripts/recortar-legenda.mjs <pasta-origem> <pasta-destino>')
  process.exit(1)
}
await mkdir(dest, { recursive: true })

const findCaptionTop = async (file) => {
  const { data, info } = await sharp(file).greyscale().raw().toBuffer({ resolveWithObject: true })
  const { width: W, height: H } = info
  const white = []
  for (let y = 0; y < H; y++) {
    let c = 0
    for (let x = 0; x < W; x++) if (data[y * W + x] >= 248) c++
    white.push(c / W)
  }
  const suffixMin = new Array(H)
  let m = 1
  for (let y = H - 1; y >= 0; y--) suffixMin[y] = m = Math.min(m, white[y])
  for (let y = Math.floor(H * 0.5); y < H; y++) {
    if (suffixMin[y] >= 0.3 && white[y] >= 0.93) return { top: y, H, W }
  }
  return { top: null, H, W }
}

for (const name of (await readdir(src)).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const file = path.join(src, name)
  const { top, H, W } = await findCaptionTop(file)
  const height = top ? top - Math.round(H * 0.01) : H
  const out = path.join(dest, `${path.parse(name).name}.webp`)
  await sharp(file)
    .extract({ left: 0, top: 0, width: W, height })
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 86 })
    .toFile(out)
  console.log(`${name.padEnd(45)} ${top ? `tarja cortada em y=${top}` : 'sem tarja'}`)
}
