import { DEMO_NOTICE } from '../data/site'

/** ページ上部の「非公式デモ」表示 */
export function DemoBar() {
  return (
    <aside className="demo-bar" aria-label="このサイトについて">
      <p>{DEMO_NOTICE}</p>
    </aside>
  )
}
