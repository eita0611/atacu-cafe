import { reviews, shop } from '../data/site'
import { External, Star } from './Icon'
import { SectionHead } from './SectionHead'
import './Reviews.css'

export function Reviews() {
  return (
    <section id="reviews" className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHead
          num="07"
          label="Loved by our community"
          heading={reviews.heading}
          lead={reviews.lead}
          headingId="reviews-title"
        />

        <div className="rating" data-reveal="">
          <p className="rating__score">
            <span className="latin">{reviews.rating}</span>
            <span className="rating__max">/ 5.0</span>
          </p>
          <div className="rating__meta">
            <span className="rating__stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} />
              ))}
            </span>
            <p>Googleマップの口コミ {reviews.count}件</p>
            <p className="note">
              評価・件数は{reviews.asOf}時点の情報です。{reviews.note}
            </p>
          </div>
          <a className="button rating__link" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
            Googleマップで口コミを見る
            <External />
          </a>
        </div>

        <ul className="themes">
          {reviews.themes.map((theme) => (
            <li key={theme.title} data-reveal="">
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
