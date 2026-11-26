import type { CSSProperties } from 'react'
import { concept } from '../data/site'
import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import './Concept.css'

export function Concept() {
  return (
    <section id="concept" className="section concept" aria-labelledby="concept-title">
      <div className="container">
        <SectionHead
          num="02"
          label="Our concept"
          heading={concept.heading}
          lead={concept.lead}
          headingId="concept-title"
        />

        <div className="concept__body">
          <div className="concept__photos">
            <Photo
              name="vegetable-bowl"
              alt="彩り豊かな野菜の一皿とリネンのナプキン（イメージ画像）"
              ratio="4 / 5"
              sizes="(min-width: 960px) 36vw, 78vw"
              className="concept__photo-main"
            />
            <Photo
              name="cheesecake-coffee"
              alt="チーズケーキとコーヒー（イメージ画像）"
              ratio="1 / 1"
              sizes="(min-width: 960px) 20vw, 44vw"
              delay={0.15}
              className="concept__photo-sub"
            />
          </div>

          <div className="concept__text">
            <p className="lead" data-reveal="">
              {concept.body}
            </p>
            <ul className="pillars">
              {concept.pillars.map((pillar, i) => (
                <li key={pillar.en} data-reveal="" style={{ '--delay': `${i * 0.08}s` } as CSSProperties}>
                  <h3 className="pillars__title">
                    <span className="latin">{pillar.en}</span>
                    <span className="pillars__ja">{pillar.ja}</span>
                  </h3>
                  <p>{pillar.text}</p>
                </li>
              ))}
            </ul>
            <p className="note">{concept.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
