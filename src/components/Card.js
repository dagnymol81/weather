import { useEffect, useState } from "react"
import ShowPicture from "./ShowPicture"

export default function Card({ period, id }) {


  let forecast = period.shortForecast
  let temperature = period.temperature
  let daytime = period.isDaytime

  // Set heading based on period (id prop) and daytime.
  // If it's currently day, the periods will be today, tonight, tomorrow
  // If it's currently night, the periods will be tonight, tomorrow, tomorrow night

  const [heading, setHeading] = useState('')

    useEffect(() => {
      if (period) {
          if (id === 1) {
            if (daytime) {
              setHeading('Today')
            } else {
              setHeading('Tonight')
            }
          } else if (id === 2) {
            if (daytime) {
              setHeading('Tomorrow')
            } else {
              setHeading('Tonight')
            }
          } else if (id === 3) {
            if(daytime) {
              setHeading('Tomorrow')
            } else {
              setHeading('Tomorrow Night')
            }
          }
      }
  }, [period, id, daytime])

  return(
  <div className="card weather-card border-info rounded-2 shadow-lg fs-4 m3">
    <div className="card-header fs-2">
      {heading}
    </div>
    <div className="card-body">
      {forecast && <ShowPicture weather={forecast} daytime={daytime} />}
    </div>
    <div className="card-footer">
      {forecast} {temperature}F
    </div>
  </div>
)}