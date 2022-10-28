import ShowPicture from "../components/ShowPicture"
import Welcome from '../components/Welcome'

export default function Week({ week, getZip, useGeolocation }) {

  return(
    <div className="container border-info rounded-2 shadow-lg">
      {week.length > 0 && <h1>This Week's Weather</h1>}

      <div className="weekly">

      {week.length === 0 && <Welcome getZip={getZip} useGeolocation={useGeolocation}  />}

      {week.map((day) => {
        return(
          <div key={day.startTime} className="d-flex flex-row">
            <div className="weekly-icon">
              <ShowPicture weather={day.shortForecast} daytime={day.isDaytime}  weekly={true} />
            </div><div>
              <h3>{day.name}</h3>
              <p>{day.detailedForecast}</p>
          </div>
        </div>
        )
      })}
    </div>
    </div>
  )
}