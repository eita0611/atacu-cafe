// 使うアイコンだけを SVG で持つ（アイコンフォントを読み込まない）
type Props = { size?: number; className?: string }

const base = (size: number, className = '') => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
  className,
})

export const ArrowRight = ({ size = 16, className = '' }: Props) => (
  <svg {...base(size, `icon-arrow ${className}`)}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
)

export const ArrowDown = ({ size = 14, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M12 4v15M7 14l5 5 5-5" />
  </svg>
)

export const External = ({ size = 14, className = '' }: Props) => (
  <svg {...base(size, `icon-external ${className}`)}>
    <path d="M8 16 17 7M9 7h8v8" />
  </svg>
)

export const Instagram = ({ size = 18, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

export const Pin = ({ size = 16, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
)

export const Phone = ({ size = 16, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M5 4h3.5l1.6 4.2-2.2 1.4a11 11 0 0 0 6.5 6.5l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.7 20 4 13.3 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
  </svg>
)

export const Menu = ({ size = 24, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const Close = ({ size = 24, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Plus = ({ size = 16, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Pause = ({ size = 14, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M9 6v12M15 6v12" />
  </svg>
)

export const Play = ({ size = 14, className = '' }: Props) => (
  <svg {...base(size, className)}>
    <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" />
  </svg>
)

export const Star = ({ size = 13, className = '' }: Props) => (
  <svg {...base(size, className)} strokeWidth={0}>
    <path fill="currentColor" d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6-4.5-4.2 6.1-.7L12 3Z" />
  </svg>
)
