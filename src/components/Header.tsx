import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { nav, shop } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolledPast } from '../hooks/useScrolledPast'
import { Close, Instagram, Menu, Phone, Pin } from './Icon'
import { Logo } from './Logo'
import './Header.css'

const sectionIds = nav.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolledPast()
  const active = useActiveSection(sectionIds)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  // メニューを開いている間は背面のスクロールを止め、Esc で閉じられるようにする
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    root.style.overflow = 'hidden'
    sheetRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      root.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      toggleRef.current?.focus()
    }
  }, [open])

  // 画面幅が広がったらメニューを閉じる
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <a href="#top" className="site-header__logo" aria-label="atacu cafe トップへ">
            <Logo />
          </a>

          <nav className="site-nav" aria-label="ページ内のご案内">
            <ul>
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="site-nav__insta"
              href={shop.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="公式Instagram（新しいタブで開きます）"
            >
              <Instagram size={17} />
            </a>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
            <span className="visually-hidden">メニューを開く</span>
          </button>
        </div>
      </header>

      {/* ヘッダーの backdrop-filter の影響を受けないよう、ヘッダーの外に置く */}
      <div
        id="mobile-menu"
        ref={sheetRef}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="メニュー"
        hidden={!open}
      >
        <div className="mobile-menu__bar">
          <Logo />
          <button type="button" className="menu-toggle menu-toggle--close" onClick={close}>
            <Close />
            <span className="visually-hidden">メニューを閉じる</span>
          </button>
        </div>
        <ul className="mobile-menu__list">
          {nav.map((item, i) => (
            <li key={item.id} style={{ '--i': i } as CSSProperties}>
              <a href={`#${item.id}`} onClick={close}>
                <span className="mobile-menu__ja">{item.ja}</span>
                <span className="mobile-menu__en">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__info">
          <p>
            {shop.address}
            <br />
            {shop.access}
          </p>
          <div className="mobile-menu__actions">
            <a className="button button--primary" href={shop.instagram.url} target="_blank" rel="noopener noreferrer">
              <Instagram size={16} />
              Instagram
            </a>
            <a className="button" href={shop.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Pin />
              地図
            </a>
            <a className="button" href={shop.telHref}>
              <Phone />
              電話
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
