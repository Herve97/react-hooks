import { useContext } from 'react'
import { User } from '.'
import { DashboardContext, useUserContext } from './context'

interface ComponentsProps {
  // user: User
}

export const Profile = ({}: ComponentsProps) => {
  const user = useUserContext()

  return (
    <div>
      <h4>Profile</h4>
      {user.name}
    </div>
  )
}

export const Sidebar = ({}: ComponentsProps) => {
  const user = useUserContext()
  // const user = useContext(DashboardContext)
  return (
    <div>
      <h3>Sidebar</h3>
      <div> {user.name} </div>
      <div>
        Subscription status: <span> {user.isSubscribed}</span>
      </div>
    </div>
  )
}
