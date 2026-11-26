import { useEffect, useState } from 'react'

/** 指定した要素（なければページ上端からの距離）を通り過ぎたかどうか */
export function useScrolledPast(targetId?: string, offset = 8) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const target = targetId ? document.getElementById(targetId) : null
    const update = () => {
      const edge = target ? target.offsetTop + target.offsetHeight * 0.6 : offset
      setPast(window.scrollY > edge)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [targetId, offset])

  return past
}
