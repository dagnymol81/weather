import Card from "./Card";
import Current from "./Current";


export default function TwoDay({ current, city, state, periodOne, periodTwo, periodThree  }) {

  return(
    <div>

      <h1 className="today">Weather for {city} {state}</h1>

      <div className="d-flex flex-row flex-wrap justify-content-around p-5 align-items-stretch weather-cards">

      {current && <Current current={current} />}
      {periodOne && <Card period={periodOne} id={1} />}
      {periodTwo && <Card period={periodTwo} id={2} />}
      {periodThree && <Card period={periodThree} id={3} />}

    </div>
  </div>
  )
}