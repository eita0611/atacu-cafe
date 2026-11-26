import { useEffect, useState } from 'react'

/**
 * 画面の上から 1/3 付近にあるセクションが ids に含まれていればその id を返す（ナビの現在地表示用）。
 * ナビにないセクションにいるときは null。
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section[id]')
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(ids.includes(entry.target.id) ? entry.target.id : null)
        }
      },
      { rootMargin: '-33% 0px -66% 0px' },
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}
