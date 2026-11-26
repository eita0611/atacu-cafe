// photos/ の元画像から、表示用の WebP（複数サイズ）と寸法の一覧を作ります。
// 写真を差し替えたら `npm run images` を実行してください。
import { readdir, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const srcDir = path.join(root, 'photos')
const outDir = path.join(root, 'public', 'images')
const manifestPath = path.join(root, 'src', 'data', 'images.ts')
const WIDTHS = [480, 800, 1200, 1600, 2000]

await mkdir(outDir, { recursive: true })
const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort()
const manifest = {}

for (const file of files) {
  const name = file.replace(/\.[^.]+$/, '')
  const input = sharp(path.join(srcDir, file)).rotate()
  const { width, height } = await input.metadata()
  const widths = WIDTHS.filter((w) => w < width)
  widths.push(width)

  for (const w of widths) {
    await input
      .clone()
      .resize({ width: w })
      .webp({ quality: 74, effort: 6 })
      .toFile(path.join(outDir, `${name}-${w}.webp`))
  }
  manifest[name] = { width, height, widths }
  console.log(`${name}: ${widths.join(', ')}`)
}

// SNS 共有用の画像（1200×630）
await sharp(path.join(srcDir, 'hero.jpg'))
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(root, 'public', 'og-image.jpg'))

const body = `// scripts/build-images.mjs が生成します。手で編集しないでください。
export const images = ${JSON.stringify(manifest, null, 2)} as const

export type ImageName = keyof typeof images
`
await writeFile(manifestPath, body)
console.log(`→ ${path.relative(root, manifestPath)}`)
