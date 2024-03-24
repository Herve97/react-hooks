/*
The useDeferredValue hook allows you to defer the update of a value until a certain condition is met, such as when a component is idle or when the screen is not being interacted with. This can be useful for prioritizing certain updates or rendering optimizations in React applications.

*/

import { useDeferredValue, useEffect, useState } from 'react'

import SlowList from './ShowList'

const DemoUseDefferedValue = () => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  return (
    <div className='tutorial'>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search...'
      />
      <SlowList text={deferredQuery} />
    </div>
  )
}

export default DemoUseDefferedValue
