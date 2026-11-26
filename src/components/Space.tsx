import { shop, space } from '../data/site'
import { External } from './Icon'
import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import './Space.css'

export function Space() {
  return (
    <section id="space" className="section space" aria-labelledby="space-title">
      <div className="container">
        <SectionHead num="08" label="A moment in Jimbocho" heading={space.heading} headingId="space-title" />

        <div className="space__grid">
          <Photo
            name="window-seat"
            alt="窓辺の席に光が差し込むカフェの一角（イメージ画像）"
            ratio="4 / 5"
            sizes="(min-width: 960px) 46vw, 100vw"
            className="space__main"
          />
          <div className="space__side">
            <div className="space__intro" data-reveal="">
              <p className="lead">{space.lead}</p>
              <p className="note">{space.note}</p>
            </div>
            <div className="space__pair">
              <Photo
                name="coffee-hands"
                alt="窓辺でコーヒーを手に取るひととき（イメージ画像）"
                ratio="1 / 1"
                sizes="(min-width: 960px) 22vw, 45vw"
                delay={0.1}
              />
              <div className="takeout" data-reveal="">
                <p className="takeout__label">Takeout</p>
                <h3 className="takeout__title">
                  {space.takeout.heading.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="takeout__text">{space.takeout.text}</p>
                <a className="text-link" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagramで確認する
                  <External />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
