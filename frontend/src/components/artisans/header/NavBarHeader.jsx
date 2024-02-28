import Button from '../../forms/buttons/Button'
import './Header.css'

const NavBarHeader = () => {
  return (
    <header className='main'>
      <nav>
        <a href='/'>Accueil</a>
        <a href='/about'>About</a>
        <a href='/services'>Services</a>
        <a href='/artisans'>Artisans</a>
        <a href='/contact'>Contact</a>
        <div className='dot' />
      </nav>
      <Button className='header-button'>
        <a href='/authentication'>Connexion</a>
      </Button>
    </header>
  )
}

export default NavBarHeader
