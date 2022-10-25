import  { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'

export default function Today() {

  const [current, setCurrent] = useState({})
  const [today, setToday] = useState({})

  const hourlyUrl = "https://api.weather.gov/gridpoints/PBZ/76,66/forecast/hourly"
  const { data: hourly } = useFetch(hourlyUrl)

  const weeklyUrl = "https://api.weather.gov/gridpoints/PBZ/76,66/forecast"
  const { data: weekly } = useFetch(weeklyUrl)

  useEffect(() => {
    if (hourly) {
      setCurrent(hourly.properties.periods[0])
      // console.log(current)
    }
  }, [hourly, current])

  useEffect(() => {
    if (weekly) {
      setToday(weekly.properties.periods[0])
      console.log(today)
    }
  }, [weekly, today])

  return(
    <div>
      <h1>Today's Weather</h1>
        <p>
          It is {current.shortForecast}. The temperature is {current.temperature}{current.temperatureUnit}
        </p>
        <p>
          Today will be {today.shortForecast} with a high near {today.temperature}{today.temperatureUnit}.
        </p>
    </div>
  )
}