import Geolocation from "./Geolocation"
import Zip from "../components/Zip"

export default function Welcome({ getZip, useGeolocation }) {
  return(

    <div className="container welcome">

      <header>
        <h1 className="mt-5">What's the Weather?</h1>
        <h2>Enter your ZIP code or click "Find Me"</h2>
      </header>

        <div className="d-flex flex-row justify-content-around">
          <Zip getZip={getZip} />
          <Geolocation useGeolocation={useGeolocation} />
        </div>



        <img src="/images/forecast.png" alt="Forecast Illustration" />
   </div>

  )
}