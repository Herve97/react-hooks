import { useTransition } from 'react'

interface TabButtonProps {
  onClick: () => void
  title: string
  variant: string
}

const TabButton = ({ onClick, variant, title }: TabButtonProps) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(() => {
      onClick?.()
    })
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: variant,
        width: '100px',
        height: '40px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {title}
    </button>
  )
}

export default TabButton
