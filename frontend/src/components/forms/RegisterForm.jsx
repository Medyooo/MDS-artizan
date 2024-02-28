import { useState } from 'react'
import Input from './inputs/Input'
import Button from './buttons/Button'
import './forms.css'
import { toast } from 'react-toastify'

export default function RegisterForm () {
  const [formData, setFormData] = useState({
    firstName: 'Med Larbi',
    lastName: 'EL BAIDI',
    userName: 'medev',
    email: 'arbielbaidi6@gmail.com',
    password: 'azerty'

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast(`Formulaire soumis : ${formData.firstName} ${formData.lastName}`)
  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <Input
        label='Prénom : '
        placeholder='Entrer votre Prénom ...'
        value={formData.firstName}
        name='firstName'
        onChange={handleChange}
      />
      <Input
        label='Nom : '
        placeholder='Entrer votre nom ...'
        value={formData.lastName}
        name='lastName'
        onChange={handleChange}
      />
      <Input
        label='UserName : '
        placeholder="Entrer votre nom d'utilisateur..."
        value={formData.userName}
        name='userName'
        onChange={handleChange}
      />
      <Input
        label='E-mail : '
        placeholder='Entrer votre e-mail...'
        value={formData.email}
        name='email'
        onChange={handleChange}
      />
      <Input
        label='password : '
        placeholder='Entrer votre mot de passe...'
        value={formData.password}
        name='password'
        onChange={handleChange}
      />
      <Button type='submit'>S'enregistrer</Button>
    </form>
  )
}
