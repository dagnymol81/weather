export default function Today({ current, today, tonight }) {

  return(
    <div>
      <h1>Today's Weather</h1>
        <p>
          It is {current.shortForecast}. The temperature is {current.temperature}{current.temperatureUnit}
        </p>
        <p>
          Today will be {today.shortForecast} with a high near {today.temperature}{today.temperatureUnit}.
        </p>
        <p>
          Tonight will be {tonight.shortForecast} with a low near {tonight.temperature}{tonight.temperatureUnit}
        </p>
    </div>
  )
}