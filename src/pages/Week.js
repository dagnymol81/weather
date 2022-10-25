export default function Week({ week }) {

  return(
    <div>
      <h1>This Week's Weather</h1>
      {week.map((day) => {
        return(
          <div key={day.startTime}>
          <h3>{day.name}</h3>
          <p>{day.detailedForecast}</p>
        </div>
        )
      })}
    </div>
  )
}