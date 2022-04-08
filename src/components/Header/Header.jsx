import HeaderLogo from './components/HeaderLogo'
import Nav from './components/Nav'

const Header = (props) => {
  return (
    <header>
      <HeaderLogo />
      <Nav user={props.user} handleLogout={props.handleLogout} />
    </header>
  )
}

export default Header