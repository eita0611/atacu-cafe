/** 店名ロゴ（文字組みで表現。画像ロゴを入手したら差し替え） */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__main">atacu</span> <span className="logo__sub">cafe</span>
    </span>
  )
}
