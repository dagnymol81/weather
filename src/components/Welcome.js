import Geolocation from "./Geolocation"
import Zip from "../components/Zip"

export default function Welcome({ getZip, useGeolocation }) {
  return(
    <>
    <h1 className="text-center m-5">What's the Weather?</h1>
    <div className="welcome-container d-flex flex-row justify-content-center">
      <img src="/images/weathervane.png" alt="Weather Vane" className="p-5" />
      <div className="welcome p-5">
        <h2>Enter your ZIP code<br />Or click "Find Me"</h2>
        <Zip getZip={getZip} />
        <Geolocation useGeolocation={useGeolocation} />
   </div>
  </div>
    </>
  )
}