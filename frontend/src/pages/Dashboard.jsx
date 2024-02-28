import { useNavigate } from 'react-router-dom'
import Button from '../components/forms/buttons/Button'

export default function Dashboard () {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('AUTH')
    navigate('/authentication')
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Button onClick={logout}>
        Se déconnecter
      </Button>
    </div>
  )
}
