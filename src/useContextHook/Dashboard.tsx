import { User } from '.'
import { Profile, Sidebar } from './Components'

interface DashboardProps {
  // user: User
}

const Dashboard = ({}: DashboardProps) => {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  )
}

export default Dashboard
