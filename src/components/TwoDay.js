import Card from "./Card";
import Current from "./Current";


export default function TwoDay({ current, city, state, periodOne, periodTwo, periodThree  }) {

  return(
    <div className="two-day-container">

      <header className="two-day p-5">
      <h1>Weather for {city} {state}</h1>
      </header>


      <div className="d-flex flex-row flex-wrap justify-content-between p-5 align-items-stretch weather-cards">
      
      {current && <Current current={current} />}
      {periodOne && <Card period={periodOne} id={1} />}
      {periodTwo && <Card period={periodTwo} id={2} />}
      {periodThree && <Card period={periodThree} id={3} />}

    </div>
  </div>
  )
}