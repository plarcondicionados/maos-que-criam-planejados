import sharp from 'sharp'
const src = 'fotos-originais/logo-original.png'
const meta = await sharp(src).metadata()
const make = async (region, out, rgb, scale) => {
  const w = region.width * scale
  const alpha = await sharp(src).extract(region).resize({ width: w, kernel: 'lanczos3' }).greyscale().linear(1.25, -30).raw().toBuffer()
  const h = alpha.length / w
  await sharp({ create: { width: w, height: h, channels: 3, background: rgb } })
    .joinChannel(alpha, { raw: { width: w, height: h, channels: 1 } })
    .webp({ quality: 92, alphaQuality: 100 }).toFile(out)
  console.log(out, w, h)
}
console.log(meta.width, meta.height)
await make({ left: 58, top: 36, width: 142, height: 125 }, 'src/assets/images/logo-simbolo-claro.webp', { r: 250, g: 246, b: 240 }, 3)
await make({ left: 58, top: 36, width: 142, height: 125 }, 'src/assets/images/logo-simbolo-escuro.webp', { r: 58, g: 40, b: 28 }, 3)
await make({ left: 20, top: 40, width: 230, height: 180 }, 'src/assets/images/logo-completa-clara.webp', { r: 250, g: 246, b: 240 }, 3)
