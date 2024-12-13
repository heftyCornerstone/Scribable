import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <nav>
      <Link to='/projects'>|projects| </Link>
      <Link to='/write/note'>|write note| </Link>
      <Link to='/note-versions'>|note versions| </Link>
    </nav>
  )
}

export default NavBar