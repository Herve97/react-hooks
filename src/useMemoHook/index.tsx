import { useState, useMemo } from 'react'
import { initialItems } from '../utils'

/**
 * useMemo is a React hook that is used for memoization. Memoization is a technique used to optimize performance by storing the results of expensive computations and reusing them when the inputs are the same.

With the useMemo hook, you can memoize the result of a function so that it is only recomputed when the dependencies of that function change. This can be useful when you have a computationally expensive function that you want to optimize by only recalculating its result when necessary.
 */

const DemoUseMemo = () => {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)
  const selectedItem = useMemo<
    | {
        id: number
        isSelected: boolean
      }
    | undefined
  >(() => {
    return items.find(item => item.id === count)
  }, [count, items])

  return (
    <div>
      <h1>Count: {count} </h1>
      <h1> Selected Item: {selectedItem?.id} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default DemoUseMemo
