export default function Week({ week }) {

  return(
    <div className="container border-info rounded-2 shadow-lg">
      <h1>This Week's Weather</h1>
      <div className="weekly">
      {week.map((day) => {
        return(
          <div key={day.startTime}>
          <h3>{day.name}</h3>
          <p>{day.detailedForecast}</p>
        </div>
        )
      })}
    </div>
    </div>
  )
}