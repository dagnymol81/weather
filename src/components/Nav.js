import { Link } from 'react-router-dom'
import Zip from './Zip'

export default function Nav({ getZip, useGeolocation }) {

  return(
    <nav className="navbar bg-info text-white d-flex flex-row justify-content-between px-5">
      <div className="d-flex flex-row">
        <Link to="/" className="nav-link me-3  bg-primary rounded-3 p-2">Today</Link>
        <Link to="/week" className="nav-link me-3  bg-primary rounded-3 p-2">This Week</Link>
      </div>
      <Zip getZip={getZip} />
      <button onClick={useGeolocation} className="btn btn-primary">Find Me</button>
      <div><Link to="/about" className="nav-link me-3  bg-primary rounded-3 p-2">About</Link></div>
     </nav>
  )
}