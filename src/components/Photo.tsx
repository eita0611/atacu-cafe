import type { CSSProperties } from 'react'
import { images, type ImageName } from '../data/images'

type Props = {
  name: ImageName
  alt: string
  /** 表示枠の縦横比（例: '4 / 5'）。省略すると元画像の比率 */
  ratio?: string
  /** 切り抜くときの基準位置（例: '30% 50%'） */
  position?: string
  sizes: string
  priority?: boolean
  reveal?: boolean
  delay?: number
  className?: string
}

/** WebP の複数サイズから端末に合うものを読み込む写真枠 */
export function Photo({ name, alt, ratio, position, sizes, priority, reveal = true, delay, className = '' }: Props) {
  const { width, height, widths } = images[name]
  const srcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')
  const fallback = widths.find((w) => w >= 800) ?? widths.at(-1)
  const style = {
    '--ratio': ratio ?? `${width} / ${height}`,
    ...(position && { '--pos': position }),
    ...(delay && { '--delay': `${delay}s` }),
  } as CSSProperties

  return (
    <div className={`frame ${className}`} style={style} data-reveal={reveal ? '' : undefined}>
      <img
        src={`/images/${name}-${fallback}.webp`}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
      />
    </div>
  )
}
