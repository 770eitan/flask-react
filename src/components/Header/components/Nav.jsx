import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <ul>
        {props.user ?
          <>
            <li> <NavLink to='/cats'>All Cats</NavLink></li>
            <li><NavLink to='/toys'>All Toys</NavLink></li>
            <li><NavLink to='/cats/new'>Add a Cat</NavLink></li>
            <li> <NavLink to='/toys/new'>Add a Toy</NavLink></li>
            <li onClick={() => props.handleLogout()}>Log out</li>
          </>
          :
          <>
            <li> <NavLink to='/login'>Login</NavLink></li>
            <li> <NavLink to='/signup'>Signup</NavLink></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Nav