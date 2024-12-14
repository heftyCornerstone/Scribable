import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav>
      <Link to='/projects'>|projects| </Link>
      <Link to='/write/note'>|write note| </Link>
    </nav>
  )
}

export default NavBar