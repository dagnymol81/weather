import ShowPicture from "./ShowPicture"

export default function Card({ today }) {

  let forecast = today.shortForecast
  let temperature = today.temperature

  return(
    <div>
      <div className="card weather-card border-info rounded-2 shadow-lg fs-4 m3">
        <div className="card-header fs-2">
          Today
        </div>
        <div className="card-body">
            {forecast && <ShowPicture weather={forecast} />}
             <p className="card-text m-1 fs-2 text-center">{forecast} {temperature}F</p>
        </div>
      </div>
    </div>
  )
}