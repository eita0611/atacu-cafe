import { gallery } from '../data/site'
import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import './Gallery.css'

// 写真ごとの切り抜き比率（誌面の配置に合わせる）
const ratios = ['4 / 5', '3 / 2', '3 / 2', '4 / 5']

export function Gallery() {
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHead
          num="09"
          label="Atacu in pictures"
          heading={gallery.heading}
          lead={gallery.lead}
          headingId="gallery-title"
        />

        <div className="gallery__grid">
          {gallery.photos.map((photo, i) => (
            <figure key={photo.image} className={`gallery__item gallery__item--${i + 1}`}>
              <Photo
                name={photo.image}
                alt={`${photo.caption}（イメージ画像）`}
                ratio={ratios[i]}
                sizes="(min-width: 960px) 44vw, 100vw"
              />
              <figcaption className="caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
