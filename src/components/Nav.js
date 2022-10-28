import { Link } from 'react-router-dom'
import Zip from './Zip'

export default function Nav({ getZip, useGeolocation, weekly }) {

  return(
    <nav className="navbar bg-light d-flex flex-row justify-content-between border px-5">
      <div className="d-flex flex-row">
        <Link to="/" className="nav-link me-3 border rounded-3 p-2">Today</Link>
        {
        weekly && weekly.properties
        ? <Link to="/week" className="nav-link me-3 border rounded-3 p-2">This Week</Link>
        : <Link to="/week" className="nav-link me-3 border rounded-3 p-2" onClick={ (event) => event.preventDefault() }>This Week</Link>
        }
      </div>
      <Zip getZip={getZip} />
      <button onClick={useGeolocation} className="btn border">Find Me</button>
      <div><Link to="/about" className="nav-link me-3 border rounded-3 p-2">About</Link></div>
     </nav>
  )
}