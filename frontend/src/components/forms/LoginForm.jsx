import { useEffect, useState } from 'react'
import Input from './inputs/Input'
import Button from './buttons/Button'
import './forms.css'
import { useLogin } from '../../hooks/Auth'
import { useNavigate } from 'react-router-dom'

export default function LoginForm () {
  const [formData, setFormData] = useState({
    identifier: 'arbielbaidi@gmail.com',
    password: 'azerty'
  })
  const { response, error, login } = useLogin()
  const navigate = useNavigate()

  useEffect(() => {
    if (response && response.jwt) {
      navigate('/dashboard')
    }
  }, [response])

  const handleSubmit = (e) => {
    e.preventDefault()
    login(formData)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (error) {
    console.log(error)
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <h2>SE CONNECTER</h2>
      <Input
        label='Email : '
        name='identifier'
        placeholder='mail@provider.com'
        value={formData.identifier}
        onChange={handleChange}
      />
      <Input
        label='Password : '
        name='password'
        placeholder=''
        value={formData.password}
        onChange={handleChange}
        type='password'
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button type='submit'>Se connecter</Button>
    </form>
  )
}
