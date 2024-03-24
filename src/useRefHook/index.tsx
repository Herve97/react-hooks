/*
  
useRef is a React hook that provides a way to persist mutable values across renders in functional components. It returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The current value property of the returned ref object can be updated programmatically without causing a re-render.

*/
import { useRef, useState, useEffect } from 'react'

const DemoUseRef = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleIncrement = () => {
    setCount(count + 1)
    countRef.current = countRef.current + 1

    // console.log('State: ', count)
    console.log('Ref: ', countRef.current)
  }

  return (
    <div style={{ margin: '10px' }}>
      <input type='text' ref={inputRef} placeholder='Type something' />
      {/* <h1 style={{ textAlign: 'center' }}>Count: {countRef.current}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '10px'
        }}
      >
        <button
          onClick={handleIncrement}
          style={{
            color: 'black',
            backgroundColor: '#45bce6',
            width: '100px',
            height: '40px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
      </div> */}
    </div>
  )
}

export default DemoUseRef
