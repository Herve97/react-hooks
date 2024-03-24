/*
that allows you to execute side effects that directly influence the DOM layout after React has completed all DOM mutations in a synchronous manner.

*/

import { useEffect, useLayoutEffect, useState } from 'react'

const userIds = [1, 2]

const DemoUseLayout = () => {
  const [userId, setUserId] = useState(userIds[0])
  const [isAdmin, setIsAdmin] = useState(false)

  // This artificially slows down rendering
  let now = performance.now()
  while (performance.now() - now < 200) {
    // Do nothing for a bit...
  }

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0])
  }, [userId])

  const handleChange = () => {
    const otherId = userIds.find(id => id !== userId)!
    setUserId(otherId)
  }

  return (
    <div>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin}</p>
      <button onClick={handleChange}>Change User</button>
    </div>
  )
}

export default DemoUseLayout
