import Geolocation from "../components/Geolocation"
import Zip from "../components/Zip"

export default function Welcome({ getZip, useGeolocation }) {
  return(
    <div className="container">
      <h1>Welcome</h1>
      <h2>Enter your ZIP code or click "Find Me"</h2>
      <Zip getZip={getZip} />
      <Geolocation useGeolocation={useGeolocation} />
    </div>
  )
}