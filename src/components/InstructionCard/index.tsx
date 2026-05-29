import { cx } from 'class-variance-authority'

interface Props {
  number: number
  title: string
  content?: string
}

export default function InstructionCard({ number, title, content }: Props) {
  return (
    <div className={cx(!content && 'items-center', 'flex gap-6')}>
      <h1 className="w-8 text-center">{number}</h1>
      <div className="w-[90%]">
        <h4 className="text-left">«{title}»</h4>
        {content && <p className="body-2">{content}</p>}
      </div>
    </div>
  )
}
