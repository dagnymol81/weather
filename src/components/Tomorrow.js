import ShowPicture from './ShowPicture'

export default function Tomorrow({ tomorrow }) {

  let forecast = tomorrow.shortForecast
  let temperature = tomorrow.temperature

  return(
  <>
  <div className="card weather-card border-info rounded-2 shadow-lg">
    <div className="card-header fs-2">
    Tomorrow
    </div>
    <div className="card-body">

    {forecast && <ShowPicture weather={forecast} />}
    <p className="card-text m-1 fs-2 text-center">{forecast} {temperature}F</p>
    </div>
  </div>    
</>
)}