import { sweets } from '../data/site'
import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import './Sweets.css'

export function Sweets() {
  return (
    <section id="sweets" className="section sweets on-dark" aria-labelledby="sweets-title">
      <div className="container">
        <SectionHead
          num="04"
          label="Homemade sweets"
          heading={sweets.heading}
          lead={sweets.lead}
          headingId="sweets-title"
        />

        <ul className="sweets__list">
          {sweets.items.map((item, i) => (
            <li key={item.name}>
              <Photo
                name={item.image}
                alt={`${item.name}（イメージ画像）`}
                ratio={i % 2 === 0 ? '3 / 4' : '1 / 1'}
                sizes="(min-width: 960px) 22vw, 45vw"
                delay={i * 0.08}
              />
              <h3 className="sweets__name">{item.name}</h3>
            </li>
          ))}
        </ul>

        <p className="note sweets__note">{sweets.note}</p>
      </div>
    </section>
  )
}
