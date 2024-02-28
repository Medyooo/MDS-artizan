import { useEffect, useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import RegisterForm from '../components/forms/RegisterForm'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const auth = window.localStorage.getItem('AUTH')
    const authObject = JSON.parse(auth)
    const token = authObject?.jwt

    if (token) {
      navigate('/dashboard')
    }
  }, [])

  return (
    <>
      {
      isRegister
        ? <RegisterForm />
        : <LoginForm />
     }
      <a onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "J'ai pas un compte" : "Je n'ai pas de compte"}
      </a>
    </>

  )
}

export default Auth
