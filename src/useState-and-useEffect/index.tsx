import { useState, useEffect } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // the code that we want to run
    console.log('The count is:', count)

    // Optional return function
    return () => {
      console.log('I am being cleaned up:')
    }
  }, [count]) // the dependancy array

  return (
    <div style={{ margin: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Count: {count}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '10px'
        }}
      >
        <button
          onClick={() => setCount(count - 1)}
          style={{
            color: 'black',
            backgroundColor: 'goldenrod',
            width: '100px',
            height: '40px',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer'
          }}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
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
      </div>
    </div>
  )
}

export default Demo
