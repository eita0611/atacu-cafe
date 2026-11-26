import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from './Icon'
import { Photo } from './Photo'

type Status = 'poster' | 'playing' | 'paused'

/**
 * トップの映像。最初は静止画（LCP 対象）を表示し、読み込み後に映像へ切り替える。
 * 「視差効果を減らす」設定やデータセーバーのときは自動再生しない。
 */
export function HeroMedia({ alt }: { alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [status, setStatus] = useState<Status>('poster')
  const [ready, setReady] = useState(false)

  const load = () => {
    const video = videoRef.current
    if (!video || video.src) return video
    video.src = window.innerWidth < 768 ? '/media/hero-854.mp4' : '/media/hero-1280.mp4'
    return video
  }

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (reduce || saveData) {
      setStatus('paused')
      return
    }
    // 画面の表示が落ち着いてから映像を読み込む
    const start = () => {
      load()
        ?.play()
        .then(() => setStatus('playing'))
        .catch(() => setStatus('paused'))
    }
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  const toggle = () => {
    const video = load()
    if (!video) return
    if (video.paused) {
      video
        .play()
        .then(() => setStatus('playing'))
        .catch(() => setStatus('paused'))
    } else {
      video.pause()
      setStatus('paused')
    }
  }

  return (
    <div className={`hero-media${ready ? ' is-video' : ''}`}>
      <Photo
        name="hero"
        alt={alt}
        ratio="auto"
        sizes="(min-width: 960px) 54vw, 100vw"
        priority
        reveal={false}
        className="hero-media__poster"
      />
      <video
        ref={videoRef}
        className="hero-media__video"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setReady(true)}
      />
      <span className="hero-media__tag">イメージ映像</span>
      {status !== 'poster' && (
        <button type="button" className="hero-media__toggle" onClick={toggle}>
          {status === 'playing' ? <Pause /> : <Play />}
          <span className="visually-hidden">{status === 'playing' ? '映像を一時停止' : '映像を再生'}</span>
        </button>
      )}
    </div>
  )
}
