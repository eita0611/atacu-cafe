import type { ReactNode } from 'react'
import type { Heading as HeadingData } from '../data/site'

type Props = {
  as?: 'h1' | 'h2' | 'h3'
  data: HeadingData
  className?: string
  id?: string
}

/** 1行の中の「/」で文節を区切り、文節の途中では折り返さない */
function renderLine(line: string, accent?: string): ReactNode[] {
  return line.split('/').map((phrase, i) => {
    if (accent && phrase.includes(accent)) {
      const [before, after] = phrase.split(accent)
      return (
        <span className="ph" key={i}>
          {before}
          <span className="accent">{accent}</span>
          {after}
        </span>
      )
    }
    return (
      <span className="ph" key={i}>
        {phrase}
      </span>
    )
  })
}

export function Heading({ as: Tag = 'h2', data, className = '', id }: Props) {
  return (
    <Tag className={`heading ${className}`} id={id}>
      {data.lines.map((line, i) => (
        <span className="line" key={i}>
          {renderLine(line, data.accent)}
        </span>
      ))}
    </Tag>
  )
}
