import { Link } from 'react-router-dom'
import Zip from './Zip'

export default function Nav({ getZip, useGeolocation }) {

  return(
    <nav className="navbar navbar-expand-sm bg-info text-white">

      <div className="container-fluid d-flex justify-content-start gap-3">
        <Link to="/" className="nav-link">Today</Link>
        <Link to="/week" className="nav-link">This Week</Link>
      </div>

      <div className="container-fluid">
        <Zip getZip={getZip} />
        <button onClick={useGeolocation} className="btn btn-primary">Find Me</button>
      </div>
   
    </nav>
  )
}