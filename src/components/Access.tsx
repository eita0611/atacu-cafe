import { access, shop } from '../data/site'
import { Heading } from './Heading'
import { External, Instagram, Pin } from './Icon'
import './Access.css'

const rows = [
  { label: 'Shop', value: `${shop.name}（${shop.nameKana}）` },
  { label: 'Address', value: `${shop.postalCode}\n${shop.address}` },
  { label: 'Access', value: shop.access },
  { label: 'Tel', value: shop.tel, href: shop.telHref },
  { label: 'Hours', value: shop.hours },
  { label: 'Service', value: shop.service },
  { label: 'Budget', value: shop.budget },
]

export function Access() {
  return (
    <section id="access" className="section access" aria-labelledby="access-title">
      <div className="container">
        <header className="section-head" data-reveal="">
          <p className="section-head__index">
            <span className="section-head__num">11</span>
            <span>Visit us</span>
          </p>
          <Heading data={access.heading} className="h2" id="access-title" />
          <p className="lead section-head__lead">{access.lead}</p>
        </header>

        <div className="access__grid">
          <div>
            <dl className="info">
              {rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>
                    {row.href ? (
                      <a href={row.href} className="info__tel">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="access__actions">
              <a className="button button--primary" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Pin />
                Google マップで開く
              </a>
              <a className="button" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
                <Instagram size={16} />
                営業情報を確認する
                <External />
              </a>
            </div>
          </div>

          <div className="access__map">
            <div className="access__map-frame">
              <iframe
                src={shop.mapEmbedUrl}
                title="atacu cafe の地図（Google マップ）"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="caption">地図が表示されない場合は「Google マップで開く」からご確認ください。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
