import ShowPicture from "../components/ShowPicture";

export default function Today({ current, today, tonight, city, state }) {

  console.log(today.isDaytime)

  return(
    <div className="container">

      <h1>Weather for {city} {state}</h1>

      <div className="d-flex flex-row justify-content-around p-5">
      <ShowPicture current={current} today={today} />
      <div className="card weather-card border-info rounded-2 shadow-lg fs-4 m3">
        <div className="card-header fs-2">
          Today
        </div>
        <div className="card-body">
            <p>
            {today.isDaytime 
            ? `Today will be ${today.shortForecast}` 
            : `Tonight will be ${today.shortForecast}` 
            }: {today.temperature}{today.temperatureUnit}
            </p><p>
            {today.isDaytime
            ? `Tonight will be ${tonight.shortForecast}`
            : `Tomorrow will be ${tonight.shortForecast}`
            }: {tonight.temperature}{tonight.temperatureUnit}
            </p>
        </div>
      </div>
    </div>
  </div>
  )
}