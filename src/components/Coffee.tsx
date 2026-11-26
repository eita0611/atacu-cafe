import { coffee } from '../data/site'
import { Photo } from './Photo'
import './Coffee.css'

export function Coffee() {
  return (
    <section id="coffee" className="section coffee" aria-labelledby="coffee-title">
      <div className="container">
        <Photo
          name="coffee-window"
          alt="窓辺のテーブルに置かれた一杯のコーヒー（イメージ画像）"
          ratio="var(--coffee-ratio)"
          position="28% 70%"
          sizes="(min-width: 1300px) 1232px, 100vw"
          className="coffee__photo"
        />
        <div className="coffee__body">
          <h2 className="coffee__display latin" id="coffee-title" data-reveal="">
            {coffee.display.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="coffee__text" data-reveal="">
            <p className="section-head__index">
              <span className="section-head__num">05</span>
              <span>After the meal</span>
            </p>
            <p className="lead">{coffee.text}</p>
            <p className="note">{coffee.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
