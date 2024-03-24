import { memo } from 'react'

interface SearchProps {
  onChange: (text: string) => void
}
const Search = ({ onChange }: SearchProps) => {
  return (
    <input
      type='text'
      onChange={e => onChange(e.target.value)}
      placeholder='Search users...'
    />
  )
}

export default memo(Search)
