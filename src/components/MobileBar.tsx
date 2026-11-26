import { shop } from '../data/site'
import { useScrolledPast } from '../hooks/useScrolledPast'
import { Instagram } from './Icon'

/** スマートフォンで画面下に固定する「メニュー・アクセス・Instagram」 */
export function MobileBar() {
  const visible = useScrolledPast('top')

  return (
    <nav
      className={`mobile-bar${visible ? ' is-visible' : ''}`}
      aria-label="よく使うリンク"
      aria-hidden={!visible}
      inert={!visible}
    >
      <a href="#lunch">メニュー</a>
      <a href="#access">アクセス</a>
      <a href={shop.instagram.url} target="_blank" rel="noopener noreferrer" className="mobile-bar__insta">
        <Instagram size={18} />
        <span className="visually-hidden">Instagram</span>
      </a>
    </nav>
  )
}
