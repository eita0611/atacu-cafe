import { DEMO_NOTICE, nav, shop } from '../data/site'
import { Logo } from './Logo'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="site-footer__logo" aria-label="atacu cafe">
          <Logo />
        </p>
        <p className="site-footer__tagline latin">{shop.tagline}</p>

        <div className="site-footer__cols">
          <div>
            <h2>Address</h2>
            <p>
              {shop.postalCode}
              <br />
              {shop.address}
              <br />
              {shop.access}
            </p>
          </div>
          <div>
            <h2>Links</h2>
            <ul>
              <li>
                <a href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram {shop.instagram.handle}
                </a>
              </li>
              <li>
                <a href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Google マップ
                </a>
              </li>
              <li>
                <a href={shop.telHref}>{shop.tel}</a>
              </li>
            </ul>
          </div>
          <nav aria-label="フッターのご案内">
            <h2>Menu</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.ja}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__notes">
          <p>{DEMO_NOTICE}</p>
          <p>掲載の写真・映像はイメージです。最新の営業情報は公式Instagramをご確認ください。</p>
        </div>
      </div>
    </footer>
  )
}
