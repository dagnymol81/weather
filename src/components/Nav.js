import { Link } from 'react-router-dom'

export default function Nav() {
  return(
    <nav>
      <Link to="/">Today</Link>
      <Link to="/tomorrow">Tomorrow</Link>
      <Link to="/week">Week</Link>
    </nav>
  )
}