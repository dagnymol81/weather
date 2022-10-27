import Geolocation from "./Geolocation"
import Zip from "../components/Zip"

export default function Welcome({ getZip, useGeolocation }) {
  return(
    <div className="welcome">
      <h1>Welcome</h1>
      <h2>Enter your ZIP code<br />Or click "Find Me"</h2>
      <Zip getZip={getZip} />
      <Geolocation useGeolocation={useGeolocation} />
    </div>
  )
}