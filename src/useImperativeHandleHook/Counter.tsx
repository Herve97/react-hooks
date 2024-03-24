import { forwardRef, Ref, useState, useImperativeHandle } from 'react'

interface CounterProps {}

export type CounterRef = {
  checkSubscribed: (value: boolean) => void
  reset: () => void
}

const Counter = (props: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // We want to expose this to the parent
  const reset = () => {
    setCount(0)
  }

  useImperativeHandle(ref, () => ({
    checkSubscribed: (value: boolean) => {
      console.log(value)
    },
    reset
  }))

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default forwardRef(Counter)
