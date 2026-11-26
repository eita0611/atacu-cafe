import type { Heading as HeadingData } from '../data/site'
import { Heading } from './Heading'

type Props = {
  num: string
  label: string
  heading: HeadingData
  lead?: string
  headingId: string
}

/** 「02 ─ Our concept」の章番号と、見出し・リード文 */
export function SectionHead({ num, label, heading, lead, headingId }: Props) {
  return (
    <header className="section-head" data-reveal="">
      <p className="section-head__index">
        <span className="section-head__num">{num}</span>
        <span>{label}</span>
      </p>
      <Heading data={heading} className="h2" id={headingId} />
      {lead && <p className="lead section-head__lead">{lead}</p>}
    </header>
  )
}
