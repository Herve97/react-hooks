import { useState, useCallback } from 'react'
import { shuffle } from '../utils'
import Search from './Search'

/**
 *
useCallback is a React hook that is used for memoizing functions. It is similar to useMemo, but instead of memoizing a value, it memoizes a function.

When you use useCallback, you are creating a memoized version of a function, which will only be re-created if one of the dependencies provided in the dependency array changes. This can be useful in performance optimizations, especially in scenarios where you pass functions to child components that rely on reference equality for performance optimizations.
 */

const allUsers = ['Diams', 'Bénitha', 'Fordie', 'Rems', 'Néhemie']

const DemoUseCallBack = () => {
  const [users, setUsers] = useState(allUsers)

  const handleSearch = useCallback(
    (text: string) => {
      if (text === '') return setUsers(allUsers)
      const filteredUsers = users.filter(user => user.includes(text))
      setUsers(filteredUsers)
      console.log(users[0])
    },
    [users]
  )

  return (
    <div style={{ marginTop: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
        <Search onChange={handleSearch} />
      </div>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default DemoUseCallBack
