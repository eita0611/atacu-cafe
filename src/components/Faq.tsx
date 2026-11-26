import { faq, faqHeading } from '../data/site'
import { Heading } from './Heading'
import { Plus } from './Icon'
import './Faq.css'

export function Faq() {
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <header className="faq__head" data-reveal="">
          <p className="section-head__index">
            <span className="section-head__num">12</span>
            <span>FAQ</span>
          </p>
          <Heading data={faqHeading} className="h2" id="faq-title" />
          <p className="note">掲載内容は提供情報に基づくものです。最新の営業情報は公式Instagramをご確認ください。</p>
        </header>

        <div className="faq__list">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>
                <span>{item.q}</span>
                <Plus className="faq__icon" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
