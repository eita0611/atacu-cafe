import { lunch, shop } from '../data/site'
import { External } from './Icon'
import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import './Lunch.css'

export function Lunch() {
  return (
    <section id="lunch" className="section lunch" aria-labelledby="lunch-title">
      <div className="container">
        <SectionHead num="03" label="Lunch menu" heading={lunch.heading} lead={lunch.lead} headingId="lunch-title" />

        <div className="lunch__photos">
          <figure className="lunch__main">
            <Photo
              name="taco-rice"
              alt="彩り豊かなタコライス（イメージ画像）"
              ratio="3 / 2"
              sizes="(min-width: 960px) 62vw, 100vw"
            />
            <figcaption className="caption">旅するタコライス（イメージ）</figcaption>
          </figure>
          <figure className="lunch__side">
            <Photo
              name="salad-bowl"
              alt="グリーンサラダボウルを真上から見た様子（イメージ画像）"
              ratio="3 / 4"
              sizes="(min-width: 960px) 30vw, 60vw"
              delay={0.12}
            />
            <figcaption className="caption">グリーンサラダボウル（イメージ）</figcaption>
          </figure>
        </div>

        <ul className="menu-list">
          {lunch.items.map((item) => (
            <li key={item.name} data-reveal="">
              <h3 className="menu-list__name">{item.name}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="lunch__foot">
          <p className="note">{lunch.note}</p>
          <a className="text-link" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
            最新のメニューをInstagramで見る
            <External />
          </a>
        </div>
      </div>
    </section>
  )
}
