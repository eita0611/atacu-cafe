import { hero } from '../data/site'
import { Heading } from './Heading'
import { HeroMedia } from './HeroMedia'
import { ArrowDown, ArrowRight } from './Icon'
import { Photo } from './Photo'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__place">
            <span>{hero.place}</span>
          </p>
          <Heading as="h1" data={hero.heading} className="hero__title" id="hero-title" />
          <p className="hero__lead">
            {hero.lead.map((line) => (
              <span className="hero__lead-line" key={line}>
                {line}
              </span>
            ))}
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#lunch">
              メニューを見る
              <ArrowRight />
            </a>
            <a className="button" href="#access">
              アクセス
            </a>
          </div>
          <dl className="hero__facts">
            {hero.facts.map((fact) => (
              <div key={fact.main}>
                <dt>{fact.main}</dt>
                <dd>{fact.sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <HeroMedia alt="木のテーブルに料理とケーキとコーヒーが並ぶ様子（イメージ映像）" />
          <figure className="hero__inset">
            <Photo name={hero.inset.image} alt={hero.inset.alt} ratio="1 / 1" sizes="160px" reveal={false} />
          </figure>
          <p className="hero__caption">
            <span className="hero__caption-brand">
              <span className="latin">atacu cafe</span>　{hero.videoCaption}
            </span>
            <span>映像・写真はイメージです</span>
          </p>
        </div>
      </div>

      <div className="container hero__foot">
        <a href="#concept" className="hero__scroll">
          Scroll
          <ArrowDown />
        </a>
      </div>
    </section>
  )
}
