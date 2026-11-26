import { Access } from './components/Access'
import { Coffee } from './components/Coffee'
import { Concept } from './components/Concept'
import { DemoBar } from './components/DemoBar'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstagramCta } from './components/InstagramCta'
import { Lunch } from './components/Lunch'
import { MobileBar } from './components/MobileBar'
import { Reviews } from './components/Reviews'
import { Space } from './components/Space'
import { Story } from './components/Story'
import { Sweets } from './components/Sweets'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <DemoBar />
      <Header />
      <main id="main">
        <Hero />
        <Concept />
        <Lunch />
        <Sweets />
        <Coffee />
        <Story />
        <Reviews />
        <Space />
        <Gallery />
        <InstagramCta />
        <Access />
        <Faq />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
