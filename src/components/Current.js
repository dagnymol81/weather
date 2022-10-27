import ShowPicture from './ShowPicture'

export default function Current({ current }) {

  let now = current.shortForecast
  let currentTemperature = current.temperature

  return(
  <>
  <div className="card weather-card border-info rounded-2 shadow-lg">
    <div className="card-header fs-2">
    Now
    </div>
    {now && <ShowPicture weather={now} />}

    <div className="card-body">

    <p className="card-text m-1 fs-2 text-center">{now} {currentTemperature}F</p>

    </div>
  </div>    
</>
)}