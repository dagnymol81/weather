export default function Tomorrow({ tomorrow }) {

  return(
    <div>
      <h1>Tomorrow's Weather</h1>
      <p>
      {tomorrow.detailedForecast}
      </p>
    </div>
  )
}