import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/header-logo.svg'

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <NavLink to='/'>
        <img
          src={Logo}
          alt="The Cat Collector Logo"
        />
      </NavLink>
    </div>
  )
}

export default HeaderLogo