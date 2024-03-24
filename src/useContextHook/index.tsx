/*
useContext is a React hook that allows you to consume values from the React context in functional components. Context provides a way to share data between components without having to pass props manually through each level of the component tree.
*/

import { useState } from 'react'
import Dashboard from './Dashboard'
import { DashboardContext } from './context'

export interface User {
  isSubscribed: boolean
  name: string
}

const DemoUseContext = () => {
  const [user, setUser] = useState<User>({
    isSubscribed: true,
    name: 'Hervé'
  })
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  )
}

export default DemoUseContext
