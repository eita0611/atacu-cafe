import { shop, story } from '../data/site'
import { Photo } from './Photo'
import { SectionHead } from './SectionHead'
import './Story.css'

export function Story() {
  return (
    <section id="story" className="section section--tint story" aria-labelledby="story-title">
      <div className="container story__grid">
        <div className="story__main">
          <SectionHead num="06" label="Behind the taste" heading={story.heading} headingId="story-title" />
          <ul className="story__career" aria-label="店主の経歴">
            {story.career.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="story__text" data-reveal="">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="note">{story.note}</p>
          </div>
        </div>

        <aside className="story__aside" aria-label="店主">
          <p className="story__owner">
            <span>店主</span>
            {shop.owner}
          </p>
          <Photo
            name="workbench"
            alt="調理台に並ぶ包丁・食材・製菓道具・コーヒードリッパー（イメージ画像）"
            ratio="4 / 3"
            sizes="(min-width: 960px) 40vw, 100vw"
          />
          <p className="caption">{story.photoNote}</p>
        </aside>
      </div>
    </section>
  )
}
