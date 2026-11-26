import { instagramHeading, shop } from '../data/site'
import { Heading } from './Heading'
import { External, Instagram } from './Icon'
import './InstagramCta.css'

export function InstagramCta() {
  return (
    <section id="instagram" className="section insta" aria-labelledby="insta-title">
      <div className="container insta__inner" data-reveal="">
        <div>
          <p className="section-head__index">
            <span className="section-head__num">10</span>
            <span>Follow atacu</span>
          </p>
          <Heading data={instagramHeading} className="insta__title" id="insta-title" />
          <p className="insta__text">日々のメニューや営業日、お店からのお知らせは公式Instagramでご確認ください。</p>
        </div>
        <div className="insta__action">
          <a className="insta__handle latin" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
            {shop.instagram.handle}
          </a>
          <a className="button button--primary" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
            <Instagram size={16} />
            Instagramを見る
            <External />
          </a>
        </div>
      </div>
    </section>
  )
}
